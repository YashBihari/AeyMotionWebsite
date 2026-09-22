import React from 'react';
import { BRAND_LINKS } from '../data/config';
import OctopusInteractive from './OctopusInteractive';
import UnderwaterEnvironment from './UnderwaterEnvironment';

interface FooterProps {
  onBookCall: () => void;
}

export default function Footer({ onBookCall }: FooterProps) {
  const handleScrollNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-white pt-14 md:pt-20 pb-0 px-6 sm:px-8 md:px-12 relative overflow-hidden font-sans flex flex-col justify-between min-h-[640px] md:min-h-[700px]">
      {/* Subtle Underwater Atmospheric Backdrop */}
      <UnderwaterEnvironment />

      {/* Top row: Brand, Navigation, Connect info */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start relative z-20 mb-12 md:mb-16">
        
        {/* Left column: Brand & Positioning Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              className="w-7 h-7 rounded-full border-none" 
              alt="Aeymotion Logo" 
            />
            <span className="text-xl font-black tracking-tight uppercase text-white">
              Aeymotion
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
            Product storytelling and launch creative for B2B AI and technical SaaS companies.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${BRAND_LINKS.email}`}
              className="inline-block text-xs font-mono font-bold text-[#E46BC5] hover:text-white border-b border-[#E46BC5] hover:border-white transition-colors duration-200 pb-0.5 focus:outline-none focus:ring-2 focus:ring-[#8C4BFF] rounded-xs"
            >
              {BRAND_LINKS.email}
            </a>
          </div>
        </div>

        {/* Center column: Section Navigation Links */}
        <div className="flex flex-col gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <span className="text-[10px] font-bold text-[#8C4BFF] mb-1">NAVIGATION</span>
          <a href="#work" onClick={(e) => handleScrollNav(e, 'work')} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm w-fit">Work</a>
          <a href="#services" onClick={(e) => handleScrollNav(e, 'services')} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm w-fit">Offers</a>
          <a href="#process" onClick={(e) => handleScrollNav(e, 'process')} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm w-fit">Approach</a>
          <a href="#about" onClick={(e) => handleScrollNav(e, 'about')} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm w-fit">About</a>
          <button onClick={onBookCall} className="text-left hover:text-white transition-colors uppercase cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm w-fit">Plan your launch</button>
        </div>

        {/* Right column: Social links & Copyright */}
        <div className="flex flex-col gap-4 items-start md:items-end md:text-right">
          <span className="text-[10px] font-mono font-bold text-[#8C4BFF] uppercase tracking-wider">CONNECT</span>
          <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href={BRAND_LINKS.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm">Dribbble</a>
            <a href={BRAND_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm">LinkedIn</a>
            <a href={BRAND_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C4BFF] rounded-sm">Instagram</a>
          </div>

          <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 pt-4">
            © {new Date().getFullYear()} Aeymotion Studio. All rights reserved.
          </p>
        </div>

      </div>

      {/* Bottom row: Interactive Octopus Artwork */}
      <div className="w-full flex justify-center relative z-10 select-none pointer-events-none mt-auto">
        <OctopusInteractive />
      </div>
    </footer>
  );
}
