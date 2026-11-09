import React from 'react';

interface AeymotionBackgroundProps {
  variant?: 'hero' | 'work' | 'services' | 'problems' | 'process' | 'why' | 'about' | 'cta' | 'faq' | 'booking';
  isHovered?: boolean;
}

export default function AeymotionBackground({ variant = 'hero', isHovered = false }: AeymotionBackgroundProps) {
  const maskStyle = variant === 'about'
    ? {
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 100%)'
      }
    : {
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
      };

  return (
    <div 
      aria-hidden="true"
      className="aey-edge-mask absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
    >
      <div className="absolute inset-0" style={maskStyle}>
      {/* 1. Subtle Dot Matrix Texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.22]" 
        style={{
          backgroundImage: 'radial-gradient(rgba(140, 75, 255, 0.16) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

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
    </div>
  );
}
