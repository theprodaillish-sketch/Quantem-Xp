/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Shuffle, Eye, CheckCircle, RefreshCw, Trophy, Copy, Check, Star } from 'lucide-react';
import { AlgorithmCase, UserProgress } from '../types/cube';
import { ALL_ALGORITHMS, F2L_CASES, OLL_CASES, PLL_CASES } from '../utils/algorithmsData';
import { CubeDiagram } from './CubeDiagram';

interface PracticeModeProps {
  progress: UserProgress;
  onRecordReview: (caseId: string, recalled: boolean, sessionSet: Set<string>) => void;
  onToggleSave: (caseId: string) => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  progress,
  onRecordReview,
  onToggleSave
}) => {
  const [selectedPool, setSelectedPool] = useState<'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED'>('ALL');
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [reviewedInSession, setReviewedInSession] = useState<Set<string>>(new Set());
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Filter pool based on selection
  const pool = useMemo(() => {
    switch (selectedPool) {
      case 'F2L':
        return F2L_CASES;
      case 'OLL':
        return OLL_CASES;
      case 'PLL':
        return PLL_CASES;
      case 'SAVED':
        return ALL_ALGORITHMS.filter((a) => progress.saved[a.id]);
      case 'ALL':
      default:
        return ALL_ALGORITHMS;
    }
  }, [selectedPool, progress.saved]);

  // Shuffled index order to avoid immediate repetition
  const [order, setOrder] = useState<number[]>([]);

  const shuffleOrder = useCallback((length: number) => {
    const indices = Array.from({ length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, []);

  useEffect(() => {
    if (pool.length > 0) {
      setOrder(shuffleOrder(pool.length));
      setCurrentIndex(0);
      setIsRevealed(false);
    }
  }, [pool, shuffleOrder]);

  const currentCase: AlgorithmCase | undefined = pool[order[currentIndex] ?? 0];

  const handleNext = () => {
    setIsRevealed(false);
    setCopied(false);
    if (currentIndex + 1 < order.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Re-shuffle when completing cycle
      setOrder(shuffleOrder(pool.length));
      setCurrentIndex(0);
      setFeedbackMsg('Cycle completed! Shuffled new round.');
      setTimeout(() => setFeedbackMsg(null), 3000);
    }
  };

  const handleRate = (recalled: boolean) => {
    if (!currentCase) return;

    onRecordReview(currentCase.id, recalled, reviewedInSession);

    if (recalled) {
      setReviewedInSession((prev) => new Set(prev).add(currentCase.id));
      setFeedbackMsg('+3 XP earned! Keep up the momentum.');
    } else {
      setFeedbackMsg('Marked for revision.');
    }

    setTimeout(() => setFeedbackMsg(null), 2500);
    handleNext();
  };

  // Keyboard shortcut: Space to reveal / advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (!isRevealed) {
          setIsRevealed(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRevealed]);

  const handleCopy = () => {
    if (!currentCase) return;
    navigator.clipboard.writeText(currentCase.algorithm).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="practice" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none">
      {/* Section Title */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B24] border border-[#FF6A24]/40 rounded text-[#FF6A24] font-pixel text-xs">
          <Trophy className="w-3.5 h-3.5" />
          <span>RECALL FLASHCARDS</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-3xl text-white text-glow-red">
          PRACTICE ARENA
        </h2>
        <p className="font-tech text-sm text-[#9298A5] max-w-lg mx-auto">
          Test your muscle memory and case recognition. Look at the cube state, recall the finger-tricks, and reveal the algorithm.
        </p>
      </div>

      {/* Pool Selectors Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-[#11131A] p-1.5 rounded-lg border border-[#232733] max-w-xl mx-auto">
        {(['ALL', 'F2L', 'OLL', 'PLL', 'SAVED'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedPool(tab)}
            className={`px-3 py-1.5 font-pixel text-[11px] rounded transition-all cursor-pointer ${
              selectedPool === tab
                ? 'bg-[#FF3030] text-white shadow-[0_0_10px_rgba(255,48,48,0.4)]'
                : 'text-[#9298A5] hover:text-white hover:bg-[#181B24]'
            }`}
          >
            {tab === 'SAVED' ? `★ SAVED (${ALL_ALGORITHMS.filter((a) => progress.saved[a.id]).length})` : tab}
          </button>
        ))}
      </div>

      {pool.length === 0 ? (
        <div className="text-center py-12 bg-[#11131A] border border-[#252836] rounded-lg p-6">
          <p className="font-pixel text-sm text-[#9298A5]">
            No saved algorithms in this category.
          </p>
          <p className="text-xs text-[#9298A5] font-tech mt-2">
            Click the star icon on any algorithm card to bookmark it for quick practice!
          </p>
        </div>
      ) : currentCase ? (
        <div className="bg-[#11131A] border-2 border-[#FF3030]/40 rounded-lg p-6 sm:p-8 shadow-[0_0_30px_rgba(255,48,48,0.15)] relative">
          {/* Top Info Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#232733] text-xs">
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[#FF3030]">
                {currentCase.category} · #{currentCase.caseNumber}
              </span>
              <span className="font-tech text-[#9298A5]">
                {currentCase.subgroup}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(currentCase.id)}
                className={`p-1.5 rounded transition-colors ${
                  progress.saved[currentCase.id] ? 'text-[#FFB800] bg-[#FFB800]/10' : 'text-[#9298A5] hover:text-white'
                }`}
                title="Bookmark Case"
              >
                <Star className={`w-4 h-4 ${progress.saved[currentCase.id] ? 'fill-[#FFB800]' : ''}`} />
              </button>

              <button
                onClick={() => setOrder(shuffleOrder(pool.length))}
                className="p-1.5 text-[#9298A5] hover:text-white hover:bg-[#181B24] rounded"
                title="Reshuffle Deck"
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <span className="font-mono text-[#9298A5] tabular-nums">
                {currentIndex + 1} / {pool.length}
              </span>
            </div>
          </div>

          {/* Flashcard Body */}
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-6">
            {/* Cube Diagram */}
            <div className="p-3 bg-[#08090D] border-2 border-[#FF6A24]/40 rounded-lg shadow-[0_0_20px_rgba(255,106,36,0.2)]">
              <CubeDiagram algo={currentCase} size={140} highlight />
            </div>

            {/* Case Name / Alias */}
            <div className="space-y-1">
              <h3 className="font-tech text-xl sm:text-2xl font-bold text-white">
                {currentCase.name}
              </h3>
              {currentCase.alias && (
                <p className="font-pixel text-xs text-[#FF6A24]">
                  {currentCase.alias}
                </p>
              )}
            </div>

            {/* Hidden vs Revealed State */}
            {!isRevealed ? (
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsRevealed(true)}
                  className="px-6 py-3 bg-[#FF3030] hover:bg-[#FF4D4D] text-white font-pixel text-xs sm:text-sm tracking-wider rounded transition-all shadow-[0_0_15px_rgba(255,48,48,0.4)] flex items-center gap-2.5 mx-auto cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>REVEAL ALGORITHM</span>
                </button>
                <p className="text-[11px] font-mono text-[#9298A5]">
                  Press <kbd className="px-1.5 py-0.5 bg-[#181B24] rounded border border-[#232733] text-white">Space</kbd> or click to reveal
                </p>
              </div>
            ) : (
              <div className="space-y-6 w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
                {/* Algorithm Notation Display */}
                <div className="bg-[#08090D] p-4 rounded-lg border border-[#FF3030]/50 flex items-center justify-between gap-3 shadow-[0_0_15px_rgba(255,48,48,0.15)]">
                  <code className="font-mono-algo text-base sm:text-lg font-bold text-white tracking-wider flex-1 text-center">
                    {currentCase.algorithm}
                  </code>
                  <button
                    onClick={handleCopy}
                    className={`p-2 rounded transition-colors ${
                      copied ? 'bg-[#10B981] text-white' : 'bg-[#181B24] hover:bg-[#FF3030] text-white'
                    }`}
                    title="Copy algorithm"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {currentCase.notes && (
                  <p className="text-xs text-[#9298A5] font-tech italic">
                    Tip: {currentCase.notes}
                  </p>
                )}

                {/* Rating Feedback Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleRate(false)}
                    className="py-3 px-4 bg-[#181B24] hover:bg-[#232733] border border-[#252836] text-[#9298A5] hover:text-white font-pixel text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-[#FF6A24]" />
                    <span>NEED PRACTICE</span>
                  </button>

                  <button
                    onClick={() => handleRate(true)}
                    className="py-3 px-4 bg-[#10B981] hover:bg-[#059669] text-white font-pixel text-xs rounded transition-all shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>I KNOW THIS! (+3 XP)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Toast / Feedback Notice */}
          {feedbackMsg && (
            <div className="mt-4 text-center p-2 bg-[#181B24] border border-[#FF6A24]/40 rounded text-xs font-pixel text-[#FF6A24] animate-pulse">
              {feedbackMsg}
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
};
