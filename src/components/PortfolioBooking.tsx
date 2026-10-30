import { CALENDLY_URL } from '../data/config';

export default function PortfolioBooking() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      className="scroll-mt-24 w-full mt-16 md:mt-24 font-sans"
    >
      <div className="relative z-20 mb-8 md:mb-12">
        <h2
          id="booking-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.98]"
        >
          Book a call
        </h2>
        <p className="text-neutral-600 font-normal text-sm md:text-base max-w-xl mt-2 leading-relaxed">
          Tell me what you’re building. Let’s find the right video for your product.
        </p>
      </div>
      <div className="relative w-full max-w-[1032px] mx-auto p-[15px]">
      {/* Match the background to Calendly's visible 800px panel, plus 15px on each side.
          Keep the iframe wider so its calendar retains the horizontal layout. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[832px] -translate-x-1/2 rounded-[24px] border border-white/90 bg-white/65 shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
      />
      {/* Offset Calendly's transparent desktop margins without clipping the booking flow. */}
      <iframe
        src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(window.location.host)}&embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
        title="Book a call with Aeymotion on Calendly"
        width="100%"
        height="700"
        loading="lazy"
        className="relative z-10 block w-full h-[780px] md:h-[700px] min-[928px]:-mt-[66px] min-[928px]:-mb-[30px] border-0"
      />
      </div>
    </section>
  );
}
