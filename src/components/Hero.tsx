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
            MOTION STUDIO FOR AI STARTUPS & COMPANIES
          </span>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]"
            >
              Creative built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C4BFF] via-[#B98FD4] to-[#F2A979]">
                AI companies.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl text-balance"
            >
              We create videos and interactive animations that help AI companies explain products, launch features, and capture attention.
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
                Book a Call
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

          {/* Right Column: Featured Video Preview Frame */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="relative group bg-white border border-neutral-200/90 p-3 rounded-2xl shadow-xl overflow-hidden w-full aspect-[4/3] flex flex-col justify-between cursor-pointer hover:border-[#8C4BFF] transition-all duration-500"
            >
              {/* Inner Video Container */}
              <div className="relative flex-1 w-full overflow-hidden bg-neutral-900 rounded-xl group/inner">
                {/* Loop Video */}
                <video 
                  src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4"
                  className="w-full h-full object-cover opacity-85 group-hover/inner:opacity-95 group-hover/inner:scale-105 transition-all duration-700 ease-out select-none pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3 font-mono text-[9px] text-white tracking-wider flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>AEYMOTION SHOWREEL</span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/inner:bg-black/35 transition-colors duration-300">
                  <div className="w-14 h-14 bg-[#8C4BFF] text-white rounded-2xl flex items-center justify-center transform scale-90 group-hover/inner:scale-100 transition-all duration-300 shadow-lg shadow-[#8C4BFF]/40">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-neutral-900 uppercase tracking-tight">AI Product Motion Reel</p>
                  <p className="text-[10px] text-neutral-500 font-mono">01:24 // HIGH-IMPACT COMPILATION</p>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#8C4BFF] uppercase tracking-wider group-hover:underline">
                  CLICK TO WATCH
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 3 Quick Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white border border-neutral-200/80 rounded-2xl shadow-xs hover:border-[#8C4BFF]/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#8C4BFF] font-bold uppercase tracking-wider">SPECIALIZED FOCUS</span>
              <Cpu className="w-4 h-4 text-[#8C4BFF]" />
            </div>
            <h3 className="text-base font-bold uppercase text-neutral-900 mb-1.5">Exclusively for AI</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Built specifically for AI startups and product teams launching autonomous models, agent tools, and complex workflows.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200/80 rounded-2xl shadow-xs hover:border-[#8C4BFF]/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#B98FD4] font-bold uppercase tracking-wider">CLEAR STORYTELLING</span>
              <Sparkles className="w-4 h-4 text-[#B98FD4]" />
            </div>
            <h3 className="text-base font-bold uppercase text-neutral-900 mb-1.5">Product Clarity</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We translate abstract prompt chains and complex backend capabilities into clear, visually compelling product narratives.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200/80 rounded-2xl shadow-xs hover:border-[#8C4BFF]/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#F2A979] font-bold uppercase tracking-wider">CONVERSION & LAUNCH</span>
              <Target className="w-4 h-4 text-[#F2A979]" />
            </div>
            <h3 className="text-base font-bold uppercase text-neutral-900 mb-1.5">Built for Impact</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Designed to drive homepage conversions, launch momentum on social platforms, and win customer trust during feature rollouts.
            </p>
          </div>
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
