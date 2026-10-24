/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Star, CheckCircle, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { AlgorithmCase } from '../types/cube';
import { CubeDiagram } from './CubeDiagram';

interface AlgorithmDetailModalProps {
  algo: AlgorithmCase | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  isMastered: boolean;
  isLearning: boolean;
  onToggleSave: (id: string) => void;
  onToggleMaster: (id: string) => void;
  onToggleLearning: (id: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const AlgorithmDetailModal: React.FC<AlgorithmDetailModalProps> = ({
  algo,
  isOpen,
  onClose,
  isSaved,
  isMastered,
  isLearning,
  onToggleSave,
  onToggleMaster,
  onToggleLearning,
  onNext,
  onPrev
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !algo) return null;

  const copyAlgo = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      },
      () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#11131A] border-2 border-[#FF3030]/50 rounded-lg shadow-[0_0_40px_rgba(255,48,48,0.3)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="bg-[#181B24] px-6 py-4 border-b border-[#232733] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xs text-[#FF3030] tracking-wider">
              {algo.category} · #{algo.caseNumber}
            </span>
            {algo.alias && (
              <span className="text-xs font-tech text-[#FF6A24] bg-[#FF6A24]/10 px-2 py-0.5 rounded border border-[#FF6A24]/30">
                {algo.alias}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Bookmark */}
            <button
              onClick={() => onToggleSave(algo.id)}
              className={`p-1.5 rounded transition-colors ${
                isSaved ? 'text-[#FFB800] bg-[#FFB800]/10' : 'text-[#9298A5] hover:text-white'
              }`}
              title="Bookmark Algorithm"
              aria-label="Bookmark"
            >
              <Star className={`w-4 h-4 ${isSaved ? 'fill-[#FFB800]' : ''}`} />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-[#9298A5] hover:text-white hover:bg-[#252836] rounded transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Info Strip with Large Diagram */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#181B24] p-4 rounded border border-[#252836]">
            <div className="shrink-0 p-2 bg-[#11131A] border border-[#FF3030]/30 rounded shadow-[0_0_15px_rgba(255,48,48,0.15)]">
              <CubeDiagram algo={algo} size={112} highlight />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1">
              <h3 id="modal-title" className="font-tech text-xl font-bold text-white">
                {algo.name}
              </h3>
              <p className="text-xs text-[#9298A5] font-mono">
                Category: <span className="text-white font-semibold">{algo.subgroup}</span>
              </p>
              {algo.notes && (
                <p className="text-xs text-[#F5F5F5] font-tech pt-2 leading-relaxed">
                  {algo.notes}
                </p>
              )}
            </div>
          </div>

          {/* Primary Algorithm */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-pixel text-[#9298A5]">
              <span>PRIMARY ALGORITHM</span>
              <span className="text-[10px] text-[#FF6A24]">RECOMMENDED</span>
            </div>

            <div className="flex items-center justify-between gap-3 bg-[#08090D] p-3.5 rounded border border-[#FF3030]/40">
              <code className="font-mono-algo text-sm sm:text-base font-bold text-white tracking-wider">
                {algo.algorithm}
              </code>
              <button
                onClick={() => copyAlgo(algo.algorithm, -1)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded flex items-center gap-1.5 shrink-0 transition-all ${
                  copiedIndex === -1
                    ? 'bg-[#10B981] text-white'
                    : 'bg-[#FF3030] hover:bg-[#FF4D4D] text-white shadow-[0_0_10px_rgba(255,48,48,0.3)]'
                }`}
                aria-label={copiedIndex === -1 ? 'Copied' : 'Copy primary algorithm'}
              >
                {copiedIndex === -1 ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Alternates (if any) */}
          {algo.alternates && algo.alternates.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-pixel text-[#9298A5]">ALTERNATE VARIATIONS</span>
              <div className="space-y-2">
                {algo.alternates.map((alt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 bg-[#181B24] p-3 rounded border border-[#252836]"
                  >
                    <code className="font-mono-algo text-xs sm:text-sm text-[#F5F5F5]">
                      {alt}
                    </code>
                    <button
                      onClick={() => copyAlgo(alt, idx)}
                      className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1 shrink-0 transition-colors ${
                        copiedIndex === idx
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#252836] hover:bg-[#FF6A24] text-white'
                      }`}
                      aria-label="Copy alternate variation"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Progress Controls */}
          <div className="pt-2 border-t border-[#232733] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleMaster(algo.id)}
                className={`px-3 py-2 text-xs font-pixel rounded flex items-center gap-2 transition-all ${
                  isMastered
                    ? 'bg-[#10B981] text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                    : 'bg-[#181B24] border border-[#10B981]/40 text-[#10B981] hover:bg-[#10B981]/15'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>{isMastered ? 'MASTERED (+15 XP)' : 'MARK MASTERED (+15 XP)'}</span>
              </button>

              <button
                onClick={() => onToggleLearning(algo.id)}
                className={`px-3 py-2 text-xs font-pixel rounded transition-colors ${
                  isLearning && !isMastered
                    ? 'bg-[#FFB800] text-black font-bold'
                    : 'bg-[#181B24] border border-[#252836] text-[#9298A5] hover:text-white'
                }`}
              >
                {isLearning && !isMastered ? 'IN LEARNING' : 'MARK LEARNING'}
              </button>
            </div>

            {/* Navigation between cases */}
            <div className="flex items-center gap-2">
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="p-2 bg-[#181B24] hover:bg-[#252836] border border-[#252836] text-[#9298A5] hover:text-white rounded"
                  title="Previous Case (Left Arrow)"
                  aria-label="Previous case"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="p-2 bg-[#181B24] hover:bg-[#252836] border border-[#252836] text-[#9298A5] hover:text-white rounded"
                  title="Next Case (Right Arrow)"
                  aria-label="Next case"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
