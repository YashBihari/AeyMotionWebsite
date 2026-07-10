import { motion } from 'motion/react';
import React, { useState } from 'react';
import { 
  Compass, 
  FileText, 
  Palette, 
  Play, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Tv
} from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import InteractiveTiltCard from './InteractiveTiltCard';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bg: string;
  accent: string;
  icon: React.ComponentType<any>;
  spec: string;
}

export default function Process() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Diagnose",
      bg: "rgba(140, 75, 255, 0.12)",
      accent: "#8C4BFF",
      icon: Compass,
      description: "We understand your product, audience, offer, and conversion goal.",
      spec: "INPUT_ANALYSIS"
    },
    {
      number: "02",
      title: "Script",
      bg: "rgba(185, 143, 212, 0.10)",
      accent: "#B98FD4",
      icon: FileText,
      description: "We turn complex ideas into a clear visual story.",
      spec: "NARRATIVE_BEAT"
    },
    {
      number: "03",
      title: "Design",
      bg: "rgba(217, 166, 180, 0.10)",
      accent: "#D9A6B4",
      icon: Palette,
      description: "We create a premium visual direction aligned with your brand and market.",
      spec: "STYLE_ALIGN"
    },
    {
      number: "04",
      title: "Animate",
      bg: "rgba(242, 169, 121, 0.10)",
      accent: "#F2A979",
      icon: Play,
      description: "We build motion assets for web, ads, social, and launch moments.",
      spec: "RENDER_QUEUE"
    },
    {
      number: "05",
      title: "Deliver",
      bg: "rgba(243, 228, 216, 0.08)",
      accent: "#F3E4D8",
      icon: CheckCircle,
      description: "You receive organized, platform-ready files built for execution.",
      spec: "MASTER_READY"
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#050507] border-b border-white/[0.06] relative overflow-hidden font-sans">
      {/* Premium background system */}
      <AeymotionBackground variant="process" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-24 border-l-2 border-[#8C4BFF] pl-6 md:pl-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C4BFF] mb-2 block">
            05 / PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
            A clear system from product complexity <br />
            <span className="text-neutral-500">to launch-ready motion.</span>
          </h2>
          <p className="text-[#A1A1AA] font-light text-sm max-w-xl mt-4 leading-relaxed">
            Every project moves through a structured creative process built to reduce confusion, speed up feedback, and deliver assets your team can actually use.
          </p>
        </div>

        {/* Dynamic Motion Path / Timeline SVG on Desktop */}
        <div className="relative mb-20 hidden lg:block px-4">
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-white/[0.06] -translate-y-1/2 -z-10" />
          
          {/* Subtle connecting spline curve */}
          <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-12 pointer-events-none -z-10 overflow-visible opacity-30" fill="none">
            <path 
              d="M 50,24 C 200,-10 400,60 600,24 C 800,-10 1000,60 1150,24" 
              stroke="url(#grid-gradient)" 
              strokeWidth="2" 
              strokeDasharray="6 4"
            />
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F3E4D8" />
                <stop offset="25%" stopColor="#F2A979" />
                <stop offset="50%" stopColor="#D9A6B4" />
                <stop offset="75%" stopColor="#B98FD4" />
                <stop offset="100%" stopColor="#8C4BFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 5 modular process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            
            return (
              <InteractiveTiltCard
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ 
                  backgroundColor: step.bg,
                  boxShadow: isHovered ? `0 20px 40px -15px ${step.accent}15` : 'none'
                }}
                className={`p-6 sm:p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between min-h-[280px] hover:border-white/20 transition-all duration-500 relative group overflow-hidden ${
                  isAnyHovered && !isHovered ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              >
                {/* Background decorative path node timeline DNA */}
                <div className="absolute top-4 right-4 flex items-center gap-1 opacity-20">
                  <span className="font-mono text-[8px] text-neutral-400">TRK_{idx+1}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.accent }} />
                </div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                      STAGE // {step.number}
                    </span>
                    <div 
                      style={{ 
                        borderColor: `${step.accent}25`,
                        backgroundColor: isHovered ? `${step.accent}12` : 'rgba(255,255,255,0.03)'
                      }}
                      className="p-3 rounded-xl border text-white transition-all duration-300 group-hover:scale-105"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" style={{ color: step.accent }} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer specs details */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                    {step.spec}
                  </span>
                  <div className="flex items-center gap-1">
                    <span 
                      style={{ backgroundColor: step.accent }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                    {isHovered && (
                      <span className="font-mono text-[8px] text-white tracking-widest uppercase transition-opacity duration-300">
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>

                {/* Top highlight bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500"
                  style={{ 
                    backgroundColor: step.accent,
                    width: isHovered ? '100%' : '0%'
                  }}
                />
              </InteractiveTiltCard>
            );
          })}
        </div>

        {/* Operational Quality Assurance framework card */}
        <div className="p-8 md:p-12 bg-[#0B0B0F] border border-white/[0.08] rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8C4BFF]/3 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase tracking-widest text-neutral-400 rounded">
                OPERATIONAL SLA
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Our Guarantee
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
                We engineered our pipeline specifically to eliminate typical agency bottlenecks. No endless meetings, clear timelines, and direct collaboration.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InteractiveTiltCard className="p-6 bg-black/40 border border-white/[0.04] rounded-xl space-y-3 h-full">
                <div className="p-2.5 rounded-lg bg-[#8C4BFF]/10 border border-[#8C4BFF]/20 text-[#8C4BFF] w-fit">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black uppercase text-white">42% Growth Lift</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Engineered layout structures built explicitly to raise conversions on landing pages and sales decks.
                </p>
              </InteractiveTiltCard>

              <InteractiveTiltCard className="p-6 bg-black/40 border border-white/[0.04] rounded-xl space-y-3 h-full">
                <div className="p-2.5 rounded-lg bg-[#B98FD4]/10 border border-[#B98FD4]/20 text-[#B98FD4] w-fit">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black uppercase text-white">Tech-Native</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  We understand microservices, cloud models, and agent architectures without needing hand-holding.
                </p>
              </InteractiveTiltCard>

              <InteractiveTiltCard className="p-6 bg-black/40 border border-white/[0.04] rounded-xl space-y-3 h-full">
                <div className="p-2.5 rounded-lg bg-[#F2A979]/10 border border-[#F2A979]/20 text-[#F2A979] w-fit">
                  <Tv className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black uppercase text-white">Lossless Vector</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Every mockup and layout is scaled dynamically for high-DPI screens and Retina devices.
                </p>
              </InteractiveTiltCard>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
