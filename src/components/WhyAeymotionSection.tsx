import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, Target, Layers, Cpu } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { WHY_AEYMOTION_SECTION } from '../data/content';

export default function WhyAeymotionSection() {
  const icons = [Target, Layers, Zap, Cpu, CheckCircle2, ShieldCheck];

  return (
    <section id="why-us" className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="why" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 md:mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-purple-200/90 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-2.5 shadow-xs">
            05 / ADVANTAGE
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {WHY_AEYMOTION_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-sm md:text-base mt-2 leading-relaxed">
            {WHY_AEYMOTION_SECTION.subtitle}
          </p>
        </div>

        {/* 6 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AEYMOTION_SECTION.highlights.map((item, idx) => {
            const Icon = icons[idx] || CheckCircle2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -14, 
                  scale: 1.035,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white/85 backdrop-blur-md border border-purple-100/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/50 hover:shadow-xl hover:shadow-[#8C4BFF]/10 transition-shadow duration-300 flex items-start gap-4 group cursor-pointer select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8C4BFF]/10 text-[#8C4BFF] group-hover:bg-[#8C4BFF] group-hover:text-white group-hover:scale-110 flex items-center justify-center shrink-0 mt-1 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase text-neutral-900 group-hover:text-[#8C4BFF] mb-1.5 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
