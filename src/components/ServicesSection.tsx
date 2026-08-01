import { motion } from 'motion/react';
import { ArrowUpRight, Video, Sparkles, Layers, Play } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { SERVICES } from '../data/services';

interface ServicesSectionProps {
  onBookCall: () => void;
}

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const featuredService = SERVICES.find(s => s.isFeatured) || SERVICES[0];
  const secondaryServices = SERVICES.filter(s => !s.isFeatured);

  const icons = [Video, Sparkles, Layers, Play];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      {/* Background System */}
      <AeymotionBackground variant="services" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-3">
            02 / SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            Motion built around your AI product.
          </h2>
          <p className="text-neutral-600 font-normal text-base max-w-2xl mt-3 leading-relaxed">
            From explaining a complex workflow to launching a new feature, we create videos and animations that make AI products easier to understand and remember.
          </p>
        </div>

        {/* PREFERRED LAYOUT: 1 Large Featured Card Top + 3 Cards Row Underneath */}
        <div className="space-y-8">
          
          {/* Featured Card (Product Storytelling Videos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-white border-2 border-[#8C4BFF]/30 hover:border-[#8C4BFF] rounded-3xl shadow-lg transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8C4BFF]/10 via-[#B98FD4]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#8C4BFF] uppercase tracking-widest bg-[#8C4BFF]/10 px-3 py-1 rounded-full">
                    PRIMARY SERVICE // 01
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    HIGH IMPACT & CONVERSION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900">
                  {featuredService.title}
                </h3>

                <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-xl">
                  {featuredService.description}
                </p>

                {/* Deliverables tags */}
                <div>
                  <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-widest block mb-3">
                    WHAT IS INCLUDED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredService.deliverables.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium rounded-lg border border-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle CTA */}
                <div className="pt-2">
                  <button
                    onClick={onBookCall}
                    className="px-6 py-3 bg-[#8C4BFF] hover:bg-[#6F2BFF] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    Discuss Product Storytelling
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side Video Asset Preview */}
              <div className="lg:col-span-5 aspect-[4/3] rounded-2xl bg-neutral-900 overflow-hidden relative border border-neutral-200">
                <video
                  src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-[10px] uppercase flex justify-between items-center">
                  <span>AEYMOTION // PRODUCT STORYTELLING</span>
                  <span className="text-[#B98FD4]">24 FPS</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 3 Secondary Services Row Underneath */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryServices.map((service, idx) => {
              const Icon = icons[idx + 1] || Video;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
                  className="p-8 bg-white border border-neutral-200 hover:border-[#8C4BFF]/50 rounded-2xl shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        SERVICE // {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#8C4BFF]/10 text-neutral-800 group-hover:text-[#8C4BFF] flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-3 group-hover:text-[#8C4BFF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-neutral-100">
                      <span className="font-mono text-[9px] text-neutral-400 uppercase font-bold block mb-2">
                        Deliverables:
                      </span>
                      {service.deliverables.slice(0, 4).map((d, i) => (
                        <div key={i} className="text-[11px] text-neutral-700 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#8C4BFF]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Book a Call button */}
                  <div className="mt-8 pt-4 border-t border-neutral-100">
                    <button
                      onClick={onBookCall}
                      className="text-[10px] font-mono font-bold text-neutral-800 hover:text-[#8C4BFF] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
