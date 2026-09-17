import { motion, useReducedMotion } from 'motion/react';

interface InteractiveDiscoveryCallVisualProps {
  height?: number;
}

export default function InteractiveDiscoveryCallVisual({ height = 120 }: InteractiveDiscoveryCallVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x as requested
  const boundedHeight = Math.max(180, Math.min(height, 360));
  // Width calculated to maintain comfortable aspect ratio
  const boundedWidth = Math.round(boundedHeight * 1.34);

  // Common spring transition matching Hero section pop physics
  const springTransition = {
    type: 'spring' as const,
    stiffness: 450,
    damping: 14,
  };

  return (
    <div
      style={{
        height: `${boundedHeight}px`,
        width: `${boundedWidth}px`,
      }}
      className="relative select-none mx-auto md:mx-0 shrink-0"
      aria-label="Interactive Discovery Call illustration elements"
    >
      {/* ============================================================
          1. FLOATING SPHERE (Top-Left)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3, 3, -3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[14%] left-[4%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 25%, #F3E8FF 55%, #D8B4FE 80%, #A855F7 100%)',
            boxShadow: '0 8px 18px rgba(147, 51, 234, 0.28), inset -2px -3px 5px rgba(107, 33, 168, 0.5), inset 2px 2px 4px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular Glint */}
          <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          2. BACK CHAT BUBBLE (Top-Right)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [3, -4, 3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }
            : undefined
        }
        className="absolute top-[6%] right-[8%] w-[48%] min-w-[130px] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: 1.5,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full rounded-2xl p-3 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(250, 245, 255, 0.65) 60%, rgba(243, 232, 255, 0.72) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 12px 26px rgba(140, 75, 255, 0.12), 0 2px 6px rgba(255, 255, 255, 0.9) inset',
          }}
        >
          {/* Specular sheen curve at the top */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3 rounded-t-xl pointer-events-none opacity-40"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), transparent)'
            }}
          />

          {/* Message Line 1 (Purple Pill) */}
          <div className="w-[82%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] mb-2 sm:mb-2.5 shadow-2xs" />
          
          {/* Message Line 2 (Purple to Magenta Accent Pill) */}
          <div className="w-[58%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] via-[#A855F7] to-[#EC4899] shadow-2xs" />

          {/* Speech tail at bottom right */}
          <div 
            className="absolute -bottom-2 right-6 w-3.5 h-3.5 rotate-45 pointer-events-none"
            style={{
              background: 'rgba(243, 232, 255, 0.75)',
              borderRight: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderBottom: '1.5px solid rgba(255, 255, 255, 0.95)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ============================================================
          3. FRONT CHAT BUBBLE (Middle-Left)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-4, 3, -4],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }
            : undefined
        }
        className="absolute bottom-[16%] left-[6%] w-[55%] min-w-[145px] z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: -1.5,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full rounded-2xl p-3 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(250, 245, 255, 0.72) 50%, rgba(243, 232, 255, 0.8) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 32px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Specular sheen curve at the top */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3.5 rounded-t-xl pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Message Line 1 */}
          <div className="w-[45%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] mb-2 sm:mb-2.5 shadow-2xs" />

          {/* Message Line 2 (Longer) */}
          <div className="w-[84%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] mb-2 sm:mb-2.5 shadow-2xs" />

          {/* Message Line 3 (with Magenta accent tip) */}
          <div className="w-[62%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] via-[#A855F7] to-[#EC4899] shadow-2xs" />

          {/* Speech tail at bottom left */}
          <div 
            className="absolute -bottom-2 left-6 w-3.5 h-3.5 rotate-45 pointer-events-none"
            style={{
              background: 'rgba(243, 232, 255, 0.8)',
              borderRight: '1.5px solid rgba(255, 255, 255, 0.98)',
              borderBottom: '1.5px solid rgba(255, 255, 255, 0.98)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ============================================================
          4. 3D PURPLE VIDEO CAMERA (Bottom-Right)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [3, -4, 3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }
            : undefined
        }
        className="absolute bottom-[6%] right-[16%] z-30"
      >
        <motion.div
          whileHover={{
            scale: 1.15,
            y: -9,
            rotate: -2.5,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center cursor-pointer drop-shadow-[0_12px_22px_rgba(109,40,217,0.32)]"
        >
          {/* Camera Main Body (Rounded 3D block) */}
          <div 
            className="relative w-14 sm:w-16 h-10 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #C084FC 0%, #9333EA 40%, #6B21A8 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.65), inset 0 -3px 6px rgba(46, 16, 101, 0.5)',
            }}
          >
            {/* Top specular highlight strip */}
            <div className="absolute top-1 left-2 right-2 h-1.5 rounded-full bg-white/50 blur-[0.4px]" />
            
            {/* Subtle diagonal reflection shine */}
            <div 
              className="absolute -inset-1 opacity-25 pointer-events-none"
              style={{
                background: 'linear-gradient(60deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)'
              }}
            />
          </div>

          {/* Camera Lens Cone (Trapezoid) */}
          <div 
            className="relative -ml-0.5 w-5 sm:w-6 h-7 sm:h-8"
            style={{
              clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 75%)',
              background: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 55%, #581C87 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Lens edge highlight */}
            <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/40" />
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          5. FLOATING SPHERE (Bottom-Right)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3, 4, -3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.9,
              }
            : undefined
        }
        className="absolute bottom-[20%] right-[3%] z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FCE7F3 30%, #F472B6 70%, #BE185D 100%)',
            boxShadow: '0 8px 18px rgba(190, 24, 93, 0.28), inset -2px -3px 5px rgba(136, 19, 55, 0.5), inset 2px 2px 4px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular Glint */}
          <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}
