import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 backdrop-blur-xl border-b border-black/[0.05] transition-all duration-300"
      style={{
        background: "linear-gradient(to right, rgba(244, 177, 121, 0.1), rgba(224, 179, 207, 0.14), rgba(138, 46, 255, 0.1)), rgba(255, 255, 255, 0.8)"
      }}
    >
      <div className="flex items-center gap-2">
        <span className="text-[22px] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF]">Aeymotion.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a 
          href="#services" 
          className="text-xs uppercase tracking-widest text-[#666] font-semibold bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] hover:text-transparent transition-all duration-300"
        >
          Services
        </a>
        <a 
          href="#work" 
          className="text-xs uppercase tracking-widest text-[#666] font-semibold bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] hover:text-transparent transition-all duration-300"
        >
          Work
        </a>
        <a 
          href="#process" 
          className="text-xs uppercase tracking-widest text-[#666] font-semibold bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] hover:text-transparent transition-all duration-300"
        >
          Process
        </a>
      </nav>

      <a
        href="#contact"
        className="relative overflow-hidden group text-black border border-black/20 px-4 py-2 rounded-[20px] text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:border-transparent"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Start Your Project</span>
      </a>
    </motion.header>
  );
}
