import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, Target, Layers, Cpu } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { WHY_AEYMOTION_SECTION } from '../data/content';

export default function WhyAeymotionSection() {
  const icons = [Target, Layers, Zap, Cpu, CheckCircle2, ShieldCheck];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      <AeymotionBackground variant="why" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-3">
            05 / ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {WHY_AEYMOTION_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-base mt-3 leading-relaxed">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white border border-neutral-200/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/50 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8C4BFF]/10 text-[#8C4BFF] flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase text-neutral-900 mb-1.5">
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
