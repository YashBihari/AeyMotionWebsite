import React, { useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import OfferCardCover from './OfferCardCover';

interface ServicesSectionProps {
  onBookCall: () => void;
}

interface PackageOfferData {
  id: string;
  title: string;
  description: string;
  duration?: string;
  timeline?: string;
  includes: string[];
}

const PACKAGES_DATA: PackageOfferData[] = [
  {
    id: 'feature-spotlight',
    title: 'Feature spotlight',
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
    title: 'Product launch',
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
    title: 'Product explainer',
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
  },
  {
    id: 'logo-animation',
    title: 'Logo animation',
    description: 'Bring your logo to life with a custom motion reveal for videos, social posts, and presentations.',
    includes: ['Logo motion concept', 'Animation using your existing logo', 'Final video export']
  }
];

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeService = PACKAGES_DATA[activeIndex];

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
      aria-labelledby="services-title"
      className="scroll-mt-24 pt-10 md:pt-14 pb-12 md:pb-16 bg-transparent font-sans relative"
    >
      <AeymotionBackground variant="services" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" style={{ perspective: '1000px' }}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 id="services-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl aey-heading text-neutral-900">
            Services
          </h2>

          <p className="text-neutral-600 font-normal text-sm md:text-base mt-3 leading-relaxed max-w-2xl">
            Launch a product, explain a feature, or bring your logo to life.
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div aria-hidden="true" className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-xl border border-neutral-300/70 bg-[#F6F6F9]">
            {activeService.id === 'logo-animation' ? (
              <motion.img
                src="/logo.svg"
                alt=""
                className="h-auto w-[22%] max-w-28"
                initial={reduceMotion ? false : { opacity: 0, scale: .65, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: reduceMotion ? 0 : .5, ease: 'easeOut' }}
              />
            ) : (
              <OfferCardCover key={activeService.id} index={activeIndex} standalone />
            )}
          </div>

          <div aria-label="Video services" className="min-w-0">
            {PACKAGES_DATA.map((pkg, index) => {
              const active = index === activeIndex;
              const triggerId = `service-trigger-${pkg.id}`;
              const panelId = `service-panel-${pkg.id}`;
              return (
                <div key={pkg.id} className="border-b border-neutral-300/80">
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={active}
                      aria-controls={panelId}
                      onClick={() => setActiveIndex(index)}
                      className="group flex w-full cursor-pointer items-end justify-between gap-4 py-5 text-left text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7138BB]"
                    >
                      <span className="min-w-0">
                        <span aria-hidden="true" className="mb-1.5 block font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}</span>
                        <span className="aey-heading block text-2xl sm:text-[1.7rem]">{pkg.title}</span>
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" className={`mb-0.5 shrink-0 transition-colors ${active ? 'text-neutral-800' : 'text-neutral-400 group-hover:text-neutral-800'}`} />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!active} className="pb-4">
                    <p className="text-sm leading-relaxed text-neutral-600">{pkg.description}</p>
                    {pkg.duration && pkg.timeline && (
                      <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                        <div><dt className="text-xs text-neutral-600">Video duration</dt><dd className="mt-1 font-semibold">{pkg.duration}</dd></div>
                        <div><dt className="text-xs text-neutral-600">Timeline</dt><dd className="mt-1 font-semibold">{pkg.timeline}</dd></div>
                      </dl>
                    )}
                    <details className="group mt-2">
                      <summary className="flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-neutral-700 [&::-webkit-details-marker]:hidden">
                        What’s included <ChevronDown size={15} aria-hidden="true" className="group-open:rotate-180" />
                      </summary>
                      <ul className="offer-includes mt-2">
                        {pkg.includes.map(item => <li key={item}><Check size={13} aria-hidden="true" /><span>{item}</span></li>)}
                      </ul>
                    </details>
                    <button type="button" onClick={onBookCall} className="mt-1 inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7138BB]">
                      <ArrowUpRight size={16} aria-hidden="true" /> Book a call
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Structured feedback:</strong>
                Two rounds for Feature Spotlight—before animation and on the first cut. Three rounds for Product Launch Video and Product Explainer—script, storyboard, and first cut.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Agreed pricing and delivery:</strong>
                A fixed project price and delivery schedule confirmed before production. Scope changes or delayed feedback may affect both.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <strong className="font-bold text-[#171717] block sm:inline sm:mr-1">Your finished video:</strong>
                Ownership of the final video after full payment, with no ongoing fees from Aeymotion. Any third-party asset licensing restrictions are disclosed upfront.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#8C4BFF] shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
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



