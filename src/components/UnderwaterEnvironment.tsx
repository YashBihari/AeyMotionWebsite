import React, { useEffect, useState } from 'react';

export default function UnderwaterEnvironment() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      setMouseOffset({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 h-[420px] sm:h-[500px] md:h-[600px] pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <style>{`
        @keyframes swayGentleLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.5deg) skewX(-1.5deg); }
        }
        @keyframes swayGentleRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(4deg) skewX(2deg); }
        }
        @keyframes swaySlow {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-2.5deg); }
        }
        @keyframes fishGlideRight {
          0% { transform: translate3d(-80px, 0, 0); }
          50% { transform: translate3d(calc(100vw + 80px), -18px, 0); }
          50.01% { transform: translate3d(calc(100vw + 80px), -18px, 0) scaleX(-1); }
          100% { transform: translate3d(-80px, 0, 0) scaleX(-1); }
        }
        @keyframes fishGlideLeft {
          0% { transform: translate3d(calc(100vw + 60px), 0, 0) scaleX(-1); }
          50% { transform: translate3d(-60px, -24px, 0) scaleX(-1); }
          50.01% { transform: translate3d(-60px, -24px, 0) scaleX(1); }
          100% { transform: translate3d(calc(100vw + 60px), 0, 0) scaleX(1); }
        }
        @keyframes bubbleRiseSlow {
          0% {
            transform: translateY(40px) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.65;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-360px) translateX(18px);
            opacity: 0;
          }
        }
        @keyframes bubbleRiseFast {
          0% {
            transform: translateY(30px) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          75% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-420px) translateX(-22px);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .underwater-animated {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* 1. Subtle Purple & Violet Ambient Underwater Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#201035]/60 via-[#180d28]/30 to-transparent pointer-events-none"
        style={{
          transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px, 0)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[320px] md:h-[420px] rounded-full blur-3xl pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8C4BFF]/25 via-[#E46BC5]/15 to-transparent"
        style={{
          transform: `translate3d(calc(-50% + ${mouseOffset.x * 12}px), ${mouseOffset.y * 8}px, 0)`,
        }}
      />

      {/* 2. Seabed subtle contour shapes */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-[120px] md:h-[160px] opacity-40 text-[#1f122e] pointer-events-none" 
        viewBox="0 0 1440 160" 
        preserveAspectRatio="none"
        style={{
          transform: `translate3d(${mouseOffset.x * 4}px, 0, 0)`,
        }}
      >
        <path 
          d="M0,160 L0,110 C180,90 320,130 520,105 C740,75 920,135 1160,100 C1300,80 1380,105 1440,115 L1440,160 Z" 
          fill="currentColor"
        />
        <path 
          d="M0,160 L0,130 C220,115 440,145 680,125 C920,105 1120,140 1440,128 L1440,160 Z" 
          fill="#140a1e" 
          fillOpacity="0.8"
        />
      </svg>

      {/* 3. Small Swimming Fish Silhouettes (Distant & Mid-depth) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Distant Fish 1 - Upper Left to Right (Very slow, soft lavender) */}
        <div 
          className="absolute top-[28%] left-0 underwater-animated"
          style={{
            animation: 'fishGlideRight 34s linear infinite',
            opacity: 0.32,
            transform: `translate3d(${mouseOffset.x * -8}px, ${mouseOffset.y * -4}px, 0)`
          }}
        >
          <svg width="44" height="20" viewBox="0 0 24 12" fill="none">
            <path d="M22 6C18 2 12 1 6 3L0 0V12L6 9C12 11 18 10 22 6Z" fill="#C084FC" />
          </svg>
        </div>

        {/* Distant Fish 2 - Mid Right to Left (Soft violet) */}
        <div 
          className="absolute top-[48%] left-0 underwater-animated hidden sm:block"
          style={{
            animation: 'fishGlideLeft 28s linear infinite 5s',
            opacity: 0.35,
            transform: `translate3d(${mouseOffset.x * -10}px, ${mouseOffset.y * -6}px, 0)`
          }}
        >
          <svg width="36" height="16" viewBox="0 0 24 12" fill="none">
            <path d="M22 6C18 2 12 1 6 3L0 0V12L6 9C12 11 18 10 22 6Z" fill="#A855F7" />
          </svg>
        </div>

        {/* Midground Fish 3 - Lower Left to Right (Small school duo) */}
        <div 
          className="absolute top-[62%] left-0 underwater-animated"
          style={{
            animation: 'fishGlideRight 24s linear infinite 12s',
            opacity: 0.48,
            transform: `translate3d(${mouseOffset.x * -14}px, ${mouseOffset.y * -8}px, 0)`
          }}
        >
          <div className="flex flex-col gap-3">
            <svg width="52" height="24" viewBox="0 0 24 12" fill="none">
              <path d="M22 6C18 2 12 1 6 3L0 0V12L6 9C12 11 18 10 22 6Z" fill="#E46BC5" />
            </svg>
            <svg width="32" height="14" viewBox="0 0 24 12" fill="none" className="ml-8 opacity-70">
              <path d="M22 6C18 2 12 1 6 3L0 0V12L6 9C12 11 18 10 22 6Z" fill="#C084FC" />
            </svg>
          </div>
        </div>

        {/* Distant Fish 4 - Lower Right to Left */}
        <div 
          className="absolute top-[72%] left-0 underwater-animated hidden md:block"
          style={{
            animation: 'fishGlideLeft 38s linear infinite 18s',
            opacity: 0.26,
          }}
        >
          <svg width="40" height="18" viewBox="0 0 24 12" fill="none">
            <path d="M22 6C18 2 12 1 6 3L0 0V12L6 9C12 11 18 10 22 6Z" fill="#9333EA" />
          </svg>
        </div>

      </div>

      {/* 4. Rising Translucent Bubbles (Scattered around octopus zone) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Left Bubbles */}
        <div 
          className="absolute left-[18%] md:left-[24%] bottom-10 underwater-animated"
          style={{ animation: 'bubbleRiseSlow 8.5s ease-in-out infinite 1s' }}
        >
          <div className="w-5 h-5 rounded-full border-2 border-[#E46BC5]/50 bg-[#C084FC]/10 shadow-[0_0_12px_rgba(228,107,197,0.35)]" />
        </div>

        <div 
          className="absolute left-[28%] md:left-[34%] bottom-16 underwater-animated hidden sm:block"
          style={{ animation: 'bubbleRiseFast 10.5s ease-in-out infinite 3.5s' }}
        >
          <div className="w-3 h-3 rounded-full border border-[#C084FC]/60 bg-white/15" />
        </div>

        {/* Center-Right Bubbles */}
        <div 
          className="absolute left-[62%] md:left-[66%] bottom-12 underwater-animated"
          style={{ animation: 'bubbleRiseSlow 9.5s ease-in-out infinite 2.2s' }}
        >
          <div className="w-6 h-6 rounded-full border-2 border-[#8C4BFF]/50 bg-[#8C4BFF]/15 shadow-[0_0_14px_rgba(140,75,255,0.35)]" />
        </div>

        <div 
          className="absolute left-[74%] md:left-[78%] bottom-14 underwater-animated hidden sm:block"
          style={{ animation: 'bubbleRiseFast 11.5s ease-in-out infinite 0.5s' }}
        >
          <div className="w-4 h-4 rounded-full border border-[#E46BC5]/45 bg-[#E46BC5]/10" />
        </div>

        <div 
          className="absolute left-[44%] bottom-8 underwater-animated hidden md:block"
          style={{ animation: 'bubbleRiseSlow 13s ease-in-out infinite 5s' }}
        >
          <div className="w-4 h-4 rounded-full border border-[#A855F7]/40 bg-white/10" />
        </div>

      </div>

      {/* 5. Sea Plants & Gently Curved Seaweed (Bottom Corners) */}
      {/* Left Corner Sea Plants */}
      <div 
        className="absolute bottom-[-10px] left-2 sm:left-6 md:left-12 flex items-end gap-2 opacity-65 md:opacity-80"
        style={{
          transform: `translate3d(${mouseOffset.x * 5}px, 0, 0)`,
        }}
      >
        {/* Tall curved seaweed strand */}
        <svg 
          width="96" 
          height="360" 
          viewBox="0 0 48 180" 
          fill="none" 
          className="origin-bottom underwater-animated"
          style={{ animation: 'swayGentleLeft 6.5s ease-in-out infinite' }}
        >
          <path 
            d="M24 180 C24 140 10 120 18 80 C26 40 14 20 22 0 C18 20 32 40 26 80 C20 120 30 140 24 180 Z" 
            fill="url(#leftPlantGrad1)" 
          />
          <defs>
            <linearGradient id="leftPlantGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3b1d5c" />
              <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Medium sea plant frond */}
        <svg 
          width="72" 
          height="260" 
          viewBox="0 0 36 130" 
          fill="none" 
          className="origin-bottom underwater-animated -ml-8"
          style={{ animation: 'swayGentleRight 5.2s ease-in-out infinite 0.8s' }}
        >
          <path 
            d="M18 130 C18 95 6 80 14 50 C20 25 10 10 16 0 C13 12 24 25 20 50 C14 80 22 95 18 130 Z" 
            fill="url(#leftPlantGrad2)" 
          />
          <defs>
            <linearGradient id="leftPlantGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2e104a" />
              <stop offset="70%" stopColor="#9333ea" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#e879f9" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small rounded coral / kelp sprout */}
        <svg 
          width="56" 
          height="150" 
          viewBox="0 0 28 75" 
          fill="none" 
          className="origin-bottom underwater-animated hidden sm:block -ml-4"
          style={{ animation: 'swaySlow 7.5s ease-in-out infinite 1.5s' }}
        >
          <path 
            d="M14 75 C14 55 4 45 10 25 C14 12 8 5 12 0 C10 6 18 12 16 25 C12 45 18 55 14 75 Z" 
            fill="#a855f7" 
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* Right Corner Sea Plants & Coral */}
      <div 
        className="absolute bottom-[-10px] right-2 sm:right-6 md:right-12 flex items-end gap-2 opacity-65 md:opacity-80"
        style={{
          transform: `translate3d(${mouseOffset.x * 5}px, 0, 0)`,
        }}
      >
        {/* Rounded Coral Bulb */}
        <svg 
          width="88" 
          height="170" 
          viewBox="0 0 44 85" 
          fill="none" 
          className="origin-bottom underwater-animated hidden sm:block -mr-4"
          style={{ animation: 'swaySlow 8s ease-in-out infinite 0.5s' }}
        >
          <path 
            d="M22 85 C14 65 6 50 8 30 C10 15 16 8 22 2 C28 8 34 15 36 30 C38 50 30 65 22 85 Z" 
            fill="url(#rightCoralGrad)" 
          />
          <defs>
            <linearGradient id="rightCoralGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#25103a" />
              <stop offset="60%" stopColor="#a21caf" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tall elegant right seaweed */}
        <svg 
          width="92" 
          height="330" 
          viewBox="0 0 46 165" 
          fill="none" 
          className="origin-bottom underwater-animated"
          style={{ animation: 'swayGentleRight 6.8s ease-in-out infinite 0.3s' }}
        >
          <path 
            d="M23 165 C23 125 35 105 27 70 C19 35 30 15 24 0 C27 15 15 35 21 70 C27 105 17 125 23 165 Z" 
            fill="url(#rightPlantGrad1)" 
          />
          <defs>
            <linearGradient id="rightPlantGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#31144f" />
              <stop offset="65%" stopColor="#8c4bff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#e46bc5" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Medium right seaweed */}
        <svg 
          width="64" 
          height="240" 
          viewBox="0 0 32 120" 
          fill="none" 
          className="origin-bottom underwater-animated -ml-6"
          style={{ animation: 'swayGentleLeft 5.8s ease-in-out infinite 1.2s' }}
        >
          <path 
            d="M16 120 C16 90 26 75 20 45 C14 20 22 8 18 0 C20 10 10 20 14 45 C18 75 12 90 16 120 Z" 
            fill="url(#rightPlantGrad2)" 
          />
          <defs>
            <linearGradient id="rightPlantGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#240c38" />
              <stop offset="70%" stopColor="#c084fc" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
}
