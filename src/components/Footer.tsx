import { ArrowUp } from 'lucide-react';
import { BRAND_LINKS } from '../data/config';

const linkStyle = 'w-fit text-neutral-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4';

const socialLinks = [
  { label: 'Dribbble', href: BRAND_LINKS.dribbble },
  { label: 'LinkedIn', href: BRAND_LINKS.linkedin },
  { label: 'Instagram', href: BRAND_LINKS.instagram },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] px-6 pb-8 pt-20 font-sans text-white sm:px-8 md:px-12 md:pb-10 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-5 gap-y-9 text-sm md:grid-cols-4 md:gap-x-8">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4">
              <img src="/logo.svg" alt="" width={28} height={28} className="size-7 rounded-full" />
              <span className="font-serif text-lg italic">Aeymotion</span>
            </a>
            <a href={`mailto:${BRAND_LINKS.email}`} className={`mt-3 block break-all ${linkStyle}`}>
              {BRAND_LINKS.email}
            </a>
          </div>
          <div>
            <h2 className="mb-4 font-semibold"><a href="/#services" className="hover:underline underline-offset-4">Services</a></h2>
            <ul className="space-y-2.5 text-neutral-400">
              <li>Feature spotlight</li>
              <li>Product launch</li>
              <li>Product explainer</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-semibold">Studio</h2>
            <ul className="space-y-2.5">
              <li><a className={linkStyle} href="/#process">How we work</a></li>
              <li><a className={linkStyle} href="/#faq">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-semibold">Connect</h2>
            <ul className="space-y-2.5">
              {socialLinks.map(({ label, href }) => (
                <li key={label}><a className={linkStyle} href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-400 md:mt-16">
          <p>© {new Date().getFullYear()} Aeymotion Studio. All rights reserved.</p>
          <a href="/#hero" className="inline-flex items-center gap-1.5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
