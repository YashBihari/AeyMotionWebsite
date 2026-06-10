import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash.toLowerCase() || '#portfolio');

  useEffect(() => {
    const sections = ['portfolio', 'pricing', 'about', 'contact'];
    
    const handleScroll = () => {
      let currentSection = 'portfolio';
      // Buffer of scroll offset for better natural transition timing
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      }
      setActiveHash(`#${currentSection}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially
    handleScroll();

    const handleHash = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash.toLowerCase());
      }
    };
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const links = [
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT US', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-16 md:py-6 backdrop-blur-md border-b border-black/[0.03] bg-white/50 transition-all duration-300"
    >
      {/* Brand logo at the place of Srinika logo */}
      <a href="#portfolio" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <img 
            src="/logo.svg" 
            className="w-full h-full rounded-full shadow-[0_4px_12px_rgba(138,46,255,0.15)] group-hover:scale-108 transition-transform duration-500" 
            alt="Aeymotion Logo" 
          />
        </div>
        <span className="font-sans text-[21px] font-black uppercase tracking-tighter text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F4B179] group-hover:via-[#E0B3CF] group-hover:to-[#8A2EFF] group-hover:drop-shadow-[0_0_15px_rgba(138,46,255,0.45)] transition-all duration-300">
          Aeymotion
        </span>
      </a>

      {/* Matching Nav Links: PORTFOLIO, SERVICES, PRICING, ABOUT, CONTACT US */}
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase font-semibold tracking-[0.12em] transition-all duration-300 relative py-1 ${
                isActive 
                  ? "text-[#8A2EFF] hover:text-[#8A2EFF]" 
                  : "text-neutral-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF]"
              }`}
            >
              <span>{link.label}</span>
              {isActive && (
                <motion.span 
                  layoutId="activeHeaderIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#F4B179] to-[#8A2EFF]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Actions or indicators */}
      <div className="flex items-center gap-4">
        <div className="md:hidden flex gap-2">
          {links.map((link) => {
            const isActive = activeHash === link.href;
            if (!isActive) return null;
            return (
              <span key={link.label} className="text-[10px] font-bold bg-[#8A2EFF]/10 text-[#8A2EFF] rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                {link.label}
              </span>
            );
          })}
        </div>
        <button className="flex flex-col gap-1.5 justify-center items-end w-8 h-8 group focus:outline-none">
          <span className="w-6 h-[1.5px] bg-neutral-900 group-hover:w-8 transition-all duration-300" />
          <span className="w-4 h-[1.5px] bg-neutral-900 group-hover:w-8 transition-all duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
