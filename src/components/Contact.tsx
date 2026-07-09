import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

const FORMAT_OPTIONS = [
  { id: 'f16_9', label: '16:9' },
  { id: 'f9_16', label: '9:16' },
  { id: 'f1_1', label: '1:1' },
  { id: 'f4_5', label: '4:5' },
  { id: 'f_custom', label: 'Custom' },
];

const HOOK_OPTIONS = [
  { id: 'Problem', label: 'Problem' },
  { id: 'Dream Outcome', label: 'Dream Outcome' },
  { id: 'Persona callout', label: 'Persona callout' },
  { id: 'Social proof', label: 'Social proof' },
  { id: 'Custom', label: 'Custom' },
];

export default function Contact() {
  const [isFromCalculator, setIsFromCalculator] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<'launch' | 'growth' | 'scale'>('launch');
  const [selectedFormatIds, setSelectedFormatIds] = useState<string[]>([]);
  const [selectedRate, setSelectedRate] = useState<number>(25);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [selectedHooks, setSelectedHooks] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(2);
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [isRush, setIsRush] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source');
    if (source === 'calculator') {
      setIsFromCalculator(true);
      
      const offer = params.get('offer') as 'launch' | 'growth' | 'scale' | null;
      if (offer) setSelectedOffer(offer);
      
      const price = params.get('price');
      if (price) setSelectedPrice(Number(price));
      
      const rateVal = params.get('rate');
      if (rateVal) setSelectedRate(Number(rateVal));
      
      const duration = params.get('dur') || params.get('duration');
      if (duration) setSelectedDuration(Number(duration));
      
      const quantity = params.get('qty') || params.get('quantity');
      if (quantity) setSelectedQuantity(Number(quantity));
      
      const formats = params.get('formats');
      if (formats) {
        const indices = formats.split('-').map(Number);
        const formatIds = indices
          .map(idx => FORMAT_OPTIONS[idx]?.id)
          .filter(Boolean);
        setSelectedFormatIds(formatIds);
      }
      
      const hooks = params.get('hooks');
      if (hooks) {
        const indices = hooks.split('-').map(Number);
        const hookIds = indices
          .map(idx => HOOK_OPTIONS[idx]?.id)
          .filter(Boolean);
        setSelectedHooks(hookIds);
      }
      
      const timeline = params.get('timeline');
      if (timeline) setSelectedTimeline(timeline);
      
      const rush = params.get('rush');
      if (rush) setIsRush(rush === 'true');
    } else {
      setIsFromCalculator(false);
    }
  }, []);

  // Recalculate price dynamically
  let calculatedPrice = selectedPrice;
  let calculatedDays = 15;

  if (isFromCalculator) {
    if (selectedOffer === 'launch') {
      const base = selectedDuration * selectedRate;
      const extraFormatsCount = selectedFormatIds.filter(f => f !== 'f16_9').length;
      const formatsCost = extraFormatsCount * 5 * selectedDuration;
      const hooksCost = selectedHooks.length * 25;
      const subtotal = base + formatsCost + hooksCost;
      
      let multiplier = 1;
      if (selectedTimeline === 'priority') multiplier = 1.5;
      
      calculatedPrice = Math.round(subtotal * multiplier);
      
      const baseDays = selectedDuration <= 45 ? 10 : 14;
      calculatedDays = Math.max(3, Math.round(baseDays / (selectedTimeline === 'standard' ? 1.0 : 1.6667)));
    } else if (selectedOffer === 'growth') {
      const base = selectedDuration * selectedRate;
      const extraFormatsCount = selectedFormatIds.filter(f => f !== 'f16_9').length;
      const formatsCost = extraFormatsCount * 5 * selectedDuration;
      const hooksCost = selectedHooks.length * 25;
      const singleTotal = base + formatsCost + hooksCost;
      
      const subtotal = singleTotal * selectedQuantity;
      const discountPercentage = selectedQuantity === 4 ? 15 : 10;
      const discountAmount = Math.round(subtotal * (discountPercentage / 100));
      const basePriceAfterDiscount = subtotal - discountAmount;
      const rushFee = isRush ? Math.round(basePriceAfterDiscount * 0.25) : 0;
      calculatedPrice = basePriceAfterDiscount + rushFee;
      
      const baseDays = selectedQuantity === 2 ? 20 : 30;
      const rushMultiplier = isRush ? 1.5 : 1.0;
      calculatedDays = Math.round(baseDays / rushMultiplier);
    } else if (selectedOffer === 'scale') {
      const base = 15 * selectedRate * selectedQuantity;
      const extraFormatsCount = selectedFormatIds.filter(f => f !== 'f16_9').length;
      const formatsCost = extraFormatsCount * 250;
      calculatedPrice = base + formatsCost;
      
      calculatedDays = selectedQuantity === 10 ? 15 : 20;
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050507] text-white border-b border-white/[0.06] relative overflow-hidden isolate font-sans">
      {/* Background ambient radial glow */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[#8B5CF6]/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l-2 border-[#8B5CF6] pl-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B5CF6] block mb-2">
                CHAPTER 04 // INQUIRY BRIEF
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]"
              >
                Start your <br />project.
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-sm text-[#A1A1AA] font-light leading-relaxed max-w-sm"
            >
              Fill out the technical brief to give us context on your product layout, or reach out to us directly.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 pt-4"
            >
              <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-neutral-500 font-mono">Alternatively, email us directly:</p>
              <a 
                href="mailto:hello@aeymotion.com" 
                className="text-lg md:text-xl text-[#8B5CF6] hover:text-white border-b border-[#8B5CF6]/30 hover:border-white transition-all pb-1 font-bold tracking-tight"
              >
                hello@aeymotion.com
              </a>
            </motion.div>
          </div>

          {/* Right form column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 relative p-8 md:p-12 bg-[#0B0B0F] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">Send an Inquiry Brief</h3>
            
            <form className="space-y-8" action="https://formsubmit.co/hello@aeymotion.com" method="POST">
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New inquiry from AeyMotion Website" />
              <input type="hidden" name="_template" value="table" />

              {isFromCalculator && (
                <>
                  <input type="hidden" name="selected_offer" value={selectedOffer} />
                  <input type="hidden" name="graphics_rate" value={`$${selectedRate}/s`} />
                  <input type="hidden" name="selected_formats" value={['16:9', ...selectedFormatIds].join(', ')} />
                  <input type="hidden" name="selected_hooks" value={selectedHooks.join(', ') || 'None'} />
                  <input type="hidden" name="estimated_price" value={`$${calculatedPrice}`} />
                  <input type="hidden" name="estimated_delivery" value={`${calculatedDays} days`} />
                  <input type="hidden" name="specs" value={
                    selectedOffer === 'scale' 
                      ? `${selectedQuantity} Videos @ 15s`
                      : `${selectedQuantity} Video${selectedQuantity > 1 ? 's' : ''} @ ${selectedDuration}s`
                  } />
                </>
              )}

              {isFromCalculator && (
                <div className="p-6 border border-white/[0.08] bg-white/[0.01] rounded-xl space-y-4">
                  <h4 className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-[#8B5CF6]">
                    Active Scope & Price Planner Details
                  </h4>

                  <div className="space-y-4 text-xs text-neutral-300">
                    
                    {/* Project Tier */}
                    <div className="space-y-1.5">
                      <span className="block text-[8px] font-mono uppercase text-neutral-500">PROJECT TIER</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['launch', 'growth', 'scale'].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => {
                              setSelectedOffer(tier as 'launch' | 'growth' | 'scale');
                              if (tier === 'scale') {
                                setSelectedRate(10);
                                setSelectedQuantity(10);
                                setSelectedFormatIds(['f16_9', 'f9_16', 'f1_1']);
                              } else {
                                setSelectedRate(25);
                                setSelectedDuration(tier === 'launch' ? 30 : 60);
                                setSelectedQuantity(tier === 'growth' ? 2 : 1);
                                setSelectedFormatIds(['f16_9']);
                              }
                            }}
                            className={`py-2 text-[9px] font-mono uppercase transition-all duration-300 text-center rounded-lg ${
                              selectedOffer === tier
                                ? 'bg-white text-black font-bold'
                                : 'border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Graphics Rate */}
                    <div className="space-y-1.5">
                      <span className="block text-[8px] font-mono uppercase text-neutral-500">GRAPHICS RATE</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {selectedOffer === 'scale' ? (
                          [5, 10].map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setSelectedRate(r)}
                              className={`py-2 text-[9px] font-mono uppercase transition-all duration-300 text-center rounded-lg ${
                                selectedRate === r
                                  ? 'bg-white text-black font-bold'
                                  : 'border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                              }`}
                            >
                              ${r}/s
                            </button>
                          ))
                        ) : (
                          [15, 25, 40].map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setSelectedRate(r)}
                              className={`py-2 text-[9px] font-mono uppercase transition-all duration-300 text-center rounded-lg ${
                                selectedRate === r
                                  ? 'bg-white text-black font-bold'
                                  : 'border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                              }`}
                            >
                              ${r}/s
                            </button>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Format Adaptations */}
                    <div className="space-y-1.5">
                      <span className="block text-[8px] font-mono uppercase text-neutral-500">FORMAT ADAPTATIONS</span>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                        {FORMAT_OPTIONS.map((opt) => {
                          const isSelected = selectedFormatIds.includes(opt.id) || opt.id === 'f16_9';
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              disabled={opt.id === 'f16_9'}
                              onClick={() => {
                                if (selectedFormatIds.includes(opt.id)) {
                                  setSelectedFormatIds(selectedFormatIds.filter(f => f !== opt.id));
                                } else {
                                  setSelectedFormatIds([...selectedFormatIds, opt.id]);
                                }
                              }}
                              className={`py-2 text-[8px] font-mono uppercase transition-all duration-300 text-center rounded-lg ${
                                opt.id === 'f16_9'
                                  ? 'bg-white/5 text-neutral-600 border border-white/5 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-white text-black font-bold'
                                  : 'border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Hooks Slices */}
                    {(selectedOffer === 'launch' || selectedOffer === 'growth') && (
                      <div className="space-y-1.5">
                        <span className="block text-[8px] font-mono uppercase text-neutral-500">HOOKS SLICES</span>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                          {HOOK_OPTIONS.map((opt) => {
                            const isSelected = selectedHooks.includes(opt.id);
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  if (selectedHooks.includes(opt.id)) {
                                    setSelectedHooks(selectedHooks.filter(h => h !== opt.id));
                                  } else {
                                    setSelectedHooks([...selectedHooks, opt.id]);
                                  }
                                }}
                                className={`py-1.5 text-[8px] font-mono uppercase transition-all duration-300 text-center rounded-lg ${
                                  isSelected
                                    ? 'bg-white text-black font-bold'
                                    : 'border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Calculation Summary Row */}
                    <div className="border-t border-dashed border-white/10 pt-4 mt-4 flex justify-between items-center">
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-[#8B5CF6]">ESTIMATED SUM</span>
                        <p className="text-[10px] text-neutral-500 font-mono">
                          {selectedOffer === 'scale'
                            ? `${selectedQuantity} Videos @ 15s`
                            : `${selectedQuantity} Video${selectedQuantity > 1 ? 's' : ''} @ ${selectedDuration}s`}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-mono font-black text-white block">
                          ${calculatedPrice.toLocaleString()}
                        </span>
                        <span className="text-[8px] font-mono uppercase text-neutral-500">
                          ~ {calculatedDays} BUSINESS DAYS
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Standard inputs with premium dark styles */}
              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name / Company"
                  className="w-full bg-white/[0.02] border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#8B5CF6] focus:bg-white/[0.04] transition-all placeholder:text-neutral-600"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/[0.02] border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#8B5CF6] focus:bg-white/[0.04] transition-all placeholder:text-neutral-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Project URL (Optional)</label>
                <input 
                  type="url" 
                  name="url"
                  placeholder="https://yourproduct.com"
                  className="w-full bg-white/[0.02] border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#8B5CF6] focus:bg-white/[0.04] transition-all placeholder:text-neutral-600"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Inquiry Brief</label>
                <textarea 
                  name="message"
                  placeholder="Tell us about your product mechanics and marketing goals..."
                  rows={3}
                  className="w-full bg-white/[0.02] border border-white/10 text-white px-4 py-3.5 text-sm rounded-xl focus:outline-none focus:border-[#8B5CF6] focus:bg-white/[0.04] transition-all resize-none placeholder:text-neutral-600"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-6 w-full bg-white text-black hover:bg-[#8B5CF6] hover:text-white py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-xl inline-flex justify-center items-center gap-2 font-bold"
              >
                Send Brief Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
