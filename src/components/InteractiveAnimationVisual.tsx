import { motion, useReducedMotion } from 'motion/react';

interface InteractiveAnimationVisualProps {
  height?: number;
}

export default function InteractiveAnimationVisual({ height = 120 }: InteractiveAnimationVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x to match Steps 01, 02 & 03
  const boundedHeight = Math.max(180, Math.min(height, 360));
  // Width with balanced aspect ratio (~1.46) to comfortably display the orbital ring & satellite bodies
  const boundedWidth = Math.round(boundedHeight * 1.46);

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
      aria-label="Interactive Animation playback screen with orbital elements illustration"
    >
      {/* ============================================================
          1. BACK ARC OF THE GLOWING ORBITAL RING (Layer behind screen)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-2.5, 2.5, -2.5],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[28%] left-[8%] w-[84%] h-[48%] pointer-events-none z-10"
      >
        <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="orbitGradBack" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F472B6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Back half of the ellipse (tilted slightly) */}
          <path
            d="M 25 68 C 30 25, 250 25, 258 58"
            stroke="url(#orbitGradBack)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(244, 114, 182, 0.4))',
            }}
          />
        </svg>
      </motion.div>

      {/* ============================================================
          2. 3D ISOMETRIC PURPLE CUBE (Floating Top-Left)
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
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }
            : undefined
        }
        className="absolute top-[18%] left-[10%] z-15"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            y: -7,
            rotate: 4,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-12 sm:w-14 h-12 sm:h-14 cursor-pointer"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-[0_10px_18px_rgba(109,40,217,0.32)]">
            <defs>
              <linearGradient id="animCubeTop" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#F5D0FE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="animCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#7E22CE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#581C87" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="animCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#9333EA" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.98" />
              </linearGradient>
            </defs>

            {/* Top Face */}
            <polygon
              points="30,8 54,20 30,32 6,20"
              fill="url(#animCubeTop)"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.5"
            />

            {/* Left Face */}
            <polygon
              points="6,20 30,32 30,54 6,42"
              fill="url(#animCubeLeft)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
            />

            {/* Right Face */}
            <polygon
              points="30,32 54,20 54,42 30,54"
              fill="url(#animCubeRight)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
            />

            {/* Specular Edge Line */}
            <line x1="30" y1="8" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.8" />
            <line x1="6" y1="20" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          3. MAIN TRANSLUCENT GLASS VIDEO CARD (Center)
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
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }
            : undefined
        }
        className="absolute top-[16%] left-[24%] w-[52%] h-[68%] z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: -2,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-full rounded-2xl sm:rounded-3xl p-4 cursor-pointer backdrop-blur-md transition-shadow relative -rotate-3 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 245, 255, 0.72) 45%, rgba(243, 232, 255, 0.84) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 18px 38px rgba(140, 75, 255, 0.18), 0 3px 10px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-3 right-3 h-4 rounded-t-2xl pointer-events-none opacity-60"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Diagonal Glass Refraction Line */}
          <div 
            className="absolute -inset-2 opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(75deg, transparent 42%, rgba(255, 255, 255, 0.9) 48%, transparent 54%)'
            }}
          />

          {/* 3D Purple Play Button Icon */}
          <div className="relative">
            <svg viewBox="0 0 50 50" fill="none" className="w-14 sm:w-16 h-14 sm:h-16 drop-shadow-[0_8px_16px_rgba(140,75,255,0.4)]">
              <defs>
                <linearGradient id="animPlayBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="35%" stopColor="#A855F7" />
                  <stop offset="70%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6B21A8" />
                </linearGradient>
              </defs>
              {/* Rounded Triangle Play */}
              <path
                d="M15 10 C15 7.8 17.6 6.5 19.5 7.8 L40.5 22.8 C42.2 24 42.2 26.6 40.5 27.8 L19.5 42.8 C17.6 44.1 15 42.8 15 40.6 Z"
                fill="url(#animPlayBtnGrad)"
              />
              {/* Top bevel highlight */}
              <path
                d="M16 11 L39 25"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.75"
              />
              {/* Subtle inner face glow */}
              <circle cx="24" cy="22" r="6" fill="#FFFFFF" opacity="0.15" filter="blur(2px)" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          4. FRONT ARC OF THE GLOWING ORBITAL RING (Layer in front of screen)
         ============================================================ */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-2.5, 2.5, -2.5],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion
            ? {
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[28%] left-[8%] w-[84%] h-[48%] pointer-events-none z-22"
      >
        <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="orbitGradFront" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#F472B6" />
              <stop offset="70%" stopColor="#F9A8D4" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          {/* Front half of the ellipse curving down in front of the card */}
          <path
            d="M 25 68 C 22 105, 245 105, 258 58"
            stroke="url(#orbitGradFront)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(244, 114, 182, 0.5))',
            }}
          />
          {/* Specular neon highlight along front ridge */}
          <path
            d="M 40 76 C 58 100, 225 100, 248 65"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      </motion.div>

      {/* ============================================================
          5. SMALL PURPLE SATELLITE SPHERE (Front Left on the orbit)
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
                delay: 0.6,
              }
            : undefined
        }
        className="absolute bottom-[24%] left-[17%] z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.35,
            y: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF5FF 25%, #F3E8FF 55%, #D8B4FE 80%, #A855F7 100%)',
            boxShadow: '0 6px 14px rgba(147, 51, 234, 0.32), inset -2px -2px 4px rgba(107, 33, 168, 0.5), inset 2px 2px 3px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular Glint */}
          <div className="absolute top-0.5 left-1 w-1.5 h-0.8 rounded-full bg-white blur-[0.25px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          6. LARGE GLOSSY PLANET / SPHERE (Right on the orbit)
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
                delay: 0.3,
              }
            : undefined
        }
        className="absolute top-[32%] right-[8%] z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.25,
            y: -7,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.92 }}
          className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #FCE7F3 28%, #F472B6 65%, #C026D3 85%, #701A75 100%)',
            boxShadow: '0 12px 24px rgba(192, 38, 211, 0.32), inset -3px -4px 7px rgba(112, 26, 117, 0.6), inset 3px 3px 5px rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Specular Glint */}
          <div className="absolute top-1.5 left-2 w-3.5 h-2 rounded-full bg-white blur-[0.4px] -rotate-25 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}
