import { CALENDLY_URL } from '../data/config';

export default function PortfolioBooking() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      className="scroll-mt-24 w-full max-w-[1032px] mx-auto mt-16 md:mt-24 rounded-[24px] border border-white/90 bg-white/65 p-[15px] shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
    >
      <h2
        id="booking-title"
        className="mb-[15px] text-2xl md:text-3xl font-black tracking-tight text-neutral-900 leading-[1.05]"
      >
        Book a call
      </h2>
      <iframe
        src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(window.location.host)}&embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
        title="Book a call with Aeymotion on Calendly"
        width="100%"
        height="700"
        loading="lazy"
        className="block w-full h-[780px] md:h-[700px] border-0"
      />
    </section>
  );
}
