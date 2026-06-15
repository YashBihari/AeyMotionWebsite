import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import WhiteLabel from './components/WhiteLabel';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      <div className="w-full">
        <Navbar />
        
        <main className="w-full pt-[72px] md:pt-[96px] flex-grow">
          {/* Section 1: Portfolio */}
          <section id="portfolio" className="scroll-mt-[120px]">
            <Hero />
            <Clients />
          </section>

          {/* Section 3: Process */}
          <section id="process" className="scroll-mt-[120px]">
            <Process />
          </section>

          {/* Section 5: Pricing */}
          <section id="pricing" className="scroll-mt-[120px]">
            <Pricing />
            <WhiteLabel />
          </section>

          {/* Section 4: About */}
          <section id="about" className="scroll-mt-[120px]">
            <WhyUs />
          </section>

          {/* Section 5: Contact Us */}
          <section id="contact" className="scroll-mt-[120px]">
            <Contact />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

