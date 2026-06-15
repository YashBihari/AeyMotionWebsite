import { motion } from 'motion/react';

const logos = [
  "VACATIONBNA", "VEGACODES", "SEORCE AI", "TECHZEIN", "DRIVERONHIRE"
];

export default function Clients() {
  return (
    <section className="py-12 border-b border-black/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 md:mb-8">
        <p className="text-[10px] font-semibold text-[#AAA] text-center uppercase tracking-[0.1em]">
          Trusted by SaaS, AI, and Product-led companies
        </p>
      </div>

      {/* Infinite scrolling marquee effect */}
      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-[#FBFBFB] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-[#FBFBFB] to-transparent z-10" />
        
        <motion.div 
          className="py-4 flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Double the logos array to seamlessly loop */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="px-8 md:px-12 flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold tracking-tight text-black uppercase">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
