import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    return ['#home', '#portfolio', '#pricing', '#about', '#book'].includes(hash) ? hash : '#home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (['#home', '#portfolio', '#pricing', '#about', '#book'].includes(hash)) {
        setActiveHash(hash);
      } else {
        setActiveHash('#home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    // Sync initially
    handleHash();

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const links = [
    { num: '01', label: 'Selected Work', href: '#portfolio' },
    { num: '02', label: 'Services', href: '#about' },
    { num: '03', label: 'Pricing & Offers', href: '#pricing' },
    { num: '04', label: 'Book a Call', href: '#book' }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 md:py-5 backdrop-blur-md border-b border-white/[0.06] bg-[#050505]/80 transition-all duration-300"
    >
      {/* Brand logo */}
      <a href="#home" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <img 
            src="/logo.svg" 
            className="w-full h-full rounded-full shadow-[0_4px_12px_rgba(139,92,246,0.15)] group-hover:scale-108 transition-transform duration-500" 
            alt="Aeymotion Logo" 
          />
        </div>
        <span className="font-sans text-[21px] font-black uppercase tracking-tighter text-[#F4F4F5] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F59E7B] group-hover:via-[#A855F7] group-hover:to-[#8B5CF6] group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300">
          Aeymotion
        </span>
      </a>

      {/* Matching Nav Links: 01 WORK, 02 SERVICES, etc. */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase font-semibold tracking-wider transition-all duration-300 relative py-1 flex items-center gap-1.5 ${
                isActive 
                  ? "text-[#8B5CF6]" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="font-mono text-[9px] text-neutral-500">{link.num}</span>
              <span>{link.label}</span>
              {isActive && (
                <motion.span 
                  layoutId="activeHeaderIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]"
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
              <span key={link.label} className="text-[10px] font-bold bg-[#8B5CF6]/20 text-[#A855F7] rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                {link.label}
              </span>
            );
          })}
        </div>
        <button className="flex flex-col gap-1.5 justify-center items-end w-8 h-8 group focus:outline-none">
          <span className="w-6 h-[1.5px] bg-white group-hover:w-8 transition-all duration-300" />
          <span className="w-4 h-[1.5px] bg-white group-hover:w-8 transition-all duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
