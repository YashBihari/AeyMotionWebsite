import { motion } from 'motion/react';

// 1. Feature Spotlight Accent: Small frosted-glass feature tile with a violet cursor
export function FeatureSpotlightAccent() {
  return (
    <div className="h-12 w-full flex items-center justify-between relative overflow-visible mb-3">
      {/* Frosted glass feature tile */}
      <div className="relative flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-white/90 via-purple-50/60 to-pink-50/50 backdrop-blur-md border border-white/95 shadow-[0_4px_16px_-2px_rgba(140,75,255,0.12),0_1px_3px_rgba(0,0,0,0.04)]">
        {/* Miniature toggle/feature pill */}
        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#8C4BFF] to-[#C084FC] flex items-center justify-center shadow-xs">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        
        {/* Subtle feature preview lines */}
        <div className="flex flex-col gap-1 pr-1">
          <div className="w-14 h-1.5 rounded-full bg-gradient-to-r from-[#8C4BFF]/50 to-[#C084FC]/30" />
          <div className="w-9 h-1 rounded-full bg-neutral-200/80" />
        </div>

        {/* Small subtle active status dot */}
        <span className="relative flex h-1.5 w-1.5 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C4BFF] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8C4BFF]" />
        </span>
      </div>

      {/* Floating Violet Cursor */}
      <motion.div
        animate={{ 
          x: [0, 4, 0], 
          y: [0, -3, 0] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="relative -ml-3 -mt-3 z-10 filter drop-shadow-[0_4px_8px_rgba(140,75,255,0.35)]"
      >
        <svg 
          className="w-5 h-5" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cursor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C4BFF" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <path 
            d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z" 
            fill="url(#cursor-grad)" 
            stroke="#FFFFFF" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// 2. Product Launch Video Accent: Floating play button with a subtle curved motion trail
export function ProductLaunchAccent() {
  return (
    <div className="h-12 w-full flex items-center justify-between relative overflow-visible mb-3">
      {/* Curved motion trail SVG */}
      <div className="relative w-full h-full flex items-center">
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 160 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0" />
              <stop offset="40%" stopColor="#8C4BFF" stopOpacity="0.3" />
              <stop offset="85%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8C4BFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path 
            d="M 6 36 C 45 42, 70 12, 118 22" 
            stroke="url(#trail-grad)" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            strokeLinecap="round" 
          />
          {/* Subtle tiny motion particles */}
          <circle cx="50" cy="32" r="1.5" fill="#C084FC" opacity="0.6" />
          <circle cx="85" cy="18" r="1.5" fill="#EC4899" opacity="0.7" />
        </svg>

        {/* Floating Play Button */}
        <motion.div
          animate={{ 
            y: [0, -3.5, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 2.8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="relative ml-auto mr-1 z-10"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#8C4BFF] via-[#A855F7] to-[#EC4899] p-[1.5px] shadow-[0_8px_20px_-3px_rgba(140,75,255,0.4),0_2px_6px_rgba(236,72,153,0.2)]">
            <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center backdrop-blur-xs">
              <svg 
                className="w-4 h-4 text-white fill-white ml-0.5" 
                viewBox="0 0 24 24"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 3. Product Explainer Accent: Three connected glass panels suggesting a product workflow
export function ProductExplainerAccent() {
  return (
    <div className="h-12 w-full flex items-center justify-between relative overflow-visible mb-3">
      <div className="flex items-center gap-1.5 w-full">
        {/* Panel 1 (Step 1) */}
        <motion.div 
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex-1 py-1.5 px-2 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_12px_rgba(140,75,255,0.06)] flex flex-col gap-1 items-center justify-center"
        >
          <div className="w-3 h-3 rounded-md bg-[#8C4BFF]/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C4BFF]" />
          </div>
          <div className="w-full h-1 rounded-full bg-neutral-200/80" />
        </motion.div>

        {/* Connector Line 1 */}
        <div className="w-3 flex items-center justify-center shrink-0">
          <div className="w-full h-0.5 bg-gradient-to-r from-[#8C4BFF]/40 to-[#C084FC]/70 border-t border-dashed border-[#8C4BFF]" />
        </div>

        {/* Panel 2 (Step 2 - Active Target) */}
        <motion.div 
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.2, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-b from-white/95 to-purple-50/80 backdrop-blur-md border border-[#8C4BFF]/40 shadow-[0_6px_16px_rgba(140,75,255,0.15)] flex flex-col gap-1 items-center justify-center relative"
        >
          <div className="w-3 h-3 rounded-md bg-gradient-to-br from-[#8C4BFF] to-[#EC4899] flex items-center justify-center shadow-xs">
            <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="w-full h-1 rounded-full bg-[#8C4BFF]/40" />
        </motion.div>

        {/* Connector Line 2 */}
        <div className="w-3 flex items-center justify-center shrink-0">
          <div className="w-full h-0.5 bg-gradient-to-r from-[#C084FC]/70 to-[#EC4899]/50 border-t border-dashed border-[#C084FC]" />
        </div>

        {/* Panel 3 (Step 3 - Output) */}
        <motion.div 
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.2, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex-1 py-1.5 px-2 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_12px_rgba(140,75,255,0.06)] flex flex-col gap-1 items-center justify-center"
        >
          <div className="w-3 h-3 rounded-md bg-[#EC4899]/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
          </div>
          <div className="w-full h-1 rounded-full bg-neutral-200/80" />
        </motion.div>
      </div>
    </div>
  );
}
