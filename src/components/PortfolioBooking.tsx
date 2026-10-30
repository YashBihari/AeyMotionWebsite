import { CALENDLY_URL } from '../data/config';

export default function PortfolioBooking() {
  return (
    <section
      id="booking"
      aria-label="Book a call"
      className="scroll-mt-24 mt-16 md:mt-24"
    >
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
