/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProgress } from '../types/cube';

const STORAGE_KEY = 'quantem_xp_user_progress_v1';

export function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function getDefaultProgress(): UserProgress {
  return {
    xp: 0,
    mastered: {},
    learning: {},
    saved: {},
    dailyCount: 0,
    dailyGoal: 5,
    lastActiveDate: getTodayDateString(),
    streak: 1
  };
}

export function loadUserProgress(): UserProgress {
  try {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
      return getDefaultProgress();
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const data = JSON.parse(raw);
    const today = getTodayDateString();

    let streak = typeof data.streak === 'number' ? data.streak : 1;
    let dailyCount = typeof data.dailyCount === 'number' ? data.dailyCount : 0;

    // Check streak & daily count reset
    if (data.lastActiveDate && data.lastActiveDate !== today) {
      const lastDate = new Date(data.lastActiveDate);
      const currDate = new Date(today);
      const diffTime = Math.abs(currDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Active yesterday -> keep streak
      } else if (diffDays > 1) {
        // Missed a day -> reset streak to 1
        streak = 1;
      }
      dailyCount = 0; // Reset daily count for the new day
    }

    return {
      xp: typeof data.xp === 'number' ? data.xp : 0,
      mastered: data.mastered || {},
      learning: data.learning || {},
      saved: data.saved || {},
      dailyCount,
      dailyGoal: typeof data.dailyGoal === 'number' ? data.dailyGoal : 5,
      lastActiveDate: today,
      streak
    };
  } catch {
    return getDefaultProgress();
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save user progress', e);
  }
}

// XP reward rules that strictly prevent farming
export const XP_REWARDS = {
  CASE_MASTERED: 15,
  PRACTICE_RECALL: 3,
  DAILY_GOAL_BONUS: 50
};

export function markCaseMastered(
  current: UserProgress,
  caseId: string,
  isMastered: boolean
): { nextProgress: UserProgress; xpGained: number } {
  const wasMastered = !!current.mastered[caseId];
  let xpGained = 0;

  const nextMastered = { ...current.mastered };
  const nextLearning = { ...current.learning };

  if (isMastered) {
    nextMastered[caseId] = true;
    delete nextLearning[caseId];
    // Award XP ONLY if it was not previously mastered (prevents repeated farming!)
    if (!wasMastered) {
      xpGained = XP_REWARDS.CASE_MASTERED;
    }
  } else {
    delete nextMastered[caseId];
  }

  const today = getTodayDateString();
  const nextDailyCount = current.lastActiveDate === today ? current.dailyCount + (isMastered && !wasMastered ? 1 : 0) : 1;

  // Bonus for hitting daily goal for the first time today
  if (current.dailyCount < current.dailyGoal && nextDailyCount >= current.dailyGoal) {
    xpGained += XP_REWARDS.DAILY_GOAL_BONUS;
  }

  const nextProgress: UserProgress = {
    ...current,
    xp: current.xp + xpGained,
    mastered: nextMastered,
    learning: nextLearning,
    dailyCount: nextDailyCount,
    lastActiveDate: today
  };

  saveUserProgress(nextProgress);
  return { nextProgress, xpGained };
}

export function toggleCaseBookmark(current: UserProgress, caseId: string): UserProgress {
  const nextSaved = { ...current.saved };
  if (nextSaved[caseId]) {
    delete nextSaved[caseId];
  } else {
    nextSaved[caseId] = true;
  }
  const nextProgress: UserProgress = { ...current, saved: nextSaved };
  saveUserProgress(nextProgress);
  return nextProgress;
}

export function toggleCaseLearning(current: UserProgress, caseId: string): UserProgress {
  const nextLearning = { ...current.learning };
  if (nextLearning[caseId]) {
    delete nextLearning[caseId];
  } else {
    nextLearning[caseId] = true;
  }
  const nextProgress: UserProgress = { ...current, learning: nextLearning };
  saveUserProgress(nextProgress);
  return nextProgress;
}

export function recordPracticeReview(
  current: UserProgress,
  caseId: string,
  recalled: boolean,
  alreadyReviewedInSession: Set<string>
): { nextProgress: UserProgress; xpGained: number } {
  let xpGained = 0;
  // Only award XP if this case was not already credited during the current active practice round
  if (recalled && !alreadyReviewedInSession.has(caseId)) {
    xpGained = XP_REWARDS.PRACTICE_RECALL;
  }

  const today = getTodayDateString();
  const nextDailyCount = current.lastActiveDate === today ? current.dailyCount + (recalled ? 1 : 0) : 1;

  if (current.dailyCount < current.dailyGoal && nextDailyCount >= current.dailyGoal) {
    xpGained += XP_REWARDS.DAILY_GOAL_BONUS;
  }

  const nextProgress: UserProgress = {
    ...current,
    xp: current.xp + xpGained,
    dailyCount: nextDailyCount,
    lastActiveDate: today
  };

  saveUserProgress(nextProgress);
  return { nextProgress, xpGained };
}

export function clearUserProgress(): UserProgress {
  const reset = getDefaultProgress();
  saveUserProgress(reset);
  return reset;
}
