import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';

const projects = [
  {
    title: "HALEUM AI",
    category: "PRODUCT VIDEO",
    subtitle: "Kinetic interface storytelling for multi-agent frameworks",
    description: "Designed a clean kinetic film modeling self-organizing autonomous agents. Focused on seamless vector grid paths, isolated LLM execution states, and pristine 3D canvas choreography to turn complex code architecture into high-end brand assets.",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    video: "https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    bgLight: "rgba(138, 46, 255, 0.03)",
    accentColor: "#8A2EFF",
    gradientColors: "from-[#8A2EFF] to-[#F4B179]",
    tags: ["Product Film", "AI System Animation", "3D Vector Choreography"]
  },
  {
    title: "HOSTINGER",
    category: "PROMO VIDEO",
    subtitle: "Premium motion systems for website builders",
    description: "Designed a clean, highly energetic motion experience highlighting Hostinger's website builder features, focusing on rapid workflow transitions and micro-interactions.",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    video: "https://player.vimeo.com/video/1188341331?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    bgLight: "rgba(138, 46, 255, 0.03)",
    accentColor: "#8A2EFF",
    gradientColors: "from-[#8A2EFF] to-[#F4B179]",
    tags: ["Direction", "Explainer System", "SaaS Marketing"]
  },
  {
    title: "VECTOR",
    category: "CUSTOM MOTION",
    subtitle: "Translating sophisticated fintech concepts to smooth graphics",
    description: "Engineered rich visual storytelling of multi-signature secure pipelines and token routing animations, mapping dense developer setups to pristine responsive kinetic boards.",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    video: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    bgLight: "rgba(244, 177, 121, 0.03)",
    accentColor: "#F4B179",
    gradientColors: "from-[#F4B179] to-[#E0B3CF]",
    tags: ["Fintech Design", "UI Kinetic", "Product Reveal"]
  },
  {
    title: "Instagram",
    category: "LOGO Animation",
    subtitle: "Organic choreography and responsive UI loading states",
    description: "An optimization exploration focusing on vector weight choreography, reactive frame interpolation, and playful spring physics presets designed for modern web apps.",
    image: "https://res.cloudinary.com/dnbwf7xqd/image/upload/v1773476696/insta_dribbble_uyizw1.gif",
    video: "https://player.vimeo.com/video/1188348750?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: false,
    bgLight: "rgba(224, 179, 207, 0.03)",
    accentColor: "#E0B3CF",
    gradientColors: "from-[#E0B3CF] to-[#8A2EFF]",
    tags: ["Lottie Kinetics", "Interface Physics", "Logo Choreography"]
  },
  {
    title: "SENA AI",
    category: "EXPLAINER VIDEO",
    subtitle: "Pristine dark-mode visualization for complex AI frameworks",
    description: "Built high-fidelity 3D and 2D vector graphic layouts mapping security filters, isolated model contexts, and fine-tuning pipelines into an editorial film style.",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    video: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    bgLight: "rgba(138, 46, 255, 0.03)",
    accentColor: "#8A2EFF",
    gradientColors: "from-[#8A2EFF] to-[#F4B179]",
    tags: ["3D Vector Explainer", "Developer Marketing", "AI Concept Art"]
  }
];

export default function PortfolioGrid() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <div id="work" className="mt-32 md:mt-48 space-y-24 md:space-y-40">
      <div className="mb-16 md:mb-24">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8A2EFF] mb-3 block">Selected Case Studies</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#141414] leading-none">
          Motion Design in Action
        </h2>
      </div>

      {projects.map((project, i) => {
        const isPlaying = playingIndex === i;
        const isEven = i % 2 === 0;

        return (
          <div 
            key={i}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
            >
              <div 
                className={`w-full aspect-[16/10] rounded-none overflow-hidden relative bg-black shadow-lg transition-all duration-500 hover:shadow-2xl group ${isPlaying ? '' : 'cursor-pointer'}`}
                onClick={project.video && !isPlaying ? () => handlePlay(i) : undefined}
              >
                {!isPlaying ? (
                  <>
                    {project.isVideoThumb ? (
                      <video 
                        src={project.image} 
                        className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none">
                      <div className="w-20 h-20 bg-white/95 text-black rounded-full shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                        <Play className="w-6 h-6 fill-black ml-1 text-black" />
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe 
                    src={project.video}
                    className="w-full h-full scale-[1.35] md:scale-[1.4] transition-all duration-500"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>

            {/* Content Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A2EFF]">
                  {project.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
                <span className="text-[11px] font-bold text-neutral-400 font-mono">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight mb-2">
                {project.title}
              </h3>
              
              <h4 className="text-lg md:text-[20px] font-semibold text-neutral-600 tracking-tight leading-snug mb-5">
                {project.subtitle}
              </h4>

              <p className="text-neutral-500 leading-relaxed text-[15px] md:text-[16px] mb-6">
                {project.description}
              </p>

              {/* Tag Capabilities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-semibold px-3 py-1 rounded-none border border-black/5 bg-black/[0.02] text-neutral-500 hover:border-black/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => handlePlay(i)}
                  className="inline-flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-[#141414] hover:text-[#8A2EFF] transition-colors duration-300 group"
                >
                  <span className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center bg-transparent group-hover:border-[#8A2EFF]/25 group-hover:bg-[#8A2EFF]/5 transition-all duration-300">
                    {isPlaying ? (
                      <span className="w-2.5 h-2.5 bg-black rounded-sm group-hover:bg-[#8A2EFF] animate-ping" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5 text-black group-hover:text-[#8A2EFF] transition-colors" fill="currentColor" />
                    )}
                  </span>
                  <span>{isPlaying ? "Playing Video" : "Watch Full Video"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
