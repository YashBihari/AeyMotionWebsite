import RollingLabel from './RollingLabel';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { PROJECTS } from '../data/projects';

interface PackageOfferData {
  id: string;
  title: string;
  previewProjectId: string;
  description: string;
  duration?: string;
  timeline?: string;
  includes: string[];
}

const PACKAGES_DATA: PackageOfferData[] = [
  {
    id: 'feature-spotlight',
    previewProjectId: 'yc-safe',
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
    previewProjectId: 'kinetic-ai',
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
    previewProjectId: 'aura-design',
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
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIncludes, setOpenIncludes] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const disclosureTransition = { duration: reduceMotion ? 0 : .3, ease: 'easeInOut' as const };
  const activeService = PACKAGES_DATA[activeIndex];
  const preview = PROJECTS.find(project => project.id === activeService.previewProjectId);

  return (
    <section 
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-24 pt-[88px] md:pt-[120px] pb-12 md:pb-16 font-sans relative"
    >
      <AeymotionBackground variant="services" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <h2 id="services-title" className="text-[1.40625rem] sm:text-[1.6875rem] md:text-[2.25rem] lg:text-[2.8125rem] aey-heading text-neutral-900">
            Services
          </h2>

          <p className="text-neutral-600 font-normal text-sm md:text-base mx-auto mt-3 leading-relaxed max-w-2xl">
            Spotlight a feature, launch your product, or explain how it works.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div aria-label="Video services" className="min-w-0">
            {PACKAGES_DATA.map((pkg, index) => {
              const active = index === activeIndex;
              const triggerId = `service-trigger-${pkg.id}`;
              const panelId = `service-panel-${pkg.id}`;
              const includesId = `service-includes-${pkg.id}`;
              const includesOpen = openIncludes === pkg.id;
              return (
                <div key={pkg.id} className="border-b border-neutral-300/80">
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={active}
                      aria-controls={panelId}
                      onClick={() => setActiveIndex(index)}
                      className="group/roll flex w-full cursor-pointer items-end justify-between gap-4 py-5 text-left text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7138BB]"
                    >
                      <span className="min-w-0">
                        <span aria-hidden="true" className="mb-1.5 block font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}</span>
                        <span className="aey-heading block text-2xl sm:text-[1.7rem]"><RollingLabel text={pkg.title} /></span>
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" className={`mb-0.5 shrink-0 transition-colors ${active ? 'text-neutral-800' : 'text-neutral-400'}`} />
                    </button>
                  </h3>
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!active}
                    inert={!active}
                    initial={false}
                    animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
                    transition={disclosureTransition}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                    <p className="text-sm leading-relaxed text-neutral-600">{pkg.description}</p>
                    {pkg.duration && pkg.timeline && (
                      <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                        <div><dt className="text-xs text-neutral-600">Video duration</dt><dd className="mt-1 font-semibold">{pkg.duration}</dd></div>
                        <div><dt className="text-xs text-neutral-600">Timeline</dt><dd className="mt-1 font-semibold">{pkg.timeline}</dd></div>
                      </dl>
                    )}
                    <div className="mt-2">
                      <button
                        type="button"
                        aria-expanded={includesOpen}
                        aria-controls={includesId}
                        onClick={() => setOpenIncludes(current => current === pkg.id ? null : pkg.id)}
                        className="group/roll flex cursor-pointer items-center gap-2 py-2 text-sm font-semibold text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        <RollingLabel text="What’s included" /> <ChevronDown size={15} aria-hidden="true" className={`motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out ${includesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <motion.div
                        id={includesId}
                        aria-hidden={!includesOpen}
                        initial={false}
                        animate={{ height: includesOpen ? 'auto' : 0, opacity: includesOpen ? 1 : 0 }}
                        transition={disclosureTransition}
                        className="overflow-hidden"
                      >
                        <ul className="offer-includes pt-2">
                          {pkg.includes.map(item => <li key={item}><Check size={13} aria-hidden="true" /><span>{item}</span></li>)}
                        </ul>
                      </motion.div>
                    </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div aria-hidden="true" className="relative aspect-[5/4] min-w-0 overflow-hidden rounded-xl border border-neutral-300/70 bg-neutral-950 md:aspect-auto">
            {preview && (
              <video
                key={preview.id}
                src={preview.previewVideo}
                autoPlay={!reduceMotion}
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: preview.id === 'kinetic-ai' ? '23% center' : 'center' }}
              />
            )}
          </div>
        </div>


      </div>
    </section>
  );
}



