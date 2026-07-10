import React from 'react';
import { motion } from 'motion/react';
import { Target, Cpu, Send, Workflow, Sparkles, ArrowRight } from 'lucide-react';
import InteractiveTiltCard from './InteractiveTiltCard';

interface ProofBlock {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  bg: string;
  borderColor: string;
  accentColor: string;
  num: string;
  cols: string;
}

export default function ProofOfProcess() {
  const proofBlocks: ProofBlock[] = [
    {
      num: "01",
      title: "Strategy before animation",
      description: "We start with the product, audience, and conversion goal before touching keyframes.",
      icon: Target,
      bg: "bg-[#12101A]/80",
      borderColor: "border-[#8C4BFF]/10 hover:border-[#8C4BFF]/30",
      accentColor: "#8C4BFF",
      cols: "md:col-span-7"
    },
    {
      num: "02",
      title: "Built for SaaS & AI",
      description: "We focus on complex products that need to be explained quickly and visually.",
      icon: Cpu,
      bg: "bg-[#12101A]/80",
      borderColor: "border-[#B98FD4]/10 hover:border-[#B98FD4]/30",
      accentColor: "#B98FD4",
      cols: "md:col-span-5"
    },
    {
      num: "03",
      title: "Launch-ready deliverables",
      description: "Assets are prepared for websites, LinkedIn, Instagram, YouTube Shorts, pitch decks, and ads.",
      icon: Send,
      bg: "bg-[#12101A]/80",
      borderColor: "border-[#D9A6B4]/10 hover:border-[#D9A6B4]/30",
      accentColor: "#D9A6B4",
      cols: "md:col-span-4"
    },
    {
      num: "04",
      title: "Structured workflow",
      description: "Clear steps, async reviews, and organized delivery reduce confusion during production.",
      icon: Workflow,
      bg: "bg-[#12101A]/80",
      borderColor: "border-[#F2A979]/10 hover:border-[#F2A979]/30",
      accentColor: "#F2A979",
      cols: "md:col-span-4"
    },
    {
      num: "05",
      title: "Premium visual systems",
      description: "We build motion that makes your product feel sharper, clearer, and more valuable.",
      icon: Sparkles,
      bg: "bg-[#12101A]/80",
      borderColor: "border-[#F3E4D8]/10 hover:border-[#F3E4D8]/30",
      accentColor: "#F3E4D8",
      cols: "md:col-span-4"
    }
  ];

  const handleScrollToProcess = () => {
    const el = document.querySelector('#process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="proof" className="py-24 md:py-32 bg-[#050507] border-b border-white/[0.06] relative overflow-hidden font-sans">
      {/* Background ambient radial glow layers for premium editorial feel */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#8C4BFF]/3 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#B98FD4]/2 blur-[130px] pointer-events-none -z-10" />

      {/* Motion Timeline DNA Background Accent lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        {/* DNA vertical ticks */}
        <div className="absolute inset-y-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute inset-y-0 left-2/4 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute inset-y-0 left-3/4 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Flex CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="border-l-2 border-[#8C4BFF] pl-6 md:pl-8 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C4BFF] mb-2.5 block">
              06 / PROOF
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
              Built on clarity, <br />
              <span className="text-neutral-500">not empty claims.</span>
            </h2>
            <p className="text-[#A1A1AA] font-light text-sm leading-relaxed">
              Aeymotion is designed for teams that need motion to do more than look good. Every project is shaped around product clarity, premium perception, and launch-ready execution.
            </p>
          </div>

          <button 
            onClick={handleScrollToProcess}
            className="group inline-flex items-center gap-3 px-6 py-3 border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] rounded-full text-xs font-mono uppercase tracking-wider text-white transition-all duration-300 self-start md:self-end"
            id="btn-proof-cta"
          >
            See how we work
            <ArrowRight className="w-4 h-4 text-[#8C4BFF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid layout of Modular Colored Panels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {proofBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <InteractiveTiltCard
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                containerClassName={block.cols}
                className={`p-8 rounded-2xl border ${block.borderColor} ${block.bg} flex flex-col justify-between group relative overflow-hidden transition-all duration-300 min-h-[220px] h-full`}
              >
                {/* Visual Connector tick background indicator */}
                <div className="absolute top-4 right-4 font-mono text-[9px] text-white/5 group-hover:text-white/10 transition-colors">
                  ENGINE_NODE // {block.num}
                </div>

                {/* Accent vertical line marker on left side */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-transparent transition-colors duration-300"
                  style={{ backgroundColor: block.accentColor }}
                />

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" style={{ color: block.accentColor }} />
                  </div>
                  
                  <h3 className="text-lg font-black uppercase text-white tracking-wide mt-4">
                    {block.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mt-6 relative z-10">
                  {block.description}
                </p>

                {/* Subtle light leak gradient background on hover */}
                <div 
                  className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: block.accentColor }}
                />
              </InteractiveTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
