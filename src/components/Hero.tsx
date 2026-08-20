import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Star, TrendingUp, Heart, ArrowUpRight, X } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleScrollToWork = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valueProps = [
    {
      icon: Play,
      titleTop: 'EXPLAIN',
      titleBottom: 'SIMPLY',
    },
    {
      icon: Star,
      titleTop: 'ENGAGE',
      titleBottom: 'VISUALLY',
    },
    {
      icon: TrendingUp,
      titleTop: 'CONVERT',
      titleBottom: 'FASTER',
    },
    {
      icon: Heart,
      titleTop: 'LEAVE',
      titleBottom: 'LASTING IMPACT',
    },
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-8 md:pt-28 md:pb-12 px-6 md:px-12 w-full overflow-hidden font-sans bg-transparent flex flex-col justify-center"
    >
      {/* Dynamic Background: Ambient Glows & Flowing Dashed Wave Lines */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
        }}
      >
        
        {/* Soft Lavender / Pink Ambient Radial Glows */}
        <div className="absolute -top-24 right-[-5%] w-[65vw] max-w-[850px] h-[65vw] max-h-[850px] rounded-full bg-gradient-to-br from-[#8C4BFF]/20 via-[#C084FC]/25 to-[#F472B6]/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-[-10%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-gradient-to-tr from-[#9333EA]/15 via-[#E879F9]/20 to-[#FDE047]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-[25%] w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-gradient-to-tl from-[#C084FC]/20 via-[#F472B6]/15 to-transparent blur-[100px] pointer-events-none" />

        {/* Subtle dot/grid matrix texture */}
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(rgba(140, 75, 255, 0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Sweeping Dashed Motion Wave Lines */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-60" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="hero-line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8C4BFF" stopOpacity="0.15" />
              <stop offset="30%" stopColor="#8C4BFF" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#C084FC" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F472B6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="hero-line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#7E22CE" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Primary Top Wave Curve */}
          <path 
            d="M -60,180 C 320,80 620,380 980,160 S 1320,190 1560,90" 
            fill="none" 
            stroke="url(#hero-line-gradient-1)" 
            strokeWidth="2" 
            strokeDasharray="6 7"
          />

          {/* Secondary Sweeping Curve */}
          <path 
            d="M -40,360 C 280,290 620,110 940,290 S 1300,100 1540,240" 
            fill="none" 
            stroke="url(#hero-line-gradient-2)" 
            strokeWidth="1.75" 
            strokeDasharray="5 7"
            opacity="0.7"
          />

          {/* Lower Horizon Curve */}
          <path 
            d="M -100,560 C 350,480 680,680 1100,520 S 1420,600 1600,490" 
            fill="none" 
            stroke="url(#hero-line-gradient-1)" 
            strokeWidth="1.5" 
            strokeDasharray="4 6"
            opacity="0.45"
          />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Typography, Value Pillars, CTAs, Studio Logo */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 md:space-y-8">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-md border border-purple-200/90 rounded-full shadow-xs w-fit"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C4BFF] animate-pulse shadow-[0_0_8px_#8C4BFF]" />
            <span className="text-[10.5px] sm:text-xs font-mono uppercase tracking-widest text-neutral-800 font-bold">
              MOTION STUDIO FOR AI, SAAS & TECHNOLOGY
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase tracking-tight text-[#121217] leading-[1.03]">
              YOUR PRODUCT IS COMPLEX.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase tracking-tight leading-[1.03] text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#BA63F8] to-[#E585AF]">
              YOUR STORY SHOULDN'T BE.
            </h2>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl text-balance"
          >
            We create premium motion design that helps AI, SaaS, and technology companies explain products, launch ideas, and communicate what they’re building.
          </motion.p>

          {/* 4 Value Pillars (Horizontal Row) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1"
          >
            {valueProps.map((prop, idx) => {
              const IconComponent = prop.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.04,
                    transition: { type: 'spring', stiffness: 500, damping: 22 }
                  }}
                  className="flex items-center gap-2.5 p-2.5 sm:p-2 bg-white/80 backdrop-blur-md rounded-xl border border-purple-100/90 shadow-xs hover:shadow-lg hover:shadow-[#8C4BFF]/15 hover:border-[#8C4BFF]/60 hover:bg-white transition-[border-color,box-shadow,background-color] duration-200 group cursor-pointer select-none"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8C4BFF] to-[#A855F7] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(140,75,255,0.28)] group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-4 h-4 text-white fill-white/20" />
                  </div>
                  <div className="flex flex-col leading-tight min-w-0">
                    <span className="text-[11px] font-sans font-bold tracking-tight text-[#8C4BFF] uppercase truncate">
                      {prop.titleTop}
                    </span>
                    <span className="text-[11px] font-sans font-bold tracking-tight text-neutral-900 uppercase truncate group-hover:text-[#8C4BFF] transition-colors duration-200">
                      {prop.titleBottom}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={onBookCall}
              className="px-7 py-4 bg-[#8C4BFF] hover:bg-[#7828E8] text-white text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 rounded-xl inline-flex items-center gap-2 shadow-[0_6px_20px_rgba(140,75,255,0.35)] hover:shadow-[0_8px_25px_rgba(140,75,255,0.45)] hover:scale-[1.02] cursor-pointer"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#work"
              onClick={handleScrollToWork}
              className="px-7 py-4 bg-white/90 hover:bg-white border border-purple-200 hover:border-neutral-900 text-neutral-900 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 rounded-xl inline-flex items-center gap-2 shadow-xs hover:shadow-sm"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Stage / Pedestal Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]"
        >
          {/* Circular Stage Composition Container */}
          <div className="relative w-full max-w-[540px] h-[460px] sm:h-[500px] flex items-center justify-center select-none -translate-y-8 sm:-translate-y-12 lg:-translate-y-14">

            {/* ============================================================
                BACKGROUND SCENE: CONTOURS & FLOWING DASHED LINES
               ============================================================ */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {/* Soft Ambient Radial Lighting behind composition */}
              <div className="absolute top-1/4 left-1/4 w-[360px] h-[360px] bg-gradient-to-tr from-[#C084FC]/30 via-[#F472B6]/25 to-[#E879F9]/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[420px] h-[160px] bg-gradient-to-r from-[#9333EA]/35 via-[#E879F9]/40 to-[#F472B6]/30 rounded-full blur-[60px]" />

              {/* Topographic organic background contours */}
              <svg viewBox="0 0 540 500" className="absolute inset-0 w-full h-full opacity-65 overflow-visible">
                <defs>
                  <linearGradient id="scene-contour-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#F5D0FE" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FCE7F3" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="dashed-curve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#C084FC" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Soft backdrop terrain curve */}
                <path
                  d="M 100,280 C 140,240 220,250 280,180 C 340,110 440,140 520,220 C 560,260 520,380 460,420"
                  fill="none"
                  stroke="url(#scene-contour-grad-1)"
                  strokeWidth="1.5"
                />

                {/* Dashed flowing orbit line swooping through scene */}
                <path
                  d="M -20,300 C 60,270 90,360 180,365 C 270,370 380,340 480,280 S 550,290 580,290"
                  fill="none"
                  stroke="url(#dashed-curve-grad)"
                  strokeWidth="1.6"
                  strokeDasharray="4 5"
                />
                
                {/* Upper dashed loop */}
                <path
                  d="M 60,60 C 140,40 180,90 260,70"
                  fill="none"
                  stroke="url(#dashed-curve-grad)"
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* ============================================================
                1. 3D ROUND PEDESTAL / DISC BASE
               ============================================================ */}
            <motion.div 
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[360px] sm:w-[420px] h-[130px] sm:h-[150px] z-10 cursor-pointer"
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: 20,
                rotateX: -8,
                rotateZ: 3,
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 14 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Floor Contact Deep Cast Shadow */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[94%] h-16 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.45) 0%, rgba(147, 51, 234, 0.22) 55%, transparent 75%)',
                  filter: 'blur(12px)'
                }}
              />

              {/* Cylindrical Base SVG with Precision 3D Shading */}
              <svg viewBox="0 0 420 150" className="w-full h-full overflow-visible drop-shadow-[0_16px_32px_rgba(147,51,234,0.25)] transition-all duration-300">
                <defs>
                  {/* Top Ellipse Gradient (Lavender-Rose Pastel with peach-pink highlight) */}
                  <linearGradient id="pedestal-top-exact" x1="20%" y1="10%" x2="85%" y2="90%">
                    <stop offset="0%" stopColor="#F5E8FF" />
                    <stop offset="30%" stopColor="#FCE7F3" />
                    <stop offset="70%" stopColor="#FBCFE8" />
                    <stop offset="100%" stopColor="#F9A8D4" />
                  </linearGradient>

                  {/* Top Bevel Specular Rim Light */}
                  <linearGradient id="pedestal-rim-exact" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="25%" stopColor="#EDE9FE" stopOpacity="0.8" />
                    <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FBCFE8" stopOpacity="0.75" />
                  </linearGradient>

                  {/* Cylinder Wall Curved Extrusion Gradient */}
                  <linearGradient id="pedestal-wall-exact" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#B37AF8" />
                    <stop offset="25%" stopColor="#A855F7" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="75%" stopColor="#E879F9" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>

                {/* Cylinder Wall Body */}
                <path
                  d="M 12,58 C 12,98 100,132 210,132 C 320,132 408,98 408,58 L 408,90 C 408,130 320,164 210,164 C 100,164 12,130 12,90 Z"
                  fill="url(#pedestal-wall-exact)"
                />

                {/* Cylinder Wall Bottom Highlight */}
                <path
                  d="M 12,90 C 12,130 100,164 210,164 C 320,164 408,130 408,90"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.8"
                />

                {/* Pedestal Top Face Ellipse */}
                <ellipse
                  cx="210"
                  cy="58"
                  rx="198"
                  ry="48"
                  fill="url(#pedestal-top-exact)"
                  stroke="url(#pedestal-rim-exact)"
                  strokeWidth="2.5"
                />

                {/* Inner Bevel Specular Ring */}
                <ellipse
                  cx="210"
                  cy="58"
                  rx="184"
                  ry="42"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="1.2"
                  opacity="0.85"
                />
              </svg>
            </motion.div>

            {/* ============================================================
                2. LARGE GLOSSY IRIDESCENT SPHERE (Resting on Right of Stage)
               ============================================================ */}
            <div className="absolute bottom-22 sm:bottom-26 right-10 sm:right-16 z-30">
              {/* Sphere Contact Shadow on Pedestal Surface */}
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-10 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(107, 33, 168, 0.8) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 75%)',
                  filter: 'blur(7px)'
                }}
              />

              {/* Large Glossy Sphere Graphic */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.85}
                dragTransition={{ bounceStiffness: 550, bounceDamping: 13 }}
                animate={{
                  y: [0, -5, 0],
                }}
                whileHover={{
                  scale: 1.15,
                  y: -12,
                  transition: { type: "spring", stiffness: 450, damping: 14 }
                }}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 60,
                  cursor: "grabbing"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
                style={{
                  background: 'radial-gradient(circle at 38% 30%, #FFFFFF 0%, #FDF4FF 12%, #F5D0FE 28%, #E879F9 48%, #C084FC 68%, #A855F7 86%, #7E22CE 100%)',
                  boxShadow: '0 26px 50px rgba(147, 51, 234, 0.45), inset -14px -18px 30px rgba(88, 28, 135, 0.75), inset 10px 12px 22px rgba(255, 255, 255, 0.95)'
                }}
              >
                {/* Primary Crescent Specular Highlight */}
                <div 
                  className="absolute top-4 left-8 w-18 h-11 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.6) 45%, transparent 75%)',
                    transform: 'rotate(-28deg)',
                    filter: 'blur(0.8px)'
                  }}
                />

                {/* Secondary Sharp Specular Pinpoint */}
                <div className="absolute top-9 left-16 w-4.5 h-3 rounded-full bg-white blur-[0.4px] pointer-events-none" />

                {/* Bottom-Right Translucent Refraction Glow */}
                <div 
                  className="absolute bottom-3 right-7 w-24 h-14 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(244, 114, 182, 0.7) 0%, rgba(232, 121, 249, 0.35) 55%, transparent 80%)',
                    transform: 'rotate(20deg)',
                    filter: 'blur(3px)'
                  }}
                />
              </motion.div>
            </div>

            {/* ============================================================
                3. SMALL FLOATING PEARL / ORB (Far Right)
               ============================================================ */}
            <motion.div
              drag
              dragSnapToOrigin
              dragElastic={0.9}
              dragTransition={{ bounceStiffness: 650, bounceDamping: 12 }}
              animate={{
                y: [0, -7, 0],
              }}
              whileHover={{
                scale: 1.3,
                y: -14,
                transition: { type: "spring", stiffness: 500, damping: 12 }
              }}
              whileDrag={{
                scale: 1.35,
                zIndex: 60,
                cursor: "grabbing"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
              className="absolute top-[50%] -right-2 sm:right-2 w-10 sm:w-12 h-10 sm:h-12 rounded-full z-20 cursor-grab active:cursor-grabbing select-none"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 25%, #F3E8FF 55%, #D8B4FE 80%, #A855F7 100%)',
                boxShadow: '0 12px 28px rgba(147, 51, 234, 0.35), inset -3px -4px 8px rgba(107, 33, 168, 0.6), inset 3px 3px 6px rgba(255, 255, 255, 0.95)'
              }}
            >
              {/* Highlight */}
              <div className="absolute top-2 left-2.5 w-4 h-2.5 rounded-full bg-white blur-[0.4px] -rotate-15 pointer-events-none" />
            </motion.div>

            {/* ============================================================
                4. 3D ISOMETRIC PURPLE CUBE (Bottom Left Floor)
               ============================================================ */}
            <div className="absolute bottom-12 sm:bottom-16 left-3 sm:left-6 z-25">
              {/* Cube Contact Shadow */}
              <div 
                className="absolute bottom-0 left-2 w-20 sm:w-24 h-9 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(107, 33, 168, 0.65) 0%, rgba(147, 51, 234, 0.25) 50%, transparent 75%)',
                  filter: 'blur(6px)',
                  transform: 'skewX(-20deg)'
                }}
              />

              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.85}
                dragTransition={{ bounceStiffness: 550, bounceDamping: 13 }}
                animate={{
                  y: [0, -5, 0],
                }}
                whileHover={{
                  scale: 1.2,
                  y: -12,
                  rotate: -4,
                  transition: { type: "spring", stiffness: 450, damping: 14 }
                }}
                whileDrag={{
                  scale: 1.25,
                  rotate: 10,
                  zIndex: 60,
                  cursor: "grabbing"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  y: {
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }
                }}
                className="relative cursor-grab active:cursor-grabbing select-none"
              >
                <svg viewBox="0 0 100 110" className="w-18 sm:w-22 h-22 sm:h-26 overflow-visible drop-shadow-[0_14px_28px_rgba(107,33,168,0.38)]">
                  <defs>
                    {/* Top Face Gradient */}
                    <linearGradient id="cube-top-exact" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F3E8FF" />
                      <stop offset="45%" stopColor="#E9D5FF" />
                      <stop offset="100%" stopColor="#D8B4FE" />
                    </linearGradient>

                    {/* Left Face Gradient */}
                    <linearGradient id="cube-left-exact" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B37AF8" />
                      <stop offset="50%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#7E22CE" />
                    </linearGradient>

                    {/* Right Face Gradient */}
                    <linearGradient id="cube-right-exact" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7E22CE" />
                      <stop offset="60%" stopColor="#6B21A8" />
                      <stop offset="100%" stopColor="#581C87" />
                    </linearGradient>
                  </defs>

                  {/* Left Face */}
                  <polygon
                    points="8,30 50,54 50,98 8,74"
                    fill="url(#cube-left-exact)"
                  />

                  {/* Right Face */}
                  <polygon
                    points="50,54 92,30 92,74 50,98"
                    fill="url(#cube-right-exact)"
                  />

                  {/* Top Face */}
                  <polygon
                    points="50,6 92,30 50,54 8,30"
                    fill="url(#cube-top-exact)"
                    stroke="rgba(255, 255, 255, 0.75)"
                    strokeWidth="1.2"
                  />

                  {/* Edge Bevel Highlight Lines */}
                  <line x1="50" y1="6" x2="50" y2="54" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="1.6" />
                  <line x1="8" y1="30" x2="50" y2="54" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />
                  <line x1="92" y1="30" x2="50" y2="54" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" />
                </svg>
              </motion.div>
            </div>

            {/* ============================================================
                5. GLASS UI CARD (TOP RIGHT): 3 EMBOSSED HORIZONTAL BARS
               ============================================================ */}
            <motion.div
              drag
              dragSnapToOrigin
              dragElastic={0.8}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 14 }}
              animate={{
                y: [0, -9, 0],
                rotate: [0, -1, 0]
              }}
              whileHover={{
                scale: 1.1,
                y: -16,
                rotate: 2,
                transition: { type: "spring", stiffness: 400, damping: 14 }
              }}
              whileDrag={{
                scale: 1.15,
                rotate: 5,
                zIndex: 60,
                cursor: "grabbing"
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                },
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
              className="absolute top-2 sm:top-6 right-4 sm:right-8 z-35 cursor-grab active:cursor-grabbing select-none"
            >
              <div 
                className="w-48 sm:w-60 p-4 sm:p-5 rounded-3xl backdrop-blur-2xl transition-all duration-300 group hover:shadow-[0_30px_60px_rgba(147,51,234,0.35)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(245, 235, 255, 0.45) 50%, rgba(253, 242, 248, 0.6) 100%)',
                  border: '2.5px solid rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 24px 50px rgba(147, 51, 234, 0.22), inset 0 2px 8px rgba(255, 255, 255, 0.95), inset 0 -2px 6px rgba(192, 132, 252, 0.3)'
                }}
              >
                {/* 3 Horizontal 3D Pill Bars (Matching Reference Exact Proportions) */}
                <div className="space-y-3">
                  {/* Top Bar (Medium-Short) */}
                  <div 
                    className="h-3 sm:h-3.5 w-24 sm:w-32 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #A855F7 0%, #C084FC 60%, #E879F9 100%)',
                      boxShadow: '0 3px 8px rgba(168, 85, 247, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.85), inset 0 -1px 2px rgba(126, 34, 206, 0.45)'
                    }}
                  />
                  {/* Middle Bar (Longest) */}
                  <div 
                    className="h-3 sm:h-3.5 w-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #9333EA 0%, #A855F7 50%, #D8B4FE 100%)',
                      boxShadow: '0 3px 8px rgba(147, 51, 234, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.85), inset 0 -1px 2px rgba(107, 33, 168, 0.45)'
                    }}
                  />
                  {/* Bottom Bar (Medium) */}
                  <div 
                    className="h-3 sm:h-3.5 w-28 sm:w-36 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #A855F7 0%, #C084FC 70%, #F472B6 100%)',
                      boxShadow: '0 3px 8px rgba(168, 85, 247, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.85), inset 0 -1px 2px rgba(126, 34, 206, 0.45)'
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* ============================================================
                6. LAYERED GLASS CARDS (LEFT): BACK CARD & FRONT PLAY CARD
               ============================================================ */}
            {/* Back Stacked Translucent Glass Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-6, -4, -6]
              }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }}
              className="absolute top-14 sm:top-18 left-14 sm:left-20 z-20 pointer-events-none"
            >
              <div 
                className="w-44 sm:w-52 h-32 sm:h-36 rounded-3xl backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(233, 213, 255, 0.35) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.75)',
                  boxShadow: '0 16px 40px rgba(147, 51, 234, 0.16)'
                }}
              />
            </motion.div>

            {/* Front Angled Glass Video Play Card */}
            <motion.div
              drag
              dragSnapToOrigin
              dragElastic={0.8}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 14 }}
              animate={{
                y: [0, -12, 0],
                rotate: [-10, -7, -10]
              }}
              whileHover={{
                scale: 1.12,
                y: -18,
                rotate: -4,
                transition: { type: "spring", stiffness: 450, damping: 14 }
              }}
              whileDrag={{
                scale: 1.18,
                rotate: -12,
                zIndex: 60,
                cursor: "grabbing"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: {
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                },
                rotate: {
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }
              }}
              className="absolute top-18 sm:top-22 left-2 sm:left-6 z-25 cursor-grab active:cursor-grabbing group select-none"
            >
              <div 
                className="w-52 sm:w-60 h-34 sm:h-38 rounded-3xl p-4 flex items-center justify-center backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_32px_60px_rgba(147,51,234,0.38)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(245, 208, 254, 0.5) 50%, rgba(233, 213, 255, 0.65) 100%)',
                  border: '2.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 26px 52px rgba(147, 51, 234, 0.28), inset 0 2px 10px rgba(255, 255, 255, 0.95), inset 0 -2px 8px rgba(192, 132, 252, 0.4)'
                }}
              >
                {/* 3D Purple Triangular Play Button */}
                <div className="relative group-hover:scale-120 transition-transform duration-300">
                  <svg viewBox="0 0 60 60" className="w-14 sm:w-16 h-14 sm:h-16 overflow-visible drop-shadow-[0_8px_18px_rgba(107,33,168,0.48)]">
                    <defs>
                      <linearGradient id="play-3d-exact" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A855F7" />
                        <stop offset="45%" stopColor="#8C4BFF" />
                        <stop offset="100%" stopColor="#6D28D9" />
                      </linearGradient>
                      <linearGradient id="play-rim-exact" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    {/* Triangle Play Body with Rounded Corners */}
                    <path
                      d="M 18,12 C 18,9.5 20.8,8 23,9.2 L 48,24.2 C 50.2,25.5 50.2,28.5 48,29.8 L 23,44.8 C 20.8,46 18,44.5 18,42 Z"
                      fill="url(#play-3d-exact)"
                    />
                    
                    {/* Top Specular Rim */}
                    <path
                      d="M 19,13 L 47,27"
                      stroke="url(#play-rim-exact)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* ============================================================
                7. FOREGROUND GLASS TREND GRAPH CARD (CENTER-LEFT)
               ============================================================ */}
            <motion.div
              drag
              dragSnapToOrigin
              dragElastic={0.85}
              dragTransition={{ bounceStiffness: 550, bounceDamping: 14 }}
              animate={{
                y: [0, -7, 0],
                rotate: [3, 1, 3]
              }}
              whileHover={{
                scale: 1.15,
                y: -14,
                rotate: 0,
                transition: { type: "spring", stiffness: 450, damping: 14 }
              }}
              whileDrag={{
                scale: 1.2,
                rotate: 6,
                zIndex: 60,
                cursor: "grabbing"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: {
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                },
                rotate: {
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }
              }}
              className="absolute bottom-16 sm:bottom-20 left-22 sm:left-28 z-35 cursor-grab active:cursor-grabbing group select-none"
            >
              <div 
                className="w-42 sm:w-50 h-26 sm:h-30 p-3 rounded-2xl flex items-center justify-center backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_28px_56px_rgba(147,51,234,0.36)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(243, 232, 255, 0.55) 100%)',
                  border: '2.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 22px 48px rgba(147, 51, 234, 0.28), inset 0 2px 8px rgba(255, 255, 255, 0.95)'
                }}
              >
                {/* 3D Curved Wave Graph Line with Upward Arrow Point */}
                <svg viewBox="0 0 130 65" className="w-full h-full overflow-visible drop-shadow-[0_6px_16px_rgba(107,33,168,0.35)]">
                  <defs>
                    {/* Main Tube Gradient */}
                    <linearGradient id="trend-tube-exact" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6B21A8" />
                      <stop offset="35%" stopColor="#7E22CE" />
                      <stop offset="70%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>

                    {/* Tube Specular Highlight */}
                    <linearGradient id="trend-highlight-exact" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#F5D0FE" stopOpacity="0.8" />
                    </linearGradient>

                    {/* Start Anchor Sphere Gradient */}
                    <radialGradient id="anchor-sphere-exact" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="25%" stopColor="#D8B4FE" />
                      <stop offset="60%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#581C87" />
                    </radialGradient>

                    {/* Arrow 3D Head Gradient */}
                    <linearGradient id="arrow-3d-exact" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#7E22CE" />
                      <stop offset="60%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>

                  {/* 1. Deep Ambient Drop Shadow under curve */}
                  <path
                    d="M 18,48 C 32,48 40,30 52,30 C 64,30 72,42 84,42 C 94,42 102,26 110,16"
                    fill="none"
                    stroke="rgba(88, 28, 135, 0.35)"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                    className="blur-[2px]"
                  />

                  {/* 2. Main 3D Solid Body Tube */}
                  <path
                    d="M 18,46 C 32,46 40,28 52,28 C 64,28 72,40 84,40 C 94,40 102,24 110,14"
                    fill="none"
                    stroke="url(#trend-tube-exact)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />

                  {/* 3. Top Specular Ridge Line */}
                  <path
                    d="M 19,44.8 C 32,44.8 40,26.8 52,26.8 C 64,26.8 72,38.8 84,38.8 C 94,38.8 101,23 108,13"
                    fill="none"
                    stroke="url(#trend-highlight-exact)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0.85"
                  />

                  {/* 4. Origin 3D Sphere Anchor */}
                  <circle 
                    cx="18" 
                    cy="46" 
                    r="5.5" 
                    fill="url(#anchor-sphere-exact)" 
                  />
                  <circle cx="16.5" cy="44.2" r="1.6" fill="white" opacity="0.9" />

                  {/* 5. Perfectly Aligned 3D Arrowhead at Apex */}
                  <g transform="translate(110, 14) rotate(-52)">
                    {/* Arrow Drop Shadow */}
                    <path
                      d="M -2,-7 L 14,0 L -2,7 L 0,0 Z"
                      fill="rgba(88, 28, 135, 0.4)"
                      className="blur-[1px]"
                      transform="translate(1, 2)"
                    />
                    {/* Main Arrow Body */}
                    <path
                      d="M -2,-7 L 14,0 L -2,7 L 1,0 Z"
                      fill="url(#arrow-3d-exact)"
                      stroke="rgba(255, 255, 255, 0.7)"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                    {/* Top Ridge Specular Highlight */}
                    <path
                      d="M -1,-5 L 12,0"
                      stroke="rgba(255, 255, 255, 0.9)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Showreel Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoModalOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/20"
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#8C4BFF] transition-all flex items-center justify-center z-30"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe 
                src="https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Aeymotion Showreel"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
