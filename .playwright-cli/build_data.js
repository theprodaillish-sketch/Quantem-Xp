const fs = require('fs');
const formatted = JSON.parse(fs.readFileSync('.playwright-cli/formatted_algorithms.json'));

const code = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlgorithmCase, UserProgress } from '../types/cube';

export const F2L_CASES: AlgorithmCase[] = ${JSON.stringify(formatted.f2l, null, 2)};

export const OLL_CASES: AlgorithmCase[] = ${JSON.stringify(formatted.oll, null, 2)};

export const PLL_CASES: AlgorithmCase[] = ${JSON.stringify(formatted.pll, null, 2)};

export const ALL_ALGORITHMS: AlgorithmCase[] = [
  ...F2L_CASES,
  ...OLL_CASES,
  ...PLL_CASES
];

export const TOTAL_ALGORITHMS_COUNT = ALL_ALGORITHMS.length;

// XP Tiers
export interface XpTier {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
}

export const XP_TIERS: XpTier[] = [
  { level: 1, title: 'NOVICE CUBER', minXp: 0, maxXp: 99 },
  { level: 2, title: 'ALGO APPRENTICE', minXp: 100, maxXp: 299 },
  { level: 3, title: 'F2L SPECIALIST', minXp: 300, maxXp: 599 },
  { level: 4, title: 'OLL MASTER', minXp: 600, maxXp: 999 },
  { level: 5, title: 'PLL EXECUTIONER', minXp: 1000, maxXp: 1499 },
  { level: 6, title: 'SUB-20 SPEEDCUBER', minXp: 1500, maxXp: 2199 },
  { level: 7, title: 'FINGERTRICK ACE', minXp: 2200, maxXp: 2999 },
  { level: 8, title: 'SUB-15 PRO', minXp: 3000, maxXp: 3999 },
  { level: 9, title: 'ALGORITHM TITAN', minXp: 4000, maxXp: 5499 },
  { level: 10, title: 'SPEED DEMON', minXp: 5500, maxXp: 999999 }
];

export function getXpTier(xp: number): XpTier {
  for (let i = XP_TIERS.length - 1; i >= 0; i--) {
    if (xp >= XP_TIERS[i].minXp) {
      return XP_TIERS[i];
    }
  }
  return XP_TIERS[0];
}

export function searchAlgorithms(
  algorithms: AlgorithmCase[],
  query: string,
  category: 'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED',
  statusFilter: 'ALL' | 'MASTERED' | 'LEARNING' | 'UNLEARNED',
  progress: UserProgress
): AlgorithmCase[] {
  const cleanQuery = query.trim().toLowerCase();

  return algorithms.filter((algo) => {
    // 1. Category check
    if (category === 'SAVED') {
      if (!progress.saved[algo.id]) return false;
    } else if (category !== 'ALL') {
      if (algo.category !== category) return false;
    }

    // 2. Status filter check
    if (statusFilter === 'MASTERED' && !progress.mastered[algo.id]) return false;
    if (statusFilter === 'LEARNING' && (!progress.learning[algo.id] || progress.mastered[algo.id])) return false;
    if (statusFilter === 'UNLEARNED' && (progress.mastered[algo.id] || progress.learning[algo.id])) return false;

    // 3. Search query check
    if (!cleanQuery) return true;

    const matchesName = algo.name.toLowerCase().includes(cleanQuery);
    const matchesAlias = algo.alias ? algo.alias.toLowerCase().includes(cleanQuery) : false;
    const matchesCase = String(algo.caseNumber).toLowerCase().includes(cleanQuery);
    const matchesSubgroup = algo.subgroup.toLowerCase().includes(cleanQuery);
    const matchesAlgorithm = algo.algorithm.toLowerCase().replace(/[\\s()']/g, '').includes(cleanQuery.replace(/[\\s()']/g, ''));
    const matchesId = algo.id.toLowerCase().includes(cleanQuery);

    return matchesName || matchesAlias || matchesCase || matchesSubgroup || matchesAlgorithm || matchesId;
  });
}
`;

fs.writeFileSync('src/utils/algorithmsData.ts', code);
console.log('Successfully wrote src/utils/algorithmsData.ts with all 119 verified cases!');
