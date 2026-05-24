import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    title: "HOSTINGER",
    category: "PROMO VIDEO",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    video: "https://player.vimeo.com/video/1188341331?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    colSpan: "md:col-span-2"
  },
  {
    title: "VECTOR",
    category: "CUSTOM MOTION",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    video: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    colSpan: "md:col-span-1"
  },
  {
    title: "Instagram",
    category: "LOGO Animation",
    image: "https://res.cloudinary.com/dnbwf7xqd/image/upload/v1773476696/insta_dribbble_uyizw1.gif",
    video: "https://player.vimeo.com/video/1188348750?autoplay=1&title=0&byline=0&portrait=0",
    colSpan: "md:col-span-1"
  },
  {
    title: "SENA AI",
    category: "EXPLAINER VIDEO",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    video: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    isVideoThumb: true,
    colSpan: "md:col-span-2"
  }
];

export default function PortfolioGrid() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    setTimeout(() => {
      const videoEl = document.getElementById(`portfolio-video-${index}`) as HTMLVideoElement;
      if (videoEl) {
        videoEl.play();
      }
    }, 0);
  };

  return (
    <div id="work" className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      {projects.map((project, i) => {
        const isPlaying = playingIndex === i;
        
        return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
          className={`group relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] bg-brand-200 rounded-[20px] md:rounded-[32px] border border-black/10 ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"} ${project.video && !isPlaying ? 'cursor-pointer' : ''}`}
          onClick={project.video && !isPlaying ? () => handlePlay(i) : undefined}
        >
          {!isPlaying ? (
            <>
              {project.isVideoThumb ? (
                <video 
                  src={project.image} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Play Button Center (Hover) */}
              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none">
                  <div className="w-24 h-24 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 font-bold text-xs uppercase tracking-[0.2em] px-4">
                      PLAY
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-[12px] uppercase tracking-widest font-semibold text-white/70 mb-2 block">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
              </div>
            </>
          ) : (
            project.video.includes('vimeo.com') ? (
              <iframe 
                src={project.video}
                className="w-full h-full scale-[1.35] md:scale-[1.45]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video 
                id={`portfolio-video-${i}`}
                src={project.video}
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            )
          )}
        </motion.div>
      )})}
    </div>
  );
}
