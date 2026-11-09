import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 1440 850"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-pearl" x2="1" y2="1">
            <stop stopColor="#FAF9FC" />
            <stop offset=".54" stopColor="#F5F3F8" />
            <stop offset="1" stopColor="#FCFAFE" />
          </linearGradient>
          <linearGradient id="hero-plate" x2=".3" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FDFBFF" />
          </linearGradient>
          <linearGradient id="hero-bevel" x1="0" y1=".65" x2="1" y2=".15">
            <stop stopColor="#B8B4C1" />
            <stop offset=".22" stopColor="#D8D3E0" />
            <stop offset=".4" stopColor="#FFFFFF" />
            <stop offset=".66" stopColor="#EAE5F1" />
            <stop offset=".83" stopColor="#B8AFC7" />
            <stop offset="1" stopColor="#F6F3FA" />
          </linearGradient>
          <filter id="hero-plate-shadow" x="-15%" y="-20%" width="130%" height="150%">
            <feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#2E2340" floodOpacity=".10" />
          </filter>
          <path id="hero-top-plate" d="M302-90H1540V580C1410 340 1242 198 933 198H365C330 198 302 173 302 136Z" />
          <path id="hero-left-plate" d="M-130 180L263 570C291 598 274 624 242 624H-130Z" />
          <path id="hero-bottom-plate" d="M302 950V682C302 647 328 622 365 622H892C1059 622 1138 728 1138 863V950Z" />
        </defs>
        <rect width="1440" height="850" fill="url(#hero-pearl)" />
        <g fill="url(#hero-plate)" stroke="url(#hero-bevel)" strokeWidth="15" strokeLinejoin="round" filter="url(#hero-plate-shadow)">
          <use href="#hero-top-plate" />
          <use href="#hero-left-plate" />
          <use href="#hero-bottom-plate" />
        </g>
        <g fill="url(#hero-plate)" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" transform="translate(0 -5)">
          <use href="#hero-top-plate" />
          <use href="#hero-left-plate" />
          <use href="#hero-bottom-plate" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-white/35 sm:bg-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FBF8FF] to-transparent" />
    </div>
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
