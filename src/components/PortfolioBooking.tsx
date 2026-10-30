import { CALENDLY_URL } from '../data/config';

export default function PortfolioBooking() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      className="scroll-mt-24 mt-16 md:mt-24 rounded-[28px] md:rounded-[32px] border border-white/90 bg-white/65 p-5 md:p-6 shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
    >
      <h2
        id="booking-title"
        className="mb-6 md:mb-8 text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.05]"
      >
        Book a call
      </h2>
      <iframe
        src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(window.location.host)}&embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
        title="Book a call with Aeymotion on Calendly"
        width="100%"
        height="720"
        loading="lazy"
        className="block w-full h-[780px] md:h-[720px] border-0"
      />
    </section>
  );
}
