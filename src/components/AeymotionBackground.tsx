import React from 'react';

interface AeymotionBackgroundProps {
  variant?: 'hero' | 'work' | 'services' | 'problems' | 'process' | 'why' | 'about' | 'cta';
  isHovered?: boolean;
}

export default function AeymotionBackground({ variant = 'hero', isHovered = false }: AeymotionBackgroundProps) {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-transparent"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      
      {/* 1. Subtle Dot Matrix Texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.22]" 
        style={{
          backgroundImage: 'radial-gradient(rgba(140, 75, 255, 0.16) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Soft Ambient Lavender & Pink Glow Spots */}
      {variant === 'work' && (
        <>
          <div className="absolute top-[5%] left-[-5%] w-[55vw] max-w-[650px] h-[55vw] max-h-[650px] rounded-full bg-gradient-to-br from-[#8C4BFF]/18 via-[#C084FC]/20 to-[#F472B6]/15 blur-[120px]" />
          <div className="absolute bottom-[5%] right-[-5%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-tl from-[#9333EA]/15 via-[#E879F9]/18 to-transparent blur-[110px]" />
        </>
      )}

      {variant === 'services' && (
        <>
          <div className="absolute top-[10%] right-[-5%] w-[55vw] max-w-[650px] h-[55vw] max-h-[650px] rounded-full bg-gradient-to-bl from-[#C084FC]/22 via-[#8C4BFF]/18 to-[#F472B6]/15 blur-[120px]" />
          <div className="absolute bottom-[5%] left-[-5%] w-[50vw] max-w-[550px] h-[50vw] max-h-[550px] rounded-full bg-gradient-to-tr from-[#8C4BFF]/20 via-[#F472B6]/15 to-transparent blur-[110px]" />
        </>
      )}

      {variant === 'problems' && (
        <>
          <div className="absolute top-[10%] left-[10%] w-[50vw] max-w-[550px] h-[50vw] max-h-[550px] rounded-full bg-gradient-to-br from-[#E879F9]/18 via-[#C084FC]/18 to-[#8C4BFF]/15 blur-[110px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] rounded-full bg-gradient-to-tl from-[#8C4BFF]/18 via-[#F472B6]/15 to-transparent blur-[100px]" />
        </>
      )}

      {variant === 'process' && (
        <>
          <div className="absolute top-[10%] left-[-5%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-r from-[#8C4BFF]/18 via-[#C084FC]/18 to-[#F472B6]/15 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-l from-[#F472B6]/15 via-[#8C4BFF]/18 to-[#C084FC]/15 blur-[120px]" />
        </>
      )}

      {variant === 'why' && (
        <>
          <div className="absolute top-[10%] right-[5%] w-[45vw] max-w-[550px] h-[45vw] max-h-[550px] rounded-full bg-gradient-to-bl from-[#C084FC]/20 via-[#8C4BFF]/16 to-[#F472B6]/15 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[45vw] max-w-[550px] h-[45vw] max-h-[550px] rounded-full bg-gradient-to-tr from-[#8C4BFF]/18 via-[#F472B6]/15 to-[#C084FC]/15 blur-[100px]" />
        </>
      )}

      {variant === 'about' && (
        <>
          <div className="absolute top-[10%] left-[15%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-br from-[#8C4BFF]/20 via-[#C084FC]/20 to-[#F472B6]/15 blur-[110px]" />
          <div className="absolute bottom-[10%] right-[15%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-tl from-[#8C4BFF]/22 via-[#E879F9]/18 to-transparent blur-[110px]" />
        </>
      )}

      {/* 3. Violet/Lilac Dashed Wave Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-40" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        <defs>
          <linearGradient id={`aey-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C4BFF" stopOpacity="0.15" />
            <stop offset="30%" stopColor="#8C4BFF" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#C084FC" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <path 
          d="M -50,180 C 300,80 650,420 1100,160 S 1400,320 1600,190" 
          fill="none" 
          stroke={`url(#aey-grad-${variant})`} 
          strokeWidth="2" 
          strokeDasharray="6 7"
        />
        <path 
          d="M -80,380 C 350,280 700,100 1150,280 S 1450,120 1650,300" 
          fill="none" 
          stroke={`url(#aey-grad-${variant})`} 
          strokeWidth="1.5" 
          strokeDasharray="5 7"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
