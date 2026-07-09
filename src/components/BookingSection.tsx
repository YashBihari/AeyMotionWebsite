import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Cpu, Compass, ArrowRight, Loader2, Calendar, Mail } from 'lucide-react';

interface ValueBlock {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  bg: string;
  borderColor: string;
  accentColor: string;
}

export default function BookingSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const valueBlocks: ValueBlock[] = [
    {
      title: "Product clarity",
      description: "We’ll look at what your product does and where users may be getting confused.",
      icon: Target,
      bg: "bg-[#13111C]/60",
      borderColor: "border-purple-500/10 hover:border-purple-500/20",
      accentColor: "#8B5CF6"
    },
    {
      title: "Motion opportunity",
      description: "We’ll identify where video or motion can create the most impact — website, demo, ads, onboarding, or launch.",
      icon: Cpu,
      bg: "bg-[#0B1520]/60",
      borderColor: "border-sky-500/10 hover:border-sky-500/20",
      accentColor: "#38BDF8"
    },
    {
      title: "Best next step",
      description: "You’ll get a clear recommendation: launch video, feature pack, GTM motion system, or monthly motion support.",
      icon: Compass,
      bg: "bg-[#181210]/60",
      borderColor: "border-orange-500/10 hover:border-orange-500/20",
      accentColor: "#F59E7B"
    }
  ];

  return (
    <section id="book" className="py-24 md:py-32 bg-[#050507] text-white border-b border-white/[0.06] relative overflow-hidden isolate font-sans">
      {/* Background ambient radial glows for dark premium SaaS studio feel */}
      <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] bg-[#8B5CF6]/4 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[-10%] w-[600px] h-[600px] bg-[#38BDF8]/3 blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Motion Timeline DNA background lines behind the booking section */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute inset-y-0 left-2/3 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Headline, Copy, and Value Blocks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l-2 border-[#8B5CF6] pl-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
                08 / BOOK A CALL
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
                Let’s find the <br />
                <span className="text-neutral-500">motion asset</span> <br />
                your product <br />
                needs next.
              </h2>
            </div>
            
            <p className="text-sm text-[#A1A1AA] font-light leading-relaxed max-w-lg">
              Book a free 30-minute Motion Strategy Call. We’ll review your product, launch goal, and current visual communication — then recommend the best motion direction for your website, demo, ads, or campaign.
            </p>

            {/* Microcopy disclaimer */}
            <div className="p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl text-xs text-neutral-400 font-light leading-relaxed max-w-lg">
              <span className="font-semibold text-white">No pressure. No generic sales pitch.</span> Just clear direction on how motion can help your product explain faster and convert better.
            </div>

            {/* Three Value Blocks as Modular Colored Panels */}
            <div className="space-y-4 pt-2">
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-neutral-500 block mb-2">
                Included in your Strategy session:
              </span>
              <div className="grid grid-cols-1 gap-4">
                {valueBlocks.map((block, i) => {
                  const Icon = block.icon;
                  return (
                    <div 
                      key={i} 
                      className={`p-5 rounded-xl border ${block.borderColor} ${block.bg} transition-all duration-300 flex gap-4 relative overflow-hidden group`}
                    >
                      {/* Left vertical visual accent */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent transition-colors duration-300"
                        style={{ backgroundColor: block.accentColor }}
                      />
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" style={{ color: block.accentColor }} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                          {block.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Secondary Option */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
              <span className="text-neutral-500 uppercase tracking-wider">Prefer email?</span>
              <a 
                href="mailto:hello@aeymotion.com" 
                className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-white border-b border-[#8B5CF6]/20 hover:border-white transition-all pb-0.5 font-bold tracking-tight"
              >
                <Mail className="w-3.5 h-3.5" />
                hello@aeymotion.com
              </a>
            </div>
          </div>

          {/* Right Side: Embedded Calendly Scheduler in Premium Card */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0B0B0F]/90 overflow-hidden shadow-2xl p-2 md:p-4 min-h-[660px]"
            >
              {/* Premium Header/Status Indicator inside the Scheduler Container */}
              <div className="px-4 py-3 border-b border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  <span className="uppercase font-bold tracking-wider text-neutral-300">CALENDLY INTERNET ENGINE</span>
                </div>
                <span className="uppercase tracking-widest">30-MIN STRATEGY CALL</span>
              </div>

              {/* Loader/Skeleton */}
              <AnimatePresence>
                {!iframeLoaded && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0B0B0F] text-neutral-400 gap-3"
                  >
                    <Loader2 className="w-8 h-8 text-[#8B5CF6] animate-spin" />
                    <span className="font-mono text-[10px] tracking-widest uppercase">Initializing booking terminal...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Calendly Inline Embed */}
              <iframe
                src="https://calendly.com/aeymotion/motion-strategy-call?embed_domain=aeymotion.com&embed_type=Inline&background_color=0b0b0f&text_color=ffffff&primary_color=8b5cf6"
                width="100%"
                height="650"
                frameBorder="0"
                title="Select a Date & Time"
                onLoad={() => setIframeLoaded(true)}
                className="w-full relative z-10 rounded-xl"
                style={{ background: 'transparent' }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
