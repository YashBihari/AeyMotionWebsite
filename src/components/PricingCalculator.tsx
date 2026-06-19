import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Check } from 'lucide-react';

const FORMAT_OPTIONS = [
  { id: 'f16_9', label: '16:9', detail: '(default)', res: '1920×1080', isDefault: true },
  { id: 'f9_16', label: '9:16', detail: '', res: '1080×1920', isDefault: false },
  { id: 'f1_1', label: '1:1', detail: '', res: '1080×1080', isDefault: false },
  { id: 'f4_5', label: '4:5', detail: '', res: '1080×1350', isDefault: false },
  { id: 'f_custom', label: 'Custom', detail: 'resolution', res: '', isDefault: false },
];

const HOOK_OPTIONS = [
  { id: 'Problem', label: 'Problem' },
  { id: 'Dream Outcome', label: 'Dream Outcome' },
  { id: 'Persona callout', label: 'Persona callout' },
  { id: 'Social proof', label: 'Social proof' },
  { id: 'Custom', label: 'Custom' },
];

const TIMELINE_OPTIONS = [
  { id: 'standard', name: 'Standard', feeLabel: 'no fee', feeMultiplier: 0, speedMultiplier: 1.0 },
  { id: 'x1_25', name: '×1.25', feeLabel: '+25%', feeMultiplier: 0.25, speedMultiplier: 1.25 },
  { id: 'x1_5', name: '×1.5', feeLabel: '+50%', feeMultiplier: 0.50, speedMultiplier: 1.50 },
];

const PACKAGES_OPTIONS = [
  {
    id: 'launch',
    name: 'Launch',
    subtitle: 'Core product tour',
    description: 'Perfect for raising pre-seed interest or explaining a single hero feature.',
    specs: {
      offer: 'launch',
      duration: 30,
      rate: 25,
      formats: ['f16_9'],
      hooks: []
    },
    features: [
      '30s Motion-Led video',
      '16:9 widescreen format',
      'High-fidelity vector kinetic choreography',
      'Bespoke sound design & SFX mix',
      '1 round of professional revisions',
      '10 business days delivery'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Full launch campaign',
    isPopular: true,
    description: 'Our flagship cinematic product film designed for conversion on landing pages.',
    specs: {
      offer: 'growth',
      quantity: 2,
      duration: 60,
      rate: 25,
      formats: ['f16_9', 'f9_16'],
      hooks: ['Problem']
    },
    features: [
      '60s Motion-Led product reveal',
      'Dual layouts (16:9 + 9:16 vertical adapt)',
      '1 promotional Hook variety (A/B testing)',
      'Cinema-grade SFX & audio mastering',
      '2 rounds of professional refinements',
      '10 business days delivery'
    ]
  },
  {
    id: 'scale',
    name: 'Scale',
    subtitle: 'High-stake product reveal',
    description: 'Bespoke cinematic experience with premium soundscaping and multi-channel delivery.',
    specs: {
      offer: 'scale',
      quantity: 10,
      rate: 10,
      formats: ['f16_9', 'f9_16', 'f1_1']
    },
    features: [
      'Up to 120s widescreen kinetic film',
      'Tri-platform formats (16:9, 9:16, 1:1)',
      '3 alternative introductory custom hooks',
      'Mastered cinematic soundtrack with license',
      'Unlimited revisions priority feedback',
      '14 business days delivery sequence'
    ]
  }
];

export default function PricingCalculator() {
  const [activeOffer, setActiveOffer] = useState<'launch' | 'growth' | 'scale'>('launch');
  const [rate, setRate] = useState<number>(25); // For Launch & Growth

  // Offer 1: Launch States
  const [launchDuration, setLaunchDuration] = useState<number>(30);
  const [launchFormats, setLaunchFormats] = useState<string[]>(['f16_9']);
  const [launchHooks, setLaunchHooks] = useState<string[]>([]);
  const [timelineId, setTimelineId] = useState<string>('standard');

  // Offer 2: Growth States
  const [growthQuantity, setGrowthQuantity] = useState<number>(2); // 2 or 4
  const [growthDuration, setGrowthDuration] = useState<number>(60);
  const [growthFormats, setGrowthFormats] = useState<string[]>(['f16_9', 'f9_16']);
  const [growthHooks, setGrowthHooks] = useState<string[]>([]);
  const [growthRush, setGrowthRush] = useState<boolean>(false);

  // Offer 3: Scale States
  const [scaleQuantity, setScaleQuantity] = useState<number>(10); // 10 or 15
  const [scaleRate, setScaleRate] = useState<number>(10); // 5 or 10
  const [scaleFormats, setScaleFormats] = useState<string[]>(['f16_9', 'f9_16', 'f1_1']);

  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic syncing of active offer changes
  const applyPackageConfig = (specs: any) => {
    setActiveOffer(specs.offer);
    if (specs.offer === 'launch') {
      setLaunchDuration(specs.duration);
      setRate(specs.rate);
      setLaunchFormats(specs.formats);
      setLaunchHooks(specs.hooks);
      setTimelineId('standard');
    } else if (specs.offer === 'growth') {
      setGrowthQuantity(specs.quantity);
      setGrowthDuration(specs.duration);
      setRate(specs.rate);
      setGrowthFormats(specs.formats);
      setGrowthHooks(specs.hooks);
      setGrowthRush(false);
    } else if (specs.offer === 'scale') {
      setScaleQuantity(specs.quantity);
      setScaleRate(specs.rate);
      setScaleFormats(specs.formats);
    }
    
    // Smoothly scroll down to the customization area
    const el = document.getElementById('interactive-planner-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Read URL query parameters on mount to restore shared quote
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlOffer = params.get('offer');
      if (urlOffer === 'launch' || urlOffer === 'growth' || urlOffer === 'scale') {
        setActiveOffer(urlOffer);
      }
      
      const urlDur = params.get('dur');
      const urlRate = params.get('rate');
      const urlTimeline = params.get('timeline');
      const urlFormats = params.get('formats');
      const urlHooks = params.get('hooks');
      const urlQty = params.get('qty');
      const urlRush = params.get('rush');

      if (urlOffer === 'launch') {
        if (urlDur) setLaunchDuration(Number(urlDur));
        if (urlRate) setRate(Number(urlRate));
        if (urlTimeline) setTimelineId(urlTimeline);
        if (urlFormats) {
          const activeFormats = ['f16_9'];
          urlFormats.split('-').forEach(idx => {
            const opt = FORMAT_OPTIONS[Number(idx)];
            if (opt && !activeFormats.includes(opt.id)) activeFormats.push(opt.id);
          });
          setLaunchFormats(activeFormats);
        }
        if (urlHooks) {
          const activeHooks: string[] = [];
          urlHooks.split('-').forEach(idx => {
            const opt = HOOK_OPTIONS[Number(idx)];
            if (opt) activeHooks.push(opt.id);
          });
          setLaunchHooks(activeHooks);
        }
      } else if (urlOffer === 'growth') {
        if (urlQty) setGrowthQuantity(Number(urlQty) === 4 ? 4 : 2);
        if (urlDur) setGrowthDuration(Number(urlDur));
        if (urlRate) setRate(Number(urlRate));
        if (urlRush) setGrowthRush(urlRush === 'true');
        if (urlFormats) {
          const activeFormats = ['f16_9'];
          urlFormats.split('-').forEach(idx => {
            const opt = FORMAT_OPTIONS[Number(idx)];
            if (opt && !activeFormats.includes(opt.id)) activeFormats.push(opt.id);
          });
          setGrowthFormats(activeFormats);
        }
        if (urlHooks) {
          const activeHooks: string[] = [];
          urlHooks.split('-').forEach(idx => {
            const opt = HOOK_OPTIONS[Number(idx)];
            if (opt) activeHooks.push(opt.id);
          });
          setGrowthHooks(activeHooks);
        }
      } else if (urlOffer === 'scale') {
        if (urlQty) setScaleQuantity(Number(urlQty) === 15 ? 15 : 10);
        if (urlRate) setScaleRate(Number(urlRate) === 5 ? 5 : 10);
        if (urlFormats) {
          const activeFormats = ['f16_9'];
          urlFormats.split('-').forEach(idx => {
            const opt = FORMAT_OPTIONS[Number(idx)];
            if (opt && !activeFormats.includes(opt.id)) activeFormats.push(opt.id);
          });
          setScaleFormats(activeFormats);
        }
      }
    } catch (e) {
      console.warn('Failed to parse sharing URL query parameters:', e);
    }
  }, []);

  const calculateSingleOfferCost = (duration: number, currentRate: number, selectedFormats: string[], selectedHooks: string[]) => {
    const base = duration * currentRate;
    const extraFormatsCount = selectedFormats.filter(f => f !== 'f16_9').length;
    const formatsCost = extraFormatsCount * 5 * duration;
    const hooksCost = selectedHooks.length * 25;
    return {
      base,
      formatsCost,
      hooksCost,
      total: base + formatsCost + hooksCost
    };
  };

  const getBaseDaysForDuration = (dur: number): number => {
    if (dur <= 30) return 7;
    if (dur <= 45) return 7;
    if (dur <= 60) return 10;
    if (dur <= 90) return 10;
    return 14;
  };

  // --- Calculation logic based on activeOffer ---
  let subtotalCost = 0;
  let discountAmount = 0;
  let discountPercentage = 0;
  let rushFee = 0;
  let totalProjectPrice = 0;
  let deliveryDays = 7;

  if (activeOffer === 'launch') {
    const singleCost = calculateSingleOfferCost(launchDuration, rate, launchFormats, launchHooks);
    subtotalCost = singleCost.total;
    
    const selectedTimeline = TIMELINE_OPTIONS.find(t => t.id === timelineId) || TIMELINE_OPTIONS[0];
    rushFee = subtotalCost * selectedTimeline.feeMultiplier;
    totalProjectPrice = subtotalCost + rushFee;
    
    const baseDays = getBaseDaysForDuration(launchDuration);
    deliveryDays = Math.ceil(baseDays / selectedTimeline.speedMultiplier);
  } else if (activeOffer === 'growth') {
    const singleCost = calculateSingleOfferCost(growthDuration, rate, growthFormats, growthHooks);
    subtotalCost = singleCost.total * growthQuantity;
    
    discountPercentage = growthQuantity === 2 ? 10 : 30;
    discountAmount = subtotalCost * (discountPercentage / 100);
    
    const basePriceAfterDiscount = subtotalCost - discountAmount;
    if (growthQuantity === 2 && growthRush) {
      rushFee = basePriceAfterDiscount * 0.25;
    } else {
      rushFee = 0;
    }
    
    totalProjectPrice = basePriceAfterDiscount + rushFee;
    
    if (growthQuantity === 2) {
      deliveryDays = growthRush ? 15 : 20;
    } else {
      deliveryDays = 30;
    }
  } else if (activeOffer === 'scale') {
    const base = 15 * scaleRate * scaleQuantity;
    const extraFormatsCount = scaleFormats.filter(f => f !== 'f16_9').length;
    const formatsCost = extraFormatsCount * 250;
    subtotalCost = base + formatsCost;
    
    discountPercentage = 0;
    discountAmount = 0;
    rushFee = 0;
    totalProjectPrice = subtotalCost;
    
    deliveryDays = scaleQuantity === 10 ? 15 : 20;
  }

  const handleCopyEstimateLink = () => {
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      let shareUrl = '';
      if (activeOffer === 'launch') {
        const formatsIndices = launchFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        const hooksIndices = launchHooks
          .map(h => HOOK_OPTIONS.findIndex(opt => opt.id === h))
          .filter(idx => idx !== -1)
          .join('-');
        shareUrl = `${baseUrl}?offer=launch&dur=${launchDuration}&rate=${rate}&timeline=${timelineId}&formats=${formatsIndices}&hooks=${hooksIndices}#pricing-calculator`;
      } else if (activeOffer === 'growth') {
        const formatsIndices = growthFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        const hooksIndices = growthHooks
          .map(h => HOOK_OPTIONS.findIndex(opt => opt.id === h))
          .filter(idx => idx !== -1)
          .join('-');
        shareUrl = `${baseUrl}?offer=growth&qty=${growthQuantity}&dur=${growthDuration}&rate=${rate}&formats=${formatsIndices}&hooks=${hooksIndices}&rush=${growthRush}#pricing-calculator`;
      } else if (activeOffer === 'scale') {
        const formatsIndices = scaleFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        shareUrl = `${baseUrl}?offer=scale&qty=${scaleQuantity}&rate=${scaleRate}&formats=${formatsIndices}#pricing-calculator`;
      }

      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      alert('Could not copy link.');
    }
  };

  const handleContactUsRedirect = () => {
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      let targetUrl = '';
      if (activeOffer === 'launch') {
        const formatsIndices = launchFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        const hooksIndices = launchHooks
          .map(h => HOOK_OPTIONS.findIndex(opt => opt.id === h))
          .filter(idx => idx !== -1)
          .join('-');
        targetUrl = `${baseUrl}?source=calculator&offer=launch&dur=${launchDuration}&rate=${rate}&timeline=${timelineId}&formats=${formatsIndices}&hooks=${hooksIndices}&price=${totalProjectPrice}#contact`;
      } else if (activeOffer === 'growth') {
        const formatsIndices = growthFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        const hooksIndices = growthHooks
          .map(h => HOOK_OPTIONS.findIndex(opt => opt.id === h))
          .filter(idx => idx !== -1)
          .join('-');
        targetUrl = `${baseUrl}?source=calculator&offer=growth&qty=${growthQuantity}&dur=${growthDuration}&rate=${rate}&formats=${formatsIndices}&hooks=${hooksIndices}&rush=${growthRush}&price=${totalProjectPrice}#contact`;
      } else if (activeOffer === 'scale') {
        const formatsIndices = scaleFormats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        targetUrl = `${baseUrl}?source=calculator&offer=scale&qty=${scaleQuantity}&rate=${scaleRate}&formats=${formatsIndices}&price=${totalProjectPrice}#contact`;
      }

      window.location.href = targetUrl;
    } catch (e) {
      console.error('Inquiry redirect path check failed', e);
    }
  };

  return (
    <section id="pricing-calculator" className="relative mt-8 py-6 px-6 md:px-12 rounded-[24px] bg-white text-neutral-900 overflow-hidden shadow-xl isolate">
      {/* Background glow shadow mimicking WhyUs */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/8 blur-[150px] pointer-events-none -z-10" />

      {/* Default Border that matches WhyUs.tsx */}
      <span className="absolute inset-0 rounded-[24px] border border-black/5 pointer-events-none" />

      {/* Apple-like soft backglow */}
      <span className="absolute inset-4 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-[0.03] blur-[100px] rounded-[32px] pointer-events-none -z-20" />

      <div className="max-w-5xl mx-auto relative z-10 font-sans">
        {/* Standard Motion Packages Title */}
        <div className="text-center mb-10 pt-4">
          <div className="text-[10px] font-semibold tracking-widest text-[#8A2EFF] uppercase mb-1.5">
            Standard Motion Packages
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2 font-sans leading-tight">
            Select a curated package. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] font-medium italic">Lock in premium value instantly.</span>
          </h3>
          <p className="text-xs text-neutral-500 max-w-lg mx-auto font-light leading-normal">
            Choose one of our production structures, or use the interactive calculator below to customize every parameter.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PACKAGES_OPTIONS.map((pkg) => {
            return (
              <div 
                key={pkg.id}
                className={`p-6 md:p-8 rounded-[24px] bg-white flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(138,46,255,0.08)] transition-all duration-500 ease-out relative group overflow-hidden isolate ${
                  pkg.isPopular ? 'ring-2 ring-[#8A2EFF]/30 shadow-[0_15px_35px_rgba(138,46,255,0.05)]' : ''
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#8A2EFF] to-[#E0B3CF] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm z-20">
                    Most Popular
                  </span>
                )}
                
                {/* Default Border that fades out on hover */}
                <span className="absolute inset-0 rounded-[24px] border border-black/10 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />
                
                {/* Gradient border mask overlay */}
                <span className="absolute inset-0 rounded-[24px] p-[1.5px] bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                  <span className="block w-full h-full bg-white rounded-[22.5px]" />
                </span>

                {/* Apple-like soft backglow */}
                <span className="absolute inset-2 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-0 group-hover:opacity-15 blur-2xl rounded-[24px] transition-all duration-500 pointer-events-none -z-20" />

                <div>
                  <div className="text-[10px] font-semibold tracking-widest text-[#8A2EFF]/80 uppercase mb-1">
                    {pkg.subtitle}
                  </div>
                  <div className="text-xl font-bold tracking-tight mb-2 text-[#141414] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8A2EFF] group-hover:to-[#F4B179] transition-all duration-300">
                    {pkg.name}
                  </div>
                  <p className="text-[11px] opacity-70 text-[#555] leading-relaxed mb-4 min-h-[44px]">
                    {pkg.description}
                  </p>
                  
                  <div className="my-6 border-t border-neutral-100" />

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#555]">
                        <Check className="w-3.5 h-3.5 text-[#8A2EFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => applyPackageConfig(pkg.specs)}
                    className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-950 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer hover:shadow-lg hover:shadow-neutral-950/10 active:scale-[0.98]"
                  >
                    Configure this Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div id="interactive-planner-anchor" className="relative flex items-center justify-center my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-neutral-200"></div>
          </div>
          <div className="relative px-5 bg-white text-[9px] uppercase font-bold tracking-[0.2em] text-neutral-400">
            Or Design Custom Specification Below
          </div>
        </div>

        {/* Upper Title */}
        <div className="text-center mb-6">
          <div className="text-[10px] font-semibold tracking-widest text-[#8A2EFF] uppercase mb-1.5">
            Interactive Cost Planner
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2 font-sans leading-tight">
            Design your project scope. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] font-medium italic">Secure instantaneous clarity.</span>
          </h3>
          <p className="text-xs text-neutral-500 max-w-lg mx-auto font-light leading-normal">
            Our rate-based algorithm is 100% transparent. Tweak the timeline, format adaptions, and hooks to find your optimal path.
          </p>
        </div>

        {/* Dynamic State Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT AREA: Configuration Panel (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Offer Selector */}
            <div className="space-y-2.5">
              <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-neutral-450 block">
                Selected Offer Tier
              </label>
              <div className="grid grid-cols-3 p-1 rounded-xl bg-neutral-50 border border-neutral-200/50 gap-1 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveOffer('launch');
                    setRate(25);
                  }}
                  className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeOffer === 'launch'
                      ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Launch
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveOffer('growth');
                    setRate(25);
                  }}
                  className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeOffer === 'growth'
                      ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Growth
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveOffer('scale');
                  }}
                  className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeOffer === 'scale'
                      ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Scale
                </button>
              </div>
            </div>

            {/* Graphics Rate Slider / Selector */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-neutral-450">
                  Estimated Graphics Rate
                </span>
                <span className="text-xl font-black font-sans text-neutral-900 tracking-tight">
                  ${activeOffer === 'scale' ? scaleRate : rate}/s <span className="text-[10px] font-normal text-neutral-400">rate</span>
                </span>
              </div>
              
              <div className="grid grid-cols-3 p-1 rounded-xl bg-neutral-50 border border-neutral-200/50 gap-1">
                {activeOffer === 'scale' ? (
                  [5, 10].map((stepValue) => (
                    <button
                      key={stepValue}
                      type="button"
                      onClick={() => setScaleRate(stepValue)}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                        scaleRate === stepValue
                          ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                          : 'text-neutral-550 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      ${stepValue}/s
                    </button>
                  ))
                ) : (
                  [15, 25, 40].map((stepValue) => (
                    <button
                      key={stepValue}
                      type="button"
                      onClick={() => setRate(stepValue)}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                        rate === stepValue
                          ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                          : 'text-neutral-550 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      ${stepValue}/s
                    </button>
                  ))
                )}
              </div>

              {/* Unique Bullet Descriptions */}
              <ul className="space-y-1 text-[11px] font-light text-neutral-500 pt-1.5 border-t border-[#f4f4f4] leading-snug">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#8A2EFF] font-bold">—</span>
                  <span>
                    {activeOffer === 'scale' 
                      ? 'Scale graphics offer is hyper-optimized for high volume asset creation.' 
                      : 'Graphics rate is our core customizable pricing variable.'}
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#E0B3CF] font-bold">—</span>
                  <span>Adjusted systematically based on production and storytelling complexity.</span>
                </li>
              </ul>
            </div>

            {/* Custom Settings Configured For Selected Offer */}
            <div className="space-y-6 pt-3 border-t border-neutral-100">
              
              {activeOffer === 'launch' && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                      Launch Video Customization
                    </h4>
                    <span className="p-1 px-2 bg-neutral-100 text-neutral-600 rounded-md text-[9px] font-bold tracking-widest uppercase">
                      Single Video
                    </span>
                  </div>

                  {/* Video Duration Selector */}
                  <div className="p-4 md:p-5 rounded-[20px] bg-white border border-neutral-200/50 space-y-4 shadow-sm">
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-neutral-400">
                          Video duration
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                          {launchDuration}s <span className="text-xs font-normal text-neutral-500">(${rate}/s)</span>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-neutral-50 border border-neutral-200/55">
                        {[30, 45, 60].map((dur) => (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => setLaunchDuration(dur)}
                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer text-center ${
                              launchDuration === dur
                                ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] to-[#F4B179]'
                                : 'text-neutral-500 hover:text-neutral-800'
                            }`}
                          >
                            {dur}s
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Format adaptations */}
                    <div className="space-y-1.5 pt-1.5 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Format Adaptations ($5/s each)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {FORMAT_OPTIONS.map((opt) => {
                          const isChecked = launchFormats.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                if (opt.id === 'f16_9') return;
                                const alreadyChecked = launchFormats.includes(opt.id);
                                setLaunchFormats(alreadyChecked 
                                  ? launchFormats.filter(f => f !== opt.id)
                                  : [...launchFormats, opt.id]
                                );
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[52px] cursor-pointer ${
                                isChecked
                                  ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-950'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full font-bold">
                                <span className="text-[10px] font-bold tracking-tight">
                                  {opt.label}
                                </span>
                                {isChecked && <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />}
                              </div>
                              <div className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-400'} leading-none`}>
                                {opt.res || opt.detail}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Hook Variations Section */}
                    <div className="space-y-1.5 pt-1.5 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Hook Variations ($25 each)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {HOOK_OPTIONS.map((opt) => {
                          const isChecked = launchHooks.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                const alreadyChecked = launchHooks.includes(opt.id);
                                setLaunchHooks(alreadyChecked
                                  ? launchHooks.filter(h => h !== opt.id)
                                  : [...launchHooks, opt.id]
                                );
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[44px] cursor-pointer ${
                                isChecked
                                  ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-950'
                              }`}
                            >
                              <div className="flex justify-between items-center w-full leading-none">
                                <span className="text-[9px] font-bold truncate pr-1">{opt.label}</span>
                                {isChecked && <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />}
                              </div>
                              <span className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-450'} font-mono`}>
                                +$25
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeOffer === 'growth' && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                      Growth Options & Customization
                    </h4>
                    <span className="p-1 px-2 bg-[#8A2EFF]/10 text-[#8A2EFF] rounded-md text-[9px] font-bold tracking-widest uppercase">
                      Package Plan
                    </span>
                  </div>

                  {/* Quantity and Discount Selector */}
                  <div className="p-4 md:p-5 rounded-[20px] bg-white border border-neutral-200/50 space-y-4 shadow-sm">
                    <div className="space-y-3">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Choose Quantity Per Month
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setGrowthQuantity(2)}
                          className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                            growthQuantity === 2
                              ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 shadow-sm'
                              : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full mb-1">
                            <span className="text-xs font-bold text-neutral-900">2 Videos / Mo</span>
                            {growthQuantity === 2 && <Check className="w-3 h-3 text-[#8A2EFF]" />}
                          </div>
                          <span className="text-[10px] text-[#8A2EFF] font-semibold uppercase tracking-wider">
                            10% OFF Package
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setGrowthQuantity(4);
                            setGrowthRush(false); // Can't select rush for 4 videos
                          }}
                          className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                            growthQuantity === 4
                              ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 shadow-sm'
                              : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full mb-1">
                            <span className="text-xs font-bold text-neutral-900">4 Videos / Mo</span>
                            {growthQuantity === 4 && <Check className="w-3 h-3 text-[#8A2EFF]" />}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">
                            30% OFF Package
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Standard Duration selector for Growth videos */}
                    <div className="space-y-2 pt-3 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-400 block">
                        Video Duration (Applies to all)
                      </label>
                      <div className="grid grid-cols-5 gap-1.5 p-1 rounded-xl bg-neutral-50 border border-neutral-200/50">
                        {[30, 45, 60, 90, 120].map((dur) => (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => setGrowthDuration(dur)}
                            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer text-center ${
                              growthDuration === dur
                                ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] to-[#F4B179]'
                                : 'text-neutral-550 hover:text-neutral-800'
                            }`}
                          >
                            {dur}s
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Keep in 2 videos per month whether he needs 2 videos in 15 days */}
                    {growthQuantity === 2 && (
                      <div className="pt-3 border-t border-neutral-100 flex items-start gap-3">
                        <input
                          id="chk-growth-rush"
                          type="checkbox"
                          checked={growthRush}
                          onChange={(e) => setGrowthRush(e.target.checked)}
                          className="w-4 h-4 rounded border-neutral-300 text-[#8A2EFF] focus:ring-[#8A2EFF] mt-0.5 cursor-pointer"
                        />
                        <div className="space-y-0.5">
                          <label htmlFor="chk-growth-rush" className="text-xs font-bold text-neutral-800 cursor-pointer">
                            Need both videos in 15 days?
                          </label>
                          <p className="text-[10px] text-neutral-500 font-light leading-snug">
                            Ensures priority queue speed delivery for your launch. Adds +25% custom turnaround rush factor.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Format adaptations */}
                    <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Format Adaptations ($5/s each per video)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {FORMAT_OPTIONS.map((opt) => {
                          const isChecked = growthFormats.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                if (opt.id === 'f16_9') return;
                                const alreadyChecked = growthFormats.includes(opt.id);
                                setGrowthFormats(alreadyChecked 
                                  ? growthFormats.filter(f => f !== opt.id)
                                  : [...growthFormats, opt.id]
                                );
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[52px] cursor-pointer ${
                                isChecked
                                  ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-950'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full font-bold">
                                <span className="text-[10px] font-bold tracking-tight">{opt.label}</span>
                                {isChecked && <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />}
                              </div>
                              <div className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-400'} leading-none`}>
                                {opt.res || opt.detail}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Hook Variations Section */}
                    <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Hook Variations ($25 each per video)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {HOOK_OPTIONS.map((opt) => {
                          const isChecked = growthHooks.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                const alreadyChecked = growthHooks.includes(opt.id);
                                setGrowthHooks(alreadyChecked
                                  ? growthHooks.filter(h => h !== opt.id)
                                  : [...growthHooks, opt.id]
                                );
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[44px] cursor-pointer ${
                                isChecked
                                  ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-950'
                              }`}
                            >
                              <div className="flex justify-between items-center w-full leading-none">
                                <span className="text-[9px] font-bold truncate pr-1">{opt.label}</span>
                                {isChecked && <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />}
                              </div>
                              <span className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-450'} font-mono`}>
                                +$25
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeOffer === 'scale' && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                      Scale Customization & Quantities
                    </h4>
                    <span className="p-1 px-2 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] text-white rounded-md text-[9px] font-bold tracking-widest uppercase">
                      High Volume
                    </span>
                  </div>

                  <div className="p-4 md:p-5 rounded-[20px] bg-white border border-neutral-200/50 space-y-4 shadow-sm">
                    {/* Fixed Duration Note */}
                    <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-lg text-xs leading-relaxed text-neutral-600">
                      ⚡ <span className="font-bold text-neutral-900 font-sans">Fixed 15-Second duration:</span> Scale plans are hyper-optimized for high density hooks, social ads, and repetitive promotional assets. Duration is hardcoded to 15s.
                    </div>

                    {/* Quantity choices */}
                    <div className="space-y-2.5">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                        Select Quantity Options
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setScaleQuantity(10)}
                          className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                            scaleQuantity === 10
                              ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 shadow-sm'
                              : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full mb-0.5">
                            <span className="text-xs font-bold text-neutral-900 font-sans">10 Videos</span>
                            {scaleQuantity === 10 && <Check className="w-3 h-3 text-[#8A2EFF]" />}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-light">Per Month</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setScaleQuantity(15)}
                          className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                            scaleQuantity === 15
                              ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 shadow-sm'
                              : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full mb-0.5">
                            <span className="text-xs font-bold text-neutral-900 font-sans">15 Videos</span>
                            {scaleQuantity === 15 && <Check className="w-3 h-3 text-[#8A2EFF]" />}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-light font-sans">Per Month</span>
                        </button>
                      </div>
                    </div>

                    {/* Format adaptations */}
                    <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                      <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-410 block">
                        Format Adaptations ($250 per adaptation)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                        {FORMAT_OPTIONS.map((opt) => {
                          const isChecked = scaleFormats.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                if (opt.id === 'f16_9') return;
                                const alreadyChecked = scaleFormats.includes(opt.id);
                                setScaleFormats(alreadyChecked 
                                  ? scaleFormats.filter(f => f !== opt.id)
                                  : [...scaleFormats, opt.id]
                                );
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[52px] cursor-pointer ${
                                isChecked
                                  ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                  : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-950'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full font-bold font-sans">
                                <span className="text-[10px] font-bold tracking-tight">{opt.label}</span>
                                {isChecked && <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />}
                              </div>
                              <div className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-400'} leading-none`}>
                                {opt.res || opt.detail}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Delivery Timeline Card Switcher (Only for Launch offer) */}
            {activeOffer === 'launch' && (
              <div className="space-y-2 pt-3 border-t border-neutral-100 font-sans">
                <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                  Delivery Timeline Target
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5">
                  {TIMELINE_OPTIONS.map((opt) => {
                    const isSelected = timelineId === opt.id;
                    const factorDays = Math.ceil(getBaseDaysForDuration(launchDuration) / opt.speedMultiplier);

                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setTimelineId(opt.id)}
                        className={`p-2 rounded-xl border flex flex-col items-center text-center justify-between gap-0.5 transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 text-[#8A2EFF] shadow-md shadow-[#8A2EFF]/5'
                            : 'border border-neutral-200 bg-white text-neutral-500 hover:text-neutral-900'
                        }`}
                      >
                        <div className="text-[10px] font-bold leading-tight">
                          {opt.name}
                        </div>
                        <div className={`text-[8px] ${isSelected ? 'text-[#8A2EFF]/80' : 'text-neutral-405'} font-semibold uppercase tracking-wider`}>
                          {opt.feeLabel}
                        </div>
                        <div className={`text-[10px] font-mono font-bold pt-0.5 border-t w-full mt-0.5 ${isSelected ? 'border-[#8A2EFF]/25' : 'border-neutral-150'}`}>
                          {factorDays} d
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT AREA: Quote Summary Box (5 columns) */}
          <div className="lg:col-span-5 h-full space-y-4 lg:sticky lg:top-[90px] font-sans">
            
            {/* Quick Result Panels */}
            <div className="grid grid-cols-2 gap-3">
              {/* Total Estimate Panel */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] text-white shadow-md relative overflow-hidden">
                <span className="text-[9px] uppercase font-bold tracking-widest text-white/85 block mb-0.5 font-sans">
                  Total Estimate
                </span>
                <span className="text-xl md:text-2xl font-black font-sans text-white tracking-tight leading-none block my-1">
                  ${totalProjectPrice.toLocaleString()}
                </span>
                <span className="text-[9px] text-white/95 block font-medium leading-none font-sans">
                  {activeOffer === 'launch' && timelineId !== 'standard'
                    ? 'Speed priority fee included'
                    : activeOffer === 'growth' && growthRush
                    ? '+25% rush delivery'
                    : 'Package tier rates'}
                </span>
              </div>

              {/* Delivery Speed Panel */}
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/85 font-sans">
                <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 block mb-0.5">
                  Production Delivery
                </span>
                <span className="text-xl md:text-2xl font-bold italic tracking-tight text-[#8A2EFF] leading-none block my-1">
                  {deliveryDays} days
                </span>
                <span className="text-[9px] text-neutral-500 block leading-none font-sans">
                  Estimated fulfillment
                </span>
              </div>
            </div>

            {/* Full Dynamic Itemized Bill invoice */}
            <div className="rounded-2xl bg-[#fbfbfb] border border-neutral-200/50 p-4 space-y-3 shadow-sm">
              <span className="text-[9px] uppercase font-black tracking-[0.25em] text-neutral-450 block mb-1 font-sans">
                Itemized Estimate Breakdown
              </span>

              {/* Map itemized values based on selected offer */}
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1.5 custom-scrollbar">
                
                {activeOffer === 'launch' && (
                  <div className="space-y-1 font-sans">
                    <div className="flex justify-between items-baseline font-bold text-[11px] text-neutral-800 font-sans">
                      <span>Launch Video ({launchDuration}s)</span>
                      <span className="font-mono text-[#8A2EFF]">${subtotalCost.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-[10px] text-neutral-500 pl-1.5">
                      <span>Main story block — {launchDuration}s × ${rate}/s</span>
                      <span className="font-mono font-medium">${(launchDuration * rate).toLocaleString()}</span>
                    </div>

                    {launchFormats.filter(f => f !== 'f16_9').map(formatId => {
                      const fOpt = FORMAT_OPTIONS.find(f => f.id === formatId);
                      return (
                        <div key={formatId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic font-sans">
                          <span>↳ Adapt ({fOpt?.label}) — {launchDuration}s × $5/s</span>
                          <span className="font-mono font-medium">${(5 * launchDuration).toLocaleString()}</span>
                        </div>
                      );
                    })}

                    {launchHooks.map(hId => (
                      <div key={hId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic font-sans animate-fade-in">
                        <span>↳ Hook ({hId}) — flat rate</span>
                        <span className="font-mono font-medium">$25</span>
                      </div>
                    ))}

                    <div className="text-[9px] text-neutral-400 pl-1.5 block font-light leading-none pt-0.5">
                      {getBaseDaysForDuration(launchDuration)} business days standard build
                    </div>
                  </div>
                )}

                {activeOffer === 'growth' && (
                  <div className="space-y-1 font-sans">
                    <div className="flex justify-between items-baseline font-bold text-[11px] text-neutral-800 font-sans">
                      <span>Growth Pack — {growthQuantity} Videos ({growthDuration}s each)</span>
                      <span className="font-mono text-[#8A2EFF]">${(subtotalCost).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-[10px] text-neutral-500 pl-1.5 animate-fade-in">
                      <span>{growthQuantity}x Main story — {growthDuration}s × ${rate}/s</span>
                      <span className="font-mono font-medium">${(growthQuantity * growthDuration * rate).toLocaleString()}</span>
                    </div>

                    {growthFormats.filter(f => f !== 'f16_9').map(formatId => {
                      const fOpt = FORMAT_OPTIONS.find(f => f.id === formatId);
                      return (
                        <div key={formatId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic animate-fade-in font-sans">
                          <span>↳ Adapt ({fOpt?.label}) — {growthQuantity}x @ $5/s</span>
                          <span className="font-mono font-medium">${(growthQuantity * 5 * growthDuration).toLocaleString()}</span>
                        </div>
                      );
                    })}

                    {growthHooks.map(hId => (
                      <div key={hId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic font-sans animate-fade-in">
                        <span>↳ Hook ({hId}) — {growthQuantity}x flat rate</span>
                        <span className="font-mono font-medium">${(growthQuantity * 25).toLocaleString()}</span>
                      </div>
                    ))}

                    <div className="text-[9px] text-neutral-400 pl-1.5 block font-light leading-none pt-0.5 font-sans">
                      {growthQuantity === 2 ? '20' : '30'} business days standard delivery
                    </div>
                  </div>
                )}

                {activeOffer === 'scale' && (
                  <div className="space-y-1 font-sans">
                    <div className="flex justify-between items-baseline font-bold text-[11px] text-neutral-800 font-sans animate-fade-in">
                      <span>Scale Content Pack ({scaleQuantity}x 15s clips)</span>
                      <span className="font-mono text-[#8A2EFF]">${subtotalCost.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-[10px] text-neutral-500 pl-1.5">
                      <span>{scaleQuantity}x main clip — 15s × ${scaleRate}/s</span>
                      <span className="font-mono font-medium">${(scaleQuantity * 15 * scaleRate).toLocaleString()}</span>
                    </div>

                    {scaleFormats.filter(f => f !== 'f16_9').map(formatId => {
                      const fOpt = FORMAT_OPTIONS.find(f => f.id === formatId);
                      return (
                        <div key={formatId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic font-sans">
                          <span>↳ Adapt ({fOpt?.label}) — flat rate</span>
                          <span className="font-mono font-medium">$250</span>
                        </div>
                      );
                    })}

                    <div className="text-[9px] text-neutral-400 pl-1.5 block font-light leading-none pt-0.5 font-sans">
                      {scaleQuantity === 10 ? '15' : '20'} business days standard delivery
                    </div>
                  </div>
                )}

              </div>

              {/* Global summary rows */}
              <div className="border-t border-neutral-200/80 pt-2.5 space-y-1.5 font-sans">
                
                {activeOffer === 'growth' && (
                  <div className="flex justify-between text-xs text-neutral-500 font-sans">
                    <span>Package Discount ({discountPercentage}%)</span>
                    <span className="font-mono text-emerald-600 font-bold">-${discountAmount.toLocaleString()}</span>
                  </div>
                )}

                {rushFee > 0 && (
                  <div className="flex justify-between text-xs text-[#8A2EFF] font-sans">
                    <span>Rush Surcharge</span>
                    <span className="font-mono font-bold">+${rushFee.toLocaleString()}</span>
                  </div>
                )}

                {/* Final calculated output */}
                <div className="flex justify-between items-center text-xs font-bold text-neutral-800 pt-1.5 border-t border-neutral-200 font-sans leading-none">
                  <span>Total project estimate</span>
                  <span className="text-base font-black text-neutral-900 font-mono">${totalProjectPrice.toLocaleString()}</span>
                </div>

                {/* Timeline estimation */}
                <div className="flex justify-between items-center text-[11px] text-neutral-500 font-sans leading-none pb-0.5">
                  <span>Estimated timeline</span>
                  <span className="font-bold text-neutral-700">{deliveryDays} business days</span>
                </div>

              </div>

              {/* Copy links & alerts */}
              <div className="pt-1.5 font-sans space-y-2">
                <button
                  type="button"
                  id="btn-copy-estimate-link"
                  onClick={handleCopyEstimateLink}
                  className="w-full py-2.5 rounded-lg bg-neutral-950 text-white hover:bg-neutral-900 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98] cursor-pointer relative overflow-hidden group font-sans"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="relative z-10">{copied ? 'Estimate Link Copied!' : 'Copy Estimate Link'}</span>
                </button>

                <button
                  type="button"
                  id="btn-contact-us-redirect"
                  onClick={handleContactUsRedirect}
                  className="w-full py-2.5 rounded-lg border border-[#8A2EFF]/30 bg-[#8A2EFF]/5 text-[#8A2EFF] hover:bg-[#8A2EFF]/10 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98] cursor-pointer relative overflow-hidden group font-sans"
                >
                  <span className="relative z-10">Contact Us with Estimate</span>
                </button>

                <span className="text-[9px] text-neutral-500 text-center block leading-snug font-sans">
                  Share this custom scope directly with stakeholders or send an inquiry with this preset.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
