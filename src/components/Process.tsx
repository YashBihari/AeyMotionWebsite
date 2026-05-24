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
    <section id="process" className="relative overflow-hidden isolate py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto rounded-[32px] md:rounded-[48px] bg-black text-white selection:bg-white selection:text-black mb-12">
      {/* Cinematic Gradient Glows inside the dark Process banner */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#E0B3CF]/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#8A2EFF]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight mb-6"
          >
            A precise, cinematic <br /> <span className="opacity-50">motion timeline.</span>
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
              <div className="text-xl font-bold tracking-tighter text-white/20 mb-6 group-hover:text-white transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">{step.title}</h3>
              <p className="text-[15px] opacity-70 leading-relaxed max-w-[300px]">
                {step.description}
              </p>
              
              {/* Subtle underline hover effect */}
              <div className="absolute left-0 bottom-[-20px] w-0 h-[1px] bg-white transition-all duration-700 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
