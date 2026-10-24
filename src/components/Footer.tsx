/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#FF3030]/20 bg-[#08090D] pt-12 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Brand Block */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 p-0.5 bg-[#181B24] border border-[#FF3030]/40 rounded overflow-hidden shadow-[0_0_10px_rgba(255,48,48,0.3)]">
            <img
              src="/assets/aistudio/IMG_2062_8740c4b7.jpeg"
              alt="QUANTEM XP Logo"
              className="w-full h-full object-cover filter contrast-125"
            />
          </div>
          <span className="font-pixel text-base text-white text-glow-red font-bold tracking-widest">
            QUANTEM XP
          </span>
        </div>

        {/* Guiding Slogan - EXACT MATCH REQUIRED */}
        <div className="py-2">
          <blockquote className="font-pixel text-base sm:text-xl md:text-2xl text-[#FF6A24] tracking-wider text-glow-orange">
            “LEARN SLOWER, TURN FASTER.”
          </blockquote>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-pixel text-[#9298A5]" aria-label="Footer Navigation">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => onNavigate('algorithms')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            ALGORITHMS
          </button>
          <button
            onClick={() => onNavigate('f2l')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            F2L
          </button>
          <button
            onClick={() => onNavigate('oll')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            OLL
          </button>
          <button
            onClick={() => onNavigate('pll')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            PLL
          </button>
          <button
            onClick={() => onNavigate('practice')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            PRACTICE
          </button>
          <button
            onClick={() => onNavigate('progress')}
            className="hover:text-[#FF3030] transition-colors cursor-pointer"
          >
            PROGRESS
          </button>
        </nav>

        {/* Copyright & Arcade Notice */}
        <div className="pt-4 border-t border-[#181B24] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E6473] font-tech gap-2">
          <span>
            © {new Date().getFullYear()} QUANTEM XP · Made by Dallz
          </span>
          <span>
            CFOP Training System · WCA Standard Notation
          </span>
        </div>
      </div>
    </footer>
  );
};
