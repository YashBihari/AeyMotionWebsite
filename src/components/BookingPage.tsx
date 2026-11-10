import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CALENDLY_URL } from '../data/config';

export default function BookingPage() {
  const embedUrl = new URL(CALENDLY_URL);
  embedUrl.searchParams.set('embed_domain', window.location.host);
  embedUrl.searchParams.set('embed_type', 'Inline');
  embedUrl.searchParams.set('background_color', 'ffffff');
  embedUrl.searchParams.set('text_color', '171717');
  embedUrl.searchParams.set('primary_color', '8c4bff');

  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-24 px-4 pb-12 pt-28 sm:px-6 md:pt-36">
      <div className="mx-auto max-w-[1100px]">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">
          <ArrowLeft size={16} aria-hidden="true" /> Back to home
        </a>
        <h1 id="booking-title" className="aey-heading mt-6 text-center text-3xl text-neutral-900 sm:text-4xl md:text-5xl">Book a call</h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-neutral-600 sm:text-base">
          Pick a time to tell us what you’re building and talk through the right video for your launch.
        </p>
        <iframe
          src={embedUrl.toString()}
          title="Book a call with Aeymotion on Calendly"
          className="mt-5 block h-[780px] w-full border-0 md:h-[720px]"
        />
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mx-auto flex w-fit items-center gap-1.5 text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900">
          Open Calendly in a new tab <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
