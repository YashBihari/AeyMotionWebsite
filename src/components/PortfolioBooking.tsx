import { useId } from 'react';
import { CALENDLY_URL } from '../data/config';
import BookingArtwork from './BookingArtwork';

export default function PortfolioBooking() {
  const waveId = useId().replace(/:/g, '');

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
      <div
        className="relative w-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/90 p-[15px] shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
        style={{ background: 'linear-gradient(135deg, #FFFFFFBF, #F5EBFF8C 50%, #FDF2F88C)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to top, #C084FC88 0%, #D8B4FE80 24%, #F5D0FE66 48%, #F3E8FF22 72%, #F3E8FF00 100%)' }}
        />
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 640"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id={waveId} x1="60" y1="340" x2="900" y2="670" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C084FC" stopOpacity=".15" />
              <stop offset=".5" stopColor="#E879F9" stopOpacity=".24" />
              <stop offset="1" stopColor="#F5D0FE" stopOpacity=".08" />
            </linearGradient>
          </defs>
          <path d="M-80 370C170 110 390 660 740 390C940 240 1080 330 1280 190V720H-80Z" fill={`url(#${waveId})`} />
          <path d="M-80 440C190 170 470 700 780 460C980 310 1110 420 1280 310V720H-80Z" fill="#F5D0FE" fillOpacity=".16" />
          <path d="M-80 395C190 145 390 665 755 415C960 260 1100 355 1280 240" stroke="#FFFFFF" strokeOpacity=".42" strokeWidth="1.5" />
          <path d="M-70 465C190 220 470 720 800 490C1000 340 1140 440 1280 350" stroke="#F3E8FF" strokeOpacity=".55" strokeWidth="1.2" />
        </svg>
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_800px] gap-5 items-center">
          <BookingArtwork />
          <div className="relative min-w-0 w-full">
            {/* Keep Calendly's viewport wide enough for its horizontal layout.
                Its visible 800px panel aligns with the right-hand column. */}
            <iframe
              src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(window.location.host)}&embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
              title="Book a call with Aeymotion on Calendly"
              width="100%"
              height="700"
              loading="lazy"
              className="relative block w-full h-[780px] md:h-[700px] min-[928px]:-mt-[66px] min-[928px]:-mb-[30px] xl:w-[1000px] xl:max-w-none xl:-ml-[100px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
