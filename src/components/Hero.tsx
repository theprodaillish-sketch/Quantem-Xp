/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Flame, Play, BookOpen } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onExploreAlgorithms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onExploreAlgorithms }) => {
  return (
    <section id="hero" className="relative min-h-auto lg:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-arcade-grid py-8 sm:py-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#FF3030]/15">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF3030]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF6A24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10">
        {/* Left Column: Heading, Badges, CTAs */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          {/* Made by Dallz Credit */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs font-pixel text-[#FF6A24] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#FF3030] inline-block" aria-hidden="true" />
            <span>MADE BY DALLZ</span>
            <span className="w-1.5 h-1.5 bg-[#FF3030] inline-block" aria-hidden="true" />
          </div>

          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#181B24] border border-[#FF3030]/40 text-[#FF3030] shadow-[0_0_12px_rgba(255,48,48,0.25)]">
            <Flame className="w-3.5 h-3.5 animate-pulse text-[#FF6A24]" />
            <span className="font-pixel text-[11px] sm:text-xs tracking-wider">
              CUBING TRAINING SYSTEM
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-wide text-glow-red">
            MASTER THE <br className="hidden sm:inline" />
            <span className="text-[#FF6A24] text-glow-orange">ALGORITHM.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#9298A5] font-tech max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Level up your speedcubing speed with all <strong className="text-white font-semibold">41 F2L</strong>, <strong className="text-white font-semibold">57 OLL</strong>, and <strong className="text-white font-semibold">21 PLL</strong> cases. Gamified recall, instant finger-trick notation, and fiery progression.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onStartLearning}
              className="px-6 py-3 bg-[#FF3030] hover:bg-[#FF4D4D] text-white font-pixel text-xs sm:text-sm tracking-wider rounded transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_20px_rgba(255,48,48,0.4)] flex items-center gap-2.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              START LEARNING
            </button>

            <button
              onClick={onExploreAlgorithms}
              className="px-6 py-3 bg-[#11131A] hover:bg-[#181B24] text-[#F5F5F5] hover:text-white font-pixel text-xs sm:text-sm tracking-wider rounded border border-[#FF6A24]/40 hover:border-[#FF6A24] transition-all duration-150 flex items-center gap-2.5 cursor-pointer shadow-[0_0_12px_rgba(255,106,36,0.15)]"
            >
              <BookOpen className="w-4 h-4 text-[#FF6A24]" />
              EXPLORE ALGORITHMS
            </button>
          </div>

          {/* Quick Stats Pill Strip */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#9298A5] font-mono">
            <div>
              <span className="text-white font-bold text-sm">119</span> TOTAL CASES
            </div>
            <div className="text-[#FF3030]/50">/</div>
            <div>
              <span className="text-white font-bold text-sm">WCA</span> VERIFIED
            </div>
            <div className="text-[#FF3030]/50">/</div>
            <div>
              <span className="text-white font-bold text-sm">OFFLINE</span> READY
            </div>
          </div>
        </div>

        {/* Right Column: User-Provided Official Rubik's Cube Artwork */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative group p-3 bg-[#11131A] border-2 border-[#FF3030]/40 rounded-lg shadow-[0_0_35px_rgba(255,48,48,0.25)] hover:border-[#FF3030] transition-all duration-300">
            {/* Retro Corner Pixel Accent Marks */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#FF3030]" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#FF6A24]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#FF6A24]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#FF3030]" />

            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded overflow-hidden flex items-center justify-center p-2 relative">
              <img
                src="/assets/aistudio/IMG_2062_8740c4b7.jpeg"
                alt="QUANTEM XP Official Rubik's Cube Artwork"
                className="w-full h-full object-contain filter contrast-110"
              />
            </div>

            <div className="mt-2 text-center">
              <span className="font-pixel text-[10px] text-[#FF6A24] tracking-widest uppercase">
                QUANTEM XP SCHEMATIC
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div 
        onClick={onStartLearning}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#9298A5] hover:text-[#FF3030] cursor-pointer transition-colors"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to algorithms"
        onKeyDown={(e) => { if (e.key === 'Enter') onStartLearning(); }}
      >
        <span className="font-pixel text-[9px] tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#FF3030]" />
      </div>
    </section>
  );
};
