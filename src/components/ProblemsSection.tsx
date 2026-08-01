import { motion } from 'motion/react';
import { AlertCircle, HelpCircle, EyeOff, ZapOff, Sparkles, Layers } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROBLEMS_SECTION } from '../data/content';

export default function ProblemsSection() {
  const icons = [HelpCircle, AlertCircle, EyeOff, ZapOff, Sparkles, Layers];

  return (
    <section id="problems" className="py-20 md:py-28 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      <AeymotionBackground variant="problems" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C4BFF] mb-3">
            03 / THE CHALLENGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            {PROBLEMS_SECTION.title}
          </h2>
          <p className="text-neutral-600 font-normal text-sm md:text-base mt-3">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white border border-neutral-200/90 rounded-2xl shadow-xs hover:border-[#8C4BFF]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-[#8C4BFF] uppercase tracking-wider">
                      PROBLEM // {prob.id}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h3 className="text-base font-bold uppercase text-neutral-900 mb-2">
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
