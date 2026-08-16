import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Rocket, Cpu, Layers } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { SERVICES, ADDITIONAL_CAPABILITIES, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onBookCall: () => void;
}

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const flagshipService = SERVICES.find(s => s.isFlagship) || SERVICES[0];
  const supportingServices = SERVICES.filter(s => !s.isFlagship);

  // Service-specific icon map
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'launch-gtm':
        return Rocket;
      case 'motion-systems':
        return Cpu;
      case 'interactive-experiences':
        return Layers;
      default:
        return Sparkles;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden"
    >
      {/* Subtle Background System */}
      <AeymotionBackground variant="services" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200/90 rounded-full shadow-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C4BFF]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-800">
              SERVICES // 01–04
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[1.02]">
            MOTION FOR EVERY STAGE OF YOUR PRODUCT.
          </h2>

          <p className="text-neutral-600 font-normal text-base md:text-lg mt-4 leading-relaxed max-w-2xl">
            From first introduction to launch and everything that follows, we create motion assets designed around how technology companies communicate.
          </p>
        </div>

        {/* Services Hierarchy */}
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* 01. FLAGSHIP SERVICE — PRODUCT STORYTELLING (High Visual Emphasis) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white border-2 border-[#8C4BFF]/30 hover:border-[#8C4BFF] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8C4BFF]/10 via-[#B98FD4]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Flagship Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] font-bold text-[#8C4BFF] uppercase tracking-widest bg-[#8C4BFF]/10 px-3 py-1 rounded-full border border-[#8C4BFF]/20">
                    {flagshipService.label}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    PRIMARY COMMERCIAL OFFERING
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-2">
                    {flagshipService.title}
                  </h3>
                  <p className="text-sm font-mono font-semibold text-[#8C4BFF] uppercase tracking-wide">
                    {flagshipService.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl">
                  {flagshipService.description}
                </p>

                {/* What is Included Tags */}
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-widest block mb-3">
                    WHAT IS INCLUDED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {flagshipService.deliverables.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-medium rounded-lg border border-neutral-200/80 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flagship CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onBookCall}
                    className="px-6 sm:px-7 py-3.5 bg-[#8C4BFF] hover:bg-[#6F2BFF] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer group/btn"
                  >
                    <span>{flagshipService.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview Framing */}
              <div className="lg:col-span-5 aspect-[4/3] rounded-2xl bg-neutral-950 overflow-hidden relative border border-neutral-200/80 shadow-md">
                <video
                  src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/15 text-[9px] font-mono text-white tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>SHOWCASE REEL</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-[10px] uppercase flex justify-between items-center tracking-wider">
                  <span>AEYMOTION // STORYTELLING</span>
                  <span className="text-[#B98FD4]">HD MOTION</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 02, 03, 04 SUPPORTING SERVICES (3-Column Grid) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingServices.map((service: ServiceItem, idx: number) => {
              const Icon = getServiceIcon(service.id);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white border border-neutral-200/90 hover:border-[#8C4BFF]/60 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Header: Label & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-neutral-400 group-hover:text-[#8C4BFF] uppercase tracking-widest transition-colors">
                        {service.label}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-[#8C4BFF]/10 text-neutral-700 group-hover:text-[#8C4BFF] flex items-center justify-center transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-neutral-950 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#8C4BFF] uppercase tracking-wide mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="pt-3 border-t border-neutral-100 space-y-2">
                      <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-widest block">
                        WHAT IS INCLUDED:
                      </span>
                      <div className="space-y-1.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="text-xs text-neutral-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8C4BFF]/70 shrink-0" />
                            <span className="font-normal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-8 pt-4 border-t border-neutral-100">
                    <button
                      onClick={onBookCall}
                      className="w-full text-[11px] font-mono font-bold text-neutral-900 hover:text-[#8C4BFF] uppercase tracking-wider flex items-center justify-between cursor-pointer transition-colors py-1 group/cta"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* ADDITIONAL CAPABILITIES (Subtle Secondary Line) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 mt-4 border-t border-neutral-200/70 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-mono"
          >
            <span className="text-neutral-400 font-bold uppercase tracking-widest text-[10px]">
              ADDITIONAL CAPABILITIES
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-neutral-600 font-medium">
              {ADDITIONAL_CAPABILITIES.map((cap, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span>{cap}</span>
                  {i < ADDITIONAL_CAPABILITIES.length - 1 && (
                    <span className="text-neutral-300">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
