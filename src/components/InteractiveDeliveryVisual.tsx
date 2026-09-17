import { motion, useReducedMotion } from 'motion/react';

interface InteractiveDeliveryVisualProps {
  height?: number;
}

export default function InteractiveDeliveryVisual({ height = 120 }: InteractiveDeliveryVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x to match Steps 01 through 05
  const boundedHeight = Math.max(180, Math.min(height, 360));
  // Balanced aspect ratio (~1.48x) to comfortably frame the media doc, open folder, checkmark badge, cube & pearl
  const boundedWidth = Math.round(boundedHeight * 1.48);

  // Common spring transition matching the established pop physics
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
      aria-label="Interactive Final Delivery with media document, folder, and verification badge illustration"
    >
      {/* ============================================================
          1. SUBTLE DASHED TRAJECTORY / ORBIT PATH (Background Layer)
         ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-5 opacity-65">
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full">
          <path
            d="M 30 90 C 80 90, 85 110, 115 118 C 145 125, 230 115, 305 70"
            stroke="#C084FC"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ============================================================
          2. TOP-LEFT FLOATING ISOMETRIC PURPLE CUBE
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3.5, 3.5, -3.5],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[16%] left-[12%] z-12"
      >
        <motion.div
          whileHover={{
            scale: 1.22,
            y: -7,
            rotate: 4,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-10 sm:w-12 h-10 sm:h-12 cursor-pointer"
        >
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full drop-shadow-[0_10px_18px_rgba(109,40,217,0.32)]">
            <defs>
              <linearGradient id="delCubeTop" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.92" />
                <stop offset="60%" stopColor="#F5D0FE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="delCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#7E22CE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#581C87" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="delCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#9333EA" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.98" />
              </linearGradient>
            </defs>

            {/* Top Face */}
            <polygon
              points="25,6 45,16 25,26 5,16"
              fill="url(#delCubeTop)"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.2"
            />
            {/* Left Face */}
            <polygon
              points="5,16 25,26 25,44 5,34"
              fill="url(#delCubeLeft)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.2"
            />
            {/* Right Face */}
            <polygon
              points="25,26 45,16 45,34 25,44"
              fill="url(#delCubeRight)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.2"
            />
            <line x1="25" y1="6" x2="25" y2="26" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.75" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          3. FAR-RIGHT FLOATING PEARL SPHERE
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
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }
            : undefined
        }
        className="absolute top-[42%] right-[10%] z-12"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-6 sm:w-7 h-6 sm:h-7 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 30%, #F3E8FF 60%, #E9D5FF 85%, #C084FC 100%)',
            boxShadow: '0 8px 18px rgba(147, 51, 234, 0.25), inset -2px -2px 4px rgba(107, 33, 168, 0.4), inset 2px 2px 4px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular highlight */}
          <div className="absolute top-0.5 left-1 w-1.5 h-1 rounded-full bg-white blur-[0.25px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          4. 3D TRANSLUCENT OPEN FOLDER (Center-Right Layer)
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
                duration: 5.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }
            : undefined
        }
        className="absolute top-[14%] left-[44%] w-[46%] h-[68%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.07,
            y: -7,
            rotate: 2,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full relative cursor-pointer"
        >
          <svg viewBox="0 0 160 130" fill="none" className="w-full h-full drop-shadow-[0_18px_34px_rgba(140,75,255,0.18)]">
            <defs>
              {/* Back Folder Wall Gradient */}
              <linearGradient id="folderBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#EDE9FE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.88" />
              </linearGradient>

              {/* Front Folder Flap Gradient */}
              <linearGradient id="folderFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.94" />
                <stop offset="40%" stopColor="#F5F3FF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.88" />
              </linearGradient>
            </defs>

            {/* Back Wall with Folder Tab */}
            <path
              d="M 18 36 C 18 28, 22 24, 30 24 L 62 24 C 68 24, 72 29, 78 32 L 86 36 L 140 36 C 148 36, 154 42, 154 50 L 144 110 C 144 116, 138 122, 130 122 L 24 122 C 16 122, 12 116, 12 110 Z"
              fill="url(#folderBackGrad)"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.5"
            />

            {/* Subtle inner shadow between back wall and front flap */}
            <path
              d="M 22 42 L 142 42"
              stroke="#A855F7"
              strokeWidth="2"
              opacity="0.25"
            />

            {/* Front Open Flap (Tilted forward in 3D perspective) */}
            <path
              d="M 6 48 C 6 42, 12 38, 20 38 L 132 38 C 140 38, 146 44, 144 52 L 134 116 C 132 122, 126 126, 118 126 L 10 126 C 3 126, -1 120, 1 114 Z"
              fill="url(#folderFrontGrad)"
              stroke="rgba(255,255,255,0.98)"
              strokeWidth="1.5"
            />

            {/* Front Flap Specular Highlight Edge */}
            <path
              d="M 8 46 L 136 46"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Subtle inner glow / gradient */}
            <rect
              x="16"
              y="54"
              width="110"
              height="55"
              rx="12"
              fill="url(#folderBackGrad)"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          5. FROSTED GLASS VIDEO DOCUMENT (Left Foreground Card)
             With folded dog-ear corner, 3D play button & scrubber
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
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.1,
              }
            : undefined
        }
        className="absolute top-[18%] left-[15%] h-[66%] aspect-square z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: -3,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full aspect-square rounded-2xl sm:rounded-3xl p-3 sm:p-4 cursor-pointer backdrop-blur-md transition-shadow relative -rotate-2 flex flex-col justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 245, 255, 0.72) 45%, rgba(243, 232, 255, 0.85) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 18px 36px rgba(140, 75, 255, 0.18), 0 3px 10px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-2 right-8 h-3.5 rounded-t-2xl pointer-events-none opacity-55"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Dog-eared folded corner at top-right */}
          <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="dogEarGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DDD6FE" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              {/* Fold flap */}
              <polygon
                points="0,0 32,32 0,32"
                fill="url(#dogEarGrad)"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="1.2"
                className="drop-shadow-[0_2px_4px_rgba(109,40,217,0.18)]"
              />
            </svg>
          </div>

          {/* 3D Purple Play Button Icon */}
          <div className="my-auto flex justify-center pt-2">
            <svg viewBox="0 0 50 50" fill="none" className="w-12 sm:w-14 h-12 sm:h-14 drop-shadow-[0_8px_16px_rgba(140,75,255,0.38)]">
              <defs>
                <linearGradient id="delPlayBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="40%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6B21A8" />
                </linearGradient>
              </defs>
              <path
                d="M16 11 C16 9 18.5 7.8 20.2 8.9 L38.2 21.9 C39.8 23 39.8 25.5 38.2 26.6 L20.2 39.6 C18.5 40.7 16 39.5 16 37.5 Z"
                fill="url(#delPlayBtnGrad)"
              />
              <path
                d="M17 12 L36 24"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.65"
              />
            </svg>
          </div>

          {/* Video Timeline Scrubber Bar */}
          <div className="w-full mt-auto relative pt-1">
            <div className="w-full h-2 rounded-full bg-[#E9D5FF]/70 overflow-hidden relative">
              <div className="w-[38%] h-full rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7]" />
            </div>
            {/* Scrubber Playhead Bead */}
            <div 
              className="absolute top-0 left-[34%] w-3.5 h-3.5 -mt-0.5 rounded-full pointer-events-none"
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
          6. LARGE 3D GLOSSY PURPLE CHECKMARK BADGE (Foreground Bottom-Right)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3.5, 3, -3.5],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }
            : undefined
        }
        className="absolute bottom-[8%] right-[22%] z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            y: -8,
            rotate: 8,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-14 sm:w-16 h-14 sm:h-16 rounded-full cursor-pointer flex items-center justify-center drop-shadow-[0_14px_24px_rgba(109,40,217,0.4)]"
          style={{
            background: 'radial-gradient(circle at 35% 28%, #C084FC 0%, #A855F7 30%, #9333EA 60%, #7E22CE 85%, #581C87 100%)',
            boxShadow: 'inset 0 3px 6px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(59, 7, 100, 0.7)',
          }}
        >
          {/* Specular Crescent Highlight along top edge */}
          <div className="absolute top-1 left-2.5 w-8 h-2.5 rounded-full bg-white blur-[0.35px] opacity-80 pointer-events-none" />

          {/* 3D Thick White Checkmark */}
          <svg viewBox="0 0 24 24" fill="none" className="w-8 sm:w-9 h-8 sm:h-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <path
              d="M5.5 12.5 L9.5 16.5 L18.5 7.5"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
