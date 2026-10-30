import { ArrowUpRight, Check } from 'lucide-react';
import { CALENDLY_URL } from '../data/config';

const discussionPoints = [
  {
    title: 'Your product and audience',
    description: 'What you’re building, who it’s for, and the value you want people to understand.',
  },
  {
    title: 'Your video and launch goals',
    description: 'The story, style, and deliverables that fit your website, launch, or social channels.',
  },
  {
    title: 'Scope, timeline, and next steps',
    description: 'Your priorities, budget, and target date, so we can agree on the right approach.',
  },
];

export default function PortfolioBooking() {
  return (
    <section
      aria-labelledby="portfolio-booking-title"
      className="mt-16 md:mt-24 rounded-[28px] md:rounded-[32px] border border-white/90 bg-white/65 p-5 md:p-8 lg:p-10 shadow-[0_16px_60px_rgba(140,75,255,0.08)] backdrop-blur-md"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
        <div className="lg:py-4">
          <img
            src="/Assets/aeymotion-portrait.jpg"
            alt="Your creative partner at Aeymotion"
            width={480}
            height={480}
            loading="lazy"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-[0_8px_30px_rgba(140,75,255,0.12)] mb-7"
          />
          <h2
            id="portfolio-booking-title"
            className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.05]"
          >
            Book a call
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed max-w-md">
            Tell me what you’re building. Let’s explore how video can bring your product’s story to life.
          </p>

          <h3 className="mt-8 text-lg font-bold tracking-tight text-neutral-900">
            What we’ll discuss
          </h3>
          <ul className="mt-5 space-y-5">
            {discussionPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8C4BFF]/10 text-[#8C4BFF]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{point.title}</p>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-2xl border border-[#8C4BFF]/10 bg-white">
            <iframe
              src={`${CALENDLY_URL}?embed_type=Inline&background_color=ffffff&text_color=171717&primary_color=8c4bff`}
              title="Book a call with Aeymotion on Calendly"
              width="100%"
              height="780"
              loading="lazy"
              className="block w-full h-[780px] border-0"
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
