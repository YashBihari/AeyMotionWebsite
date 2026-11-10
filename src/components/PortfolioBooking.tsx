import { useId } from 'react';
import { ArrowUpRight } from 'lucide-react';

function GlassLaunchArtwork() {
  const id = useId();
  const paint = (part: string) => `url(#${id}-${part})`;

  return (
    <svg viewBox="0 0 620 470" aria-hidden="true" focusable="false" className="mx-auto h-auto w-full max-w-[540px]">
      <defs>
        <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" /><stop offset=".4" stopColor="#eeedf5" /><stop offset=".72" stopColor="#d6d9e6" /><stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1=".65" x2="1" y2=".35">
          <stop stopColor="#878b9c" /><stop offset=".12" stopColor="#fff" /><stop offset=".28" stopColor="#afb3c4" /><stop offset=".45" stopColor="#f9f9fd" /><stop offset=".63" stopColor="#969bad" /><stop offset=".79" stopColor="#fff" /><stop offset="1" stopColor="#afb3c6" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a4a7b6" /><stop offset=".24" stopColor="#fff" /><stop offset=".5" stopColor="#bfc2d1" /><stop offset=".76" stopColor="#fff" /><stop offset="1" stopColor="#8d91a4" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-25%" y="-50%" width="150%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <g fill="#292633" opacity=".17" filter={paint('shadow')}>
        <ellipse cx="281" cy="302" rx="198" ry="26" transform="rotate(-12 281 302)" />
        <ellipse cx="451" cy="402" rx="114" ry="21" />
      </g>
      <path d="M111 78Q89 68 92 97L117 304Q120 327 145 321L513 225Q540 218 536 196L111 78Z" fill={paint('edge')} stroke="#c8cad5" strokeWidth="2" />
      <path d="M111 54Q84 46 87 77L113 274Q116 304 145 296L519 207Q549 199 521 180Z" fill={paint('face')} stroke={paint('rim')} strokeWidth="9" strokeLinejoin="round" />
      <path d="M113 59Q91 54 94 79L119 274Q122 297 145 290L516 202Q538 196 519 185Z" fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="3" />
      <path d="M101 67L128 279M140 299L515 210" fill="none" stroke="#fff" strokeOpacity=".68" strokeWidth="2" strokeLinecap="round" />
      <path d="M345 348C345 316 393 290 452 290S558 316 558 348V367C558 400 510 425 452 425S345 400 345 367Z" fill={paint('edge')} stroke="#bfc1ce" strokeWidth="2" />
      <ellipse cx="452" cy="346" rx="106" ry="55" fill={paint('face')} stroke={paint('rim')} strokeWidth="7" />
      <ellipse cx="452" cy="346" rx="101" ry="50" fill="none" stroke="#fff" strokeOpacity=".86" strokeWidth="2.5" />
      <path d="M356 372C374 399 444 418 504 403" fill="none" stroke="#fff" strokeOpacity=".65" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function PortfolioBooking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-24 bg-page-surface px-6 py-12 sm:py-16 md:px-12 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1.15fr_1fr] md:gap-12">
        <GlassLaunchArtwork />
        <div className="mx-auto w-full max-w-sm text-center md:mx-0 md:text-left">
          <h2 id="booking-title" className="aey-heading text-[1.6875rem] text-neutral-900 md:text-[2.25rem] lg:text-[2.8125rem]">
            Your next launch starts here
          </h2>
          <p className="mx-auto mt-4 max-w-xs md:mx-0 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Tell us what you’re building. We’ll figure out the right approach together.
          </p>
          <a href="/book-a-call" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4">
            Book a call <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
