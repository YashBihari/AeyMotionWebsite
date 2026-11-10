import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROJECTS, Project } from '../data/projects';
import PortfolioBooking from './PortfolioBooking';

interface PortfolioGridProps {
  limit?: number;
  fullPage?: boolean;
}

export default function PortfolioGrid({ limit, fullPage = false }: PortfolioGridProps) {
  const visibleProjects = limit === undefined ? PROJECTS : PROJECTS.slice(0, limit);
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
    <>
    <section id="work" className={`${fullPage ? 'pt-28 md:pt-36 pb-14 md:pb-20 bg-transparent' : 'py-10 md:py-14 bg-white'} font-sans relative overflow-hidden`}>
      {/* Background system */}
      <AeymotionBackground variant="work" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 md:mb-8">
          {fullPage && (
            <a href="/#work" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-950 mb-6">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to home
            </a>
          )}
          {fullPage ? (
            <h1 className="text-[1.40625rem] md:text-[2.25rem] lg:text-[2.8125rem] aey-heading text-center text-neutral-900">
              Our portfolio
            </h1>
          ) : (
            <h2 className="text-[1.40625rem] md:text-[2.25rem] lg:text-[2.8125rem] aey-heading text-center text-neutral-900">
              Selected Work
            </h2>
          )}
          <p className="text-neutral-600 font-normal text-sm md:text-base mx-auto max-w-xl mt-2 text-center leading-relaxed">
            Selected launch films, product storytelling and motion work for AI and SaaS products.
          </p>
        </div>

        {/* Homepage selection or complete portfolio, sharing the same video player. */}
        <div className={`mx-auto grid grid-cols-1 border-l border-t border-[#C4BACB] md:grid-cols-2 ${fullPage ? '' : 'md:w-4/5'}`}>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group flex min-w-0 cursor-pointer flex-col border-b border-r border-[#C4BACB] p-4 sm:p-5 lg:p-6"
            >
              {/* Media Container with muted looping video */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
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
              <div className="mt-4 flex-1">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-sm md:text-[15px] text-neutral-600 font-normal leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {limit !== undefined && PROJECTS.length > limit && (
          <div className="mx-auto flex justify-center border border-t-0 border-[#C4BACB] px-6 py-5 md:w-4/5">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/70 hover:bg-[#F1E7FF] text-neutral-900 border border-[#8C4BFF]/25 hover:border-[#8C4BFF]/50 backdrop-blur-sm text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
            >
              View portfolio <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        )}

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
              className="relative w-full max-w-5xl bg-black overflow-hidden shadow-2xl z-20 border border-neutral-800 aspect-[16/9] flex items-center justify-center"
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
    {fullPage && <PortfolioBooking />}
    </>
  );
}
