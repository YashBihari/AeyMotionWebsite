import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Check, Plus, Minus, Film, Layers, Sparkles } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';

interface ServicesSectionProps {
  onBookCall: () => void;
}

interface PackageOfferData {
  id: string;
  tag: string;
  title: string;
  description: string;
  duration: string;
  timeline: string;
  includes: string[];
}

const PACKAGES_DATA: PackageOfferData[] = [
  {
    id: 'feature-spotlight',
    tag: '01 / FEATURE',
    title: 'FEATURE SPOTLIGHT',
    description: 'Put features in the spotlight.',
    duration: 'Up to 15 seconds',
    timeline: '3–5 business days',
    includes: [
      'Product & messaging review',
      'Creative concept',
      'Short-form script / messaging',
      'UI & product animation',
      'Custom motion design',
      'AI voiceover or text-led storytelling',
      'Music & sound design',
      '2 revision rounds',
      'Final web & social-ready export'
    ]
  },
  {
    id: 'product-launch-video',
    tag: '02 / LAUNCH',
    title: 'PRODUCT LAUNCH',
    description: 'Introduce your product. Give people a reason to care.',
    duration: 'Up to 45 seconds',
    timeline: '5–7 business days',
    includes: [
      'Product & audience analysis',
      'Launch concept & narrative',
      'Scriptwriting',
      'Storyboard',
      'Custom visual direction',
      'UI & product animation',
      'AI voiceover or text-led storytelling',
      'Music & sound design',
      '2 revision rounds',
      'Final launch-ready exports'
    ]
  },
  {
    id: 'product-explainer',
    tag: '03 / EXPLAIN',
    title: 'PRODUCT EXPLAINER',
    description: 'Make your product easy to understand.',
    duration: '60–90 seconds',
    timeline: '7–10 business days',
    includes: [
      'Product, audience & messaging analysis',
      'Creative concept & narrative',
      'Scriptwriting',
      'Detailed storyboard',
      'Custom visual direction',
      'UI, product & motion design',
      'AI voiceover or text-led storytelling',
      'Full sound design',
      '2 revision rounds',
      'Final exports for web & social'
    ]
  }
];

export default function ServicesSection(_props: ServicesSectionProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>('product-explainer');
  const [offerHeight, setOfferHeight] = useState<number>();

  useEffect(() => {
    const resetOfferHeight = () => setOfferHeight(undefined);
    window.addEventListener('resize', resetOfferHeight);
    return () => window.removeEventListener('resize', resetOfferHeight);
  }, []);

  const toggleOffer = (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const accordion = event.currentTarget.closest('.offer-accordion');
    if (accordion) {
      const height = accordion.getBoundingClientRect().height;
      setOfferHeight(previous => Math.max(previous ?? 0, height));
    }
    setActiveOfferId(current => current === id ? null : id);
  };

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

        <div className="offer-accordion" style={{ minHeight: offerHeight }} aria-label="Explore video offers">
          {PACKAGES_DATA.map((pkg, idx) => {
            const isOpen = activeOfferId === pkg.id;
            const Icon = [Sparkles, Film, Layers][idx];
            const panelId = `offer-panel-${pkg.id}`;
            const triggerId = `offer-trigger-${pkg.id}`;

            return (
              <article key={pkg.id} className={`offer-panel ${isOpen ? 'offer-panel--open' : ''}`}>
                <button
                  type="button"
                  id={triggerId}
                  className="offer-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={event => toggleOffer(pkg.id, event)}
                >
                  <span className="offer-tag">{pkg.tag}</span>
                  <span className="offer-title">{pkg.title}</span>
                  {!isOpen && <span className="offer-summary">{pkg.duration}</span>}
                  <span className="offer-toggle" aria-hidden="true">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {!isOpen && (
                  <div className={`offer-decoration offer-decoration--${idx}`} aria-hidden="true">
                    <span className="offer-decoration-halo" />
                    <span className="offer-decoration-orb" />
                    <span className="offer-decoration-ring" />
                    <span className="offer-decoration-tile">
                      <span className="offer-decoration-icon"><Icon strokeWidth={1.6} /></span>
                      <span className="offer-decoration-bars"><i /><i /><i /></span>
                    </span>
                    <span className="offer-decoration-tile offer-decoration-tile--back" />
                    <span className="offer-decoration-pearl" />
                  </div>
                )}

                <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!isOpen} className="offer-details">
                  <p className="offer-description">{pkg.description}</p>
                  <div className="offer-content">
                    <div className="offer-specs">
                      <dl className="offer-metadata">
                        <div><dt>Video duration</dt><dd>{pkg.duration}</dd></div>
                        <div><dt>Timeline</dt><dd>{pkg.timeline}</dd></div>
                      </dl>
                      <h4 className="offer-label">Includes</h4>
                      <ul className="offer-includes">
                        {pkg.includes.map((item) => (
                          <li key={item}><Check size={13} aria-hidden="true" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
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

          </div>
        </motion.div>

      </div>
    </section>
  );
}



