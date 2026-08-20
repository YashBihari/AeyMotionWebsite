import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ServicesSection from './components/ServicesSection';
import ProblemsSection from './components/ProblemsSection';
import ProcessSection from './components/ProcessSection';
import WhyAeymotionSection from './components/WhyAeymotionSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';

export default function App() {
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

      {/* Main Single Page Sections in Exact Required Sequence */}
      <main className="w-full flex-grow">
        <Hero onBookCall={handleOpenCalendly} />
        <PortfolioGrid />
        <ServicesSection onBookCall={handleOpenCalendly} />
        <ProblemsSection />
        <ProcessSection />
        <WhyAeymotionSection />
        <AboutSection onBookCall={handleOpenCalendly} />
      </main>

      {/* Footer */}
      <Footer onBookCall={handleOpenCalendly} />

      {/* Reusable Calendly Booking Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </div>
  );
}
