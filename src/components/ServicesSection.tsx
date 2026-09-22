import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

interface ServicesSectionProps {
  onBookCall: () => void;
}

interface PackageOfferData {
  id: string;
  tag: string;
  title: string;
  price: string;
  description: string;
  duration: string;
  timeline: string;
  includes: string[];
  ctaText: string;
}

const PACKAGES_DATA: PackageOfferData[] = [
  {
    id: 'feature-spotlight',
    tag: '01 / FEATURE',
    title: 'FEATURE SPOTLIGHT',
    price: '$600',
    description: 'Put features in the spotlight.',
    duration: '2 videos up to 20 seconds each',
    timeline: '5–7 business days per video',
    includes: [
      'Script & scene plan',
      'UI animation & motion graphics',
      'Music & sound effects',
      'AI voiceover or text-led video',
      'One aspect ratio'
    ],
    ctaText: 'DISCUSS YOUR FEATURE VIDEO'
  },
  {
    id: 'product-launch-video',
    tag: '02 / LAUNCH',
    title: 'PRODUCT LAUNCH',
    price: '$800',
    description: 'Introduce your product. Give people a reason to care.',
    duration: 'Up to 45 seconds',
    timeline: '10–15 business days',
    includes: [
      'Script & storyboard',
      'UI animation & motion graphics',
      'Music & sound design',
      'AI voiceover or text-led video',
      'One aspect ratio'
    ],
    ctaText: 'PLAN YOUR PRODUCT VIDEO'
  },
  {
    id: 'product-explainer',
    tag: '03 / EXPLAIN',
    title: 'PRODUCT EXPLAINER',
    price: '$1,500',
    description: 'Make your product easy to understand.',
    duration: '60–90 seconds',
    timeline: '15–20 business days',
    includes: [
      'Script & storyboard',
      'Key feature & workflow animation',
      'Supporting motion graphics',
      'Music & sound design',
      'AI voiceover or text-led video',
      '2 Social cutdown, up to 15 seconds',
      'One aspect ratio'
    ],
    ctaText: 'PLAN YOUR PRODUCT EXPLAINER'
  }
];

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const rawPanelRotateX = useMotionValue(0);
  const rawPanelRotateY = useMotionValue(0);

  // Smooth, physical spring interpolation for restrained ±4.8° gravity tilt (40% reduced from ±8°)
  const panelRotateX = useSpring(rawPanelRotateX, { damping: 20, stiffness: 130, mass: 0.6 });
  const panelRotateY = useSpring(rawPanelRotateY, { damping: 20, stiffness: 130, mass: 0.6 });

  const handlePanelMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on touch devices and respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) return;

    // Normalized offset [-1, 1] relative to the center pivot
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    const maxTilt = 4.8; // ±4.8° maximum rotation (40% reduced from 8°)

    // Physical gravity direction: cursor position dips the surface downward
    const targetX = Math.max(-maxTilt, Math.min(maxTilt, -normY * maxTilt));
    const targetY = Math.max(-maxTilt, Math.min(maxTilt, normX * maxTilt));

    rawPanelRotateX.set(targetX);
    rawPanelRotateY.set(targetY);
  };

  const handlePanelMouseLeave = () => {
    rawPanelRotateX.set(0);
    rawPanelRotateY.set(0);
  };

  return (
    <section 
      id="services" 
      className="pt-10 md:pt-14 pb-12 md:pb-16 bg-transparent font-sans relative"
    >
      <AeymotionBackground variant="services" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" style={{ perspective: '1000px' }}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[1.02]">
            THE RIGHT VIDEO FOR YOUR NEXT STEP.
          </h2>

          <p className="text-neutral-600 font-normal text-sm md:text-base mt-3 leading-relaxed max-w-2xl">
            Spotlight a feature, launch your product, or explain how it works.
          </p>
        </div>

        {/* 3-Column Responsive Grid: 3 equal-height cards in one row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PACKAGES_DATA.map((pkg, idx) => {
            const isHovered = hoveredCardId === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                onMouseEnter={() => setHoveredCardId(pkg.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                whileHover={{ 
                  y: -8,
                  scale: 1.018,
                  transition: { type: 'spring', stiffness: 650, damping: 25, mass: 0.6 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between select-none cursor-pointer rounded-[30px] p-6 sm:p-7 lg:p-8 transition-all duration-200 relative group"
                style={
                  isHovered
                    ? {
                        background: 'linear-gradient(145deg, #A34FFF 0%, #7D35EE 48%, #8C4BFF 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.50)',
                        boxShadow: '0 26px 70px rgba(140, 75, 255, 0.40), 0 0 35px rgba(239, 112, 220, 0.22)',
                      }
                    : {
                        background: 'rgba(255, 255, 255, 0.82)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)',
                        border: '1px solid rgba(140, 75, 255, 0.18)',
                        boxShadow: '0 18px 50px rgba(88, 42, 145, 0.10)',
                      }
                }
              >
                <div className="flex flex-col flex-1">
                  
                  {/* 1. Small package label */}
                  <span 
                    className={`font-mono text-xs font-bold tracking-widest uppercase block transition-colors duration-200 ${
                      isHovered ? 'text-white/90' : 'text-[#8C4BFF]'
                    }`}
                  >
                    {pkg.tag}
                  </span>

                  {/* 2. Package title */}
                  <h3 
                    className={`text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight mt-3 transition-colors duration-200 ${
                      isHovered ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* 3. Price (Strongest visual element) */}
                  <div 
                    className={`mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-none transition-colors duration-200 flex items-baseline gap-2 ${
                      isHovered ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {pkg.price.toLowerCase().startsWith('from ') ? (
                      <>
                        <span 
                          className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                            isHovered ? 'text-white/80' : 'text-[#8C4BFF]'
                          }`}
                        >
                          FROM
                        </span>
                        <span>{pkg.price.slice(5)}</span>
                      </>
                    ) : (
                      <span>{pkg.price}</span>
                    )}
                  </div>

                  {/* 4. Short description (with min-height to maintain aligned dividers) */}
                  <div className="min-h-[44px] sm:min-h-[48px] flex items-center mt-3.5 mb-1">
                    <p 
                      className={`text-xs sm:text-sm font-normal leading-relaxed transition-colors duration-200 ${
                        isHovered ? 'text-white/85' : 'text-[#64606B]'
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>

                  {/* 5. Video Duration */}
                  <div 
                    className={`pt-4 border-t space-y-2 transition-colors duration-200 ${
                      isHovered ? 'border-white/20' : 'border-[rgba(140,75,255,0.12)]'
                    }`}
                  >
                    <span 
                      className={`font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block transition-colors duration-200 ${
                        isHovered ? 'text-white/80' : 'text-[#8C4BFF]'
                      }`}
                    >
                      Video Duration
                    </span>
                    <div className="text-xs sm:text-sm flex items-center gap-2.5">
                      {isHovered ? (
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#7D35EE] shrink-0 shadow-xs">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      )}
                      <span className={`font-medium transition-colors duration-200 ${isHovered ? 'text-white' : 'text-[#171717]'}`}>
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* 6. Timeline */}
                  <div 
                    className={`pt-4 border-t space-y-2 mt-4 transition-colors duration-200 ${
                      isHovered ? 'border-white/20' : 'border-[rgba(140,75,255,0.12)]'
                    }`}
                  >
                    <span 
                      className={`font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block transition-colors duration-200 ${
                        isHovered ? 'text-white/80' : 'text-[#8C4BFF]'
                      }`}
                    >
                      Timeline
                    </span>
                    <div className="text-xs sm:text-sm flex items-center gap-2.5">
                      {isHovered ? (
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#7D35EE] shrink-0 shadow-xs">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      )}
                      <span className={`font-medium transition-colors duration-200 ${isHovered ? 'text-white' : 'text-[#171717]'}`}>
                        {pkg.timeline}
                      </span>
                    </div>
                  </div>

                  {/* 7. Includes (Expands so CTA stays aligned at bottom) */}
                  <div 
                    className={`pt-4 border-t space-y-2.5 mt-4 flex-1 flex flex-col transition-colors duration-200 ${
                      isHovered ? 'border-white/20' : 'border-[rgba(140,75,255,0.12)]'
                    }`}
                  >
                    <span 
                      className={`font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block transition-colors duration-200 ${
                        isHovered ? 'text-white/80' : 'text-[#8C4BFF]'
                      }`}
                    >
                      Includes
                    </span>
                    <div className="space-y-2.5">
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="text-xs sm:text-sm flex items-start gap-2.5">
                          {isHovered ? (
                            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#7D35EE] shrink-0 mt-0.5 shadow-xs">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                          ) : (
                            <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                          )}
                          <span className={`leading-snug font-medium transition-colors duration-200 ${isHovered ? 'text-white/95' : 'text-[#171717]'}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* 8. CTA Button (Aligned at bottom) */}
                <div 
                  className={`mt-7 pt-5 border-t transition-colors duration-200 ${
                    isHovered ? 'border-white/20' : 'border-[rgba(140,75,255,0.12)]'
                  }`}
                >
                  <button
                    onClick={onBookCall}
                    className={`w-full h-12 sm:h-13 px-5 py-3.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-between cursor-pointer group/btn focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isHovered
                        ? 'bg-[rgba(255,255,255,0.94)] hover:bg-white text-[#7131DA] shadow-sm focus:ring-white focus:ring-offset-[#7D35EE]'
                        : 'bg-[#171717] hover:bg-neutral-800 text-[#FFFFFF] focus:ring-[#8C4BFF] focus:ring-offset-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Below the cards: Restrained frosted-glass panel using outer-card glass treatment with 40% reduced gravity tilt */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          onMouseMove={handlePanelMouseMove}
          onMouseLeave={handlePanelMouseLeave}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 lg:mt-8 w-full rounded-[30px] p-6 sm:p-8 select-none transition-shadow duration-300 group hover:shadow-[0_26px_60px_rgba(88,42,145,0.18)]"
          style={{
            rotateX: panelRotateX,
            rotateY: panelRotateY,
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            background: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(140, 75, 255, 0.18)',
            boxShadow: '0 18px 50px rgba(88, 42, 145, 0.10)',
          }}
        >
          <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#171717] mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8C4BFF]" />
            Included with every package:
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-[#64606B] leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Structured feedback:</strong>
                Two rounds for Feature Spotlight—before animation and on the first cut. Three rounds for Product Launch Video and Product Explainer—script, storyboard, and first cut.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-[#64606B] leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Agreed pricing and delivery:</strong>
                A fixed project price and delivery schedule confirmed before production. Scope changes or delayed feedback may affect both.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-[#64606B] leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Your finished video:</strong>
                Ownership of the final video after full payment, with no ongoing fees from Aeymotion. Any third-party asset licensing restrictions are disclosed upfront.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-[#64606B] leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Direct collaboration:</strong>
                Work directly with Yash throughout the project—no account manager in between.
              </p>
            </div>

            {/* Point 5: Optional Extras spanning full width below all 4 points */}
            <div className="md:col-span-2 pt-4 border-t border-purple-100/80 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <div className="flex-1 min-w-0 text-xs sm:text-sm text-[#64606B] leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Optional extras:</strong>
                
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 my-2.5 list-none p-0">
                  <li className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-100/70 flex flex-col justify-between">
                    <span className="text-xs font-semibold text-[#171717]">Additional aspect ratio</span>
                    <span className="text-xs font-mono font-bold text-[#8C4BFF] mt-1">from $100</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-100/70 flex flex-col justify-between">
                    <span className="text-xs font-semibold text-[#171717]">Social cutdown, up to 15 seconds</span>
                    <span className="text-xs font-mono font-bold text-[#8C4BFF] mt-1">from $150</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-100/70 flex flex-col justify-between">
                    <span className="text-xs font-semibold text-[#171717]">Professional human voiceover</span>
                    <span className="text-xs font-mono font-bold text-[#8C4BFF] mt-1">quoted separately</span>
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-[#64606B] mt-1.5">
                  Extras are priced around your video’s length and complexity. We agree on the full cost before starting.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



