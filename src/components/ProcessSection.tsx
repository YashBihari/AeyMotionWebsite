import type { PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import AeymotionBackground from './AeymotionBackground';
import { PROCESS_SECTION } from '../data/content';

type ProcessStep = (typeof PROCESS_SECTION.steps)[number];

function ProcessCell({ step }: { step: ProcessStep }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const size = useMotionValue(1);
  const rotateX = useSpring(x, { stiffness: 230, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 230, damping: 24 });
  const scale = useSpring(size, { stiffness: 260, damping: 26 });

  const tilt = (event: PointerEvent<HTMLLIElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const horizontal = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - .5) * 2));
    const vertical = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - .5) * 2));
    x.set(-vertical * 9);
    y.set(horizontal * 9);
    size.set(.95);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    size.set(1);
  };

  return (
    <li
      className="group relative isolate min-w-0 border-b border-r border-[#C4BACB]"
      onPointerMove={tilt}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#FFD5A0,#F5A459_23%,#D68A98_48%,#A35DCD_73%,#7027F1)] opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"
      />
      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY, scale, transformPerspective: 700 }}
        className="relative h-full bg-page-surface px-6 py-5 motion-safe:transition-shadow motion-safe:duration-300 motion-safe:group-hover:shadow-[0_6px_20px_#25143726] lg:px-8"
      >
        <div className="flex items-center gap-3">
          <h3 className="aey-heading min-w-0 text-2xl text-neutral-900">{step.title}</h3>
          <span aria-hidden="true" className="ml-auto shrink-0 font-mono text-xs text-neutral-500">{step.number}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">{step.description}</p>
      </motion.div>
    </li>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden scroll-mt-24 py-12 font-sans md:py-16 lg:py-20"
    >
      <AeymotionBackground variant="process" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <h2 id="process-title" className="aey-heading mb-6 text-center text-[1.40625rem] text-neutral-900 sm:text-[1.6875rem] md:mb-8 md:text-[2.25rem] lg:text-[2.8125rem]">
          {PROCESS_SECTION.title}
        </h2>

        <ol className="grid grid-cols-1 border-l border-t border-[#C4BACB] sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_SECTION.steps.map(step => <ProcessCell key={step.number} step={step} />)}
        </ol>
      </div>
    </section>
  );
}
