import { motion } from 'motion/react';
import { Users, ArrowUpRight, Sparkles } from 'lucide-react';
import AeymotionBackground from './AeymotionBackground';
import { ABOUT_SECTION } from '../data/content';

interface AboutSectionProps {
  onBookCall: () => void;
}

export default function AboutSection({ onBookCall }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F5] border-b border-neutral-200/80 font-sans relative overflow-hidden">
      <AeymotionBackground variant="about" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 sm:p-14 md:p-20 bg-gradient-to-br from-[#8C4BFF] via-[#6F2BFF] to-[#5116D9] rounded-3xl text-white shadow-2xl relative overflow-hidden"
        >
          {/* Glowing Ambient Background Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B98FD4]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F2A979]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#F2A979]" />
              06 / ABOUT AEYMOTION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              {ABOUT_SECTION.title}
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
              "{ABOUT_SECTION.copy}"
            </p>

            <div className="pt-4 border-t border-white/20">
              <span className="font-mono text-[10px] text-white/70 font-bold uppercase tracking-widest block mb-3">
                WE COLLABORATE DIRECTLY WITH:
              </span>
              <div className="flex flex-wrap gap-3">
                {ABOUT_SECTION.audiences.map((aud, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-xs font-bold uppercase text-white flex items-center gap-2"
                  >
                    <Users className="w-3.5 h-3.5 text-[#F2A979]" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-start">
              <button
                onClick={onBookCall}
                className="px-8 py-4 bg-white text-[#6F2BFF] hover:bg-neutral-100 text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg inline-flex items-center gap-2.5 cursor-pointer hover:scale-105"
              >
                Work With Us
                <ArrowUpRight className="w-4 h-4 text-[#6F2BFF]" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

