import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  Video, 
  HelpCircle,
  Clock,
  PlayCircle
} from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import InteractiveTiltCard from './InteractiveTiltCard';

interface Offer {
  id: string;
  name: string;
  price: string;
  badge?: string;
  shortDesc: string;
  tags: string[];
  ctaText: string;
  bestFor: string[];
  deliverables: string[];
  suggestedOutput?: string;
  outcome: string;
  bg: string;
  accent: string;
  num: string;
}

export default function Pricing() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const offers: Offer[] = [
    {
      id: "launch",
      num: "01",
      name: "Launch Video Sprint",
      price: "Starting from $1,500",
      shortDesc: "For early-stage SaaS, AI, and tech startups that need one clear product video.",
      tags: ["Launch", "Explainer", "Website"],
      ctaText: "Start your launch video",
      bg: "rgba(140, 75, 255, 0.12)",
      accent: "#8C4BFF",
      bestFor: [
        "Website hero sections",
        "Product launches",
        "Pitch decks",
        "Founder-led sales",
        "Early paid ad testing"
      ],
      deliverables: [
        "1x 30–60 second product explainer or launch video",
        "Messaging and story direction",
        "Scriptwriting",
        "Visual concept development",
        "Custom 2D motion design",
        "UI/product screen animation",
        "Music and sound design",
        "Voiceover guidance or AI voiceover support",
        "2 rounds of revisions",
        "Delivery in 16:9 format",
        "1x social cutdown in 9:16 or 1:1"
      ],
      outcome: "A clear, premium video that explains your product fast and makes your brand look ready for the market."
    },
    {
      id: "feature",
      num: "02",
      name: "Feature Motion Pack",
      price: "Starting from $2,500",
      shortDesc: "For product teams launching new features, updates, or app walkthroughs.",
      tags: ["Features", "UI Motion", "Product"],
      ctaText: "Build my feature pack",
      bg: "rgba(185, 143, 212, 0.10)",
      accent: "#B98FD4",
      bestFor: [
        "Feature launches",
        "Product update campaigns",
        "App walkthroughs",
        "SaaS onboarding",
        "LinkedIn and product-led growth content"
      ],
      deliverables: [
        "3–4 short feature videos",
        "15–30 seconds each",
        "Script and messaging support",
        "Animated UI walkthroughs",
        "Consistent motion style system",
        "Branded transitions and visual language",
        "Captions/subtitles",
        "Music and sound design",
        "1 revision round per video",
        "Delivery in 16:9, 9:16, or 1:1",
        "Export-ready versions for website, LinkedIn, Instagram, and ads"
      ],
      outcome: "A repeatable motion system that helps your team launch features without explaining everything manually."
    },
    {
      id: "gtm",
      num: "03",
      name: "GTM Storytelling Pack",
      price: "Starting from $3,500",
      badge: "Most Popular",
      shortDesc: "For SaaS, AI, and funded startups preparing a serious launch or campaign.",
      tags: ["GTM", "Campaign", "Premium"],
      ctaText: "Plan my GTM video",
      bg: "rgba(217, 166, 180, 0.10)",
      accent: "#D9A6B4",
      bestFor: [
        "GTM campaigns",
        "SaaS landing pages",
        "AI product launches",
        "Investor presentations",
        "Paid social campaigns",
        "Brand awareness campaigns"
      ],
      deliverables: [
        "1x 60–90 second hero product story video",
        "2x 15–30 second social/ad cutdowns",
        "3x GIFs or micro-motion assets",
        "Strategic messaging and concept direction",
        "Scriptwriting",
        "Storyboard",
        "Custom motion design",
        "UI/product screen animation",
        "Premium transitions and visual polish",
        "Sound design and music",
        "Voiceover guidance or AI voiceover support",
        "2 rounds of revisions",
        "Web-optimized and ad-optimized exports",
        "Delivery in 16:9, 9:16, and 1:1 where required"
      ],
      outcome: "A complete launch-ready motion asset system that helps your product look premium, explain value faster, and convert more attention into action."
    },
    {
      id: "monthly",
      num: "04",
      name: "Monthly Motion Partner",
      price: "Starting from $4,000/month",
      shortDesc: "For teams that need ongoing motion content without hiring in-house.",
      tags: ["Retainer", "Ads", "Ongoing"],
      ctaText: "Become a motion partner",
      bg: "rgba(242, 169, 121, 0.10)",
      accent: "#F2A979",
      bestFor: [
        "Marketing teams",
        "SaaS founders",
        "AI startups",
        "Product teams",
        "Agencies needing white-label motion support"
      ],
      deliverables: [
        "Monthly motion design support",
        "Product videos",
        "Feature videos",
        "Social motion assets",
        "Ad creatives",
        "Animated UI walkthroughs",
        "GIFs and micro-animations",
        "Motion templates",
        "Campaign cutdowns",
        "Priority production queue",
        "Dedicated creative direction",
        "Monthly content planning call",
        "Async review workflow",
        "Organized delivery system"
      ],
      suggestedOutput: "1 hero video or product video, or 3–6 short-form motion assets, or a custom mix based on campaign needs",
      outcome: "A reliable creative motion partner that helps your team keep launching, testing, and scaling content without slowing down."
    }
  ];

  const addOns = [
    { title: "Extra social cutdown", price: "from $250", desc: "Repurpose your hero video into platform-perfect aspect ratios (9:16 or 1:1) optimized for ads." },
    { title: "Extra revision round", price: "from $150", desc: "Add an additional cycle of storyboard, keyframe, or animation alignment past included limits." },
    { title: "Professional voiceover", price: "from $150", desc: "Sourcing, purchasing commercial licenses, and editing professional voice talent for your script." },
    { title: "Rush delivery tier", price: "from 25% fee", desc: "Accelerate timelines by bypassing our standard queue with dedicated weekend and overnight rendering." },
    { title: "Lottie / web animation export", price: "from $300", desc: "Convert motion assets into lightweight SVG-based vector sequences perfect for interactive web speed." },
    { title: "Additional aspect ratio", price: "from $100", desc: "Receive any video resized for alternative channels (e.g. YouTube shorts, LinkedIn carousels, Twitter)." }
  ];

  const faqs = [
    {
      q: "Do we need to provide our own script or voiceover?",
      a: "No. Our process is fully self-contained. We write high-converting, punchy scripts based on your landing page, product docs, and customer personas. For voiceover, we provide elite AI voices or guide you through sourcing professional human voice talent."
    },
    {
      q: "Why are these listed as starting prices?",
      a: "Every SaaS dashboard, user flow, and visual brand system has a unique complexity. Some apps require complex custom illustrated assets or three-dimensional mockups, while others require sleek, minimal vector screen-captures. We evaluate your assets and provide a transparent, fixed quote."
    },
    {
      q: "How long does a Launch Video Sprint typically take?",
      a: "A standard Launch Video Sprint is designed to take approximately 10 business days once we kick off. This assumes timely feedback during the brief, script, and storyboard phases. Need it faster? Our Rush Delivery add-on can expedite production."
    },
    {
      q: "What is your revision process?",
      a: "We design in highly structured stages to eliminate surprises: first we align on the script, then we design high-fidelity static boards, and finally we move to animation. Most packages include 2 full rounds of feedback."
    },
    {
      q: "Do you deliver the source project files?",
      a: "We render and deliver ultra-crisp, web-optimized MP4s and social-ad files. Standard source project files (After Effects, Figma assets) are not included in baseline packages, but can be seamlessly packaged and transferred as a custom asset add-on."
    },
    {
      q: "How does the Monthly Motion Partner subscription work?",
      a: "It acts as an on-demand creative team. You get a direct, private Slack channel, an async dashboard to add task requests, and a guaranteed priority queue. We work sequentially—as soon as one motion asset is approved, we immediately begin the next."
    },
    {
      q: "Can you handle highly complex technical SaaS or AI architectures?",
      a: "Absolutely. This is our core superpower. We build for developer-first tools, deep LLM agent chains, API nodes, security networks, and databases. You won't need to waste weeks explaining technical workflows to us."
    }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation support for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedId(id);
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <section id="pricing" className="bg-[#050507] text-white py-24 md:py-32 border-b border-white/[0.06] relative overflow-hidden font-sans">
      {/* Premium background system */}
      <AeymotionBackground variant="pricing" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Editorial Section Header */}
        <div className="mb-20 md:mb-24 border-l-2 border-[#8C4BFF] pl-6 md:pl-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C4BFF] mb-2 block">
            04 / OFFERS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
            Choose the motion system <br />
            <span className="text-neutral-500">your product needs next.</span>
          </h2>
          <p className="text-[#A1A1AA] font-light text-sm max-w-xl mt-4 leading-relaxed">
            Clear starting prices. Premium execution. Built for SaaS, AI, and product-led teams that need motion to drive action.
          </p>
        </div>

        {/* Unified Premium Rectangle Offers Layout */}
        <div className="mb-24">
          <AnimatePresence mode="wait">
            {expandedId === null ? (
              <motion.div
                key="collapsed-deck"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-2xl border border-white/[0.08] bg-[#0B0B0F]/90 overflow-hidden"
              >
                {/* 2x2 GRID LAYOUT (Unified for Desktop and Tablet - md and lg screens) */}
                <div className="hidden md:grid grid-cols-2 divide-x divide-y divide-white/[0.08] min-h-[380px]">
                  {offers.map((offer) => {
                    const isHovered = hoveredId === offer.id;
                    const isDimmed = hoveredId !== null && hoveredId !== offer.id;
                    
                    return (
                      <InteractiveTiltCard
                        key={offer.id}
                        id={`offer-card-desktop-${offer.id}`}
                        tabIndex={0}
                        onMouseEnter={() => setHoveredId(offer.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => setExpandedId(offer.id)}
                        onKeyDown={(e) => handleKeyDown(e, offer.id)}
                        style={{ 
                          backgroundColor: isHovered ? offer.bg : 'transparent',
                          transition: 'background-color 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms'
                        }}
                        className={`p-10 flex flex-col justify-between cursor-pointer relative group select-none ${
                          isDimmed ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
                        }`}
                      >
                        {/* Upper Details */}
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] text-neutral-500 font-bold">
                              SYSTEM // {offer.num}
                            </span>
                            
                            {offer.badge ? (
                              <span className="px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-white font-semibold rounded" style={{ backgroundImage: 'linear-gradient(135deg, #F3E4D8 0%, #F2A979 22%, #D9A6B4 48%, #B98FD4 72%, #8C4BFF 100%)' }}>
                                {offer.badge}
                              </span>
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                            )}
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-white transition-colors">
                              {offer.name}
                            </h3>
                            <div className="font-mono text-xs font-bold" style={{ color: offer.accent }}>
                              {offer.price}
                            </div>
                          </div>

                          <p className="text-[11px] text-[#A1A1AA] font-light leading-relaxed">
                            {offer.shortDesc}
                          </p>
                        </div>

                        {/* Lower Details and CTA indicator */}
                        <div className="space-y-4 pt-6 border-t border-white/[0.04] mt-8">
                          <div className="flex flex-wrap gap-1.5">
                            {offer.tags.map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-neutral-400 uppercase rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider mt-2">
                            <span className="text-neutral-500 group-hover:text-white transition-colors">
                              {isHovered ? 'CLICK TO EXPAND' : 'EXPLORE SPEC'}
                            </span>
                            <ArrowRight 
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                              style={{ color: isHovered ? offer.accent : '#52525B' }}
                            />
                          </div>
                        </div>

                        {/* Top Indicator highlight bar */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-[2px] bg-transparent transition-colors duration-300"
                          style={{ backgroundColor: isHovered ? offer.accent : 'transparent' }}
                        />
                      </InteractiveTiltCard>
                    );
                  })}
                </div>

                {/* MOBILE LAYOUT (Stacked compact card rows) */}
                <div className="block md:hidden divide-y divide-white/[0.08]">
                  {offers.map((offer) => (
                    <div
                      key={offer.id}
                      id={`offer-card-mobile-${offer.id}`}
                      onClick={() => setExpandedId(offer.id)}
                      className="p-6 cursor-pointer relative group hover:bg-white/[0.01] active:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[9px] text-neutral-500 font-bold">
                          SYSTEM // {offer.num}
                        </span>
                        {offer.badge && (
                          <span className="px-2 py-0.5 text-[7px] font-mono uppercase tracking-wider text-white rounded" style={{ backgroundImage: 'linear-gradient(135deg, #F3E4D8 0%, #F2A979 22%, #D9A6B4 48%, #B98FD4 72%, #8C4BFF 100%)' }}>
                            {offer.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="text-base font-black uppercase text-white tracking-tight">
                          {offer.name}
                        </h3>
                        <span className="font-mono text-xs font-bold shrink-0 text-neutral-300">
                          {offer.price.split(' ')[2] || offer.price}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#A1A1AA] font-light mt-1.5 leading-relaxed">
                        {offer.shortDesc}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-1">
                          {offer.tags.map((tag, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-white/5 text-[8px] font-mono text-neutral-400 uppercase rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1" style={{ color: offer.accent }}>
                          EXPAND <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* EXPANDED DETAILED STATE (Single offer takes over the full rectangle) */
              (() => {
                const offer = offers.find(o => o.id === expandedId);
                if (!offer) return null;

                return (
                  <motion.div
                    key="expanded-offer"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ backgroundColor: offer.bg }}
                    className="w-full rounded-2xl border border-white/[0.12] overflow-hidden shadow-2xl relative"
                  >
                    {/* Top Accent Stripe */}
                    <div className="h-1.5 w-full" style={{ backgroundColor: offer.accent }} />

                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
                      
                      {/* Left Column (Overview, Pricing, CTA) */}
                      <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-black/40 min-h-[480px]">
                        <div>
                          {/* Back Button */}
                          <button
                            onClick={() => setExpandedId(null)}
                            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] hover:text-white transition-colors mb-10 group"
                            id="btn-return-packages"
                          >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> View all packages
                          </button>

                          <div className="space-y-6">
                            <div className="flex items-center gap-3">
                              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                                SYSTEM SPECS // {offer.num}
                              </span>
                              {offer.badge && (
                                <span className="px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-white font-semibold rounded" style={{ backgroundImage: 'linear-gradient(135deg, #F3E4D8 0%, #F2A979 22%, #D9A6B4 48%, #B98FD4 72%, #8C4BFF 100%)' }}>
                                  {offer.badge}
                                </span>
                              )}
                            </div>

                            <div className="space-y-2">
                              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                                {offer.name}
                              </h3>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Starts from</span>
                                <span className="text-xl sm:text-2xl font-mono font-black" style={{ color: offer.accent }}>
                                  {offer.price.replace("Starting from ", "")}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                              {offer.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Outcome & Main Call to Action */}
                        <div className="space-y-6 mt-10">
                          <div className="p-4 bg-black/30 border border-white/[0.06] rounded-xl text-xs space-y-1">
                            <span className="block text-[8px] font-mono uppercase tracking-widest text-neutral-500">
                              Guaranteed Outcome
                            </span>
                            <p className="text-neutral-200 font-light leading-relaxed">
                              {offer.outcome}
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={handleScrollToContact}
                              style={{ backgroundColor: offer.accent }}
                              className="flex-1 py-4 text-black hover:brightness-110 text-[10px] font-mono uppercase tracking-widest transition-all rounded-xl font-bold text-center border-0 cursor-pointer"
                              id={`cta-btn-expand-${offer.id}`}
                            >
                              {offer.ctaText}
                            </button>
                            
                            <button
                              onClick={() => setExpandedId(null)}
                              className="py-4 px-6 bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 text-[10px] font-mono uppercase tracking-widest transition-all rounded-xl font-bold"
                            >
                              Close Spec
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right Column (Best For, Deliverables list) */}
                      <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#07070A]/80">
                        <div className="space-y-8">
                          {/* Best For Section */}
                          <div>
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
                              BEST SUITED FOR
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {offer.bestFor.map((item, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1.5 bg-white/[0.02] border border-white/[0.06] text-neutral-300 text-[11px] font-mono uppercase rounded-lg"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Deliverables Section */}
                          <div>
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
                              INCLUDED DELIVERABLES & SPECS
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {offer.deliverables.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-neutral-400 text-xs leading-relaxed">
                                  <Check className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" style={{ color: offer.accent }} />
                                  <span className="font-light">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Suggested Output if Monthly retainers */}
                          {offer.suggestedOutput && (
                            <div className="pt-6 border-t border-white/[0.04]">
                              <span className="block text-[9px] font-mono uppercase tracking-widest text-[#F2A979] mb-2 font-bold">
                                SUGGESTED MONTHLY OUTPUT
                              </span>
                              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                                {offer.suggestedOutput}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Bottom Notes */}
                        <div className="mt-10 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                          <span className="text-[11px] text-neutral-500 font-light">
                            Need a hybrid custom scope?
                          </span>
                          <button
                            onClick={() => setExpandedId(null)}
                            className="text-[10px] font-mono uppercase text-neutral-400 hover:text-white transition-colors"
                          >
                            Return to comparison
                          </button>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })()
            )}
          </AnimatePresence>
        </div>

        {/* SYSTEM COMPARISON MATRIX */}
        <div className="mb-24">
          <div className="mb-12 border-l-2 border-[#8C4BFF] pl-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C4BFF] mb-2 block">
              05 / COMPARATIVE SPEC
            </span>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              System Comparison Matrix
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Compare technical capabilities, delivery scopes, and production speeds side-by-side.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0B0B0F]/60 backdrop-blur-sm scrollbar-thin">
            <table className="w-full border-collapse text-left text-xs min-w-[850px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-black/40">
                  <th className="p-5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Capabilities & Specs</th>
                  <th className="p-5 font-mono text-[10px] text-[#8C4BFF] uppercase tracking-wider font-bold">01 / Launch Sprint</th>
                  <th className="p-5 font-mono text-[10px] text-[#B98FD4] uppercase tracking-wider font-bold">02 / Feature Pack</th>
                  <th className="p-5 font-mono text-[10px] text-[#D9A6B4] uppercase tracking-wider font-bold">03 / GTM Story</th>
                  <th className="p-5 font-mono text-[10px] text-[#F2A979] uppercase tracking-wider font-bold">04 / Monthly Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-neutral-300 font-light">
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Starting Price</td>
                  <td className="p-5 font-mono text-sm font-black text-[#8C4BFF]">From $1,500</td>
                  <td className="p-5 font-mono text-sm font-black text-[#B98FD4]">From $2,500</td>
                  <td className="p-5 font-mono text-sm font-black text-[#D9A6B4]">From $3,500</td>
                  <td className="p-5 font-mono text-sm font-black text-[#F2A979]">From $4,000/mo</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Primary Deliverable</td>
                  <td className="p-5">1x 30–60s Explainer/Launch Video</td>
                  <td className="p-5">3–4x 15–30s Feature Slices</td>
                  <td className="p-5">1x 60–90s Hero Story Video</td>
                  <td className="p-5">Dedicated design capability (On-Demand)</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Included Cutdowns</td>
                  <td className="p-5 flex items-center gap-1.5 py-5">
                    <Check className="w-3.5 h-3.5 text-[#8C4BFF] shrink-0" />
                    <span>1x Social (9:16 / 1:1)</span>
                  </td>
                  <td className="p-5">
                    <span className="text-neutral-600">—</span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#D9A6B4] shrink-0" />
                      <span>2x Social Cutdowns</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#F2A979] shrink-0" />
                      <span>Unlimited customized</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Micro-Motion & GIFs</td>
                  <td className="p-5">
                    <span className="text-neutral-600">—</span>
                  </td>
                  <td className="p-5">
                    <span className="text-neutral-600">—</span>
                  </td>
                  <td className="p-5 flex items-center gap-1.5 py-5">
                    <Check className="w-3.5 h-3.5 text-[#D9A6B4] shrink-0" />
                    <span>3x Web GIFs / Assets</span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#F2A979] shrink-0" />
                      <span>Dynamic micro-assets</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Scriptwriting</td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#8C4BFF] shrink-0" />
                      <span>Full Narrative Script</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#B98FD4] shrink-0" />
                      <span>Team Script Support</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#D9A6B4] shrink-0" />
                      <span>Complete Strategic Copy</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#F2A979] shrink-0" />
                      <span>Direct Copywriter Access</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Storyboards</td>
                  <td className="p-5">Concept & Style Directions</td>
                  <td className="p-5">UI Style References</td>
                  <td className="p-5">High-Fidelity Storyboards</td>
                  <td className="p-5">Interactive Figma Boards</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Revision Loops</td>
                  <td className="p-5">2 full rounds</td>
                  <td className="p-5">1 round per video</td>
                  <td className="p-5">2 full rounds</td>
                  <td className="p-5">Unlimited async queue</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Sound & Audio</td>
                  <td className="p-5">Music & sound effects</td>
                  <td className="p-5">Music & custom captions</td>
                  <td className="p-5">Custom SFX & voice alignment</td>
                  <td className="p-5">Bespoke customized soundscapes</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Turnaround Time</td>
                  <td className="p-5 font-mono text-[11px]">~10 Business Days</td>
                  <td className="p-5 font-mono text-[11px]">~10–14 Business Days</td>
                  <td className="p-5 font-mono text-[11px]">~15 Business Days</td>
                  <td className="p-5 font-mono text-[11px]">Sequential / Prioritized</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-medium text-white font-mono text-[11px] uppercase tracking-wider">Best Suited For</td>
                  <td className="p-5">Early-stage website hero section</td>
                  <td className="p-5">Product teams launching updates</td>
                  <td className="p-5">Funded SaaS preparring a big campaign</td>
                  <td className="p-5">Teams with continuous marketing needs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BESPOKE ADD-ONS SECTION */}
        <div className="mb-24">
          <div className="mb-12 border-l border-white/[0.08] pl-5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">02 / EXTENDED SCOPE</span>
            <h3 className="text-xl font-black uppercase text-white">Bespoke Add-Ons</h3>
            <p className="text-xs text-neutral-400 font-light mt-1">Supercharge your sprint outputs with highly modular, flexible assets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <InteractiveTiltCard 
                key={idx} 
                className="p-6 bg-[#0B0B0F]/80 border border-white/[0.06] hover:border-white/10 transition-all duration-300 flex flex-col justify-between rounded-xl relative overflow-hidden group h-full"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-sm font-black uppercase text-white tracking-wide">{addon.title}</h4>
                    <span className="text-xs font-mono text-[#8C4BFF] shrink-0 ml-2">{addon.price}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {addon.desc}
                  </p>
                </div>
                
                {/* Micro accent corner */}
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#8C4BFF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </InteractiveTiltCard>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div>
          <div className="mb-12 border-l border-white/[0.08] pl-5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">03 / INQUIRY CLARITY</span>
            <h3 className="text-xl font-black uppercase text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-neutral-400 font-light mt-1">Detailed answers to support your visual direction inquiry.</p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, i) => {
              const isOpen = activeFAQ === i;
              return (
                <div 
                  key={i} 
                  className="border border-white/[0.06] bg-[#0B0B0F]/60 overflow-hidden rounded-xl hover:border-white/10 transition-colors"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-[#8C4BFF]/30"
                    id={`faq-btn-${i}`}
                  >
                    <span className="text-sm font-black uppercase text-white tracking-wide pr-6">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`} />
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
  );
}
