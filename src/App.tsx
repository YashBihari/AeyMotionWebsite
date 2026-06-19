import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import WhiteLabel from './components/WhiteLabel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<'portfolio' | 'pricing' | 'about' | 'contact'>(() => {
    const hash = window.location.hash.toLowerCase().replace('#', '');
    if (['portfolio', 'pricing', 'about', 'contact'].includes(hash)) {
      return hash as 'portfolio' | 'pricing' | 'about' | 'contact';
    }
    return 'portfolio';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (['portfolio', 'pricing', 'about', 'contact'].includes(hash)) {
        setActivePage(hash as 'portfolio' | 'pricing' | 'about' | 'contact');
      } else {
        // Fallback to portfolio if hash is empty or unrecognized
        setActivePage('portfolio');
        if (hash === '') {
          window.location.hash = '#portfolio';
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set default hash on initial load if none exists
    if (!window.location.hash) {
      window.location.hash = '#portfolio';
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
            {activePage === 'portfolio' && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Hero />
                <Clients />
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
                <WhiteLabel />
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

            {activePage === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Contact />
              </motion.div>
            )}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

