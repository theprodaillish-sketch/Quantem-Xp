/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AlgorithmCatalogue } from './components/AlgorithmCatalogue';
import { PracticeMode } from './components/PracticeMode';
import { ProgressionDashboard } from './components/ProgressionDashboard';
import { Footer } from './components/Footer';
import { FieryPixelTrail } from './components/FieryPixelTrail';
import {
  loadUserProgress,
  toggleCaseBookmark,
  markCaseMastered,
  toggleCaseLearning,
  recordPracticeReview,
  clearUserProgress
} from './utils/storage';
import { UserProgress } from './types/cube';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [catalogueCategory, setCatalogueCategory] = useState<'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED'>('ALL');

  // Track active scroll position for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'algorithms', 'f2l', 'oll', 'pll', 'practice', 'progress'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'saved') {
      setCatalogueCategory('SAVED');
      const el = document.getElementById('algorithms');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'f2l') {
      setCatalogueCategory('F2L');
      const el = document.getElementById('f2l');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'oll') {
      setCatalogueCategory('OLL');
      const el = document.getElementById('oll');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'pll') {
      setCatalogueCategory('PLL');
      const el = document.getElementById('pll');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'algorithms') {
      setCatalogueCategory('ALL');
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSave = (id: string) => {
    setProgress((prev) => toggleCaseBookmark(prev, id));
  };

  const handleToggleMaster = (id: string) => {
    setProgress((prev) => {
      const isCurrentlyMastered = !!prev.mastered[id];
      const { nextProgress } = markCaseMastered(prev, id, !isCurrentlyMastered);
      return nextProgress;
    });
  };

  const handleToggleLearning = (id: string) => {
    setProgress((prev) => toggleCaseLearning(prev, id));
  };

  const handleRecordPracticeReview = (
    caseId: string,
    recalled: boolean,
    sessionSet: Set<string>
  ) => {
    setProgress((prev) => {
      const { nextProgress } = recordPracticeReview(prev, caseId, recalled, sessionSet);
      return nextProgress;
    });
  };

  const handleResetProgress = () => {
    const fresh = clearUserProgress();
    setProgress(fresh);
  };

  const savedCount = Object.keys(progress.saved).filter((k) => progress.saved[k]).length;

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F5F5] relative flex flex-col font-tech">
      {/* Fiery Pixel Trail Overlay (5s decay, blocky pixels, pointer-events: none) */}
      <FieryPixelTrail />

      {/* Sticky Arcade Navigation Bar */}
      <Navbar
        progress={progress}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        savedCount={savedCount}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartLearning={() => handleNavigate('algorithms')}
          onExploreAlgorithms={() => handleNavigate('algorithms')}
        />

        {/* Algorithm Catalogue Section (F2L 41, OLL 57, PLL 21 = 119) */}
        <AlgorithmCatalogue
          progress={progress}
          onToggleSave={handleToggleSave}
          onToggleMaster={handleToggleMaster}
          onToggleLearning={handleToggleLearning}
          defaultCategory={catalogueCategory}
        />

        {/* Interactive Practice Mode Trainer */}
        <PracticeMode
          progress={progress}
          onRecordReview={handleRecordPracticeReview}
          onToggleSave={handleToggleSave}
        />

        {/* Gamified Progression Dashboard */}
        <ProgressionDashboard
          progress={progress}
          onResetProgress={handleResetProgress}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
