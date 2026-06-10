import { motion } from 'motion/react';

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden isolate">
      {/* Background glow blob */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6 max-w-[500px]"
          >
            We don't just make things move. We make them <span className="text-[#AAA] italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_20px_rgba(138,46,255,0.45)] transition-all duration-300 cursor-default">sell.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-[#555] max-w-lg leading-relaxed"
          >
            For SaaS founders and AI startups, clarity is conversion. 
            We distill complex technical products into premium, easy-to-understand visual stories that drive action, build trust, and command higher prices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          {[
            {
              title: "Product Clarity",
              label: "Turn complex AI features and SaaS logic into instantly understandable visual stories."
            },
            {
              title: "Trust Building",
              label: "Cinematic, Apple-level polish that positions your product as a premium leader."
            },
            {
              title: "Conversion Focused",
              label: "Motion designed specifically to support product marketing and sales flows."
            },
            {
              title: "Seamless Integration",
              label: "We provide assets optimized for landing pages, ads, and investor decks."
            }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (i * 0.1) }}
              className="p-8 rounded-[24px] bg-white flex flex-col justify-center aspect-square md:aspect-auto hover:shadow-[0_20px_50px_rgba(138,46,255,0.08)] transition-all duration-500 ease-out relative group overflow-hidden isolate"
            >
              {/* Default Border that fades out on hover */}
              <span className="absolute inset-0 rounded-[24px] border border-black/10 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />
              
              {/* Gradient border mask overlay */}
              <span className="absolute inset-0 rounded-[24px] p-[1.5px] bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                <span className="block w-full h-full bg-white rounded-[22.5px]" />
              </span>

              {/* Apple-like soft backglow */}
              <span className="absolute inset-2 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-0 group-hover:opacity-15 blur-2xl rounded-[24px] transition-all duration-500 pointer-events-none -z-20" />

              <div className="text-2xl font-bold tracking-tight mb-4 text-[#141414] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8A2EFF] group-hover:to-[#F4B179] transition-all duration-300">
                {stat.title}
              </div>
              <p className="text-sm opacity-70 text-[#444] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
