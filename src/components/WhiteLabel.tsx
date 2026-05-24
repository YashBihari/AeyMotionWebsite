import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function WhiteLabel() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#f9f9f9] rounded-[32px] md:rounded-[48px] overflow-hidden border border-black/5 relative isolate"
      >
        {/* Soft elegant atmospheric gradient glows */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#E0B3CF]/6 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#8A2EFF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] font-bold tracking-tight text-brand-950 mb-6">
              White-Label Motion Support for Agencies.
            </h2>
            <p className="text-lg md:text-xl text-[#555] max-w-lg leading-relaxed mb-10 font-medium">
              We act as an invisible extension to your agency, providing premium motion capabilities without the overhead. Position Aeymotion as your reliable premium motion partner.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Product demos",
                "Launch videos",
                "UI motion",
                "Logo animation",
                "Ads & social spots",
                "Lottie implementation",
                "Fast collaboration",
                "Strict white-label NDA"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#333] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/30 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
            >
              Partner with us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="relative h-[400px] lg:h-auto bg-black overflow-hidden group">
            <video 
              src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-[1.5s] group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 blur-2xl rounded-full pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
