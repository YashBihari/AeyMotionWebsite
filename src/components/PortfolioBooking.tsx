import { ArrowUpRight } from 'lucide-react';
import { CALENDLY_URL } from '../data/config';

export default function PortfolioBooking() {
  return (
    <section
      id="booking"
      aria-labelledby="portfolio-booking-title"
      className="scroll-mt-24 max-w-[920px] mx-auto mt-16 md:mt-24 rounded-[28px] md:rounded-[32px] border border-white/90 bg-white/65 p-5 md:p-8 lg:p-10 shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
    >
      <div className="grid grid-cols-1 gap-8 md:gap-10 items-start">
        <div className="lg:pt-4">
          <h2
            id="portfolio-booking-title"
            className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.05]"
          >
            Book a call
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed max-w-md">
            Tell me what you’re building. Let’s explore how video can bring your product’s story to life.
          </p>


        </div>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-2xl border border-[#8C4BFF]/10 bg-white">
            <iframe
              src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(window.location.host)}&embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
              title="Book a call with Aeymotion on Calendly"
              width="100%"
              height="720"
              loading="lazy"
              className="block w-full h-[780px] md:h-[720px] border-0"
            />
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#6F2BFF] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            Open Calendly in a new tab
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
