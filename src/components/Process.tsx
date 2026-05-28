import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Script",
    description: "Aligning your product's value proposition into a tight, conversion-focused narrative.",
  },
  {
    number: "02",
    title: "Storyboard",
    description: "We map out the visual flow frame-by-frame, ensuring clarity and precision in the storytelling.",
  },
  {
    number: "03",
    title: "Styleframes",
    description: "Establishing the premium art direction. You see exactly how the final output will look.",
  },
  {
    number: "04",
    title: "Animation",
    description: "Bringing the design to life with smooth, perfectly timed motion that feels high-end.",
  },
  {
    number: "05",
    title: "Sound Design",
    description: "Custom audio mixing and SFX that elevate the cinematic experience.",
  },
  {
    number: "06",
    title: "Delivery",
    description: "Final polished assets optimized for web, ads, and presentations.",
  }
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden isolate py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto rounded-none bg-white/80 backdrop-blur-md text-[#141414] selection:bg-[#8A2EFF]/10 selection:text-[#141414] mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      {/* High-density gradient edge frames (Top, right, bottom, left) */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-l from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] pointer-events-none z-20" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-t from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] pointer-events-none z-20" />

      {/* Cinematic soft glows underneath the translucent whitish layer */}
      <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] bg-[#E0B3CF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] bg-[#8A2EFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight mb-6 text-[#141414]"
          >
            A precise, cinematic <br /> <span className="opacity-45">motion timeline.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative group cursor-default"
            >
              <div className="text-xl font-bold tracking-tighter text-[#141414]/30 mb-6 group-hover:text-[#8A2EFF] transition-colors duration-500 font-mono">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-[#141414]">{step.title}</h3>
              <p className="text-[15px] text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed max-w-[300px]">
                {step.description}
              </p>
              
              {/* Subtle underline hover effect */}
              <div className="absolute left-0 bottom-[-20px] w-0 h-[1.5px] bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] transition-all duration-700 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
