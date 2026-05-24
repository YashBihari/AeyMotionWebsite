import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Box, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Box className="w-6 h-6" />,
    accentColor: "#8A2EFF",
    gradient: "linear-gradient(135deg, #8A2EFF 0%, #F4B179 100%)",
    glowShadow: "rgba(138, 46, 255, 0.25)",
    bgLight: "rgba(138, 46, 255, 0.06)",
    title: "Product Demo Motion System",
    description: (
      <div className="space-y-4">
        <p><strong className="text-black transition-colors duration-500">Best For:</strong> AI startups, SaaS tools, Product Hunt launches, onboarding clarity.</p>
        <p><strong className="text-black transition-colors duration-500">Positioning:</strong> Turn complex products into instantly understandable visual experiences.</p>
      </div>
    ),
    features: [
      "30–45s cinematic product demo/explainer",
      "Strategic script refinement",
      "Product-focused storyboard system",
      "Premium UI/product animations",
      "Sound design",
      "Multi-format exports",
      "Styleframe direction",
      "2 strategic revision rounds",
      "Timeline: 7-12 business days"
    ],
    price: (
      <div className="flex flex-col gap-4 normal-case tracking-normal">
        <div>
          <span className="text-[11px] uppercase tracking-widest opacity-60 block font-bold mb-1">Investment Range</span>
          <span className="text-xl font-bold tracking-tight uppercase">$1.2K – $1.8K</span>
        </div>
      </div>
    ),
    outcome: "Designed to improve product understanding, onboarding clarity, and launch perception."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    accentColor: "#8A2EFF",
    gradient: "linear-gradient(135deg, #8A2EFF 0%, #F4B179 100%)",
    glowShadow: "rgba(138, 46, 255, 0.25)",
    bgLight: "rgba(138, 46, 255, 0.06)",
    title: "Launch Motion Ecosystem",
    description: (
      <div className="space-y-4">
        <p><strong className="text-black transition-colors duration-500">Best For:</strong> Funded startups, SaaS launches, feature campaigns, growth teams.</p>
        <p><strong className="text-black transition-colors duration-500">Positioning:</strong> A scalable launch-ready motion system built for product marketing and acquisition.</p>
      </div>
    ),
    features: [
      "45–60s flagship product/launch video",
      "3–5 platform cutdowns",
      "Hook variations for paid campaigns",
      "Product motion language consistency",
      "Social export suite",
      "Thumbnail/styleframe system",
      "Intro/outro motion assets",
      "Cross-platform formatting",
      "Timeline: 2-3 weeks"
    ],
    price: (
      <div className="flex flex-col gap-4 normal-case tracking-normal">
        <div>
          <span className="text-[11px] uppercase tracking-widest opacity-60 block font-bold mb-1">Investment Range</span>
          <span className="text-xl font-bold tracking-tight uppercase">$2.5K – $4K</span>
        </div>
      </div>
    ),
    outcome: "Built for startups scaling launches, paid campaigns, and product visibility."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: "#8A2EFF",
    gradient: "linear-gradient(135deg, #8A2EFF 0%, #F4B179 100%)",
    glowShadow: "rgba(138, 46, 255, 0.25)",
    bgLight: "rgba(138, 46, 255, 0.06)",
    title: "Product Storytelling Partner",
    description: (
      <div className="space-y-4">
        <p><strong className="text-black transition-colors duration-500">Best For:</strong> AI companies, SaaS brands, marketing teams, agencies needing ongoing motion systems.</p>
        <p><strong className="text-black transition-colors duration-500">Positioning:</strong> An embedded motion storytelling partner for brands building long-term visual authority.</p>
      </div>
    ),
    features: [
      "Ongoing motion production",
      "Product launch visuals",
      "Feature storytelling systems",
      "Paid social creatives",
      "Founder/product positioning assets",
      "Motion design consistency",
      "UI/product animations",
      "Campaign motion support",
      "Flexible monthly workflow",
      "Timeline: Monthly/Ongoing Partnership"
    ],
    price: (
      <div className="flex flex-col gap-4 normal-case tracking-normal">
        <div>
          <span className="text-[11px] uppercase tracking-widest opacity-60 block font-bold mb-1">Investment Range</span>
          <span className="text-xl font-bold tracking-tight uppercase">$5K – $12K</span>
        </div>
      </div>
    ),
    outcome: "Built for teams that need continuous high-end motion systems without managing internal production."
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#E0B3CF]/8 blur-[130px] pointer-events-none -z-10" />

      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[1] font-bold tracking-tight mb-6 max-w-[580px]"
          >
            Specialized motion packages.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg md:text-xl text-[#555] max-w-[500px] leading-relaxed font-medium"
          >
            No bloated scope entries. Just precise, high-impact motion offerings designed directly for scaling tech companies.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {services.map((service, i) => {
          const isHovered = hoveredIndex === i;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 md:p-10 rounded-[32px] bg-[#f9f9f9] border border-black/[0.04] transition-all duration-500 ease-out flex flex-col hover:-translate-y-1.5 overflow-hidden isolate"
              style={{
                boxShadow: isHovered ? `0 25px 50px -12px ${service.glowShadow}` : "0 0 0 transparent",
                backgroundColor: isHovered ? "#FFFFFF" : ""
              }}
            >
              {/* Gradient border mask overlay */}
              <div 
                className="absolute inset-0 rounded-[32px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ background: service.gradient }}
              >
                <div className="w-full h-full bg-white rounded-[31px]" />
              </div>

              {/* Top Accent Strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-[4px] rounded-t-[32px] transition-all duration-500 opacity-0 group-hover:opacity-100" 
                style={{ background: service.gradient }}
              />

              <div 
                className="mb-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative z-20"
                style={{ 
                  background: isHovered ? service.gradient : "rgba(0,0,0,0.04)", 
                  color: isHovered ? "#FFFFFF" : "#141414" 
                }}
              >
                {service.icon}
              </div>
              
              <h3 
                className="text-xl md:text-2xl tracking-tight font-bold mb-3 transition-colors duration-500"
                style={isHovered ? {
                  backgroundImage: service.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                } : {}}
              >
                {service.title}
              </h3>
              <div className="text-[15px] text-[#555] mb-8 leading-relaxed min-h-[60px]">{service.description}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[15px] opacity-85 text-[#333]">
                    <div 
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-500" 
                      style={{ background: isHovered ? service.gradient : "rgba(0,0,0,0.25)" }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {'outcome' in service && service.outcome && (
                <p className="text-[14px] italic opacity-85 text-[#555] mb-8 pt-4 border-t border-black/[0.06] transition-colors duration-500">
                  {service.outcome}
                </p>
              )}

              <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-black/[0.06] transition-colors duration-500">
                {service.price && (
                  <div 
                    className="text-sm font-semibold tracking-wide opacity-90 transition-colors duration-500"
                    style={isHovered ? {
                      backgroundImage: service.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    } : {}}
                  >
                    {service.price}
                  </div>
                )}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black transition-colors duration-500"
                  style={isHovered ? {
                    backgroundImage: service.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  } : {}}
                >
                  <span className="inline-flex items-center gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: isHovered ? service.accentColor : "currentColor" }} />
                  </span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
