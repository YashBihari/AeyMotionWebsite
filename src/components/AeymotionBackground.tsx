import React from 'react';
import { motion } from 'motion/react';

interface AeymotionBackgroundProps {
  variant?: 'hero' | 'work' | 'services' | 'pricing' | 'process' | 'cta';
}

export default function AeymotionBackground({ variant = 'hero' }: AeymotionBackgroundProps) {
  // Configured opacities and visibility multipliers
  const glowOpacityClass = "opacity-[0.45]"; // Boosted for high visibility
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-[#050507]">
      
      {/* 1. Subtle Editorial Grid Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 2. Premium SVG Noise / Grain Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="aey-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.07 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aey-grain)" />
      </svg>

      {/* 3. Variant-Specific Blurred Glow Blobs */}
      {variant === 'hero' && (
        <>
          {/* Main Hero ambient system */}
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-gradient-to-bl from-[#8B5CF6]/35 via-[#4C1D95]/15 to-transparent rounded-full blur-[140px] opacity-100" />
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] bg-[#38BDF8]/20 rounded-full blur-[150px] opacity-100" />
          <div className="absolute bottom-[10%] right-[15%] w-[45%] h-[50%] bg-[#F59E7B]/15 rounded-full blur-[130px] opacity-100" />
        </>
      )}

      {variant === 'work' && (
        <>
          {/* Selected Work visual layers */}
          <div className="absolute top-[15%] left-[5%] w-[55%] h-[50%] bg-[#24180F]/45 rounded-full blur-[130px]" />
          <div className="absolute bottom-[20%] right-[5%] w-[50%] h-[55%] bg-[#1A102B]/45 rounded-full blur-[140px]" />
          <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] bg-[#8B5CF6]/12 rounded-full blur-[120px]" />
        </>
      )}

      {variant === 'services' && (
        <>
          {/* Services/WhyUs ambient layers */}
          <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-[#0D1B2E]/50 rounded-full blur-[130px]" />
          <div className="absolute bottom-[15%] left-[5%] w-[55%] h-[50%] bg-[#1A102B]/45 rounded-full blur-[145px]" />
          <div className="absolute top-[35%] left-[30%] w-[300px] h-[300px] bg-[#38BDF8]/12 rounded-full blur-[110px]" />
        </>
      )}

      {variant === 'pricing' && (
        <>
          {/* Pricing premium layers */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[65%] h-[55%] bg-gradient-to-b from-[#8B5CF6]/25 via-[#4C1D95]/10 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-[#F59E7B]/12 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] bg-[#34D399]/10 rounded-full blur-[110px]" />
        </>
      )}

      {variant === 'process' && (
        <>
          {/* Process step visual tracks */}
          <div className="absolute top-[25%] left-[-5%] w-[45%] h-[45%] bg-[#1A102B]/50 rounded-full blur-[130px]" />
          <div className="absolute bottom-[25%] right-[-5%] w-[45%] h-[45%] bg-[#0D211B]/45 rounded-full blur-[130px]" />
          <div className="absolute top-[50%] left-[35%] w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[140px]" />
        </>
      )}

      {variant === 'cta' && (
        <>
          {/* Strong final CTA glow */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[75%] h-[60%] bg-gradient-to-r from-[#8B5CF6]/30 via-[#38BDF8]/20 to-[#F59E7B]/15 rounded-full blur-[140px] opacity-90" />
          <div className="absolute -bottom-10 left-[20%] w-[400px] h-[400px] bg-[#4C1D95]/20 rounded-full blur-[120px]" />
        </>
      )}

      {/* 4. SVG Kinetic DNA Timeline Ribbon / Curves / Handles */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.24]" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aey-dna-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E7B" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="aey-dna-grad-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* --- HERO VARIANT SVG DNA --- */}
        {variant === 'hero' && (
          <>
            {/* Timeline track lanes (faint coordinate lines) */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="0" y1="48%" x2="100%" y2="48%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="6 6" />

            {/* Bezier Curves */}
            <path 
              d="M -100,200 C 300,100 500,500 900,300 S 1300,550 1800,320" 
              fill="none" 
              stroke="url(#aey-dna-grad-primary)" 
              strokeWidth="2" 
              strokeDasharray="10 6"
            />
            <path 
              d="M -100,230 C 320,130 520,530 920,330 S 1320,580 1820,350" 
              fill="none" 
              stroke="rgba(255,255,255,0.08)" 
              strokeWidth="1" 
            />

            {/* AE Tangent Handles visual */}
            <circle cx="400" cy="220" r="4" fill="#8B5CF6" />
            <line x1="400" y1="220" x2="480" y2="150" stroke="#8B5CF6" strokeWidth="1.2" />
            <circle cx="480" cy="150" r="5" fill="#F59E7B" />

            <circle cx="1100" cy="380" r="4" fill="#38BDF8" />
            <line x1="1100" y1="380" x2="1020" y2="440" stroke="#38BDF8" strokeWidth="1.2" />
            <circle cx="1020" cy="440" r="5" fill="#8B5CF6" />

            {/* Keyframe Nodes (Diamond structures) */}
            <g transform="translate(620, 290) rotate(45)">
              <rect x="-5" y="-5" width="10" height="10" fill="#38BDF8" stroke="#ffffff" strokeWidth="1" />
            </g>
            <g transform="translate(1350, 420) rotate(45)">
              <rect x="-5" y="-5" width="10" height="10" fill="#F59E7B" stroke="#ffffff" strokeWidth="1" />
            </g>

            {/* Grid Frame Boxes with labels */}
            <rect x="150" y="80" width="12" height="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="156" y1="74" x2="156" y2="98" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="144" y1="86" x2="168" y2="86" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </>
        )}

        {/* --- WORK VARIANT SVG DNA --- */}
        {variant === 'work' && (
          <>
            {/* Horizontal system track grids */}
            <line x1="5%" y1="15%" x2="95%" y2="15%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="5%" y1="85%" x2="95%" y2="85%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

            {/* Soft waveform kinetic line representing timeline velocity */}
            <path 
              d="M 50,220 Q 300,50 600,250 T 1150,150" 
              fill="none" 
              stroke="url(#aey-dna-grad-secondary)" 
              strokeWidth="1.5" 
            />

            {/* Timeline ticks */}
            <line x1="20%" y1="13%" x2="20%" y2="17%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="40%" y1="13%" x2="40%" y2="17%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="60%" y1="13%" x2="60%" y2="17%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="80%" y1="13%" x2="80%" y2="17%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Diamond Keyframes at intervals */}
            <g transform="translate(480, 150) rotate(45)">
              <rect x="-4" y="-4" width="8" height="8" fill="#8B5CF6" />
            </g>
            <g transform="translate(900, 200) rotate(45)">
              <rect x="-4" y="-4" width="8" height="8" fill="#F59E7B" />
            </g>
          </>
        )}

        {/* --- SERVICES VARIANT SVG DNA --- */}
        {variant === 'services' && (
          <>
            {/* Tech spline graph */}
            <path 
              d="M 100,450 C 400,450 300,100 650,200 S 900,400 1200,100" 
              fill="none" 
              stroke="rgba(255,255,255,0.06)" 
              strokeWidth="1.5" 
            />
            <path 
              d="M 100,450 C 400,450 300,100 650,200 S 900,400 1200,100" 
              fill="none" 
              stroke="#38BDF8" 
              strokeWidth="1.5" 
              strokeDasharray="6 6"
            />
            {/* Control handles and vectors */}
            <line x1="650" y1="200" x2="600" y2="120" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="600" cy="120" r="4" fill="#38BDF8" />
            <line x1="650" y1="200" x2="700" y2="280" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="700" cy="280" r="4" fill="#8B5CF6" />
          </>
        )}

        {/* --- PRICING VARIANT SVG DNA --- */}
        {variant === 'pricing' && (
          <>
            {/* Vertical grid lines behind cards */}
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="10 8" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

            {/* Slanted motion-path speed lines crossing behind prices */}
            <line x1="-100" y1="300" x2="1600" y2="700" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
            <line x1="-100" y1="350" x2="1600" y2="750" stroke="url(#aey-dna-grad-primary)" strokeWidth="1" strokeOpacity="0.4" />

            {/* keyframe markers */}
            <g transform="translate(375, 420) rotate(45)">
              <rect x="-4" y="-4" width="8" height="8" fill="#8B5CF6" />
            </g>
            <g transform="translate(1125, 600) rotate(45)">
              <rect x="-4" y="-4" width="8" height="8" fill="#34D399" />
            </g>
          </>
        )}

        {/* --- PROCESS VARIANT SVG DNA --- */}
        {variant === 'process' && (
          <>
            {/* Connect step indicators horizontally */}
            <path 
              d="M 100,300 Q 350,150 600,320 T 1100,250 T 1400,280" 
              fill="none" 
              stroke="url(#aey-dna-grad-secondary)" 
              strokeWidth="2" 
              strokeDasharray="8 4"
            />
            {/* Horizontal timeline markers */}
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </>
        )}

        {/* --- CTA VARIANT SVG DNA --- */}
        {variant === 'cta' && (
          <>
            {/* Concentric radar grids centered on CTA card */}
            <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.2" strokeDasharray="12 8" />
            <circle cx="50%" cy="50%" r="500" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

            {/* Converging timeline axes */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#aey-dna-grad-primary)" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

            {/* Keyframe intersection points */}
            <g transform="translate(500, 350) rotate(45)">
              <rect x="-4" y="-4" width="8" height="8" fill="#8B5CF6" />
            </g>
          </>
        )}
      </svg>

      {/* 5. Additional Monospaced Ticker Code Overlays */}
      <div className="absolute top-4 left-6 font-mono text-[7px] text-neutral-500/50 hidden md:block select-none">
        RENDER_ENGINE_ACTIVE // GPS_COORD_05
      </div>
      <div className="absolute bottom-4 right-6 font-mono text-[7px] text-neutral-500/50 hidden md:block select-none">
        STABLE_BUILD_2026 // AEYMOTION_DNA
      </div>
    </div>
  );
}
