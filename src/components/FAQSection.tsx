import { useState, type KeyboardEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, X } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { FAQ_SECTION } from '../data/content';

export default function FAQSection() {
  // Open the first question by default (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (idx: number) => {
    setOpenIndex(current => (current === idx ? null : idx));
  };

  const handleKeyDown = (e: KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(idx);
    }
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="faq" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {FAQ_SECTION.title}
          </h2>
        </div>

        {/* Full-width vertical accordion list */}
        <div className="border-t border-purple-100/90 divide-y-0">
          {FAQ_SECTION.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const stepId = String(idx + 1).padStart(2, '0');
            const headerId = `faq-trigger-${stepId}`;
            const panelId = `faq-panel-${stepId}`;

            return (
              <div 
                key={stepId} 
                className={`transition-all duration-300 isolate rounded-2xl sm:rounded-3xl overflow-hidden ${
                  isOpen 
                    ? 'my-3 sm:my-4 bg-white/95 border border-purple-100/90 shadow-[0_12px_36px_rgba(140,75,255,0.08)]' 
                    : 'border-b border-purple-100/90 hover:bg-white/40'
                }`}
              >
                {/* Clickable Row Header - matches Approach styling */}
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-full flex items-center justify-between gap-4 text-left group cursor-pointer border-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C4BFF] focus-visible:ring-offset-2 transition-colors duration-200 ${
                    isOpen 
                      ? 'px-6 sm:px-8 md:px-10 py-5 sm:py-6 bg-transparent' 
                      : 'px-4 sm:px-6 py-5 sm:py-6 md:py-7 bg-transparent rounded-xl'
                  }`}
                >
                  {/* Item number and question */}
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-left min-w-0">
                    <span className={`font-mono text-sm sm:text-base md:text-lg font-bold shrink-0 transition-colors ${
                      isOpen ? 'text-[#8C4BFF]' : 'text-neutral-400 group-hover:text-[#8C4BFF]'
                    }`}>
                      {item.number}
                    </span>
                    <span className={`font-light text-sm sm:text-base shrink-0 select-none transition-colors ${
                      isOpen ? 'text-[#8C4BFF]/50' : 'text-neutral-300'
                    }`}>
                      —
                    </span>
                    <span 
                      className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight transition-colors ${
                        isOpen ? 'text-[#8C4BFF]' : 'text-neutral-900 group-hover:text-[#8C4BFF]'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Expand/Collapse icon on the far right */}
                  <div className="shrink-0 ml-4">
                    <div 
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen 
                          ? 'bg-[#8C4BFF] text-white shadow-xs scale-105' 
                          : 'bg-white/90 border border-purple-100/90 text-neutral-600 group-hover:border-[#8C4BFF]/40 group-hover:text-[#8C4BFF] group-hover:scale-105 shadow-2xs'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Content Area - clean text sized to content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: shouldReduceMotion 
                          ? { duration: 0 } 
                          : { 
                              height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] }, 
                              opacity: { duration: 0.22, delay: 0.04 } 
                            }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: shouldReduceMotion 
                          ? { duration: 0 } 
                          : { 
                              height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }, 
                              opacity: { duration: 0.12 } 
                            }
                      }}
                      style={{ willChange: 'height, opacity' }}
                      className="overflow-hidden bg-transparent"
                    >
                      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 pt-1 pb-6 sm:pb-8 bg-transparent">
                        <p className="text-base sm:text-lg md:text-xl text-[#171717] font-medium leading-relaxed max-w-4xl text-left">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
