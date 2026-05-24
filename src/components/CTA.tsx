import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-transparent flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] border border-white/[0.05] rounded-[32px] md:rounded-[48px] bg-black p-12 md:p-24 text-center relative overflow-hidden isolate shadow-2xl"
      >
        {/* Ambient Gradient Blows using Top Glow, Middle Blend, and Bottom Purple */}
        <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-[#F4B179]/15 blur-[80px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E0B3CF]/15 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[300px] bg-[#8A2EFF]/25 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4B179]/5 via-transparent to-[#8A2EFF]/8 pointer-events-none -z-10 opacity-80" />

        <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight text-white mb-8 max-w-3xl mx-auto leading-[0.95]">
          Ready to make your product{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] drop-shadow-[0_2px_15px_rgba(138,46,255,0.3)]">
            unignorable?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto font-medium">
          We take on a limited number of projects per month to ensure Apple-level quality output. Secure your slot with Aeymotion today.
        </p>

        <a
          href="#contact"
          className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full transition-transform hover:scale-105 shadow-lg shadow-white/10"
        >
          <Mail className="w-4 h-4 text-black" fill="currentColor" />
          Request a Proposal
        </a>
      </motion.div>
    </section>
  );
}
