import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_SECTION } from '../data/content';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const midpoint = Math.ceil(FAQ_SECTION.items.length / 2);
  const columns = [FAQ_SECTION.items.slice(0, midpoint), FAQ_SECTION.items.slice(midpoint)];

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-page-surface px-5 py-14 font-sans sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 id="faq-title" className="aey-heading mb-8 text-center text-4xl text-neutral-900 md:mb-12 md:text-5xl">
          FAQs
        </h2>

        <div className="grid gap-x-12 md:grid-cols-2 lg:gap-x-16">
          {columns.map((items, column) => (
            <div key={column}>
              {items.map(item => {
            const isOpen = openId === item.id;
            const triggerId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.number} className="border-b border-neutral-300/80 md:last:border-b-0">
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(current => current === item.id ? null : item.id)}
                    className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-[15px] font-bold leading-snug text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4BFF] sm:text-base"
                  >
                    {item.question}
                    {isOpen ? <Minus aria-hidden="true" size={17} className="shrink-0 text-neutral-600" /> : <Plus aria-hidden="true" size={17} className="shrink-0 text-neutral-500" />}
                  </button>
                </h3>
                <motion.div
                  id={panelId}
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-7 text-sm leading-relaxed text-neutral-600 sm:pb-6 sm:text-[15px]">{item.answer}</p>
                </motion.div>
              </div>
            );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
