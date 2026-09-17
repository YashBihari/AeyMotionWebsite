import { motion, useReducedMotion } from 'motion/react';

interface InteractiveReviewVisualProps {
  height?: number;
}

export default function InteractiveReviewVisual({ height = 120 }: InteractiveReviewVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x to match Steps 01, 02, 03 & 04
  const boundedHeight = Math.max(180, Math.min(height, 360));
  // Comfortable aspect ratio (~1.48x) to arrange video screen, comment bubble, circular revision arrow & badges
  const boundedWidth = Math.round(boundedHeight * 1.48);

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
      aria-label="Interactive Review and Revisions feedback illustration"
    >
      {/* ============================================================
          1. TOP CENTER FLOATING PEARL SPHERE
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
        className="absolute top-[6%] left-[42%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 25%, #F3E8FF 55%, #D8B4FE 80%, #A855F7 100%)',
            boxShadow: '0 8px 16px rgba(147, 51, 234, 0.28), inset -2px -2px 4px rgba(107, 33, 168, 0.5), inset 2px 2px 3px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular glint */}
          <div className="absolute top-0.5 left-1 w-1.5 h-0.8 rounded-full bg-white blur-[0.25px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          2. BOTTOM RIGHT FLOATING PINK SPHERE
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [3, -3.5, 3],
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
        className="absolute bottom-[10%] right-[18%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FCE7F3 30%, #F472B6 70%, #BE185D 100%)',
            boxShadow: '0 8px 16px rgba(190, 24, 93, 0.28), inset -2px -2px 4px rgba(136, 19, 55, 0.5), inset 2px 2px 3px rgba(255, 255, 255, 0.95)',
          }}
        >
          <div className="absolute top-0.5 left-1 w-1.5 h-0.8 rounded-full bg-white blur-[0.25px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          3. LEFT FROSTED GLASS VIDEO SCREEN (Tilted slightly CCW)
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
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }
            : undefined
        }
        className="absolute top-[16%] left-[4%] w-[48%] h-[62%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full rounded-2xl sm:rounded-3xl p-3 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative -rotate-4 flex flex-col justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.72) 50%, rgba(243, 232, 255, 0.82) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 34px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3.5 rounded-t-2xl pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* 3D Purple Play Button Icon */}
          <div className="my-auto flex justify-center">
            <svg viewBox="0 0 50 50" fill="none" className="w-10 sm:w-12 h-10 sm:h-12 drop-shadow-[0_6px_12px_rgba(140,75,255,0.35)]">
              <defs>
                <linearGradient id="revPlayBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="40%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6B21A8" />
                </linearGradient>
              </defs>
              <path
                d="M16 11 C16 9 18.5 7.8 20.2 8.9 L38.2 21.9 C39.8 23 39.8 25.5 38.2 26.6 L20.2 39.6 C18.5 40.7 16 39.5 16 37.5 Z"
                fill="url(#revPlayBtnGrad)"
              />
              <path
                d="M17 12 L36 24"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Video Timeline Scrubber Bar */}
          <div className="w-full mt-auto relative pt-1">
            <div className="w-full h-2 rounded-full bg-[#E9D5FF]/70 overflow-hidden relative">
              {/* Progress fill */}
              <div className="w-[45%] h-full rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7]" />
            </div>
            {/* Scrubber Playhead Bead */}
            <div 
              className="absolute top-0 left-[42%] w-3.5 h-3.5 -mt-0.5 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 30%, #E9D5FF 65%, #C084FC 100%)',
                boxShadow: '0 2px 6px rgba(147, 51, 234, 0.4)',
              }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white blur-[0.2px]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          4. RIGHT FROSTED GLASS SPEECH BUBBLE (Review / Feedback)
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
                delay: 0.4,
              }
            : undefined
        }
        className="absolute top-[8%] right-[4%] w-[48%] h-[58%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: 2,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative flex flex-col justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.75) 50%, rgba(243, 232, 255, 0.85) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 36px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-3 right-3 h-3.5 rounded-t-2xl pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Feedback message lines */}
          <div className="space-y-2 sm:space-y-2.5">
            {/* Line 1 */}
            <div className="w-[68%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Line 2 (Longest) */}
            <div className="w-[90%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Line 3 (with Magenta accent tip) */}
            <div className="w-[74%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] via-[#A855F7] to-[#EC4899] shadow-2xs" />
          </div>

          {/* Speech bubble tail at bottom-left corner */}
          <div 
            className="absolute -bottom-2.5 left-6 w-4 h-4 rotate-45 pointer-events-none"
            style={{
              background: 'rgba(243, 232, 255, 0.82)',
              borderRight: '1.5px solid rgba(255, 255, 255, 0.98)',
              borderBottom: '1.5px solid rgba(255, 255, 255, 0.98)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ============================================================
          5. 3D GLOSSY PURPLE CIRCULAR REFRESH / REVISION ARROW
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [2.5, -3, 2.5],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }
            : undefined
        }
        className="absolute bottom-[6%] left-[42%] w-[26%] h-[40%] z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.18,
            y: -7,
            rotate: 15,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-full h-full cursor-pointer flex items-center justify-center drop-shadow-[0_12px_22px_rgba(109,40,217,0.38)]"
        >
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <defs>
              {/* Torus Gradient */}
              <linearGradient id="torusGrad" x1="10%" y1="10%" x2="90%" y2="90%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="25%" stopColor="#A855F7" />
                <stop offset="65%" stopColor="#9333EA" />
                <stop offset="85%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              {/* Arrowhead Gradient */}
              <linearGradient id="arrowHeadGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7E22CE" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#D8B4FE" />
              </linearGradient>
            </defs>

            {/* Glowing outer circular track path (~300 degrees) */}
            <path
              d="M 58 26 A 26 26 0 1 0 58 56"
              stroke="url(#torusGrad)"
              strokeWidth="11"
              strokeLinecap="round"
            />

            {/* Specular highlight along the torus spine */}
            <path
              d="M 56 28 A 24 24 0 1 0 54 54"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.65"
            />

            {/* Inner shadow/dark bevel line */}
            <path
              d="M 52 24 A 20 20 0 1 0 46 60"
              stroke="#4C1D95"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* 3D Arrowhead pointing northeast */}
            <polygon
              points="58,10 74,32 50,30"
              fill="url(#arrowHeadGrad)"
            />

            {/* Arrowhead ridge highlight */}
            <line x1="58" y1="10" x2="62" y2="31" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.8" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          6. 3D CHECKMARK BADGE 1 (Bottom Left, under Video Card)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3, 3.5, -3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }
            : undefined
        }
        className="absolute bottom-[16%] left-[26%] z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.25,
            y: -6,
            rotate: -8,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-7 sm:w-8 h-7 sm:h-8 rounded-full cursor-pointer flex items-center justify-center drop-shadow-[0_8px_16px_rgba(109,40,217,0.32)]"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #C084FC 0%, #A855F7 35%, #7E22CE 75%, #581C87 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.7), inset 0 -2px 4px rgba(59, 7, 100, 0.6)',
          }}
        >
          {/* Specular crescent */}
          <div className="absolute top-0.5 left-1.5 w-3 h-1 rounded-full bg-white blur-[0.25px] opacity-75" />

          {/* White checkmark */}
          <svg viewBox="0 0 20 20" fill="none" className="w-3.5 sm:w-4 h-3.5 sm:h-4">
            <path
              d="M5 10.5 L8.5 14 L15 6"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          7. 3D CHECKMARK BADGE 2 (Right, under Speech Bubble)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [3, -3, 3],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7,
              }
            : undefined
        }
        className="absolute bottom-[24%] right-[14%] z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.25,
            y: -6,
            rotate: 8,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-7 sm:w-8 h-7 sm:h-8 rounded-full cursor-pointer flex items-center justify-center drop-shadow-[0_8px_16px_rgba(109,40,217,0.32)]"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #C084FC 0%, #A855F7 35%, #7E22CE 75%, #581C87 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.7), inset 0 -2px 4px rgba(59, 7, 100, 0.6)',
          }}
        >
          {/* Specular crescent */}
          <div className="absolute top-0.5 left-1.5 w-3 h-1 rounded-full bg-white blur-[0.25px] opacity-75" />

          {/* White checkmark */}
          <svg viewBox="0 0 20 20" fill="none" className="w-3.5 sm:w-4 h-3.5 sm:h-4">
            <path
              d="M5 10.5 L8.5 14 L15 6"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
