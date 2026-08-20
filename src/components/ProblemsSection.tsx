import { motion } from 'motion/react';
import { AlertCircle, HelpCircle, EyeOff, ZapOff, Sparkles, Layers } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROBLEMS_SECTION } from '../data/content';

export default function ProblemsSection() {
  const icons = [HelpCircle, AlertCircle, EyeOff, ZapOff, Sparkles, Layers];

  return (
    <section id="problems" className="py-10 md:py-14 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="problems" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-purple-200/90 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-2.5 shadow-xs">
            03 / THE CHALLENGE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            {PROBLEMS_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-sm md:text-base mt-2 leading-relaxed">
            {PROBLEMS_SECTION.subtitle}
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SECTION.problems.map((prob, idx) => {
            const Icon = icons[idx] || AlertCircle;
            return (
              <motion.div
                key={prob.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -14, 
                  scale: 1.035,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white/85 backdrop-blur-md border border-purple-100/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/50 hover:shadow-xl hover:shadow-[#8C4BFF]/10 transition-shadow duration-300 flex flex-col justify-between group cursor-pointer select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-[#8C4BFF] uppercase tracking-wider">
                      PROBLEM // {prob.id}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-neutral-100 group-hover:bg-[#8C4BFF]/15 text-neutral-400 group-hover:text-[#8C4BFF] group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold uppercase text-neutral-900 mb-2 group-hover:text-[#8C4BFF] transition-colors duration-200">
                    {prob.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {prob.description}
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
