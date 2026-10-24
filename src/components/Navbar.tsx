/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Star, Zap, Trophy } from 'lucide-react';
import { UserProgress } from '../types/cube';
import { getXpTier } from '../utils/algorithmsData';

interface NavbarProps {
  progress: UserProgress;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  activeSection,
  onNavigate,
  savedCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tier = getXpTier(progress.xp);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'f2l', label: 'F2L' },
    { id: 'oll', label: 'OLL' },
    { id: 'pll', label: 'PLL' },
    { id: 'practice', label: 'Practice' },
    { id: 'progress', label: 'Progress' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08090D]/95 backdrop-blur-md border-b border-[#FF3030]/20 select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Official Logo + Brand Wordmark */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
          role="button"
          tabIndex={0}
          aria-label="QUANTEM XP Home"
          onKeyDown={(e) => { if (e.key === 'Enter') handleNavClick('hero'); }}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 p-0.5 bg-[#181B24] border border-[#FF3030]/40 rounded overflow-hidden shadow-[0_0_10px_rgba(255,48,48,0.25)] group-hover:border-[#FF3030] transition-colors">
            <img
              src="/assets/aistudio/IMG_2062_8740c4b7.jpeg"
              alt="QUANTEM XP Logo"
              className="w-full h-full object-cover object-center filter contrast-125"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-xs sm:text-base tracking-wider text-white text-glow-red font-bold">
              QUANTEM XP
            </span>
            <span className="font-pixel text-[8px] text-[#FF6A24] tracking-widest hidden sm:inline">
              MADE BY DALLZ
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-pixel tracking-wide text-[#9298A5]" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all duration-150 py-1.5 px-2 relative hover:text-white cursor-pointer ${
                  isActive ? 'text-[#FF3030] font-bold' : 'hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF3030] shadow-[0_0_6px_#FF3030]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: XP Progression Badge & Saved CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Saved Bookmarks Shortcut (Hidden on mobile xs to keep navbar clean) */}
          <button
            onClick={() => handleNavClick('saved')}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-pixel border rounded transition-colors ${
              activeSection === 'saved'
                ? 'bg-[#FF3030]/20 border-[#FF3030] text-[#FF3030]'
                : 'bg-[#11131A] border-[#FF3030]/20 text-[#9298A5] hover:text-white hover:border-[#FF3030]/40'
            }`}
            title="View Bookmarked Algorithms"
            aria-label="View Saved Algorithms"
          >
            <Star className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-[#FFB800] fill-[#FFB800]' : ''}`} />
            <span className="hidden md:inline">SAVED</span>
            <span className="text-[10px] bg-[#181B24] px-1.5 py-0.2 rounded font-mono font-bold text-white">
              {savedCount}
            </span>
          </button>

          {/* XP & Level Badge */}
          <div 
            onClick={() => handleNavClick('progress')}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 bg-[#11131A] border border-[#FF6A24]/40 hover:border-[#FF6A24] rounded cursor-pointer transition-colors shadow-[0_0_8px_rgba(255,106,36,0.15)]"
            title={`${tier.title} (${progress.xp} XP)`}
            role="button"
            tabIndex={0}
            aria-label={`Current rank: ${tier.title}, ${progress.xp} Experience Points`}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNavClick('progress'); }}
          >
            <Zap className="w-3.5 h-3.5 text-[#FF6A24] fill-[#FF6A24]" />
            <div className="flex flex-col text-right">
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#FF6A24]">
                LVL {tier.level}
              </span>
              <span className="text-[9px] font-mono font-semibold text-[#9298A5] tabular-nums hidden sm:inline">
                {progress.xp} XP
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9298A5] hover:text-white border border-[#252836] rounded bg-[#11131A] min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF3030]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F15] border-b border-[#FF3030]/30 px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-xs font-pixel rounded transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#FF3030]/20 text-[#FF3030] border border-[#FF3030]/40'
                    : 'text-[#9298A5] hover:bg-[#181B24] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1F2330] flex items-center justify-between text-xs text-[#9298A5]">
            <span className="flex items-center gap-1.5 font-pixel text-[10px] text-[#FF6A24]">
              <Trophy className="w-3.5 h-3.5" />
              {tier.title}
            </span>
            <span className="font-mono text-white tabular-nums">
              Streak: {progress.streak} {progress.streak === 1 ? 'day' : 'days'}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
