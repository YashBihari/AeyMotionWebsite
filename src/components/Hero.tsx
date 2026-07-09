import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Play, X, ArrowUpRight, Cpu, Sparkles, Target } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-16 w-full overflow-hidden bg-[#050507] font-sans border-b border-white/[0.04]">
      
      {/* Premium Visual Background System */}
      <AeymotionBackground variant="hero" />

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Editorial Header / System Specs Header Line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/[0.08] pb-6 mb-12 md:mb-16">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#8B5CF6] tracking-[0.2em] uppercase font-bold flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              DIRECT FROM CREATIVE LAB
            </span>
            <p className="text-[10px] text-neutral-500 font-mono">CHAPTER 01 // CORE SYSTEM INTERPOLATION</p>
          </div>
          <div className="mt-3 md:mt-0 max-w-xs text-left md:text-right">
            <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-[0.15em] leading-relaxed">
              AEYMOTION STUDIO — MOTION ARCHITECTURE DESIGN FOR SAAS & AI
            </p>
          </div>
        </div>

        {/* Two-Column split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Side: Editorial Typography & Conversions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-[#8B5CF6] pl-5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B5CF6] block">
                INTRO // MOTION SYSTEMS
              </span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F4F4F5] leading-[0.95] font-sans"
              >
                Motion systems for products that need to be understood <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F59E7B]">fast.</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl text-balance"
            >
              Aeymotion helps SaaS, AI, and product-led brands turn complex ideas into premium launch videos, product demos, and social motion assets.
            </motion.p>

            {/* Micro CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#contact"
                className="px-6 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 rounded-xl inline-flex items-center gap-2 shadow-xl hover:shadow-[#8B5CF6]/10"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio"
                className="px-6 py-4 border border-white/[0.12] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-xl inline-flex items-center gap-2"
              >
                View work
              </a>
            </motion.div>
          </div>

          {/* Right Side: Interactive Video Showcase inside deep violet canvas */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative group border border-white/[0.08] bg-[#1A102B] p-4 rounded-2xl shadow-2xl overflow-hidden w-full aspect-[4/3] flex flex-col justify-between"
            >
              {/* Decorative timeline coordinates inside the wrapper */}
              <div className="absolute top-2 right-4 font-mono text-[8px] text-white/30">SCALE 100% // RENDER_V1</div>

              {/* Inner video block */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="relative flex-1 w-full overflow-hidden bg-[#050507] rounded-xl cursor-pointer group/inner border border-white/5"
              >
                {/* Real video looping preview */}
                <video 
                  src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4"
                  className="w-full h-full object-cover opacity-75 group-hover/inner:opacity-90 group-hover/inner:scale-[1.02] transition-all duration-1000 ease-out select-none pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Ambient dark fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Live tag */}
                <div className="absolute top-3 left-3 z-20 font-mono text-[8px] text-white/60 tracking-wider flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>PREVIEW ACTIVE</span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/15 group-hover/inner:bg-black/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#8B5CF6] text-white rounded-xl flex items-center justify-center transform scale-90 group-hover/inner:scale-100 transition-all duration-500 shadow-lg shadow-[#8B5CF6]/30">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom taglines in deep violet frame */}
              <div className="pt-3 flex items-center justify-between z-10">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-black uppercase text-white tracking-wide">Aeymotion Showreel</p>
                  <p className="text-[8px] text-neutral-400 font-mono">01:24 // MOTION CONCEPT BRIEF</p>
                </div>
                <span className="text-[9px] font-mono text-[#8B5CF6] tracking-wider uppercase font-bold">CLICK TO RENDER ◆</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 3 Compact Modular Positioning Blocks with different colored divisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SaaS & AI focused in Deep Navy (#0D1B2E) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-[#0D1B2E] border border-white/[0.08] rounded-2xl flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-all duration-300 relative overflow-hidden min-h-[170px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider">UNIT // 01</span>
                <Cpu className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide mb-2 group-hover:text-[#8B5CF6] transition-colors font-sans">
                SaaS & AI focused
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Built for developer-first tools, deep LLM agent chains, secure API nodes, and cloud networks. We translate technical complexity natively.
              </p>
            </div>
            {/* Timeline Aesthetic Channel */}
            <div className="mt-4 pt-3 border-t border-white/[0.04] flex gap-1 h-3 items-center opacity-[0.2] group-hover:opacity-[0.4] transition-opacity">
              <span className="w-full h-[2px] bg-white/20 rounded relative">
                <span className="absolute left-[30%] top-[-2px] w-1.5 h-1.5 bg-[#8B5CF6] rotate-45"></span>
              </span>
            </div>
          </motion.div>

          {/* Card 2: Launch-ready motion in Dark Purple (#1C1033) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-[#1C1033] border border-white/[0.08] rounded-2xl flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-all duration-300 relative overflow-hidden min-h-[170px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider">UNIT // 02</span>
                <Sparkles className="w-4 h-4 text-[#A855F7]" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide mb-2 group-hover:text-[#A855F7] transition-colors font-sans">
                Launch-ready motion
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Elite scriptwriting, high-fidelity UI vector animations, custom motion styles, and fast delivery timelines to make you completely market-ready.
              </p>
            </div>
            {/* Timeline Aesthetic Channel */}
            <div className="mt-4 pt-3 border-t border-white/[0.04] flex gap-1 h-3 items-center opacity-[0.2] group-hover:opacity-[0.4] transition-opacity">
              <span className="w-full h-[2px] bg-white/20 rounded relative">
                <span className="absolute left-[65%] top-[-2px] w-1.5 h-1.5 bg-[#A855F7] rotate-45"></span>
              </span>
            </div>
          </motion.div>

          {/* Card 3: Built for conversion in Deep Green (#0D211B) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-[#0D211B] border border-white/[0.08] rounded-2xl flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-all duration-300 relative overflow-hidden min-h-[170px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider">UNIT // 03</span>
                <Target className="w-4 h-4 text-[#F59E7B]" />
              </div>
              <h3 className="text-base font-black uppercase text-white tracking-wide mb-2 group-hover:text-[#F59E7B] transition-colors font-sans">
                Built for conversion
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Engineered specifically to transform raw technical attention into clear, intuitive product outcomes. Stop explaining manually; show them instead.
              </p>
            </div>
            {/* Timeline Aesthetic Channel */}
            <div className="mt-4 pt-3 border-t border-white/[0.04] flex gap-1 h-3 items-center opacity-[0.2] group-hover:opacity-[0.4] transition-opacity">
              <span className="w-full h-[2px] bg-white/20 rounded relative">
                <span className="absolute left-[45%] top-[-2px] w-1.5 h-1.5 bg-[#F59E7B] rotate-45"></span>
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Cinematic Fullscreen Interactive Video Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-xl"
          >
            {/* Dismiss overlay click */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsModalOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-xl overflow-hidden shadow-2xl z-20 border border-white/10"
            >
              {/* Close Button top-right */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#8B5CF6] transition-all flex items-center justify-center z-30 group focus:outline-none"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-350" />
              </button>

              {/* High-fidelity Product Vimeo Feature Film Stream */}
              <iframe 
                src="https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0"
                className="w-full h-full scale-[1.01]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

