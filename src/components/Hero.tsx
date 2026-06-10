import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Play, X } from 'lucide-react';
import PortfolioGrid from './PortfolioGrid';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Absolute Outer Ambient Sunset Glow behind the framed container */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] rounded-full bg-gradient-to-tr from-[#F4B179]/15 via-[#E0B3CF]/20 to-[#8A2EFF]/15 blur-[120px] pointer-events-none -z-10" />

      {/* Main Luxury Canvas Container (Framed Design exactly like srinika) */}
      <div className="relative w-full rounded-[32px] md:rounded-[48px] bg-white border border-neutral-200/40 shadow-[0_45px_100px_-30px_rgba(138,46,255,0.08)] overflow-hidden px-6 py-20 md:px-16 md:py-32 flex flex-col items-center justify-between min-h-[820px] z-10">
        
        {/* Dynamic Fluid Gradient Layer (replacing original gradient with our custom sunset colors) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F4B179]/5 via-[#E0B3CF]/10 to-[#8A2EFF]/5 pointer-events-none -z-20" />
        
        {/* Soft Organic Mesh Gradient Blobs inside the container */}
        <div className="absolute top-[25%] left-[20%] w-[450px] h-[450px] rounded-full bg-[#F4B179]/20 blur-[110px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#8A2EFF]/15 blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[30%] w-[380px] h-[380px] rounded-full bg-[#E0B3CF]/25 blur-[100px] pointer-events-none -z-10" />

        {/* Headings Redesign: Position matches srinika but content is kept same */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center select-none text-center">
          
          {/* Row 1: Left Intro + Right Display heading "Design★" */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-center gap-4 md:gap-8 mb-4 md:mb-6">
            
            {/* Left Intro Text (Structured identical to srinika placeholder) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-left font-sans text-sm sm:text-base text-neutral-500 leading-relaxed max-w-[200px] pb-2 uppercase tracking-wide shrink-0 hidden md:block"
            >
              Hello<br />
              SaaS & AI! We're
            </motion.div>

            {/* Mobile-only Intro Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:hidden block text-center font-sans text-xs uppercase tracking-widest text-[#8A2EFF] font-semibold mb-2"
            >
              Premium Motion Design
            </motion.div>

            {/* Right Display Word "Creative Motion*" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[42px] sm:text-[68px] md:text-[88px] lg:text-[108px] font-bold uppercase tracking-tighter text-neutral-950 flex items-center justify-center leading-[0.95]"
            >
              <motion.span 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 450, damping: 12 }}
                className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_35px_rgba(138,46,255,0.45)] transition-colors duration-300 cursor-default"
              >
                Motion
              </motion.span>
              {/* Pristine multi-pronged rotating custom asterisk vector */}
              <svg 
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#8A2EFF] ml-3 animate-[spin_30s_linear_infinite] hover:animate-[spin_3s_linear_infinite] transition-all duration-300 transform hover:scale-115 cursor-pointer" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
              </svg>
            </motion.h1>
          </div>

          {/* Row 2: "Design [Pill Video] Studio" equivalent using our copy "Design", "[Pill]", "Studio" */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-x-6 md:gap-x-8 font-sans text-[36px] sm:text-[54px] md:text-[76px] lg:text-[96px] font-bold uppercase tracking-tighter text-neutral-950 leading-[0.9]"
          >
            <motion.span 
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 450, damping: 12 }}
              className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_35px_rgba(138,46,255,0.45)] transition-colors duration-300 cursor-default"
            >
              Design
            </motion.span>
            
            {/* Elegant horizontal video capsule pill matching srinika */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex items-center justify-center w-18 h-9 sm:w-28 sm:h-14 md:w-40 md:h-20 rounded-full overflow-hidden border border-black/15 bg-neutral-100 shadow-[0_15px_35px_-5px_rgba(138,46,255,0.15)] group/pill cursor-pointer transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(138,46,255,0.22)] active:scale-95 shrink-0"
            >
              {/* Thumbnail Video Loop representing our product film */}
              <video 
                src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover/pill:scale-110"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Play Capsule overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover/pill:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center transform scale-90 group-hover/pill:scale-100 group-hover/pill:bg-white transition-all duration-300">
                  <Play className="w-3 h-3 md:w-4 md:h-4 text-black fill-black ml-0.5" />
                </div>
              </div>
            </div>

            <motion.span 
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 450, damping: 12 }}
              className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_35px_rgba(138,46,255,0.45)] transition-colors duration-300 cursor-default"
            >
              Studio
            </motion.span>
          </motion.div>

          {/* Under-headline Paragraph Description styled clean and minimal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full max-w-2xl mx-auto mt-10 md:mt-14 px-4"
          >
            <p className="text-base sm:text-lg md:text-[20px] text-neutral-600 font-sans tracking-tight leading-relaxed font-light">
              We are your trusted motion companion. Aeymotion helps founders and product teams translate complex concepts into pristine launch videos, custom interactive demos, and high-fidelity product films that build immediate brand authority.
            </p>
          </motion.div>

        </div>

        {/* Client Logos Strip at the bottom of the container representing partners */}
        <div className="w-full max-w-5xl mt-16 md:mt-24 border-t border-neutral-100 pt-10 flex flex-col items-center">
          <p className="text-[10px] uppercase font-semibold text-neutral-400 tracking-[0.15em] mb-8 font-sans">
            Our Selected Product Engagements
          </p>
          
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-40 hover:opacity-75 transition-opacity duration-500">
            
            {/* Custom Brand Logo 1: DIA */}
            <div className="flex items-center gap-2 font-sans tracking-[0.25em] font-extrabold text-neutral-900 text-lg md:text-xl selection:bg-transparent">
              DIA
            </div>

            {/* Custom Brand Logo 2: PurpleCube AI */}
            <div className="flex items-center gap-2 font-mono font-bold text-neutral-900 text-sm md:text-base selection:bg-transparent">
              <span className="w-4 h-4 bg-neutral-900 rotate-45 transform inline-block mr-1" />
              PURPLECUBE
            </div>

            {/* Custom Brand Logo 3: yabi */}
            <div className="flex items-center gap-1 font-serif italic font-bold text-neutral-900 text-lg md:text-xl tracking-tight selection:bg-transparent">
              yabi.
            </div>

            {/* Custom Brand Logo 4: SUN */}
            <div className="flex items-center gap-1.5 font-sans tracking-[0.1em] font-light text-neutral-900 text-base md:text-lg selection:bg-transparent">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#F4B179] to-[#8A2EFF]" />
              SUN SYSTEMS
            </div>

          </div>
        </div>

      </div>

      {/* Portfolio Grid Rendering underneath */}
      <div className="mt-24 md:mt-32">
        <PortfolioGrid />
      </div>

      {/* Cinematic Fullscreen Interactive Video Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-xl"
          >
            {/* Dismiss overlay click */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsModalOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10"
            >
              {/* Close Button top-right */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-all flex items-center justify-center z-30 group focus:outline-none"
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
