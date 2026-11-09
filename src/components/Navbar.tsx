import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Approach', href: '/#process' },
    { label: 'Offers', href: '/#services' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    setMobileMenuOpen(false);
    const destination = new URL(href, window.location.href);
    // Allow normal navigation to another page, including its section hash.
    if (destination.pathname !== window.location.pathname || !destination.hash) return;
    const element = document.getElementById(destination.hash.slice(1));
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-[#FBF8FF]/85 backdrop-blur-md border-b border-purple-200/60 py-3 shadow-xs" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/#hero" 
          onClick={(e) => handleNavClick(e, '/#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <img 
              src="/logo.svg" 
              className="w-full h-full rounded-full border-none group-hover:scale-105 transition-transform duration-300" 
              alt="Aeymotion Logo" 
            />
          </div>
          <span className="font-sans text-xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-[#8C4BFF] transition-colors duration-300">
            Aeymotion
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors duration-200 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] aey-gradient-bg group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onBookCall}
            className="px-5 py-2.5 aey-gradient-action text-[#17151B] text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            Book a call
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onBookCall}
            className="px-3.5 py-1.5 aey-gradient-action text-[#17151B] text-[10px] font-bold uppercase tracking-wider rounded-lg"
          >
            Book a call
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-200/50 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF9F5] border-b border-neutral-200 px-6 py-6 space-y-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold uppercase tracking-wider text-neutral-800 hover:text-[#8C4BFF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookCall();
                  }}
                  className="w-full py-3 aey-gradient-action text-[#17151B] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
                >
                  Book a call
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
