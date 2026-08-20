import { motion } from 'motion/react';
import { Compass, FileText, Palette, Play, CheckCircle } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROCESS_SECTION } from '../data/content';

export default function ProcessSection() {
  const stepIcons = [Compass, FileText, Palette, Play, CheckCircle];

  return (
    <section id="process" className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="process" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-purple-200/90 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-2.5 shadow-xs">
            04 / PROCESS
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {PROCESS_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-sm md:text-base max-w-xl mt-2 leading-relaxed">
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
                whileHover={{ 
                  y: -14, 
                  scale: 1.035,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white/85 backdrop-blur-md border border-purple-100/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/50 hover:shadow-xl hover:shadow-[#8C4BFF]/10 transition-shadow duration-300 flex flex-col justify-between relative group cursor-pointer select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] font-bold text-[#8C4BFF] uppercase tracking-widest">
                      STEP // {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-[#8C4BFF]/15 text-neutral-700 group-hover:text-[#8C4BFF] group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900 mb-2 group-hover:text-[#8C4BFF] transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom step connector indicator */}
                <div className="mt-8 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>STAGE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C4BFF] group-hover:scale-150 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
