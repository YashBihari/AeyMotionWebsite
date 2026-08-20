import { motion, useMotionValue, useSpring } from 'motion/react';
import React from 'react';
import { Users, ArrowUpRight, Sparkles } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { ABOUT_SECTION } from '../data/content';

interface AboutSectionProps {
  onBookCall: () => void;
}

export default function AboutSection({ onBookCall }: AboutSectionProps) {
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Smooth, physical spring interpolation for restrained ±8° gravity tilt
  const rotateX = useSpring(rawRotateX, { damping: 20, stiffness: 130, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { damping: 20, stiffness: 130, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on touch devices and respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) return;

    // Normalized offset [-1, 1] relative to the fixed center pivot
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    const maxTilt = 8; // ±8° maximum rotation

    // Physical gravity direction:
    // Cursor upper-left (normX < 0, normY < 0) -> upper-left dips down (rotateX > 0, rotateY < 0)
    // Cursor lower-right (normX > 0, normY > 0) -> lower-right dips down (rotateX < 0, rotateY > 0)
    const targetX = Math.max(-maxTilt, Math.min(maxTilt, -normY * maxTilt));
    const targetY = Math.max(-maxTilt, Math.min(maxTilt, normX * maxTilt));

    rawRotateX.set(targetX);
    rawRotateY.set(targetY);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <section id="about" className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="about" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10" style={{ perspective: '1000px' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          className="p-8 sm:p-10 md:p-14 bg-gradient-to-br from-[#8C4BFF] via-[#6F2BFF] to-[#5116D9] rounded-3xl text-white shadow-2xl relative overflow-hidden"
        >
          {/* Glowing Ambient Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B98FD4]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F2A979]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#F2A979]" />
              06 / ABOUT AEYMOTION
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              {ABOUT_SECTION.title}
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
              "{ABOUT_SECTION.copy}"
            </p>

            <div className="pt-3 border-t border-white/20">
              <span className="font-mono text-[9px] sm:text-[10px] text-white/70 font-bold uppercase tracking-widest block mb-2.5">
                WE COLLABORATE DIRECTLY WITH:
              </span>
              <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {ABOUT_SECTION.audiences.map((aud, i) => (
                  <div 
                    key={i}
                    className="px-3 sm:px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-[11px] sm:text-xs font-bold uppercase text-white flex items-center gap-2 shrink-0 whitespace-nowrap"
                  >
                    <Users className="w-3 h-3 text-[#F2A979] shrink-0" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-start">
              <button
                onClick={onBookCall}
                className="px-6 py-3 bg-white text-[#6F2BFF] hover:bg-neutral-100 text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg inline-flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6F2BFF]" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

