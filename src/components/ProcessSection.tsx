import { MessageCircle, FileText, LayoutGrid, Play, Check, Download } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROCESS_SECTION } from '../data/content';

const stepIcons = [MessageCircle, FileText, LayoutGrid, Play, Check, Download];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden scroll-mt-24 py-12 font-sans md:py-16 lg:py-20"
    >
      <AeymotionBackground variant="process" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="border-l border-t border-[#C4BACB]">
          <h2 id="process-title" className="aey-heading border-b border-r border-[#C4BACB] px-6 py-7 text-3xl text-neutral-900 sm:text-4xl md:px-8 md:py-9 md:text-5xl lg:text-6xl">
            {PROCESS_SECTION.title}
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_SECTION.steps.map((step, index) => {
              const Icon = stepIcons[index] ?? FileText;

              return (
                <li key={step.number} className="min-w-0 border-b border-r border-[#C4BACB]">
                  <div className="border-b border-[#C4BACB] px-6 py-5 lg:px-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center border border-[#C4BACB] text-[#7138BB]">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>
                    <span aria-hidden="true" className="font-mono text-xs text-neutral-500">{step.number}</span>
                    </div>
                    <h3 className="aey-heading text-2xl text-[#7138BB]">{step.title}</h3>
                  </div>
                  <p className="px-6 py-5 text-sm leading-relaxed text-neutral-700 md:text-base lg:px-8">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
