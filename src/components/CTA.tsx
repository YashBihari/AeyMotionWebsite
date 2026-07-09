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

interface ProofItem {
  title: string;
  desc: string;
  bg: string;
  accent: string;
  icon: React.ComponentType<any>;
  spec: string;
}

interface FAQItem {
  q: string;
  a: string;
}

export default function CTA() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredProof, setHoveredProof] = useState<number | null>(null);

  const proofItems: ProofItem[] = [
    {
      title: "SaaS & AI Focused",
      desc: "We translate deep technical features, agent chains, and data models into smooth visual narratives without losing depth.",
      bg: "#0D1B2E",
      accent: "#38BDF8",
      icon: Cpu,
      spec: "MODEL_SYNC // OK"
    },
    {
      title: "Strategy First",
      desc: "We align the script, pacing, and visual story to your conversion goals before rendering a single frame.",
      bg: "#1A102B",
      accent: "#A78BFA",
      icon: Target,
      spec: "GTM_KPI // ALIGNED"
    },
    {
      title: "Launch-Ready Deliverables",
      desc: "Clean exports in multiple aspect ratios, responsive sizes, and high-DPI assets optimized for direct use.",
      bg: "#0D211B",
      accent: "#34D399",
      icon: Video,
      spec: "ASSETS // COMPILED"
    },
    {
      title: "Fast, Structured Workflow",
      desc: "Our repeatable sprints keep design and feedback cycles ultra-short, delivering top-tier work on tight timelines.",
      bg: "#24180F",
      accent: "#F59E7B",
      icon: Zap,
      spec: "SPRINT_CYCLE // 10D"
    },
    {
      title: "Built for Web, Ads & Social",
      desc: "Assets calibrated perfectly for website conversion, LinkedIn engagement, performance marketing, and launch milestones.",
      bg: "#101827",
      accent: "#94A3B8",
      icon: Tv,
      spec: "OUTPUT_RENDER // MULTI"
    }
  ];

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
      
      {/* SECTION 1: PROOF / TRUST */}
      <section id="proof" className="py-24 md:py-32 border-b border-white/[0.06] relative overflow-hidden font-sans">
        {/* Premium background system */}
        <AeymotionBackground variant="work" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="mb-20 md:mb-24 border-l-2 border-[#8B5CF6] pl-6 md:pl-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B5CF6] mb-2 block">
              06 / PROOF
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              Built for teams that care about <br />
              <span className="text-neutral-500">clarity, speed, and premium perception.</span>
            </h2>
          </div>

          {/* Modular Proof Panels Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {proofItems.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredProof === idx;
              const isAnyHovered = hoveredProof !== null;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredProof(idx)}
                  onMouseLeave={() => setHoveredProof(null)}
                  style={{ 
                    backgroundColor: item.bg,
                    borderColor: isHovered ? `${item.accent}30` : 'rgba(255,255,255,0.08)'
                  }}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between min-h-[260px] transition-all duration-500 relative overflow-hidden group ${
                    isAnyHovered && !isHovered ? 'opacity-50 scale-[0.99]' : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">
                        UNIT // 06.{idx + 1}
                      </span>
                      <div 
                        style={{ borderColor: `${item.accent}20` }}
                        className="p-2.5 rounded-xl bg-white/5 border text-white transition-transform duration-500 group-hover:scale-105"
                      >
                        <Icon className="w-4 h-4" style={{ color: item.accent }} />
                      </div>
                    </div>

                    <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Spec */}
                  <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[8px] text-neutral-500">
                    <span>{item.spec}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                  </div>

                  {/* Left Accent indicator */}
                  <div 
                    style={{ backgroundColor: item.accent }}
                    className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: FAQ TEASER */}
      <section id="faq-teaser" className="py-24 md:py-32 border-b border-white/[0.06] relative overflow-hidden font-sans">
        {/* Premium background system */}
        <AeymotionBackground variant="services" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="border-l-2 border-[#8B5CF6] pl-5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B5CF6] block">
                  07 / QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">
                  Before you book, here’s what most teams ask.
                </h2>
              </div>
              <p className="text-sm text-[#A1A1AA] font-light leading-relaxed max-w-sm">
                Get clarity on our scope, communication system, deliverables formats, and operational SLA before kicking off.
              </p>
              
              <div className="pt-6 border-t border-white/[0.06]">
                <button
                  onClick={() => handleScrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#8B5CF6] hover:text-white transition-colors"
                >
                  Have another question? Ask directly <ArrowRight className="w-3.5 h-3.5" />
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
                    className="border border-white/[0.06] bg-[#0B0B0F]/60 overflow-hidden rounded-xl hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]/30"
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
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light border-t border-white/[0.04] bg-black/10">
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
      <section id="final-cta" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden font-sans">
        {/* Premium background system */}
        <AeymotionBackground variant="cta" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full border border-white/[0.12] rounded-3xl bg-[#0F0D15] p-12 md:p-20 text-center relative overflow-hidden isolate shadow-2xl"
          >
            {/* Elegant Ambient Aeymotion Gradients (controlled, not too neon) */}
            <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-[#A78BFA]/10 blur-[110px] rounded-full pointer-events-none -z-10" />
            <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-[#F59E7B]/10 blur-[110px] rounded-full pointer-events-none -z-10" />

            {/* Motion Timeline DNA element in background inside card */}
            <div className="absolute inset-x-0 top-8 h-4 flex items-center justify-between px-8 opacity-25 select-none pointer-events-none font-mono text-[7px] text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span>CHOREOGRAPHY_SYNC_ON</span>
              </div>
              <div className="flex items-center gap-3">
                <span>00:00:59:23</span>
                <span>[PLAYHEAD]</span>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto pt-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-400 rounded-full inline-block">
                CHOOSE KINETIC CLARITY
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                Your product deserves motion that does <br />
                <span className="text-[#8B5CF6]">more than look good.</span>
              </h2>

              <p className="text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed">
                Let’s turn your product into a clear, premium visual story built for launch, sales, and growth.
              </p>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handleScrollToSection('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#8B5CF6] text-white hover:brightness-110 text-[10px] font-mono uppercase tracking-widest transition-all rounded-xl font-bold cursor-pointer inline-flex items-center justify-center gap-2"
                  id="cta-start-project"
                >
                  Start a project <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleScrollToSection('pricing')}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 text-[10px] font-mono uppercase tracking-widest transition-all rounded-xl font-bold"
                  id="cta-view-packages"
                >
                  View packages
                </button>
              </div>
            </div>

            {/* Bottom spec ticker */}
            <div className="absolute inset-x-0 bottom-6 flex justify-between items-center px-8 opacity-15 select-none pointer-events-none font-mono text-[7px] text-neutral-500">
              <span>SLA_SPEED_TRUE</span>
              <span>RENDER_VERSION_3.5_STABLE</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
