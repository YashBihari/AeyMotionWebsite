import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Play, X, ArrowUpRight, Sparkles, Cpu, Target } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 w-full overflow-hidden bg-[#FAF9F5] font-sans border-b border-neutral-200/60"
    >
      {/* Background System */}
      <AeymotionBackground variant="hero" isHovered={isHovered} />

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Top positioning pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200/80 rounded-full shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#8C4BFF] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-700 font-semibold">
            MOTION STUDIO FOR AI, SAAS & TECHNOLOGY
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-6xl mb-16 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05]"
          >
            <span className="block md:whitespace-nowrap">
              Your product is complex.
            </span>
            <span className="block md:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#8C4BFF] via-[#B98FD4] to-[#F2A979]">
              Your story shouldn't be.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance"
          >
            We create premium motion design that helps AI, SaaS, and technology companies explain products, launch ideas, and communicate what they’re building.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button 
              onClick={onBookCall}
              className="px-7 py-4 bg-[#8C4BFF] hover:bg-[#6F2BFF] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a 
              href="#work"
              onClick={handleScrollToWork}
              className="px-7 py-4 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-xl inline-flex items-center gap-2 shadow-xs hover:bg-neutral-50"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

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
