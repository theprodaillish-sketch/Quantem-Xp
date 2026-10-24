/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Flame, Sparkles } from 'lucide-react';
import { AlgorithmCase, UserProgress } from '../types/cube';
import { ALL_ALGORITHMS, searchAlgorithms } from '../utils/algorithmsData';
import { AlgorithmCard } from './AlgorithmCard';
import { AlgorithmDetailModal } from './AlgorithmDetailModal';

interface AlgorithmCatalogueProps {
  progress: UserProgress;
  onToggleSave: (id: string) => void;
  onToggleMaster: (id: string) => void;
  onToggleLearning: (id: string) => void;
  defaultCategory?: 'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED';
}

export const AlgorithmCatalogue: React.FC<AlgorithmCatalogueProps> = ({
  progress,
  onToggleSave,
  onToggleMaster,
  onToggleLearning,
  defaultCategory = 'ALL'
}) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED'>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'MASTERED' | 'LEARNING' | 'UNLEARNED'>('ALL');
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmCase | null>(null);

  // Scroll Glow references for F2L, OLL, PLL sections
  const [activeGlowSection, setActiveGlowSection] = useState<string | null>(null);
  const f2lRef = useRef<HTMLDivElement | null>(null);
  const ollRef = useRef<HTMLDivElement | null>(null);
  const pllRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultCategory) {
      setActiveTab(defaultCategory);
    }
  }, [defaultCategory]);

  // IntersectionObserver for scroll-triggered fiery red glow
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveGlowSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    );

    if (f2lRef.current) observer.observe(f2lRef.current);
    if (ollRef.current) observer.observe(ollRef.current);
    if (pllRef.current) observer.observe(pllRef.current);

    return () => observer.disconnect();
  }, []);

  // Filtered algorithms list
  const filteredAlgorithms = useMemo(() => {
    return searchAlgorithms(ALL_ALGORITHMS, searchQuery, activeTab, statusFilter, progress);
  }, [searchQuery, activeTab, statusFilter, progress]);

  // Group by category and subgroup for structured catalogue presentation
  const groupedCases = useMemo(() => {
    const groups: { [key: string]: AlgorithmCase[] } = {};
    filteredAlgorithms.forEach((algo) => {
      const key = `${algo.category} — ${algo.subgroup}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(algo);
    });
    return groups;
  }, [filteredAlgorithms]);

  const handleNextModal = () => {
    if (!selectedAlgo) return;
    const currentIndex = filteredAlgorithms.findIndex((a) => a.id === selectedAlgo.id);
    if (currentIndex >= 0 && currentIndex + 1 < filteredAlgorithms.length) {
      setSelectedAlgo(filteredAlgorithms[currentIndex + 1]);
    }
  };

  const handlePrevModal = () => {
    if (!selectedAlgo) return;
    const currentIndex = filteredAlgorithms.findIndex((a) => a.id === selectedAlgo.id);
    if (currentIndex > 0) {
      setSelectedAlgo(filteredAlgorithms[currentIndex - 1]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveTab('ALL');
    setStatusFilter('ALL');
  };

  return (
    <section id="algorithms" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181B24] border border-[#FF3030]/40 rounded text-[#FF3030] font-pixel text-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A24]" />
          <span>ALGORITHM COMPENDIUM</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-3xl text-white text-glow-red">
          THE COMPLETE CATALOGUE
        </h2>
        <p className="font-tech text-sm text-[#9298A5] max-w-xl mx-auto">
          Explore all 119 verified algorithms. Filter by category, case name, or speedcubing move triggers.
        </p>
      </div>

      {/* Search Bar & Category Navigation Controls */}
      <div className="bg-[#11131A] border border-[#232733] rounded-lg p-4 sm:p-5 mb-10 space-y-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9298A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by case name (e.g. Sune, T-Perm), notation (R U R' U'), or number..."
            className="w-full bg-[#08090D] border border-[#252836] focus:border-[#FF3030] rounded py-2.5 pl-10 pr-10 text-sm font-tech text-white placeholder:text-[#5E6473] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#9298A5] hover:text-white"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs & Status Filter Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 border-t border-[#1F2330]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {(
              [
                { id: 'ALL', label: 'ALL (119)' },
                { id: 'F2L', label: 'F2L (41)' },
                { id: 'OLL', label: 'OLL (57)' },
                { id: 'PLL', label: 'PLL (21)' },
                { id: 'SAVED', label: `★ SAVED (${ALL_ALGORITHMS.filter((a) => progress.saved[a.id]).length})` }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-pixel rounded transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#FF3030] text-white shadow-[0_0_10px_rgba(255,48,48,0.35)]'
                    : 'text-[#9298A5] hover:text-white hover:bg-[#181B24]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Status Filter Segmented Control */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-[11px] font-pixel text-[#9298A5] hidden sm:inline">
              STATUS:
            </span>
            <div className="flex items-center bg-[#08090D] p-1 rounded border border-[#232733] text-xs font-tech">
              {(['ALL', 'MASTERED', 'LEARNING', 'UNLEARNED'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    statusFilter === st
                      ? 'bg-[#181B24] text-white font-semibold border border-[#FF6A24]/40'
                      : 'text-[#9298A5] hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Algorithm Sections & Cards */}
      {filteredAlgorithms.length === 0 ? (
        <div className="text-center py-16 bg-[#11131A] border border-[#252836] rounded-lg p-8 space-y-4">
          <p className="font-pixel text-base text-[#FF3030]">
            NO ALGORITHMS MATCHING YOUR FILTER
          </p>
          <p className="font-tech text-sm text-[#9298A5] max-w-md mx-auto">
            Try adjusting your search query, selecting "ALL" categories, or resetting filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-[#181B24] hover:bg-[#252836] border border-[#FF3030]/40 text-white font-pixel text-xs rounded transition-colors cursor-pointer"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {/* SECTION 1: F2L */}
          {(activeTab === 'ALL' || activeTab === 'F2L') && filteredAlgorithms.some(a => a.category === 'F2L') && (
            <div id="f2l" ref={f2lRef} className="scroll-mt-24 space-y-6">
              <div
                className={`p-6 bg-[#11131A] rounded-lg border transition-all duration-300 flex items-center justify-between ${
                  activeGlowSection === 'f2l'
                    ? 'border-[#FF3030] shadow-[0_0_25px_rgba(255,48,48,0.3)]'
                    : 'border-[#232733]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-5 h-5 ${activeGlowSection === 'f2l' ? 'text-[#FF3030] animate-pulse' : 'text-[#FF6A24]'}`} />
                    <h3 className="font-pixel text-lg sm:text-xl text-white">
                      F2L — FIRST TWO LAYERS
                    </h3>
                  </div>
                  <p className="font-tech text-xs sm:text-sm text-[#9298A5]">
                    41 standard cases to pair corner and edge pieces and insert into the first two layers simultaneously.
                  </p>
                </div>
                <div className="hidden sm:block font-pixel text-xs text-[#FF3030] bg-[#FF3030]/10 px-3 py-1.5 rounded border border-[#FF3030]/30">
                  41 CASES
                </div>
              </div>

              {/* F2L Subgroups */}
              <div className="space-y-8 pl-1">
                {Object.entries(groupedCases)
                  .filter(([title]) => title.startsWith('F2L'))
                  .map(([groupTitle, cases]) => (
                    <div key={groupTitle} className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#232733] pb-2">
                        <h4 className="font-pixel text-xs sm:text-sm text-[#FF6A24] tracking-wide">
                          {groupTitle.replace('F2L — ', '')}
                        </h4>
                        <span className="font-mono text-xs text-[#9298A5] tabular-nums">
                          {cases.length} cases
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cases.map((algo) => (
                          <AlgorithmCard
                            key={algo.id}
                            algo={algo}
                            isSaved={!!progress.saved[algo.id]}
                            isMastered={!!progress.mastered[algo.id]}
                            isLearning={!!progress.learning[algo.id]}
                            onToggleSave={onToggleSave}
                            onToggleMaster={onToggleMaster}
                            onOpenDetails={(a) => setSelectedAlgo(a)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* SECTION 2: OLL */}
          {(activeTab === 'ALL' || activeTab === 'OLL') && filteredAlgorithms.some(a => a.category === 'OLL') && (
            <div id="oll" ref={ollRef} className="scroll-mt-24 space-y-6">
              <div
                className={`p-6 bg-[#11131A] rounded-lg border transition-all duration-300 flex items-center justify-between ${
                  activeGlowSection === 'oll'
                    ? 'border-[#FFD500] shadow-[0_0_25px_rgba(255,213,0,0.25)]'
                    : 'border-[#232733]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-5 h-5 ${activeGlowSection === 'oll' ? 'text-[#FFD500] animate-pulse' : 'text-[#FF6A24]'}`} />
                    <h3 className="font-pixel text-lg sm:text-xl text-white">
                      OLL — ORIENTATION OF THE LAST LAYER
                    </h3>
                  </div>
                  <p className="font-tech text-xs sm:text-sm text-[#9298A5]">
                    57 verified algorithms to orient all top-layer yellow stickers in one step.
                  </p>
                </div>
                <div className="hidden sm:block font-pixel text-xs text-[#FFD500] bg-[#FFD500]/10 px-3 py-1.5 rounded border border-[#FFD500]/30">
                  57 CASES
                </div>
              </div>

              {/* OLL Subgroups */}
              <div className="space-y-8 pl-1">
                {Object.entries(groupedCases)
                  .filter(([title]) => title.startsWith('OLL'))
                  .map(([groupTitle, cases]) => (
                    <div key={groupTitle} className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#232733] pb-2">
                        <h4 className="font-pixel text-xs sm:text-sm text-[#FFD500] tracking-wide">
                          {groupTitle.replace('OLL — ', '')}
                        </h4>
                        <span className="font-mono text-xs text-[#9298A5] tabular-nums">
                          {cases.length} cases
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cases.map((algo) => (
                          <AlgorithmCard
                            key={algo.id}
                            algo={algo}
                            isSaved={!!progress.saved[algo.id]}
                            isMastered={!!progress.mastered[algo.id]}
                            isLearning={!!progress.learning[algo.id]}
                            onToggleSave={onToggleSave}
                            onToggleMaster={onToggleMaster}
                            onOpenDetails={(a) => setSelectedAlgo(a)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* SECTION 3: PLL */}
          {(activeTab === 'ALL' || activeTab === 'PLL') && filteredAlgorithms.some(a => a.category === 'PLL') && (
            <div id="pll" ref={pllRef} className="scroll-mt-24 space-y-6">
              <div
                className={`p-6 bg-[#11131A] rounded-lg border transition-all duration-300 flex items-center justify-between ${
                  activeGlowSection === 'pll'
                    ? 'border-[#FF3030] shadow-[0_0_25px_rgba(255,48,48,0.3)]'
                    : 'border-[#232733]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-5 h-5 ${activeGlowSection === 'pll' ? 'text-[#FF3030] animate-pulse' : 'text-[#FF6A24]'}`} />
                    <h3 className="font-pixel text-lg sm:text-xl text-white">
                      PLL — PERMUTATION OF THE LAST LAYER
                    </h3>
                  </div>
                  <p className="font-tech text-xs sm:text-sm text-[#9298A5]">
                    21 verified algorithms to rearrange pieces into solved state.
                  </p>
                </div>
                <div className="hidden sm:block font-pixel text-xs text-[#FF6A24] bg-[#FF6A24]/10 px-3 py-1.5 rounded border border-[#FF6A24]/30">
                  21 CASES
                </div>
              </div>

              {/* PLL Subgroups */}
              <div className="space-y-8 pl-1">
                {Object.entries(groupedCases)
                  .filter(([title]) => title.startsWith('PLL'))
                  .map(([groupTitle, cases]) => (
                    <div key={groupTitle} className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#232733] pb-2">
                        <h4 className="font-pixel text-xs sm:text-sm text-[#FF6A24] tracking-wide">
                          {groupTitle.replace('PLL — ', '')}
                        </h4>
                        <span className="font-mono text-xs text-[#9298A5] tabular-nums">
                          {cases.length} cases
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cases.map((algo) => (
                          <AlgorithmCard
                            key={algo.id}
                            algo={algo}
                            isSaved={!!progress.saved[algo.id]}
                            isMastered={!!progress.mastered[algo.id]}
                            isLearning={!!progress.learning[algo.id]}
                            onToggleSave={onToggleSave}
                            onToggleMaster={onToggleMaster}
                            onOpenDetails={(a) => setSelectedAlgo(a)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* If SAVED tab is active */}
          {activeTab === 'SAVED' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#11131A] border border-[#FFB800]/40 rounded-lg flex items-center justify-between">
                <span className="font-pixel text-sm text-[#FFB800]">★ BOOKMARKED ALGORITHMS</span>
                <span className="font-mono text-xs text-white">{filteredAlgorithms.length} saved</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAlgorithms.map((algo) => (
                  <AlgorithmCard
                    key={algo.id}
                    algo={algo}
                    isSaved={!!progress.saved[algo.id]}
                    isMastered={!!progress.mastered[algo.id]}
                    isLearning={!!progress.learning[algo.id]}
                    onToggleSave={onToggleSave}
                    onToggleMaster={onToggleMaster}
                    onOpenDetails={(a) => setSelectedAlgo(a)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Detail Modal */}
      <AlgorithmDetailModal
        algo={selectedAlgo}
        isOpen={!!selectedAlgo}
        onClose={() => setSelectedAlgo(null)}
        isSaved={selectedAlgo ? !!progress.saved[selectedAlgo.id] : false}
        isMastered={selectedAlgo ? !!progress.mastered[selectedAlgo.id] : false}
        isLearning={selectedAlgo ? !!progress.learning[selectedAlgo.id] : false}
        onToggleSave={onToggleSave}
        onToggleMaster={onToggleMaster}
        onToggleLearning={onToggleLearning}
        onNext={handleNextModal}
        onPrev={handlePrevModal}
      />
    </section>
  );
};
