import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import PortfolioBooking from './components/PortfolioBooking';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';

export default function App() {
  const isPortfolioPage = window.location.pathname.replace(/\/$/, '') === '/portfolio';

  useEffect(() => {
    if (isPortfolioPage) document.title = 'Portfolio | Aeymotion';
  }, [isPortfolioPage]);

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleOpenCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div 
      className="relative min-h-screen text-[#171717] font-sans selection:bg-[#8C4BFF] selection:text-white flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #FBF8FF 0%, #F5ECFD 16%, #FBF2FB 32%, #F5ECFD 48%, #F9F1FC 64%, #F5ECFD 80%, #FBF8FF 92%, #F5ECFD 100%)'
      }}
    >
      {/* Fixed Navigation */}
      <Navbar onBookCall={handleOpenCalendly} />

      {/* Main Single Page Sections */}
      <main className="w-full flex-grow">
        {isPortfolioPage ? (
          <PortfolioGrid fullPage />
        ) : (
          <>
            <Hero onBookCall={handleOpenCalendly} />
            <PortfolioGrid limit={4} />
            <ProcessSection />
            <ServicesSection onBookCall={handleOpenCalendly} />
            <div id="about" className="max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20 scroll-mt-24">
              <PortfolioBooking />
            </div>
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onBookCall={handleOpenCalendly} />

      {/* Reusable Calendly Booking Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </div>
  );
}
