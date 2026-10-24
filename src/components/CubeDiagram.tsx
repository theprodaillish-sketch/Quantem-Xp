/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlgorithmCase } from '../types/cube';

interface CubeDiagramProps {
  algo: AlgorithmCase;
  size?: number;
  highlight?: boolean;
}

export const CubeDiagram: React.FC<CubeDiagramProps> = ({ algo, size = 96, highlight = false }) => {
  const [imageError, setImageError] = useState(false);

  // Use genuine verified Rubik's Cube diagram asset
  if (algo.imagePath && !imageError) {
    return (
      <div
        className={`relative flex items-center justify-center select-none transition-transform duration-200 rounded ${
          highlight ? 'scale-105 filter drop-shadow-[0_0_12px_rgba(255,48,48,0.5)]' : ''
        }`}
        style={{ width: size, height: size }}
      >
        <img
          src={algo.imagePath}
          alt={`${algo.name} (${algo.category} #${algo.caseNumber}) genuine cube diagram`}
          width={size}
          height={size}
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Clean fallback if image cannot be loaded
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#11131A] border border-[#252836] rounded text-center p-1"
      style={{ width: size, height: size }}
    >
      <span className="font-pixel text-[9px] text-[#FF3030]">{algo.category}</span>
      <span className="font-tech text-xs text-white font-bold">#{algo.caseNumber}</span>
    </div>
  );
};

