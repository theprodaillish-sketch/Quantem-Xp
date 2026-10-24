/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, Star, CheckCircle, Info } from 'lucide-react';
import { AlgorithmCase } from '../types/cube';
import { CubeDiagram } from './CubeDiagram';

interface AlgorithmCardProps {
  algo: AlgorithmCase;
  isSaved: boolean;
  isMastered: boolean;
  isLearning: boolean;
  onToggleSave: (id: string) => void;
  onToggleMaster: (id: string) => void;
  onOpenDetails: (algo: AlgorithmCase) => void;
}

export const AlgorithmCard: React.FC<AlgorithmCardProps> = ({
  algo,
  isSaved,
  isMastered,
  isLearning,
  onToggleSave,
  onToggleMaster,
  onOpenDetails
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(algo.algorithm).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = algo.algorithm;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    );
  };

  return (
    <div
      onClick={() => onOpenDetails(algo)}
      className={`group relative bg-[#181B24] border transition-all duration-200 rounded p-4 flex flex-col justify-between cursor-pointer select-none ${
        isMastered
          ? 'border-[#10B981]/50 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
          : 'border-[#252836] hover:border-[#FF3030]/60 hover:shadow-[0_0_16px_rgba(255,48,48,0.2)]'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${algo.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(algo);
        }
      }}
    >
      {/* Top Header Row: Case ID & Status / Bookmark Actions */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-pixel text-xs text-[#FF3030] tracking-wider">
            {algo.category === 'PLL' ? `${algo.caseNumber} PERM` : `#${algo.caseNumber}`}
          </span>
          {algo.alias && (
            <span className="text-[11px] font-tech text-[#9298A5] truncate max-w-[120px]">
              {algo.alias}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {/* Mastered checkmark button */}
          <button
            onClick={() => onToggleMaster(algo.id)}
            className={`p-1 rounded transition-colors ${
              isMastered
                ? 'text-[#10B981] hover:bg-[#10B981]/10'
                : 'text-[#9298A5] hover:text-white hover:bg-[#252836]'
            }`}
            title={isMastered ? 'Mastered (+15 XP awarded)' : 'Mark as Mastered (+15 XP)'}
            aria-label={isMastered ? 'Marked as mastered' : 'Mark as mastered'}
          >
            <CheckCircle className={`w-4 h-4 ${isMastered ? 'fill-[#10B981]/20' : ''}`} />
          </button>

          {/* Bookmark star button */}
          <button
            onClick={() => onToggleSave(algo.id)}
            className={`p-1 rounded transition-colors ${
              isSaved
                ? 'text-[#FFB800] hover:bg-[#FFB800]/10'
                : 'text-[#9298A5] hover:text-white hover:bg-[#252836]'
            }`}
            title={isSaved ? 'Remove bookmark' : 'Bookmark case'}
            aria-label={isSaved ? 'Bookmarked' : 'Bookmark'}
          >
            <Star className={`w-4 h-4 ${isSaved ? 'fill-[#FFB800]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Middle Visual Area: Cube Diagram + Name */}
      <div className="flex items-center gap-4 my-2">
        <div className="shrink-0 p-1.5 bg-[#11131A] border border-[#232733] rounded group-hover:border-[#FF3030]/40 transition-colors">
          <CubeDiagram algo={algo} size={72} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-tech font-semibold text-white text-sm line-clamp-1 group-hover:text-[#FF6A24] transition-colors">
            {algo.name}
          </h4>
          <p className="text-xs text-[#9298A5] font-mono mt-0.5 truncate">
            {algo.subgroup}
          </p>
          {isMastered ? (
            <span className="inline-block mt-2 text-[10px] font-pixel text-[#10B981]">
              MASTERED
            </span>
          ) : isLearning ? (
            <span className="inline-block mt-2 text-[10px] font-pixel text-[#FFB800]">
              LEARNING
            </span>
          ) : null}
        </div>
      </div>

      {/* Bottom Area: Algorithm Move Notation & Copy Button */}
      <div className="mt-3 pt-3 border-t border-[#232733] space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <code className="flex-1 font-mono-algo text-xs text-[#F5F5F5] font-semibold bg-[#11131A] px-2.5 py-1.5 rounded border border-[#232733] truncate tracking-wide">
            {algo.algorithm}
          </code>

          <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCopy}
              className={`px-2.5 py-1.5 text-xs font-mono font-semibold rounded transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                copied
                  ? 'bg-[#10B981] text-white shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                  : 'bg-[#252836] hover:bg-[#FF3030] text-[#F5F5F5] hover:text-white'
              }`}
              title="Copy algorithm"
              aria-label={copied ? 'Copied algorithm' : 'Copy algorithm to clipboard'}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-pixel">COPIED!</span>
                </>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={() => onOpenDetails(algo)}
              className="p-1.5 text-[#9298A5] hover:text-white hover:bg-[#252836] rounded transition-colors cursor-pointer"
              title="View Details & Alternates"
              aria-label={`View details for ${algo.name}`}
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {algo.alternates && algo.alternates.length > 0 && (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#9298A5] truncate px-1">
            <span className="text-[#FF6A24] font-semibold">alt:</span>
            <span className="truncate">{algo.alternates[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
};
