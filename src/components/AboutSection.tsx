import { motion, useMotionValue, useSpring } from 'motion/react';
import React from 'react';
import { Users, ArrowUpRight } from 'lucide-react';
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
    <section id="about" className="pt-4 lg:pt-6 pb-10 md:pb-14 bg-transparent font-sans relative">
      <AeymotionBackground variant="about" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" style={{ perspective: '1000px' }}>
        
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
          className="w-full md:max-w-[75%] mx-auto p-5 sm:p-7 md:p-8 lg:p-9 bg-gradient-to-br from-[#8C4BFF] via-[#6F2BFF] to-[#5116D9] rounded-2xl sm:rounded-3xl text-white shadow-xl relative overflow-hidden"
        >
          {/* Glowing Ambient Background Circles */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#B98FD4]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F2A979]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 md:space-y-5 relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3.5xl font-black uppercase tracking-tight text-white leading-snug">
              {ABOUT_SECTION.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-3xl">
              {ABOUT_SECTION.copy}
            </p>

            {/* Founder Context & Collaborate Adjacent Row */}
            <div className="pt-4 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
              {/* Founder Context & CTA */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/70 font-bold uppercase tracking-widest block">
                    FOUNDER-LED STRATEGY & CREATIVE DIRECTION
                  </span>
                  <span className="text-base sm:text-lg font-black uppercase text-white tracking-wide block">
                    {ABOUT_SECTION.founder.name}
                  </span>
                  <span className="text-xs text-white/80 font-mono block">
                    {ABOUT_SECTION.founder.role}
                  </span>
                </div>

                <div>
                  <button
                    onClick={onBookCall}
                    className="px-5 py-2.5 bg-white text-[#6F2BFF] hover:bg-neutral-100 text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                  >
                    Plan your launch
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6F2BFF]" />
                  </button>
                </div>
              </div>

              {/* Vertical Collaborate With List */}
              <div className="md:border-l md:border-white/20 md:pl-6 space-y-2.5">
                <span className="font-mono text-[9px] sm:text-[10px] text-white/70 font-bold uppercase tracking-widest block">
                  WE COLLABORATE DIRECTLY WITH:
                </span>
                <div className="flex flex-col gap-1.5">
                  {ABOUT_SECTION.audiences.map((aud, i) => (
                    <div 
                      key={i}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold uppercase text-white flex items-center gap-2 w-fit"
                    >
                      <Users className="w-3.5 h-3.5 text-[#F2A979] shrink-0" />
                      <span>{aud}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

