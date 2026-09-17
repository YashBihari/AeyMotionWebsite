import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, X } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import InteractiveDiscoveryCallVisual from './InteractiveDiscoveryCallVisual';
import InteractiveScriptVisual from './InteractiveScriptVisual';
import InteractiveStoryboardVisual from './InteractiveStoryboardVisual';
import InteractiveAnimationVisual from './InteractiveAnimationVisual';
import InteractiveReviewVisual from './InteractiveReviewVisual';
import InteractiveDeliveryVisual from './InteractiveDeliveryVisual';
import { PROCESS_SECTION } from '../data/content';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

function WorkflowStepContent({ step, stepIndex }: { step: StepItem; stepIndex: number }) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [paragraphHeight, setParagraphHeight] = useState<number>(85);

  useEffect(() => {
    if (!paragraphRef.current) return;

    const measureHeight = () => {
      if (paragraphRef.current) {
        const h = paragraphRef.current.offsetHeight;
        if (h > 0) {
          setParagraphHeight(h);
        }
      }
    };

    measureHeight();
    const observer = new ResizeObserver(measureHeight);
    observer.observe(paragraphRef.current);
    return () => observer.disconnect();
  }, [step.description]);

  // Scaled proportionally while preventing visual from forcing unnecessary panel height
  const visualHeight = Math.max(180, Math.min(240, Math.round(paragraphHeight * 1.25 * 1.8)));

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
      {/* Visual Element on the left (stacked on mobile) */}
      <div className="shrink-0 flex items-start justify-center">
        {stepIndex === 0 && (
          <InteractiveDiscoveryCallVisual height={visualHeight} />
        )}
        {stepIndex === 1 && (
          <InteractiveScriptVisual height={visualHeight} />
        )}
        {stepIndex === 2 && (
          <InteractiveStoryboardVisual height={visualHeight} />
        )}
        {stepIndex === 3 && (
          <InteractiveAnimationVisual height={visualHeight} />
        )}
        {stepIndex === 4 && (
          <InteractiveReviewVisual height={visualHeight} />
        )}
        {stepIndex === 5 && (
          <InteractiveDeliveryVisual height={visualHeight} />
        )}
        {stepIndex > 5 && (
          <div 
            style={{ 
              height: `${visualHeight}px`, 
              width: `${Math.round(visualHeight * 1.34)}px` 
            }}
            className="rounded-2xl bg-white/60 border border-purple-100/80 shadow-2xs backdrop-blur-xs flex items-center justify-center"
          />
        )}
      </div>

      {/* Corresponding paragraph on the right (stacked below on mobile) - Dark neutral text for high contrast */}
      <div className="flex-1 min-w-0 pt-1 sm:pt-2">
        <p 
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-xl text-[#171717] font-medium leading-relaxed max-w-2xl text-left"
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  // Open "01 — Discovery call" by default (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleStep = (idx: number) => {
    setOpenIndex(current => (current === idx ? null : idx));
  };

  const handleKeyDown = (e: KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleStep(idx);
    }
  };

  return (
    <section id="process" className="py-12 md:py-16 lg:py-20 bg-transparent font-sans relative overflow-hidden">
      <AeymotionBackground variant="process" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]">
            {PROCESS_SECTION.title}
          </h2>
        </div>

        {/* Full-width vertical accordion list */}
        <div className="border-t border-purple-100/90 divide-y-0">
          {PROCESS_SECTION.steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            const headerId = `workflow-trigger-${step.number}`;
            const panelId = `workflow-panel-${step.number}`;

            return (
              <div 
                key={step.number} 
                className={`transition-all duration-300 isolate rounded-2xl sm:rounded-3xl overflow-hidden ${
                  isOpen 
                    ? 'my-3 sm:my-4 bg-white/95 border border-purple-100/90 shadow-[0_12px_36px_rgba(140,75,255,0.08)]' 
                    : 'border-b border-purple-100/90 hover:bg-white/40'
                }`}
              >
                {/* Clickable Row Header - seamlessly integrated into unified card */}
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleStep(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-full flex items-center justify-between gap-4 text-left group cursor-pointer border-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C4BFF] focus-visible:ring-offset-2 transition-colors duration-200 ${
                    isOpen 
                      ? 'px-6 sm:px-8 md:px-10 py-5 sm:py-6 bg-transparent' 
                      : 'px-4 sm:px-6 py-5 sm:py-6 md:py-7 bg-transparent rounded-xl'
                  }`}
                >
                  {/* Step number and title on the left */}
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-left min-w-0">
                    <span className={`font-mono text-sm sm:text-base md:text-lg font-bold shrink-0 transition-colors ${
                      isOpen ? 'text-[#8C4BFF]' : 'text-neutral-400 group-hover:text-[#8C4BFF]'
                    }`}>
                      {step.number}
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
                      {step.title}
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

                {/* Collapsible Content Area - begins directly below opened header as part of the row */}
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
                      {/* Inner step content */}
                      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 pt-1 pb-8 sm:pb-10 bg-transparent">
                        <WorkflowStepContent step={step} stepIndex={idx} />
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
