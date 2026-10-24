/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AlgorithmCategory = 'F2L' | 'OLL' | 'PLL';

export interface VisualCubeData {
  // For OLL: 9 boolean flags for top face (indices 0..8), 
  // plus side yellow stickers: 'U' (top side), 'R' (right side), 'D' (bottom side), 'L' (left side)
  ollTop?: boolean[]; // 9 elements, true if yellow on top
  ollSides?: {
    U?: number[]; // indices 0,1,2 along top edge
    R?: number[]; // indices 0,1,2 along right edge
    D?: number[]; // indices 0,1,2 along bottom edge
    L?: number[]; // indices 0,1,2 along left edge
  };
  // For PLL: arrows indicating swaps
  pllArrows?: Array<{
    from: [number, number]; // [col 0..2, row 0..2]
    to: [number, number];
    twoWay?: boolean;
    color?: string;
  }>;
  // For F2L: slot position & orientation of U/R/F pieces
  f2lConfig?: {
    cornerU: string; // color 'W' | 'R' | 'G' | 'grey'
    cornerF: string;
    cornerR: string;
    edgeU: string;
    edgeF: string;
    edgeR: string;
    slotSolved?: boolean;
  };
}

export interface AlgorithmCase {
  id: string; // e.g. 'f2l-01', 'oll-21', 'pll-t'
  category: AlgorithmCategory;
  caseNumber: number | string;
  subgroup: string;
  name: string;
  alias?: string;
  algorithm: string;
  alternates?: string[];
  notes?: string;
  imagePath: string; // verified diagram image path
  cubeCode?: string; // 27-character facelet representation for F2L
  verified: boolean;
  visual?: VisualCubeData;
}

export interface UserProgress {
  xp: number;
  mastered: Record<string, boolean>; // algo id -> boolean
  learning: Record<string, boolean>; // algo id -> boolean
  saved: Record<string, boolean>;    // algo id -> boolean
  dailyCount: number;
  dailyGoal: number;
  lastActiveDate: string;
  streak: number;
}
