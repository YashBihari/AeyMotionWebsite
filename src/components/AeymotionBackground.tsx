import React from 'react';

interface AeymotionBackgroundProps {
  variant?: 'hero' | 'work' | 'services' | 'problems' | 'process' | 'why' | 'about' | 'cta';
  isHovered?: boolean;
}

export default function AeymotionBackground({ variant = 'hero', isHovered = false }: AeymotionBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-[#FAF9F5]">
      
      {/* 1. Refined Editorial Grid Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.12]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(140, 75, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(140, 75, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 2. Soft Grain / Noise Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply" xmlns="http://www.w3.org/2000/svg">
        <filter id="aey-grain-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aey-grain-light)" />
      </svg>

      {/* 3. Aeymotion Signature Glowing Gradient Orbs */}
      {variant === 'hero' && (
        <>
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[65%] bg-gradient-to-br from-[#8C4BFF]/40 via-[#B98FD4]/35 to-[#F2A979]/30 rounded-full blur-[100px] shadow-[0_0_120px_rgba(140,75,255,0.4)]" />
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[55%] bg-gradient-to-tr from-[#F2A979]/35 via-[#B98FD4]/30 to-[#8C4BFF]/30 rounded-full blur-[110px] shadow-[0_0_100px_rgba(242,169,121,0.35)]" />
          <div className="absolute bottom-[5%] right-[10%] w-[45%] h-[50%] bg-gradient-to-tl from-[#8C4BFF]/35 via-[#D9A6B4]/30 to-[#F2A979]/25 rounded-full blur-[100px]" />
        </>
      )}

      {variant === 'work' && (
        <>
          <div className="absolute top-[10%] left-[5%] w-[55%] h-[50%] bg-gradient-to-r from-[#8C4BFF]/35 via-[#B98FD4]/30 to-[#F2A979]/25 rounded-full blur-[100px] shadow-[0_0_100px_rgba(140,75,255,0.3)]" />
          <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[55%] bg-gradient-to-l from-[#F2A979]/35 via-[#B98FD4]/30 to-[#8C4BFF]/30 rounded-full blur-[110px] shadow-[0_0_100px_rgba(242,169,121,0.3)]" />
        </>
      )}

      {variant === 'services' && (
        <>
          <div className="absolute top-[15%] right-[10%] w-[55%] h-[55%] bg-gradient-to-bl from-[#B98FD4]/35 via-[#8C4BFF]/35 to-[#F2A979]/25 rounded-full blur-[100px] shadow-[0_0_100px_rgba(185,143,212,0.3)]" />
          <div className="absolute bottom-[10%] left-[5%] w-[50%] h-[50%] bg-gradient-to-tr from-[#8C4BFF]/35 via-[#F2A979]/30 to-[#B98FD4]/25 rounded-full blur-[110px]" />
        </>
      )}

      {variant === 'problems' && (
        <>
          <div className="absolute top-[15%] left-[15%] w-[50%] h-[50%] bg-gradient-to-br from-[#F2A979]/35 via-[#B98FD4]/30 to-[#8C4BFF]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[15%] right-[15%] w-[48%] h-[48%] bg-gradient-to-tl from-[#8C4BFF]/35 via-[#D9A6B4]/30 to-[#F2A979]/30 rounded-full blur-[100px]" />
        </>
      )}

      {variant === 'process' && (
        <>
          <div className="absolute top-[15%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-r from-[#8C4BFF]/35 via-[#B98FD4]/30 to-[#F2A979]/30 rounded-full blur-[110px]" />
          <div className="absolute bottom-[15%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-l from-[#F2A979]/35 via-[#8C4BFF]/30 to-[#B98FD4]/30 rounded-full blur-[110px]" />
        </>
      )}

      {variant === 'why' && (
        <>
          <div className="absolute top-[10%] right-[5%] w-[45%] h-[45%] bg-gradient-to-bl from-[#B98FD4]/35 via-[#8C4BFF]/30 to-[#F2A979]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[45%] bg-gradient-to-tr from-[#8C4BFF]/35 via-[#F2A979]/30 to-[#B98FD4]/25 rounded-full blur-[100px]" />
        </>
      )}

      {variant === 'about' && (
        <>
          <div className="absolute top-[15%] left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-[#F2A979]/35 via-[#B98FD4]/30 to-[#8C4BFF]/35 rounded-full blur-[100px] shadow-[0_0_90px_rgba(242,169,121,0.3)]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-[#8C4BFF]/40 via-[#B98FD4]/30 to-[#F2A979]/25 rounded-full blur-[110px] shadow-[0_0_90px_rgba(140,75,255,0.35)]" />
        </>
      )}

      {variant === 'cta' && (
        <>
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[75%] h-[65%] bg-gradient-to-r from-[#8C4BFF]/40 via-[#B98FD4]/35 to-[#F2A979]/35 rounded-full blur-[110px] shadow-[0_0_120px_rgba(140,75,255,0.4)]" />
        </>
      )}

      {/* 4. Vibrant Glowing Vector Lines in SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.35]" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aey-light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C4BFF" />
            <stop offset="50%" stopColor="#B98FD4" />
            <stop offset="100%" stopColor="#F2A979" />
          </linearGradient>
          <filter id="aey-line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path 
          d="M -50,150 C 300,50 600,450 1100,200 S 1500,400 1900,250" 
          fill="none" 
          stroke="url(#aey-light-grad)" 
          strokeWidth="2.5" 
          strokeDasharray="10 8"
          filter="url(#aey-line-glow)"
        />
        <path 
          d="M -100,350 C 400,250 700,50 1200,300 S 1600,150 2000,380" 
          fill="none" 
          stroke="url(#aey-light-grad)" 
          strokeWidth="1.5" 
          opacity="0.6"
          filter="url(#aey-line-glow)"
        />
      </svg>
    </div>
  );
}
