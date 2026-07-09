import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Play, X, ArrowUpRight, HelpCircle, Sparkles, CheckCircle2, Video } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  videoUrl: string;
  videoEmbed: string;
  timecode: string;
  bitrate: string;
  workType: 'Client Work' | 'Concept Study' | 'Internal Motion Study';
}

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredCaseId, setHoveredCaseId] = useState<string | null>(null);

  const cases: CaseStudy[] = [
    {
      id: "ai-saas",
      client: "HALEUM AI",
      industry: "AI / SaaS",
      problem: "The product was powerful but hard to explain in one quick scroll.",
      solution: "A product story video with animated UI flows and benefit-led messaging.",
      outcome: "Clearer website communication and launch-ready social assets.",
      videoUrl: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
      videoEmbed: "https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0",
      timecode: "00:01:24:08",
      bitrate: "18.4 MBPS",
      workType: "Concept Study"
    },
    {
      id: "fintech-dashboard",
      client: "VECTOR DEFI",
      industry: "Fintech / B2B",
      problem: "The dashboard had multiple workflows that felt complex to new users.",
      solution: "A smooth UI walkthrough showing core actions in a simple visual sequence.",
      outcome: "A sharper demo asset for sales, onboarding, and LinkedIn campaigns.",
      videoUrl: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
      videoEmbed: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
      timecode: "00:00:48:15",
      bitrate: "14.2 MBPS",
      workType: "Internal Motion Study"
    },
    {
      id: "dtc-motion",
      client: "AURA DESIGN",
      industry: "DTC / Lifestyle",
      problem: "The brand needed premium short-form content without losing visual consistency.",
      solution: "A motion system built from product moments, typography, and campaign cutdowns.",
      outcome: "A reusable visual language for ads, reels, and launch content.",
      videoUrl: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
      videoEmbed: "https://player.vimeo.com/video/1188341331?autoplay=1&title=0&byline=0&portrait=0",
      timecode: "00:02:10:04",
      bitrate: "22.1 MBPS",
      workType: "Concept Study"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#050507] border-b border-white/[0.06] font-sans relative overflow-hidden">
      {/* Cinematic Aeymotion background system */}
      <AeymotionBackground variant="work" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-24 border-l-2 border-[#8B5CF6] pl-6 md:pl-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B5CF6] mb-2 block">
            01 / SELECTED WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
            Proof that motion can make <br />
            <span className="text-neutral-500">complex products easier to buy.</span>
          </h2>
          <p className="text-[#A1A1AA] font-light text-sm max-w-xl mt-4 leading-relaxed">
            Selected projects and concept systems showing how motion can turn product complexity into clear, premium visual stories.
          </p>
        </div>

        {/* 3 Case Study Blocks */}
        <div className="space-y-24 md:space-y-32">
          {cases.map((c, idx) => {
            const isHovered = hoveredCaseId === c.id;
            const isAlternating = idx % 2 === 1;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredCaseId(c.id)}
                onMouseLeave={() => setHoveredCaseId(null)}
                className="group relative"
              >
                {/* Visual Connector / DNA Track Indicator behind */}
                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-white/[0.04] hidden lg:block" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Cinematic Video Preview Column */}
                  <div className={`lg:col-span-6 ${isAlternating ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
                    <div className="relative w-full aspect-[16/10] bg-black rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group/video">
                      
                      {/* Live Autoplay Loop video */}
                      <video
                        src={c.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60 group-hover/video:opacity-85 group-hover/video:scale-[1.02] transition-all duration-1000 ease-out"
                      />

                      {/* Video Dark Overlay Filter */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

                      {/* Top DNA Overlay info bar */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between font-mono text-[8px] text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse" />
                          <span>CAPTURE_READY // DEV_FEED</span>
                        </div>
                        <span>TIMECODE // {c.timecode}</span>
                      </div>

                      {/* Center Play Button Icon Overlay */}
                      <div 
                        onClick={() => setSelectedVideo(c.videoEmbed)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#8B5CF6]/90 text-white flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:bg-[#8B5CF6] group-hover:scale-110 transition-all duration-300">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom DNA Progress Slider Accent */}
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between font-mono text-[8px] text-neutral-400">
                        <span>FPS // 24.00</span>
                        <div className="w-24 h-[1px] bg-white/10 relative rounded overflow-hidden">
                          <div className="absolute inset-y-0 left-0 w-1/2 bg-[#8B5CF6]" />
                        </div>
                        <span>STREAM // {c.bitrate}</span>
                      </div>
                    </div>

                    {/* Integrated info ticker under preview container */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-[8px] text-neutral-500 uppercase">
                        CHOREOGRAPHY ENGINE SYNC_TRUE
                      </span>
                      <span className="font-mono text-[8px] text-neutral-500 uppercase">
                        RENDER_STABLE // H.264
                      </span>
                    </div>
                  </div>

                  {/* Editorial Text Description Column */}
                  <div className={`lg:col-span-6 ${isAlternating ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center space-y-6 md:space-y-8`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-[9px] text-[#8B5CF6] uppercase tracking-[0.2em] font-bold">
                          CASE STUDY 0{idx + 1}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase text-neutral-300 font-semibold rounded">
                          {c.workType}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">
                          {c.industry}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                        {c.client}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Challenge */}
                      <div className="border-l border-white/[0.08] pl-4 space-y-1 hover:border-[#38BDF8]/40 transition-colors">
                        <h4 className="text-[9px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                          01 / The Challenge
                        </h4>
                        <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                          "{c.problem}"
                        </p>
                      </div>

                      {/* Motion System */}
                      <div className="border-l border-white/[0.08] pl-4 space-y-1 hover:border-[#8B5CF6]/40 transition-colors">
                        <h4 className="text-[9px] font-mono text-purple-400 uppercase tracking-widest font-bold">
                          02 / Motion System
                        </h4>
                        <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                          {c.solution}
                        </p>
                      </div>

                      {/* Growth Outcome */}
                      <div className="border-l border-white/[0.08] pl-4 space-y-1 hover:border-[#34D399]/40 transition-colors">
                        <h4 className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                          03 / Growth Outcome
                        </h4>
                        <p className="text-sm text-neutral-200 font-light leading-relaxed">
                          {c.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Footer Details & Action Button */}
                    <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                      <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                        RESOLUTION // 100%_SECURE
                      </span>
                      <button
                        onClick={() => setSelectedVideo(c.videoEmbed)}
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#8B5CF6] hover:text-white transition-colors group/btn"
                        id={`btn-view-case-${c.id}`}
                      >
                        Play case video <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Cinematic Fullscreen Interactive Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedVideo(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-xl overflow-hidden shadow-2xl z-20 border border-white/10"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#8B5CF6] transition-all flex items-center justify-center z-30 group focus:outline-none"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <iframe 
                src={selectedVideo}
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
