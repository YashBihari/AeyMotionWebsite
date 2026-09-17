import { motion, useReducedMotion } from 'motion/react';

interface InteractiveScriptVisualProps {
  height?: number;
}

export default function InteractiveScriptVisual({ height = 120 }: InteractiveScriptVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x to match Step 01
  const boundedHeight = Math.max(180, Math.min(height, 360));
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
      aria-label="Interactive Script and Storyboard illustration elements"
    >
      {/* ============================================================
          1. TOP-LEFT CURVED PURPLE NOODLE / RIBBON
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
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[8%] left-[8%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            y: -6,
            rotate: -4,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-14 sm:w-16 h-8 sm:h-9 cursor-pointer"
        >
          <svg viewBox="0 0 70 40" fill="none" className="w-full h-full drop-shadow-[0_6px_10px_rgba(147,51,234,0.22)]">
            <defs>
              <linearGradient id="noodleTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#6B21A8" />
              </linearGradient>
            </defs>
            <path
              d="M8 28 C18 6, 42 38, 62 12"
              stroke="url(#noodleTopGrad)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Specular highlight along noodle spine */}
            <path
              d="M10 26 C19 8, 41 36, 58 14"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          2. TOP-RIGHT FLOATING SPHERE
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
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }
            : undefined
        }
        className="absolute top-[10%] right-[30%] z-15"
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
          <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          3. 3D TRANSLUCENT PURPLE CUBE (Left)
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
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }
            : undefined
        }
        className="absolute top-[34%] left-[4%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.18,
            y: -7,
            rotate: 3,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-12 sm:w-14 h-12 sm:h-14 cursor-pointer"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-[0_10px_16px_rgba(109,40,217,0.25)]">
            <defs>
              <linearGradient id="cubeTop" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.88" />
              </linearGradient>
              <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.92" />
              </linearGradient>
            </defs>

            {/* Top Face */}
            <polygon
              points="30,8 54,20 30,32 6,20"
              fill="url(#cubeTop)"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.5"
            />

            {/* Left Face */}
            <polygon
              points="6,20 30,32 30,54 6,42"
              fill="url(#cubeLeft)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
            />

            {/* Right Face */}
            <polygon
              points="30,32 54,20 54,42 30,54"
              fill="url(#cubeRight)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
            />

            {/* Inner Light Reflection Line */}
            <line x1="30" y1="8" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.65" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          4. FROSTED GLASS SCRIPT / DOCUMENT (Center)
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
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }
            : undefined
        }
        className="absolute top-[8%] left-[28%] w-[42%] min-w-[125px] h-[78%] z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.07,
            y: -7,
            rotate: -1,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full rounded-2xl p-3.5 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.75) 50%, rgba(243, 232, 255, 0.82) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 36px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top-Right Dog-Ear Fold */}
          <div 
            className="absolute top-0 right-0 w-7 h-7 pointer-events-none"
            style={{
              background: 'linear-gradient(225deg, transparent 50%, rgba(255, 255, 255, 0.95) 50%, rgba(233, 213, 255, 0.85) 100%)',
              borderBottomLeftRadius: '8px',
              boxShadow: '-2px 2px 4px rgba(140, 75, 255, 0.12)',
            }}
          />

          {/* Top Specular Sheen */}
          <div 
            className="absolute top-0 left-0 right-8 h-3.5 pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          <div className="pt-2 sm:pt-3 space-y-2.5 sm:space-y-3">
            {/* Script Line 1 */}
            <div className="w-[50%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Script Line 2 (Longer) */}
            <div className="w-[82%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Script Line 3 (with Magenta accent tip) */}
            <div className="w-[64%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] via-[#A855F7] to-[#EC4899] shadow-2xs" />
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          5. 3D PURPLE PEN / STYLUS (Right Foreground)
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
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }
            : undefined
        }
        className="absolute top-[22%] right-[12%] w-12 sm:w-14 h-32 sm:h-36 z-30"
      >
        <motion.div
          whileHover={{
            scale: 1.14,
            y: -9,
            rotate: -42,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-full h-full cursor-pointer origin-bottom-left drop-shadow-[0_14px_24px_rgba(109,40,217,0.34)]"
          style={{
            transform: 'rotate(-38deg)',
          }}
        >
          <svg viewBox="0 0 50 140" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="penBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="35%" stopColor="#9333EA" />
                <stop offset="80%" stopColor="#7E22CE" />
                <stop offset="100%" stopColor="#581C87" />
              </linearGradient>
              <linearGradient id="penCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D8B4FE" />
                <stop offset="40%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6B21A8" />
              </linearGradient>
              <linearGradient id="penTipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#4C1D95" />
              </linearGradient>
            </defs>

            {/* Pen Cap Dome (Top) */}
            <path
              d="M14 26 C14 12, 36 12, 36 26 L36 34 L14 34 Z"
              fill="url(#penCapGrad)"
            />

            {/* Pen Clip */}
            <path
              d="M34 22 C37 22, 41 24, 41 29 L41 52 C41 55, 38 56, 35 55"
              stroke="url(#penCapGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* White Metallic Ring 1 */}
            <rect x="13.5" y="34" width="23" height="4" rx="1.5" fill="#FFFFFF" opacity="0.9" />

            {/* Pen Main Barrel */}
            <rect x="14" y="38" width="22" height="52" rx="4" fill="url(#penBodyGrad)" />

            {/* Longitudinal Specular Highlight */}
            <rect x="18" y="38" width="4" height="50" rx="2" fill="#FFFFFF" opacity="0.38" />

            {/* White Ring 2 */}
            <rect x="14.5" y="90" width="21" height="3" rx="1" fill="#FFFFFF" opacity="0.85" />

            {/* Tapered Grip Cone */}
            <path
              d="M15 93 L35 93 L28 122 L22 122 Z"
              fill="url(#penTipGrad)"
            />

            {/* Nib Tip */}
            <polygon points="22,122 28,122 25,130" fill="#3B0764" />
            {/* Nib Highlight */}
            <circle cx="25" cy="128" r="1" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          6. BOTTOM-LEFT FLOATING SPHERE
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
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }
            : undefined
        }
        className="absolute bottom-[8%] left-[18%] z-15"
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
          <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          7. BOTTOM-RIGHT CURVED NOODLE / ACCENT
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
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }
            : undefined
        }
        className="absolute bottom-[10%] right-[18%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            y: -6,
            rotate: 3,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-14 sm:w-16 h-8 sm:h-9 cursor-pointer"
        >
          <svg viewBox="0 0 70 40" fill="none" className="w-full h-full drop-shadow-[0_6px_10px_rgba(236,72,153,0.22)]">
            <defs>
              <linearGradient id="noodleBottomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="60%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
            <path
              d="M10 26 C28 32, 48 24, 60 14"
              stroke="url(#noodleBottomGrad)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Specular highlight */}
            <path
              d="M12 25 C28 30, 46 23, 56 15"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
