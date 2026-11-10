import { Fragment, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RollingLabel from './RollingLabel';

const before = 'You’ve built something worth showing. The next challenge is helping people see what makes it useful. We work with tech teams to find the clearest story in their product, then turn that story into a video. A focused feature spotlight can make a new release click. A launch film can give people a reason to stop and watch. An explainer can make a complex workflow feel simple.';
const after = 'Show us what you’re building, who it’s for, and what you want people to do next. We’ll talk through the idea, the right format, and what it takes to get it ready for launch. You’ll work directly with us from the first conversation to the final cut.';

const palette = [[169, 76, 18], [163, 65, 112], [112, 39, 241]];

function wordColor(progress: number) {
  const position = Math.min(1, Math.max(0, progress)) * (palette.length - 1);
  const start = Math.min(palette.length - 2, Math.floor(position));
  const ratio = position - start;
  return `rgb(${palette[start].map((channel, i) => Math.round(channel + (palette[start + 1][i] - channel) * ratio)).join(' ')})`;
}

function ReactiveWords({ text }: { text: string }) {
  return text.split(' ').map((word, index) => (
    <Fragment key={index}>
      {index > 0 && ' '}
      <span data-reactive-word className="inline-block motion-safe:transition-[transform,color] motion-safe:duration-200 motion-safe:ease-out">{word}</span>
    </Fragment>
  ));
}

export default function PortfolioBooking() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = textRef.current;
    if (!paragraph) return;
    const words = Array.from(paragraph.querySelectorAll<HTMLElement>('[data-reactive-word]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const affected = new Map<HTMLElement, Animation | null>();
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const clearWord = (word: HTMLElement) => {
      word.style.removeProperty('color');
      affected.get(word)?.cancel();
    };

    const update = () => {
      frame = 0;
      const bounds = paragraph.getBoundingClientRect();
      const localX = pointerX - bounds.left;
      const localY = pointerY - bounds.top;
      const radius = 108;
      const next = new Map<HTMLElement, { color: string; strength: number; index: number }>();

      words.forEach((word, index) => {
        const dx = word.offsetLeft + word.offsetWidth / 2 - localX;
        const dy = word.offsetTop + word.offsetHeight / 2 - localY;
        const distance = Math.hypot(dx, dy);
        if (distance >= radius) return;
        const strength = 1 - distance / radius;
        next.set(word, {
          color: wordColor((localX / Math.max(1, bounds.width)) * .65 + (dx / radius + 1) * .175),
          strength,
          index,
        });
      });

      for (const word of affected.keys()) {
        if (!next.has(word)) {
          clearWord(word);
          affected.delete(word);
        }
      }
      for (const [word, style] of next) {
        word.style.color = style.color;
        const amount = style.strength;
        const direction = style.index % 2 === 0 ? 1 : -1;
        const keyframes = [
          { transform: 'translate(0, 0) rotate(0deg)' },
          { transform: `translate(${direction * amount * 3}px, ${-amount * 4}px) rotate(${direction * amount * 2}deg)` },
          { transform: `translate(${-direction * amount * 2}px, ${amount * 2}px) rotate(${-direction * amount * 1.5}deg)` },
          { transform: 'translate(0, 0) rotate(0deg)' },
        ];
        if (affected.has(word)) {
          const effect = affected.get(word)?.effect;
          if (effect instanceof KeyframeEffect) effect.setKeyframes(keyframes);
        } else {
          affected.set(word, reducedMotion.matches ? null : word.animate(keyframes, {
            duration: 380 + (style.index % 5) * 55,
            easing: 'ease-in-out',
            iterations: Infinity,
          }));
        }
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };

    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      for (const word of affected.keys()) clearWord(word);
      affected.clear();
    };

    paragraph.addEventListener('pointermove', move, { passive: true });
    paragraph.addEventListener('pointerleave', reset);
    paragraph.addEventListener('pointercancel', reset);
    reducedMotion.addEventListener('change', reset);
    return () => {
      paragraph.removeEventListener('pointermove', move);
      paragraph.removeEventListener('pointerleave', reset);
      paragraph.removeEventListener('pointercancel', reset);
      reducedMotion.removeEventListener('change', reset);
      reset();
    };
  }, []);

  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-24 bg-page-surface px-6 py-14 md:px-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p ref={textRef} className="relative text-pretty text-lg leading-[1.5] tracking-[-.025em] text-neutral-500 sm:text-xl md:text-[clamp(1.375rem,2.35vw,2rem)]">
          <ReactiveWords text={before} />
          <span className="my-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          <mark id="booking-title" className="box-decoration-clone bg-[#E8DBFF] px-1 font-semibold text-neutral-950">
            Your next launch starts here.
          </mark>{' '}
          <a href="/book-a-call" className="group/roll inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-[#27232D] bg-[#17151B] px-4 py-2 align-middle text-sm font-semibold tracking-normal text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]">
            <RollingLabel text="Book a call" /> <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          </span>
          <ReactiveWords text={after} />
        </p>
      </div>
    </section>
  );
}
