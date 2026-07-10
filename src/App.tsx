import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionIndex from './components/SectionIndex';
import PortfolioGrid from './components/PortfolioGrid';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Process from './components/Process';
import ProofOfProcess from './components/ProofOfProcess';
import CTA from './components/CTA';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'portfolio' | 'pricing' | 'about' | 'book'>(() => {
    const hash = window.location.hash.toLowerCase().replace('#', '');
    if (['home', 'portfolio', 'pricing', 'about', 'book'].includes(hash)) {
      return hash as 'home' | 'portfolio' | 'pricing' | 'about' | 'book';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (['home', 'portfolio', 'pricing', 'about', 'book'].includes(hash)) {
        setActivePage(hash as 'home' | 'portfolio' | 'pricing' | 'about' | 'book');
      } else {
        // Fallback to home if hash is empty or unrecognized
        setActivePage('home');
        if (hash === '') {
          window.location.hash = '#home';
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set default hash on initial load if none exists
    if (!window.location.hash) {
      window.location.hash = '#home';
    } else {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Soft window scroll to top when activePage route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="relative min-h-screen selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      <div className="w-full flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />
          
          <main className="w-full pt-[72px] md:pt-[96px] flex-grow">
            {activePage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Hero />
                <SectionIndex />
                <PortfolioGrid />
                <WhyUs />
                <Pricing />
                <Process />
                <ProofOfProcess />
                <CTA />
                <BookingSection />
              </motion.div>
            )}

            {activePage === 'portfolio' && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-7xl mx-auto px-6 py-12 md:px-16 md:py-20 relative"
              >
                {/* Background glow layers for the portfolio page to make it extremely premium */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-gradient-to-tr from-[#8A2EFF]/5 via-[#E0B3CF]/10 to-[#F4B179]/5 blur-[120px] pointer-events-none -z-20" />
                <div className="absolute top-[25%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#8A2EFF]/5 blur-[100px] pointer-events-none -z-10" />
                <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#F4B179]/5 blur-[120px] pointer-events-none -z-10" />
                
                <PortfolioGrid />
              </motion.div>
            )}

            {activePage === 'pricing' && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-[120px]"
              >
                <Pricing />
              </motion.div>
            )}

            {activePage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <WhyUs />
                <Process />
              </motion.div>
            )}

            {activePage === 'book' && (
              <motion.div
                key="book"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <BookingSection />
              </motion.div>
            )}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

