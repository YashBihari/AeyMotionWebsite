import { motion } from 'motion/react';
import { Video, Monitor, Layers, Sparkles, ArrowRight } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

export default function WhyUs() {
  const services = [
    {
      num: "01",
      name: "Launch Videos",
      sentence: "Explain your product clearly in 60 seconds or less.",
      bg: "#1A102B",
      accent: "#8B5CF6",
      icon: Video,
      frame: "00:00:15:00",
      progress: "35%"
    },
    {
      num: "02",
      name: "Product Demos",
      sentence: "Turn complex workflows into smooth, visual product walkthroughs.",
      bg: "#0D1B2E",
      accent: "#38BDF8",
      icon: Monitor,
      frame: "00:00:30:00",
      progress: "60%"
    },
    {
      num: "03",
      name: "Feature Motion Packs",
      sentence: "Give every new feature a launch-ready visual story.",
      bg: "#0D211B",
      accent: "#10B981",
      icon: Layers,
      frame: "00:00:45:00",
      progress: "85%"
    },
    {
      num: "04",
      name: "Social Motion Assets",
      sentence: "Create short-form motion content built for attention and action.",
      bg: "#24180F",
      accent: "#F59E7B",
      icon: Sparkles,
      frame: "00:01:00:00",
      progress: "100%"
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050507] overflow-hidden border-b border-white/[0.06] isolate font-sans">
      {/* Premium background system */}
      <AeymotionBackground variant="services" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="border-l-2 border-[#8B5CF6] pl-5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B5CF6] block">
                02 // SERVICES
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]"
              >
                Motion assets built for product clarity, launch speed, and conversion.
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-sm text-[#A1A1AA] font-light leading-relaxed text-balance"
            >
              From launch videos to ongoing motion systems, Aeymotion helps SaaS, AI, and product-led teams explain complex products with premium visual storytelling.
            </motion.p>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-6">
              <div className="font-mono text-[9px] text-neutral-500">
                <span className="text-white block font-bold text-sm">4 UNITS</span>
                AVAILABLE SYSTEMS
              </div>
              <div className="font-mono text-[9px] text-neutral-500">
                <span className="text-white block font-bold text-sm">24-FPS</span>
                INTERPOLATION STENCIL
              </div>
            </div>
          </div>

          {/* Right Modular Services Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  style={{ backgroundColor: service.bg }}
                  className="p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between min-h-[280px] hover:border-white/20 transition-all duration-300 relative group overflow-hidden shadow-2xl"
                >
                  {/* Subtle motion timeline DNA details in background */}
                  <div className="absolute inset-x-6 bottom-4 h-5 flex flex-col gap-1.5 opacity-10 group-hover:opacity-25 transition-opacity">
                    <div className="h-[2px] bg-white/20 w-full rounded relative">
                      <div 
                        className="absolute top-[-3px] w-2 h-2 rounded-sm rotate-45"
                        style={{ left: service.progress, backgroundColor: service.accent }}
                      />
                    </div>
                    <div className="h-[1px] bg-white/10 w-2/3 rounded" />
                  </div>

                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                        UNIT // {service.num}
                      </span>
                      <div 
                        style={{ borderColor: `${service.accent}20` }}
                        className="p-3 rounded-xl bg-white/5 border text-white transition-all duration-500 group-hover:scale-105"
                      >
                        <Icon className="w-5 h-5" style={{ color: service.accent }} />
                      </div>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed max-w-[240px]">
                      {service.sentence}
                    </p>
                  </div>

                  {/* Footer specs */}
                  <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                      SPECS: {service.frame}
                    </span>
                    <span 
                      style={{ color: service.accent }}
                      className="font-mono text-[9px] font-bold tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      ENGAGE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Editorial Highlight Bottom Border Track */}
                  <div 
                    style={{ backgroundColor: service.accent }}
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" 
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

