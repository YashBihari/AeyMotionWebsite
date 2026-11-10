import RollingLabel from './RollingLabel';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_SECTION } from '../data/content';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-hero-surface px-5 py-14 font-sans sm:px-8 md:py-20">
      <div className="mx-auto max-w-[640px]">
        <h2 id="faq-title" className="aey-heading mb-8 text-center text-[1.6875rem] text-neutral-900 md:mb-12 md:text-[2.25rem]">
          FAQs
        </h2>

        <div className="space-y-3.5">
          {FAQ_SECTION.items.map(item => {
            const isOpen = openId === item.id;
            const triggerId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className="rounded-[30px] bg-white">
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(current => current === item.id ? null : item.id)}
                    className="group/roll flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 rounded-[30px] px-5 py-3 text-left text-[15px] font-bold leading-snug text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4BFF] sm:px-6 sm:text-base"
                  >
                    <RollingLabel text={item.question} />
                    <ChevronDown aria-hidden="true" size={17} strokeWidth={2.4} className={`shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <motion.div
                  id={panelId}
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : .3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6 sm:pb-6 sm:text-[15px]">{item.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
