import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  Tv, 
  Cpu, 
  Target, 
  Zap, 
  Clock, 
  ShieldCheck,
  Video
} from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import InteractiveTiltCard from './InteractiveTiltCard';

interface FAQItem {
  q: string;
  a: string;
}

export default function CTA() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const faqs: FAQItem[] = [
    {
      q: "Do we need to have a script ready?",
      a: "No. We can help shape the message, script, and visual story before animation starts."
    },
    {
      q: "How long does a project usually take?",
      a: "Most launch videos and feature packs take 2–4 weeks depending on scope, feedback speed, and complexity."
    },
    {
      q: "Do you work with SaaS and AI products?",
      a: "Yes. Aeymotion is built specifically for SaaS, AI, and product-led brands that need to explain complex products clearly."
    },
    {
      q: "Can you create assets for ads and social?",
      a: "Yes. We can deliver cutdowns and platform-ready formats for websites, LinkedIn, Instagram, YouTube Shorts, and paid ads."
    },
    {
      q: "Do you offer monthly support?",
      a: "Yes. The Monthly Motion Partner package is designed for teams that need ongoing product videos, feature videos, ads, and social motion assets."
    }
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050507]">
      
      {/* SECTION 2: FAQ TEASER */}
      <section id="faq-teaser" className="py-24 md:py-32 border-b border-white/[0.06] relative overflow-hidden font-sans">
        {/* Premium background system */}
        <AeymotionBackground variant="services" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="border-l-2 border-[#8C4BFF] pl-5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C4BFF] block">
                  07 / QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">
                  Before you book, here’s what most teams ask.
                </h2>
              </div>
              <p className="text-sm text-[#B9B2C2] font-light leading-relaxed max-w-sm">
                Get clarity on our scope, communication system, deliverables formats, and operational SLA before kicking off.
              </p>
              
              <div className="pt-6 border-t border-white/[0.06]">
                <button
                  onClick={() => handleScrollToSection('book')}
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#8C4BFF] hover:text-white transition-colors cursor-pointer"
                >
                  Ready to start? Book a call directly <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Accordion List Column */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-white/[0.06] bg-[#0B0A10]/60 overflow-hidden rounded-xl hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-[#8C4BFF]/30 cursor-pointer"
                      id={`faq-btn-teaser-${idx}`}
                    >
                      <span className="text-sm font-black uppercase text-white tracking-wide pr-6">
                        {faq.q}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#B9B2C2] leading-relaxed font-light border-t border-white/[0.04] bg-black/10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: FINAL CTA */}
      <section id="final-cta" className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden font-sans">
        {/* Premium background system */}
        <AeymotionBackground variant="cta" />

        {/* Ambient bright blurred colorful backdrop circles exactly matching user colors */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top left light blue-sky blend */}
          <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-[#38bdf8]/25 rounded-full blur-[130px]" />
          {/* Top right intense purple blend */}
          <div className="absolute -top-[15%] -right-[5%] w-[600px] h-[600px] bg-[#8C4BFF]/35 rounded-full blur-[140px]" />
          {/* Bottom left vibrant orange-yellow blend */}
          <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] bg-[#F2A979]/30 rounded-full blur-[120px]" />
          {/* Bottom right violet blend */}
          <div className="absolute -bottom-[15%] -right-[5%] w-[500px] h-[500px] bg-[#EC4899]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <InteractiveTiltCard
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full border rounded-3xl p-8 md:py-16 md:px-12 text-center relative overflow-hidden isolate transition-all duration-700 ease-out bg-gradient-to-br ${
              isHovered 
                ? 'border-white/55 from-[#5B21B6] via-[#7C3AED] to-[#A78BFA] shadow-[0_0_80px_rgba(140,75,255,0.45)] scale-[1.015]' 
                : 'border-white/25 from-[#4C1D95] via-[#6D28D9] to-[#8C4BFF] shadow-[0_4px_30px_rgba(0,0,0,0.2)] scale-100'
            }`}
          >
            {/* Elegant Ambient inner card Gradients (controlled, not too neon) */}
            <div className={`absolute -top-12 -right-12 w-[300px] h-[300px] rounded-full pointer-events-none -z-10 transition-all duration-700 ${
              isHovered ? 'bg-[#D9C3FF]/25 blur-[70px] scale-125' : 'bg-[#D9C3FF]/15 blur-[90px]'
            }`} />
            <div className={`absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full pointer-events-none -z-10 transition-all duration-700 ${
              isHovered ? 'bg-[#F2A979]/20 blur-[70px] scale-125' : 'bg-[#F2A979]/10 blur-[90px]'
            }`} />

            {/* Diagonal stream lines glow */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none -z-10 transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />

            {/* Motion Timeline DNA element in background inside card */}
            <div className={`absolute inset-x-0 top-6 h-4 flex items-center justify-between px-8 select-none pointer-events-none font-mono text-[7px] transition-all duration-500 ${
              isHovered ? 'opacity-70 text-white' : 'opacity-35 text-white/80'
            }`}>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-500 ${
                  isHovered ? 'bg-[#9D66FF] shadow-[0_0_8px_#8C4BFF]' : 'bg-[#FFF]'
                }`} />
                <span>CHOREOGRAPHY_SYNC_ON</span>
              </div>
              <div className="flex items-center gap-3">
                <span>00:00:59:23</span>
                <span>[PLAYHEAD]</span>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto pt-4">
              <span className={`px-3 py-1 border text-[9px] font-mono uppercase tracking-widest rounded-full inline-block transition-all duration-500 ${
                isHovered 
                  ? 'bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.25)]' 
                  : 'bg-white/10 border-white/20 text-white/90'
              }`}>
                CHOOSE KINETIC CLARITY
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">
                Your product deserves motion that does <br />
                <span className={`transition-all duration-500 ${
                  isHovered ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'text-purple-100'
                }`}>
                  more than look good.
                </span>
              </h2>

              <p className="text-xs md:text-sm text-purple-100/90 font-light leading-relaxed max-w-lg mx-auto">
                Let’s turn your product into a clear, premium visual story built for launch, sales, and growth.
              </p>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handleScrollToSection('book')}
                  className={`w-full sm:w-auto px-8 py-3.5 text-[10px] font-mono uppercase tracking-widest rounded-xl font-bold cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                    isHovered 
                      ? 'bg-white text-[#7C3AED] shadow-[0_4px_25px_rgba(255,255,255,0.4)] hover:scale-105' 
                      : 'bg-white text-[#5B21B6] hover:bg-neutral-100'
                  }`}
                  id="cta-start-project"
                >
                  Book a Call <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleScrollToSection('pricing')}
                  className={`w-full sm:w-auto px-8 py-3.5 border text-[10px] font-mono uppercase tracking-widest transition-all rounded-xl font-bold cursor-pointer duration-300 ${
                    isHovered 
                      ? 'bg-white/20 border-white/30 text-white hover:bg-white/25' 
                      : 'bg-white/10 border-white/15 text-white/90 hover:bg-white/15'
                  }`}
                  id="cta-view-packages"
                >
                  View packages
                </button>
              </div>
            </div>

            {/* Bottom spec ticker */}
            <div className={`absolute inset-x-0 bottom-5 flex justify-between items-center px-8 select-none pointer-events-none font-mono text-[7px] transition-all duration-500 ${
              isHovered ? 'opacity-55 text-white' : 'opacity-30 text-white/80'
            }`}>
              <span>SLA_SPEED_TRUE</span>
              <span>RENDER_VERSION_3.5_STABLE</span>
            </div>
          </InteractiveTiltCard>
        </div>
      </section>

    </div>
  );
}
