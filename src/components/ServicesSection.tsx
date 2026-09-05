import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Film, Check, Star } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onBookCall: () => void;
}

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  // Service-specific icon map
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'launch-narrative-sprint':
        return Compass;
      case 'launch-story-system':
        return Film;
      default:
        return Compass;
    }
  };

  return (
    <section 
      id="services" 
      className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden"
    >
      {/* Subtle Background System */}
      <AeymotionBackground variant="services" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[1.02]">
            TWO WAYS TO WORK WITH AEYMOTION
          </h2>

          <p className="text-neutral-600 font-normal text-sm md:text-base mt-2.5 leading-relaxed max-w-2xl">
            Start with the story, or take it all the way to launch.
          </p>
        </div>

        {/* 2-Column Balanced Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const Icon = getServiceIcon(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -14, 
                  scale: 1.025,
                  transition: { type: 'spring', stiffness: 500, damping: 22 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group bg-white/85 backdrop-blur-md rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between cursor-pointer select-none relative transition-[border-color,box-shadow] duration-200 ${
                  service.isFlagship
                    ? 'border-2 border-[#8C4BFF]/70 shadow-[0_12px_35px_rgba(140,75,255,0.14)] hover:shadow-2xl hover:shadow-[#8C4BFF]/20 hover:border-[#8C4BFF]'
                    : 'border border-purple-100/90 hover:border-[#8C4BFF]/60 shadow-xs hover:shadow-xl hover:shadow-[#8C4BFF]/10'
                }`}
              >
                {service.isFlagship && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 bg-[#8C4BFF] text-white font-mono text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" />
                    Flagship Offer
                  </div>
                )}

                <div className="space-y-5">
                  {/* Top Metadata: Service Label + Icon */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-[11px] font-bold text-[#8C4BFF] uppercase tracking-widest bg-[#8C4BFF]/10 px-3 py-1 rounded-full border border-[#8C4BFF]/20 group-hover:bg-[#8C4BFF] group-hover:text-white transition-colors duration-200">
                      {service.label}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-[#8C4BFF]/15 text-neutral-700 group-hover:text-[#8C4BFF] group-hover:scale-110 flex items-center justify-center transition-all duration-200 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title, Scope Badge & Tagline */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-[#8C4BFF] transition-colors duration-200 leading-tight">
                      {service.titleLine1}<br />{service.titleLine2}
                    </h3>
                    <div>
                      <span className="inline-block font-mono text-[9.5px] font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200/90">
                        {service.scopeBadge}
                      </span>
                    </div>
                    <p className="text-xs font-mono font-bold text-[#8C4BFF] uppercase tracking-wider pt-0.5">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* What is Included */}
                  <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                    <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-widest block">
                      WHAT'S INCLUDED:
                    </span>
                    <div className="space-y-1.5">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="text-xs text-neutral-700 flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 group-hover:border-[#8C4BFF]/40 transition-colors">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span className="font-medium text-neutral-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action Button */}
                <div className="mt-8 pt-5 border-t border-neutral-100">
                  <button
                    onClick={onBookCall}
                    className="w-full px-5 py-3.5 bg-neutral-900 group-hover:bg-[#8C4BFF] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer shadow-xs group-hover:shadow-md group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

