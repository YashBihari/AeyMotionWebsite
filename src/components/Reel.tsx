import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="w-full mb-20 md:mb-32 aspect-video bg-black rounded-[32px] md:rounded-[48px] overflow-hidden relative group cursor-pointer border border-black/5"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying && (
        <>
          <video 
             src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4" 
             className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80"
             autoPlay
             muted
             loop
             playsInline
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-24 h-24 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
             </div>
          </div>

          <div className="absolute bottom-10 left-10 text-white pointer-events-none">
             <span className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2 block">Featured Reel</span>
             <h2 className="text-3xl font-bold tracking-tight">Aeymotion 2026</h2>
          </div>
        </>
      )}

      {isPlaying && (
        <iframe 
          src="https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0"
          className="w-full h-full scale-[1.01]"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </motion.div>
  );
}
