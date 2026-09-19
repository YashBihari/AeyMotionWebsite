import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROJECTS, Project } from '../data/projects';

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
    <section id="work" className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden">
      {/* Background system */}
      <AeymotionBackground variant="work" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            Selected Work
          </h2>
          <p className="text-neutral-600 font-normal text-sm md:text-base max-w-xl mt-2 leading-relaxed">
            Selected launch films, product storytelling and motion work for AI and SaaS products.
          </p>
        </div>

        {/* 2-column x 3-row Desktop Grid (6 Projects total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Media Container with muted looping video */}
              <div className="bg-neutral-900 border-0 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(20,20,28,0.35)] group-hover:shadow-[0_20px_45px_rgba(140,75,255,0.45),0_0_25px_rgba(242,169,121,0.3)] transition-all duration-500 relative aspect-[16/10] w-full">
                <video
                  ref={(el) => {
                    if (el) {
                      el.defaultMuted = true;
                      el.muted = true;
                      const playPromise = el.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                      }
                    }
                  }}
                  src={project.previewVideo}
                  className="w-full h-full object-cover opacity-100 select-none pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />

                {/* Play Icon Overlay Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-black/40 backdrop-blur-md border border-white/40 text-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 group-hover:bg-[#8C4BFF]/50 group-hover:border-white transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Title & Description just below each video */}
              <div className="mt-3.5 px-1">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-[#8C4BFF] transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-sm md:text-[15px] text-neutral-600 font-normal leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
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
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl z-20 border border-neutral-800 aspect-[16/9] flex items-center justify-center"
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-[#8C4BFF] text-white transition-all flex items-center justify-center z-30 focus:outline-none border border-white/20 shadow-lg"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="w-full h-full bg-black flex items-center justify-center">
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
                    src={
                      selectedProject.fullVideoEmbed.includes('vimeo.com') && !selectedProject.fullVideoEmbed.includes('player.vimeo.com')
                        ? `https://player.vimeo.com/video/${selectedProject.fullVideoEmbed.match(/vimeo\.com\/(\d+)/)?.[1] || ''}?autoplay=1`
                        : selectedProject.fullVideoEmbed
                    }
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={selectedProject.name}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
