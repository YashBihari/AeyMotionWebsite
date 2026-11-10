import { BRAND_LINKS } from '../data/config';

const socialLinks = [
  { label: 'Dribbble', href: BRAND_LINKS.dribbble },
  { label: 'LinkedIn', href: BRAND_LINKS.linkedin },
  { label: 'Instagram', href: BRAND_LINKS.instagram },
] as const;

function SocialIcon({ label }: { label: (typeof socialLinks)[number]['label'] }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {label === 'Dribbble' && <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 4c4 4 7 9 9 15M3 11c6 0 12-2 16-5M6 19c4-5 9-7 15-6" />
      </>}
      {label === 'LinkedIn' && <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v6m0-9h.01M12 16v-6m0 2a2 2 0 0 1 4 0v4" />
      </>}
      {label === 'Instagram' && <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2B2B2B] to-[#202020] px-6 pb-9 pt-10 font-sans text-white sm:px-8 md:px-12 md:pb-11 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4">
            <img src="/Assets/aeymotion-script-wordmark.png" alt="Aeymotion" width={374} height={83} className="h-8 w-auto invert md:h-9" />
          </a>
          <a href={`mailto:${BRAND_LINKS.email}`} className="text-sm text-neutral-200 underline decoration-neutral-500 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4">
            {BRAND_LINKS.email}
          </a>
        </div>

        <div className="mt-9 text-center sm:mt-10">
          <nav aria-label="Social links" className="flex items-center justify-center gap-2">
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full text-neutral-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2">
                <SocialIcon label={label} />
              </a>
            ))}
          </nav>
          <p className="mt-3 text-sm text-neutral-300">© {new Date().getFullYear()} Aeymotion Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
