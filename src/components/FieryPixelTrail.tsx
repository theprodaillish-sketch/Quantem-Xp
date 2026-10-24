/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface PixelParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glow: string;
  createdAt: number;
  lifetime: number; // in milliseconds (~5000ms)
}

const FIERY_COLORS = [
  { fill: '#FF3030', glow: 'rgba(255, 48, 48, 0.6)' },   // Fiery red
  { fill: '#FF6A24', glow: 'rgba(255, 106, 36, 0.6)' },  // Hot orange
  { fill: '#FFB800', glow: 'rgba(255, 184, 0, 0.7)' },   // Yellow-orange highlight
  { fill: '#D31E1E', glow: 'rgba(211, 30, 30, 0.5)' },   // Dark red ember
  { fill: '#FFA040', glow: 'rgba(255, 160, 64, 0.6)' }   // Bright flame tip
];

export const FieryPixelTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<PixelParticle[]>([]);
  const lastSpawnTimeRef = useRef<number>(0);
  const isReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawn pixel particles
    const spawnParticles = (x: number, y: number, count: number, isBurst: boolean = false) => {
      if (isReducedMotionRef.current) return;
      const now = performance.now();

      // Density throttling for standard moves
      if (!isBurst && now - lastSpawnTimeRef.current < 25) {
        return;
      }
      lastSpawnTimeRef.current = now;

      // Limit max active particles to preserve 60fps
      if (particlesRef.current.length > 250) {
        particlesRef.current.splice(0, particlesRef.current.length - 250);
      }

      for (let i = 0; i < count; i++) {
        const colorData = FIERY_COLORS[Math.floor(Math.random() * FIERY_COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 2.8 + 0.8 : Math.random() * 0.9 + 0.2;
        
        // Pixel sizes: 4px, 5px, 6px, 7px blocky squares
        const size = isBurst ? Math.floor(Math.random() * 4) + 4 : Math.floor(Math.random() * 3) + 4;
        
        // Scatter offset around pointer
        const scatterDist = isBurst ? Math.random() * 10 : Math.random() * 6;
        const px = x + Math.cos(angle) * scatterDist;
        const py = y + Math.sin(angle) * scatterDist;

        // Upward thermal drift with slight horizontal drift
        const vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 0.4;
        const vy = Math.sin(angle) * speed - (Math.random() * 0.5 + 0.2); // Thermal float up

        particlesRef.current.push({
          x: Math.round(px),
          y: Math.round(py),
          vx,
          vy,
          size,
          color: colorData.fill,
          glow: colorData.glow,
          createdAt: now,
          lifetime: 5000 // 5 seconds exact lifetime requirement
        });
      }
    };

    // Pointer Events handling (works for mouse and touch)
    const handlePointerMove = (e: PointerEvent) => {
      const count = e.pointerType === 'touch' ? 1 : 2;
      spawnParticles(e.clientX, e.clientY, count, false);
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Stronger burst on click or tap
      const count = e.pointerType === 'touch' ? 14 : 22;
      spawnParticles(e.clientX, e.clientY, count, true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    // Animation Loop
    const render = () => {
      const now = performance.now();
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const activeParticles: PixelParticle[] = [];

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        const age = now - p.createdAt;

        if (age < p.lifetime) {
          // Progress 0 -> 1
          const progress = age / p.lifetime;
          // Alpha fades slowly at first, accelerating towards 5 seconds
          const alpha = Math.max(0, 1 - Math.pow(progress, 1.2));

          // Physics update: slow down drift
          p.x += p.vx;
          p.y += p.vy;
          p.vy -= 0.015; // Rising ember effect
          p.vx *= 0.99;

          // Render blocky pixel with subtle glow
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          if (progress < 0.6) {
            ctx.shadowColor = p.glow;
            ctx.shadowBlur = 6;
          }
          // Integer pixel coordinate snapping for crisp retro arcade look
          ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
          ctx.restore();

          activeParticles.push(p);
        }
      }

      particlesRef.current = activeParticles;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      mediaQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 select-none"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
};
