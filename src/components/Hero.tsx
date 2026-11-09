import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at 18% 22%, #eee8f6 0%, transparent 56%), radial-gradient(ellipse at 86% 74%, #f3e9f6 0%, transparent 52%), linear-gradient(180deg, #fcfbfe, #fbf8ff)',
      }}
    />
  );
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#F8F6FB] px-6 pb-24 pt-28 text-center sm:px-10"
    >
      <HeroBackdrop />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#DDD6E5] bg-white/75 px-3.5 py-2 text-xs font-medium text-[#51465E] shadow-xs">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8C4BFF]" />
          Creative video partner for tech startups
        </p>
        <h1 id="hero-title" className="mt-5 max-w-5xl text-balance text-[clamp(2.125rem,4.3vw,4rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-[#17151B]">
          Make your product look premium.
          <span className="block">And impossible to ignore.</span>
        </h1>
        <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-[#514B58] sm:text-base">
          Product videos and launch creative for AI &amp; SaaS teams—built to show your value, elevate your brand, and give people a reason to care.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onBookCall}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#27232D] bg-[#17151B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#43266B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            Book a call <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
          <a
            href="#work"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DDD6E5] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#322A3A] transition-colors hover:border-[#A98BD5] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            See our work
          </a>
        </div>
        <p className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#5E5668]">
          <span>Worked with:</span>
          <span className="font-semibold">Seorce</span>
          <span className="font-semibold">Essenite</span>
          <span className="font-semibold">Melaya</span>
        </p>
      </div>
      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="absolute bottom-5 left-1/2 z-10 flex size-11 -translate-x-1/2 items-center justify-center rounded-full text-[#766584] transition-colors hover:bg-white/80 hover:text-[#43266B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4BFF]"
      >
        <ChevronDown className="size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
