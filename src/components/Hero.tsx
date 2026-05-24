import { motion } from 'motion/react';
import PortfolioGrid from './PortfolioGrid'; // We will extract the grid
import Reel from './Reel';

export default function Hero() {
  return (
    <section className="relative pt-40 md:pt-52 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#F4B179]/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/12 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mb-20 md:mb-32 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[80px] font-bold tracking-[-0.03em] text-brand-950 leading-[1.05] mb-8"
        >
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] drop-shadow-[0_2px_15px_rgba(224,179,207,0.15)]">motion design</span> for SaaS, AI and digital products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-2xl md:text-[32px] text-[#555] max-w-4xl leading-tight font-medium mb-12"
        >
          Aeymotion helps founders and product teams turn complex products into clear launch videos, explainers, product demos, UI motion, animated ads, and motion systems that build trust faster.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-[20px] transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-lg shadow-black/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Book a Motion Project</span>
          </a>
          <a
             href="#contact"
             className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 bg-transparent text-black text-sm font-bold uppercase tracking-widest rounded-[20px] transition-all duration-300 hover:scale-[1.02] relative group"
          >
            {/* Default outer outline */}
            <span className="absolute inset-0 rounded-[20px] border border-black/15 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />
            
            {/* Gradient border mask overlay */}
            <span className="absolute inset-0 rounded-[20px] p-[1.5px] bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="block w-full h-full bg-white rounded-[19px]" />
            </span>

            {/* Apple-like soft backglow */}
            <span className="absolute inset-1 bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-25 blur-xl rounded-[20px] transition-all duration-300 pointer-events-none -z-10" />

            <span className="relative z-10">Send Your Product Link</span>
          </a>
        </motion.div>
      </div>

      <Reel />

      <PortfolioGrid />
    </section>
  );
}
