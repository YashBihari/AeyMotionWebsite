import { motion } from 'motion/react';
import { Compass, FileText, Palette, Play, CheckCircle } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROCESS_SECTION } from '../data/content';

export default function ProcessSection() {
  const stepIcons = [Compass, FileText, Palette, Play, CheckCircle];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      <AeymotionBackground variant="process" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-3">
            04 / PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {PROCESS_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-base max-w-xl mt-3 leading-relaxed">
            {PROCESS_SECTION.subtitle}
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_SECTION.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white border border-neutral-200/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/50 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] font-bold text-[#8C4BFF] uppercase tracking-widest">
                      STEP // {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-[#8C4BFF]/10 text-neutral-700 group-hover:text-[#8C4BFF] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom step connector indicator */}
                <div className="mt-8 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>STAGE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C4BFF]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
