import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function WhiteLabel() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#0B0B0F] border border-white/[0.06] relative isolate overflow-hidden"
      >
        {/* Soft elegant atmospheric gradient glows */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#F59E7B]/3 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B5CF6] block mb-2">
              AGENCY WHITE-LABEL SCHEME
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
              Invisible Motion Support.
            </h2>
            <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10">
              We act as an invisible, white-label extension to your creative team or agency, providing premium motion system assets without full-time payroll overhead. Leverage our specialized skill set seamlessly.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Product explainer videos",
                "GTM launch assets",
                "UI micro-interactions",
                "Interactive Lottie JSONs",
                "Campaign ad creatives",
                "3D vector design boards",
                "Async rapid feedback",
                "Strict double-blind NDA"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-neutral-300 text-xs font-light">
                  <div className="w-1 h-1 rounded-full bg-[#8B5CF6] flex-shrink-0 animate-pulse" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8B5CF6] hover:text-white transition-colors"
            >
              Partner with us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="relative h-[400px] lg:h-auto bg-black overflow-hidden group border-t lg:border-t-0 lg:border-l border-white/[0.06]">
            <video 
              src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-[1.5s] group-hover:scale-105 group-hover:opacity-85"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
