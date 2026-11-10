import { MessagesSquare, FileText, PanelsTopLeft, Clapperboard, MessageSquareCheck, PackageCheck } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROCESS_SECTION } from '../data/content';

const stepIcons = [MessagesSquare, FileText, PanelsTopLeft, Clapperboard, MessageSquareCheck, PackageCheck];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden scroll-mt-24 py-12 font-sans md:py-16 lg:py-20"
    >
      <AeymotionBackground variant="process" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <h2 id="process-title" className="aey-heading mb-9 text-center text-3xl text-neutral-900 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl">
          {PROCESS_SECTION.title}
        </h2>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {PROCESS_SECTION.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? FileText;

            return (
              <li key={step.number} className="flex flex-col rounded-3xl border border-[#E5DDEA] bg-white/90 p-6 lg:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-[#E8DDF4] bg-[#F7F1FC] text-[#7138BB]">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <span aria-hidden="true" className="font-mono text-xs text-neutral-500">{step.number}</span>
                </div>
                <h3 className="aey-heading text-2xl text-[#7138BB]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
