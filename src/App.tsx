import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import PortfolioBooking from './components/PortfolioBooking';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

export default function App() {
  const isPortfolioPage = window.location.pathname.replace(/\/$/, '') === '/portfolio';

  const isBookingPage = window.location.pathname.replace(/\/$/, '') === '/book-a-call';

  useEffect(() => {
    if (isPortfolioPage) document.title = 'Portfolio | Aeymotion';
    if (isBookingPage) document.title = 'Book a call | Aeymotion';
  }, [isPortfolioPage, isBookingPage]);

  useEffect(() => {
    let active = true;
    let frame: number | undefined;

    const scrollToHash = () => {
      if (!active) return;
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (active) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
    };

    // React mounts the sections after the browser initially processes the URL.
    scrollToHash();
    // Font loading can change the height of the sections above the target.
    document.fonts.ready.then(scrollToHash);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      active = false;
      if (frame !== undefined) cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  const handleScrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div 
      className="relative isolate min-h-screen bg-page-surface text-[#171717] font-sans selection:bg-[#8C4BFF] selection:text-white flex flex-col justify-between"
    >
      {/* Fixed Navigation */}
      <Navbar onBookCall={handleScrollToBooking} />

      {/* Main Single Page Sections */}
      <main className="w-full flex-grow">
        {isBookingPage ? (
          <BookingPage />
        ) : isPortfolioPage ? (
          <PortfolioGrid fullPage />
        ) : (
          <>
            <Hero onBookCall={handleScrollToBooking} />
            <PortfolioGrid limit={4} />
            <ServicesSection />
            <ProcessSection />
            <FAQSection />
            <div id="about" className="scroll-mt-24">
              <PortfolioBooking />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
