import { motion } from 'motion/react';
import PricingCalculator from './PricingCalculator';

export default function Pricing() {
  return (
    <section className="relative py-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Soft atmospheric gradient glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#F4B179]/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#8A2EFF]/8 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-[#8A2EFF] uppercase mb-4"
          >
            Transparent Investment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight mb-6 text-neutral-900"
          >
            Pristine pricing, <br />
            <span className="opacity-45">no hidden overhead.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-neutral-500 max-w-[500px] leading-relaxed font-light"
          >
            We align value with clear pricing. No complex quote games. Select your trajectory and start raising your product standard.
          </motion.p>
        </div>

        {/* Interactive per-second video calculator */}
        <PricingCalculator />

      </div>
    </section>
  );
}
