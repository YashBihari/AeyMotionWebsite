import { motion, useReducedMotion } from 'motion/react';

interface InteractiveStoryboardVisualProps {
  height?: number;
}

export default function InteractiveStoryboardVisual({ height = 120 }: InteractiveStoryboardVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scaled 2x to match Step 01 & Step 02
  const boundedHeight = Math.max(180, Math.min(height, 360));
  // 1.82x aspect ratio to comfortably arrange 3 square cards in sequence with surrounding accents
  const boundedWidth = Math.round(boundedHeight * 1.82);

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
      aria-label="Interactive Storyboard sequence illustration"
    >
      {/* ============================================================
          SURROUNDING 1: TOP-LEFT TRANSLUCENT ISOMETRIC CUBE
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
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
        className="absolute top-[6%] left-[12%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.22,
            y: -6,
            rotate: 4,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-7 sm:w-8 h-7 sm:h-8 cursor-pointer"
        >
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full drop-shadow-[0_8px_14px_rgba(109,40,217,0.25)]">
            <defs>
              <linearGradient id="sbCubeTop1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="sbCubeLeft1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.88" />
              </linearGradient>
              <linearGradient id="sbCubeRight1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.92" />
              </linearGradient>
            </defs>
            <polygon points="25,6 45,16 25,26 5,16" fill="url(#sbCubeTop1)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" />
            <polygon points="5,16 25,26 25,44 5,34" fill="url(#sbCubeLeft1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <polygon points="25,26 45,16 45,34 25,44" fill="url(#sbCubeRight1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <line x1="25" y1="6" x2="25" y2="26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.65" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          SURROUNDING 2: BOTTOM-RIGHT TRANSLUCENT ISOMETRIC CUBE
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
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }
            : undefined
        }
        className="absolute bottom-[4%] right-[12%] z-10"
      >
        <motion.div
          whileHover={{
            scale: 1.22,
            y: -6,
            rotate: -4,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.94 }}
          className="w-7 sm:w-8 h-7 sm:h-8 cursor-pointer"
        >
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full drop-shadow-[0_8px_14px_rgba(109,40,217,0.25)]">
            <polygon points="25,6 45,16 25,26 5,16" fill="url(#sbCubeTop1)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" />
            <polygon points="5,16 25,26 25,44 5,34" fill="url(#sbCubeLeft1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <polygon points="25,26 45,16 45,34 25,44" fill="url(#sbCubeRight1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <line x1="25" y1="6" x2="25" y2="26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.65" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ============================================================
          SURROUNDING 3: FLOATING SPHERES (Bottom-Left & Top-Right)
         ============================================================ */}
      {/* Bottom-Left Lilac Sphere */}
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
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }
            : undefined
        }
        className="absolute bottom-[8%] left-[8%] z-10"
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
          <div className="absolute top-0.5 left-1 w-1.5 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Top-Right Pink Sphere */}
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
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7,
              }
            : undefined
        }
        className="absolute top-[8%] right-[8%] z-10"
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
          <div className="absolute top-0.5 left-1 w-1.5 h-1 rounded-full bg-white blur-[0.3px] -rotate-20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ============================================================
          CONNECTING PIPELINE NOODLES & JOINTS (Background Layer)
         ============================================================ */}
      {/* Connector 1: Card 1 to Card 2 */}
      <div className="absolute top-[42%] left-[26%] w-[15%] h-[16%] pointer-events-none z-12">
        <svg viewBox="0 0 60 40" fill="none" className="w-full h-full drop-shadow-[0_4px_8px_rgba(109,40,217,0.2)]">
          <defs>
            <linearGradient id="pipeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
            <radialGradient id="jointGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="40%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#581C87" />
            </radialGradient>
          </defs>
          <path d="M4 28 C20 28, 26 12, 56 12" stroke="url(#pipeGrad1)" strokeWidth="6" strokeLinecap="round" />
          <path d="M6 26 C20 26, 26 10, 54 10" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
          {/* Joint bead */}
          <circle cx="50" cy="13" r="6" fill="url(#jointGrad)" />
          <circle cx="48.5" cy="11.5" r="1.8" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Connector 2: Card 2 to Card 3 */}
      <div className="absolute top-[46%] right-[26%] w-[15%] h-[16%] pointer-events-none z-12">
        <svg viewBox="0 0 60 40" fill="none" className="w-full h-full drop-shadow-[0_4px_8px_rgba(109,40,217,0.2)]">
          <path d="M4 14 C24 14, 30 28, 56 28" stroke="url(#pipeGrad1)" strokeWidth="6" strokeLinecap="round" />
          <path d="M6 12 C24 12, 30 26, 54 26" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
          {/* Joint bead */}
          <circle cx="10" cy="15" r="6" fill="url(#jointGrad)" />
          <circle cx="8.5" cy="13.5" r="1.8" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* ============================================================
          CARD 1: IMAGE / VISUAL SCENE CARD (Square, tilted slightly CCW)
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
                delay: 0.2,
              }
            : undefined
        }
        className="absolute top-[20%] left-[3%] w-[28%] aspect-square z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: -6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full aspect-square rounded-2xl sm:rounded-3xl p-3 cursor-pointer backdrop-blur-md transition-shadow relative -rotate-4 flex flex-col justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.72) 50%, rgba(243, 232, 255, 0.82) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 32px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3 rounded-t-2xl pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Mini Sun / Sphere in top right of card */}
          <div 
            className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FED7AA 25%, #F472B6 70%, #DB2777 100%)',
              boxShadow: '0 4px 8px rgba(219, 39, 119, 0.3)',
            }}
          >
            <div className="absolute top-0.5 left-1 w-1 h-0.5 rounded-full bg-white blur-[0.2px] pointer-events-none" />
          </div>

          {/* Mountains Artwork (3D overlapping shapes) */}
          <div className="mt-auto w-full h-[60%] flex items-end">
            <svg viewBox="0 0 100 65" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="mtnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="60%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#7E22CE" />
                </linearGradient>
                <linearGradient id="mtnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E879F9" />
                  <stop offset="50%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              {/* Back smaller peak */}
              <polygon points="52,18 90,65 32,65" fill="url(#mtnGrad2)" opacity="0.85" />
              {/* Front main mountain peak */}
              <polygon points="24,12 72,65 0,65" fill="url(#mtnGrad1)" />
              {/* Peak specular highlight edge */}
              <line x1="24" y1="12" x2="0" y2="65" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.6" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          CARD 2: VIDEO / PLAYBACK SCENE CARD (Square, Center, upright)
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
                delay: 0.5,
              }
            : undefined
        }
        className="absolute top-[16%] left-[36%] w-[28%] aspect-square z-25"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: 0,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full aspect-square rounded-2xl sm:rounded-3xl p-3.5 cursor-pointer backdrop-blur-md transition-shadow relative flex flex-col items-center justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 245, 255, 0.75) 50%, rgba(243, 232, 255, 0.85) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 18px 36px rgba(140, 75, 255, 0.18), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3.5 rounded-t-2xl pointer-events-none opacity-55"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* 3D Purple Play Button Icon */}
          <div className="my-auto">
            <svg viewBox="0 0 50 50" fill="none" className="w-10 sm:w-12 h-10 sm:h-12 drop-shadow-[0_6px_12px_rgba(140,75,255,0.35)]">
              <defs>
                <linearGradient id="playBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="40%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6B21A8" />
                </linearGradient>
              </defs>
              {/* Rounded Triangle Play */}
              <path
                d="M16 11 C16 9 18.5 7.8 20.2 8.9 L38.2 21.9 C39.8 23 39.8 25.5 38.2 26.6 L20.2 39.6 C18.5 40.7 16 39.5 16 37.5 Z"
                fill="url(#playBtnGrad)"
              />
              {/* Top bevel highlight */}
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
              <div className="w-[62%] h-full rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7]" />
            </div>
            {/* Scrubber Playhead Bead */}
            <div 
              className="absolute top-0 left-[58%] w-3.5 h-3.5 -mt-0.5 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FCE7F3 30%, #F472B6 70%, #BE185D 100%)',
                boxShadow: '0 2px 5px rgba(190, 24, 93, 0.4)',
              }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white blur-[0.2px]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================
          CARD 3: SCRIPT / COPY SCENE CARD (Square, Right, tilted slightly CW)
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
                delay: 0.7,
              }
            : undefined
        }
        className="absolute top-[20%] right-[3%] w-[28%] aspect-square z-20"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -8,
            rotate: 6,
            transition: springTransition,
          }}
          whileTap={{ scale: 0.96 }}
          className="w-full aspect-square rounded-2xl sm:rounded-3xl p-3.5 cursor-pointer backdrop-blur-md transition-shadow relative rotate-4 flex flex-col justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.72) 50%, rgba(243, 232, 255, 0.82) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.98)',
            boxShadow: '0 16px 32px rgba(140, 75, 255, 0.16), 0 3px 8px rgba(255, 255, 255, 0.95) inset',
          }}
        >
          {/* Top Glass Sheen */}
          <div 
            className="absolute top-0.5 left-2 right-2 h-3 rounded-t-2xl pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), transparent)'
            }}
          />

          {/* Floating pink sphere accent on right of card */}
          <div 
            className="absolute top-[42%] -right-1 w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FCE7F3 30%, #F472B6 70%, #BE185D 100%)',
              boxShadow: '0 3px 6px rgba(190, 24, 93, 0.35)',
            }}
          >
            <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white blur-[0.2px] pointer-events-none" />
          </div>

          <div className="space-y-2.5 pr-2">
            {/* Message Line 1 */}
            <div className="w-[65%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Message Line 2 (Longer) */}
            <div className="w-[92%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] to-[#A855F7] shadow-2xs" />

            {/* Message Line 3 (with Magenta accent tip) */}
            <div className="w-[70%] h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#8C4BFF] via-[#A855F7] to-[#EC4899] shadow-2xs" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
