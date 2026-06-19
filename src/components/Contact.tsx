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
        // Formats indices mapped back
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
      
      const baseDays = selectedQuantity === 2 ? 20 : 30; // Matches why us logic standard timeline
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
    <section className="py-24 md:py-32 px-6 md:px-12 bg-transparent max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6"
          >
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_25px_rgba(138,46,255,0.45)] transition-all duration-300 cursor-default">
              Start your project.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-[#555] max-w-md mb-12 font-medium"
          >
            Fill out the form to give us context on your product, or reach out to us directly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 shadow-none"
          >
             <p className="text-xs uppercase font-semibold text-[#AAA] tracking-[0.1em]">Alternatively, email us directly:</p>
             <a href="mailto:hello@aeymotion.com" className="text-lg md:text-xl text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_15px_rgba(138,46,255,0.45)] transition-all duration-300 border-b border-black/20 hover:border-transparent pb-1 inline-flex font-bold">
                hello@aeymotion.com
             </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative p-10 md:p-16 rounded-[40px] bg-white text-neutral-900 overflow-hidden shadow-xl isolate"
        >
          {/* Background glow shadow matching interactive cost planner */}
          <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/8 blur-[150px] pointer-events-none -z-10" />

          {/* Default Border that matches interactive cost planner */}
          <span className="absolute inset-0 rounded-[40px] border border-black/5 pointer-events-none" />

          {/* Gradient border mask overlay matching sunset theme & interactive cost planner */}
          <span className="absolute inset-0 rounded-[40px] p-[1.5px] bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] opacity-15 pointer-events-none -z-10">
            <span className="block w-full h-full bg-white rounded-[38.5px]" />
          </span>

          {/* Apple-like soft backglow */}
          <span className="absolute inset-4 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-[0.03] blur-[100px] rounded-[40px] pointer-events-none -z-20" />

          <h2 className="text-2xl font-black tracking-tight mb-8 text-neutral-950">Send an Inquiry</h2>
          <form className="space-y-8" action="https://formsubmit.co/hello@aeymotion.com" method="POST">
            {/* hidden config fields for FormSubmit */}
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
              <div className="p-5 rounded-2xl border border-[#8A2EFF]/20 bg-[#8A2EFF]/2 relative overflow-hidden font-sans space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#E0B3CF]/10 blur-[30px] pointer-events-none" />
                <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8A2EFF]">
                  Selected Scope & Rate Details
                </h3>

                <div className="space-y-3.5 text-xs text-neutral-800">
                  {/* Package Buttons */}
                  <div className="space-y-1.5">
                    <span className="block text-[9px] uppercase font-bold text-neutral-400 tracking-wider">PROJECT TIER</span>
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
                          className={`py-1.5 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                            selectedOffer === tier
                              ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                              : 'border border-neutral-200/60 bg-neutral-50 text-neutral-500 hover:text-neutral-800'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Graphics Rate Buttons */}
                  <div className="space-y-1.5">
                    <span className="block text-[9px] uppercase font-bold text-neutral-400 tracking-wider">GRAPHICS RATE</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {selectedOffer === 'scale' ? (
                        [5, 10].map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setSelectedRate(r)}
                            className={`py-1.5 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                              selectedRate === r
                                ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                                : 'border border-neutral-200/60 bg-neutral-50 text-neutral-500 hover:text-neutral-800'
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
                            className={`py-1.5 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                              selectedRate === r
                                ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                                : 'border border-neutral-200/60 bg-neutral-50 text-neutral-500 hover:text-neutral-800'
                            }`}
                          >
                            ${r}/s
                          </button>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Format Adaptations Buttons */}
                  <div className="space-y-1.5">
                    <span className="block text-[9px] uppercase font-bold text-neutral-400 tracking-wider">FORMAT ADAPTATIONS</span>
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
                            className={`py-1 px-0.5 rounded-lg text-[8px] font-extrabold uppercase transition-all duration-300 text-center relative ${
                              opt.id === 'f16_9'
                                ? 'bg-neutral-100 text-neutral-400 border border-neutral-200/40 cursor-not-allowed'
                                : isSelected
                                ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                                : 'border border-neutral-200/60 bg-neutral-50 text-neutral-500 hover:text-neutral-800 cursor-pointer'
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hook Variations Buttons (if Launch/Growth) */}
                  {(selectedOffer === 'launch' || selectedOffer === 'growth') && (
                    <div className="space-y-1.5">
                      <span className="block text-[9px] uppercase font-bold text-neutral-400 tracking-wider">HOOKS SAMPLES</span>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.2">
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
                              className={`py-1.2 px-0.5 rounded-lg text-[8px] font-extrabold pb-1.2 pt-1 transition-all duration-300 text-center cursor-pointer relative ${
                                isSelected
                                  ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                                  : 'border border-neutral-200/60 bg-neutral-50 text-neutral-500 hover:text-neutral-800'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Running Price calculation block */}
                  <div className="border-t border-dashed border-[#8A2EFF]/15 pt-3.5 mt-3 flex justify-between items-center">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-[#8A2EFF]/90">ESTIMATED PRICE</span>
                      <p className="text-[10px] text-neutral-400 leading-none">
                        {selectedOffer === 'scale'
                          ? `${selectedQuantity} Videos @ 15s`
                          : `${selectedQuantity} Video${selectedQuantity > 1 ? 's' : ''} @ ${selectedDuration}s`}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-black font-mono tracking-tight text-neutral-900 block leading-none">
                        ${calculatedPrice.toLocaleString()}
                      </span>
                      <span className="text-[8px] tracking-wider uppercase font-black text-neutral-400">
                        ~ {calculatedDays} BUSINESS DAYS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-[11px] uppercase text-neutral-950/60 tracking-[0.1em] font-bold">Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Founder's Name / Product Team"
                className="w-full bg-transparent border-b border-neutral-950/15 text-neutral-950 py-3 text-[15px] focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-950/40"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-[11px] uppercase text-neutral-950/60 tracking-[0.1em] font-bold">Work Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="name@company.com"
                className="w-full bg-transparent border-b border-neutral-950/15 text-neutral-950 py-3 text-[15px] focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-950/40"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] uppercase text-neutral-950/60 tracking-[0.1em] font-bold">Project URL (Optional)</label>
              <input 
                type="url" 
                name="url"
                placeholder="https://yourproduct.com"
                className="w-full bg-transparent border-b border-neutral-950/15 text-neutral-950 py-3 text-[15px] focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-950/40"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] uppercase text-neutral-950/60 tracking-[0.1em] font-bold">Project Brief</label>
              <textarea 
                name="message"
                placeholder="Tell us about the product and your goals..."
                rows={3}
                className="w-full bg-transparent border-b border-neutral-950/15 text-neutral-950 py-3 text-[15px] focus:outline-none focus:border-neutral-950 transition-colors resize-none placeholder:text-neutral-950/40"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-8 bg-neutral-950 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 inline-flex justify-center items-center gap-2 relative overflow-hidden group shadow-lg shadow-black/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="relative z-10 inline-flex items-center gap-2 group-hover:text-neutral-950 transition-colors duration-300">
                Send Details
                <ArrowRight className="w-4 h-4 text-white group-hover:text-neutral-950 transition-colors duration-300" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
