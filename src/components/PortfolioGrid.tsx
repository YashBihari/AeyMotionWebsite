import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROJECTS, Project } from '../data/projects';
import { BRAND_LINKS } from '../data/config';

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      {/* Background system */}
      <AeymotionBackground variant="work" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-3">
            01 / PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            Selected Work
          </h2>
          <p className="text-neutral-600 font-normal text-base max-w-xl mt-3 leading-relaxed">
            Videos and animations created for ambitious AI products.
          </p>
        </div>

        {/* 2-column x 3-row Desktop Grid (6 Projects total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-neutral-900 border-0 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(20,20,28,0.35)] hover:shadow-[0_20px_45px_rgba(140,75,255,0.45),0_0_25px_rgba(242,169,121,0.3)] transition-all duration-500 cursor-pointer relative aspect-[16/10]"
            >
              {/* Media Container with muted looping video */}
              <video
                src={project.previewVideo}
                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700 ease-out select-none pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Category Badge top-left */}
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                {project.category}
              </div>

              {/* Play Icon & Click Prompt Overlay Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 pointer-events-none">
                <div className="w-14 h-14 bg-black/40 backdrop-blur-md border border-white/40 text-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 group-hover:bg-[#8C4BFF]/50 group-hover:border-white transition-all duration-300 shadow-xl">
                  <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                  OPEN CASE STUDY
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on Dribbble Button */}
        <div className="flex justify-center">
          <a
            href={BRAND_LINKS.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xs inline-flex items-center gap-2.5"
          >
            View More on Dribbble
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* On-Page Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/80 backdrop-blur-md"
          >
            {/* Backdrop click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl z-20 border border-neutral-200 max-h-[92vh] flex flex-col"
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#8C4BFF] transition-all flex items-center justify-center z-30 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
                
                {/* Left Side: Video Player (7 cols) */}
                <div className="lg:col-span-7 bg-black min-h-[280px] sm:min-h-[360px] lg:min-h-[480px] relative flex items-center justify-center overflow-hidden">
                  {selectedProject.fullVideoEmbed.includes('.mp4') || selectedProject.fullVideoEmbed.includes('cloudinary') ? (
                    <video
                      src={selectedProject.fullVideoEmbed}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <iframe 
                      src={selectedProject.fullVideoEmbed}
                      className="w-full h-full absolute inset-0"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={selectedProject.name}
                    />
                  )}
                </div>

                {/* Right Side: Details & Dribbble CTA (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-[#FAF9F5] border-t lg:border-t-0 lg:border-l border-neutral-200">
                  <div className="space-y-6">
                    <div>
                      <span className="px-2.5 py-1 bg-[#8C4BFF]/10 text-[#8C4BFF] text-[10px] font-mono uppercase font-bold tracking-wider rounded-md inline-block mb-3">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                        {selectedProject.name}
                      </h3>
                    </div>

                    <div className="space-y-4 text-xs text-neutral-700 leading-relaxed">
                      <div>
                        <span className="font-mono text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                          Project Description
                        </span>
                        <p>{selectedProject.description}</p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                          Service Delivered
                        </span>
                        <p className="font-semibold text-neutral-900">{selectedProject.serviceType}</p>
                      </div>

                      <div className="pt-2 grid grid-cols-2 gap-3 font-mono text-[10px] text-neutral-500">
                        <div>
                          <span className="block text-neutral-400">TIMECODE</span>
                          <span className="text-neutral-800 font-bold">{selectedProject.timecode}</span>
                        </div>
                        <div>
                          <span className="block text-neutral-400">FRAMERATE</span>
                          <span className="text-neutral-800 font-bold">{selectedProject.frameRate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Case Study Button -> Dribbble */}
                  <div className="pt-8 mt-6 border-t border-neutral-200">
                    <a
                      href={selectedProject.dribbbleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-[#8C4BFF] hover:bg-[#6F2BFF] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
