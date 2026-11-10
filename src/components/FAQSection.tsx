import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_SECTION } from '../data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-[#F1EFF3] px-5 py-14 font-sans sm:px-8 md:py-20">
      <div className="mx-auto max-w-[740px]">
        <h2 id="faq-title" className="aey-heading mb-8 text-center text-4xl text-neutral-900 md:mb-12 md:text-5xl">
          FAQs
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_SECTION.items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index + 1}`;
            const panelId = `faq-panel-${index + 1}`;

            return (
              <div key={item.number} className="rounded-[30px] bg-white">
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(current => current === index ? null : index)}
                    className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 rounded-[30px] px-5 py-4 text-left text-[15px] font-bold leading-snug text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4BFF] sm:px-6 sm:text-base"
                  >
                    {item.question}
                    <ChevronDown aria-hidden="true" size={18} strokeWidth={2.4} className={`shrink-0 motion-safe:transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={panelId} aria-labelledby={triggerId} hidden={!isOpen} className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-[15px]">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
