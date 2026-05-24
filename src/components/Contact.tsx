import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-transparent max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6"
          >
            Start your project.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-[#555] max-w-md mb-12 font-medium"
          >
            Fill out the form to give us context on your product. Or, book a discovery call directly below.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
             <p className="text-xs uppercase font-semibold text-[#AAA] tracking-[0.1em]">Alternatively, email us directly:</p>
             <a href="mailto:contact@aeymotion.com" className="text-lg md:text-xl text-black hover:text-[#555] transition-colors border-b border-black/20 hover:border-black pb-1 inline-flex font-bold">
                contact@aeymotion.com
             </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md p-8 md:p-10 rounded-[32px] bg-[#f9f9f9] border border-black/5"
          >
            <h3 className="text-sm uppercase tracking-[0.05em] font-bold mb-4">Book a Discovery Call</h3>
            <p className="text-xs text-[#555] mb-6">Schedule 15 minutes to discuss your product and motion needs.</p>
            {/* Calendly Integration Placeholder */}
            <div className="w-full flex items-center justify-center p-6 border border-dashed border-black/20 rounded-xl bg-white text-xs font-semibold text-[#888] h-[120px]">
              Calendly Integration Placeholder
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-black text-white p-10 md:p-16 rounded-[32px] flex flex-col justify-center relative overflow-hidden isolate"
        >
          {/* Subtle Ambient Bottom Purple Glow inside the form block */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#8A2EFF]/20 blur-[85px] rounded-full pointer-events-none -z-10" />

          <h2 className="text-2xl font-bold mb-8">Send an Inquiry</h2>
          <form className="space-y-8" action="https://formsubmit.co/contact@aeymotion.com" method="POST">
            <div className="space-y-2">
              <label className="block text-[11px] uppercase opacity-50 tracking-[0.1em] font-bold">Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Founder's Name / Product Team"
                className="w-full bg-transparent border-b border-white/20 text-white py-3 text-[15px] focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-[11px] uppercase opacity-50 tracking-[0.1em] font-bold">Work Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="name@company.com"
                className="w-full bg-transparent border-b border-white/20 text-white py-3 text-[15px] focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] uppercase opacity-50 tracking-[0.1em] font-bold">Project URL (Optional)</label>
              <input 
                type="url" 
                name="url"
                placeholder="https://yourproduct.com"
                className="w-full bg-transparent border-b border-white/20 text-white py-3 text-[15px] focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] uppercase opacity-50 tracking-[0.1em] font-bold">Project Brief</label>
              <textarea 
                name="message"
                placeholder="Tell us about the product and your goals..."
                rows={3}
                className="w-full bg-transparent border-b border-white/20 text-white py-3 text-[15px] focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/30"
                required
              ></textarea>
            </div>

            {/* Optional: Configuration for FormSubmit */}
            <input type="hidden" name="_subject" value="New inquiry from AeyMotion Website" />
            <input type="hidden" name="_template" value="table" />

            <button 
              type="submit"
              className="mt-8 bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 inline-flex justify-center items-center gap-2 relative overflow-hidden group border border-transparent shadow shadow-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 inline-flex items-center gap-2">
                Send Details
                <ArrowRight className="w-4 h-4 text-current" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
