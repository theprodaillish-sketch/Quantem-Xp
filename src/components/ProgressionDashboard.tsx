/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Trophy, Flame, Target, RotateCcw, Award, CheckCircle2 } from 'lucide-react';
import { UserProgress } from '../types/cube';
import { getXpTier, XP_TIERS, F2L_CASES, OLL_CASES, PLL_CASES } from '../utils/algorithmsData';

interface ProgressionDashboardProps {
  progress: UserProgress;
  onResetProgress: () => void;
}

export const ProgressionDashboard: React.FC<ProgressionDashboardProps> = ({
  progress,
  onResetProgress
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const currentTier = getXpTier(progress.xp);

  // Calculate tier XP progress bar
  const nextTier = XP_TIERS.find((t) => t.level === currentTier.level + 1);
  const xpInCurrentTier = progress.xp - currentTier.minXp;
  const xpNeededForNext = nextTier ? nextTier.minXp - currentTier.minXp : 1000;
  const tierProgressPct = nextTier
    ? Math.min(100, Math.max(0, (xpInCurrentTier / xpNeededForNext) * 100))
    : 100;

  // Breakdown by categories
  const f2lMastered = F2L_CASES.filter((c) => progress.mastered[c.id]).length;
  const ollMastered = OLL_CASES.filter((c) => progress.mastered[c.id]).length;
  const pllMastered = PLL_CASES.filter((c) => progress.mastered[c.id]).length;
  const totalMastered = f2lMastered + ollMastered + pllMastered;
  const totalCases = 119;
  const totalPct = Math.round((totalMastered / totalCases) * 100);

  return (
    <section id="progress" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B24] border border-[#FF3030]/40 rounded text-[#FF3030] font-pixel text-xs">
          <Award className="w-3.5 h-3.5 text-[#FF6A24]" />
          <span>CAREER PROGRESSION</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-3xl text-white text-glow-red">
          SPEEDCUBER PROFILE
        </h2>
        <p className="font-tech text-sm text-[#9298A5] max-w-lg mx-auto">
          Track mastered algorithms, daily practice streaks, and level progression as you advance to Speed Demon tier.
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Current Level & Rank */}
        <div className="bg-[#11131A] border-2 border-[#FF3030]/40 rounded-lg p-6 relative overflow-hidden shadow-[0_0_20px_rgba(255,48,48,0.15)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-pixel text-xs text-[#9298A5]">RANK & LEVEL</span>
            <Trophy className="w-5 h-5 text-[#FF6A24]" />
          </div>

          <div className="space-y-1 mb-4">
            <div className="font-pixel text-2xl font-bold text-white text-glow-orange">
              LVL {currentTier.level}
            </div>
            <div className="font-tech font-bold text-base text-[#FF6A24] tracking-wide">
              {currentTier.title}
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-1.5 pt-2 border-t border-[#232733]">
            <div className="flex justify-between text-xs font-mono text-[#9298A5]">
              <span>{progress.xp} XP</span>
              <span>{nextTier ? `${nextTier.minXp} XP` : 'MAX LEVEL'}</span>
            </div>
            <div className="w-full bg-[#181B24] h-2.5 rounded-full overflow-hidden border border-[#232733]">
              <div
                className="bg-gradient-to-r from-[#FF6A24] to-[#FF3030] h-full transition-all duration-500 shadow-[0_0_10px_#FF3030]"
                style={{ width: `${tierProgressPct}%` }}
              />
            </div>
            <p className="text-[10px] font-mono text-[#9298A5] text-right">
              {nextTier ? `${nextTier.minXp - progress.xp} XP to Level ${nextTier.level}` : 'Highest Rank Achieved!'}
            </p>
          </div>
        </div>

        {/* Card 2: Daily Goal & Streak */}
        <div className="bg-[#11131A] border-2 border-[#FF6A24]/40 rounded-lg p-6 relative overflow-hidden shadow-[0_0_20px_rgba(255,106,36,0.15)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-pixel text-xs text-[#9298A5]">DAILY MISSION</span>
            <Target className="w-5 h-5 text-[#FF6A24]" />
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-pixel text-2xl font-bold text-white tabular-nums">
                {progress.dailyCount} / {progress.dailyGoal}
              </span>
              <span className="font-tech text-xs text-[#9298A5]">CASES TODAY</span>
            </div>
            <p className="text-xs font-tech text-[#9298A5]">
              {progress.dailyCount >= progress.dailyGoal ? (
                <span className="text-[#10B981] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Goal achieved (+50 XP bonus)!
                </span>
              ) : (
                `${progress.dailyGoal - progress.dailyCount} more to unlock +50 XP bonus`
              )}
            </p>
          </div>

          {/* Daily Goal Bar */}
          <div className="space-y-1.5 pt-2 border-t border-[#232733]">
            <div className="w-full bg-[#181B24] h-2.5 rounded-full overflow-hidden border border-[#232733]">
              <div
                className="bg-[#10B981] h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (progress.dailyCount / progress.dailyGoal) * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-1 font-pixel text-[11px] text-[#FF6A24]">
                <Flame className="w-3.5 h-3.5" /> STREAK:
              </span>
              <span className="font-mono font-bold text-xs text-white">
                {progress.streak} {progress.streak === 1 ? 'DAY' : 'DAYS'}
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Overall Mastery */}
        <div className="bg-[#11131A] border-2 border-[#00E5FF]/40 rounded-lg p-6 relative overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.15)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-pixel text-xs text-[#9298A5]">CATALOGUE MASTERY</span>
            <Award className="w-5 h-5 text-[#00E5FF]" />
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-pixel text-2xl font-bold text-white tabular-nums">
                {totalMastered} / {totalCases}
              </span>
              <span className="font-tech text-xs text-[#00E5FF]">({totalPct}%)</span>
            </div>
            <p className="text-xs font-tech text-[#9298A5]">
              Speedcubing CFOP Algorithms Mastered
            </p>
          </div>

          {/* Total Mastery Bar */}
          <div className="space-y-1.5 pt-2 border-t border-[#232733]">
            <div className="w-full bg-[#181B24] h-2.5 rounded-full overflow-hidden border border-[#232733]">
              <div
                className="bg-[#00E5FF] h-full transition-all duration-500 shadow-[0_0_8px_#00E5FF]"
                style={{ width: `${totalPct}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#9298A5]">
              <span>CFOP PROGRESS</span>
              <span>{119 - totalMastered} remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown Strip */}
      <div className="bg-[#11131A] border border-[#232733] rounded-lg p-6 mb-8">
        <h4 className="font-pixel text-xs text-white mb-4">CATEGORY BREAKDOWN</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* F2L */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-pixel text-[#FF3030]">F2L (First 2 Layers)</span>
              <span className="font-mono text-white tabular-nums">{f2lMastered} / 41</span>
            </div>
            <div className="w-full bg-[#181B24] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#FF3030] h-full transition-all duration-300"
                style={{ width: `${(f2lMastered / 41) * 100}%` }}
              />
            </div>
          </div>

          {/* OLL */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-pixel text-[#FFD500]">OLL (Orientation)</span>
              <span className="font-mono text-white tabular-nums">{ollMastered} / 57</span>
            </div>
            <div className="w-full bg-[#181B24] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#FFD500] h-full transition-all duration-300"
                style={{ width: `${(ollMastered / 57) * 100}%` }}
              />
            </div>
          </div>

          {/* PLL */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-pixel text-[#FF6A24]">PLL (Permutation)</span>
              <span className="font-mono text-white tabular-nums">{pllMastered} / 21</span>
            </div>
            <div className="w-full bg-[#181B24] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#FF6A24] h-full transition-all duration-300"
                style={{ width: `${(pllMastered / 21) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reset Progress Section with Confirmation */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1F2330] text-xs">
        <span className="text-[#9298A5] font-tech">
          Data stored locally in browser storage.
        </span>

        {!showConfirmReset ? (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-pixel text-[#9298A5] hover:text-[#FF3030] hover:bg-[#181B24] rounded border border-transparent hover:border-[#FF3030]/30 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET PROGRESS</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[10px] text-[#FF3030]">Reset all progress?</span>
            <button
              onClick={() => {
                onResetProgress();
                setShowConfirmReset(false);
              }}
              className="px-2.5 py-1 text-[10px] font-pixel bg-[#FF3030] text-white rounded hover:bg-[#FF4D4D]"
            >
              CONFIRM
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-2.5 py-1 text-[10px] font-pixel bg-[#181B24] text-[#9298A5] rounded hover:text-white"
            >
              CANCEL
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
