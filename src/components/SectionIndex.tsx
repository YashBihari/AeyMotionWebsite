import { motion } from 'motion/react';

export default function SectionIndex() {
  const tracks = [
    {
      num: "01",
      title: "Selected Cases",
      desc: "Interactive timeline track mapping client success stories",
      frame: "00:00:15:00",
      href: "#portfolio"
    },
    {
      num: "02",
      title: "Specialized Units",
      desc: "Core video categories and production divisions",
      frame: "00:00:30:00",
      href: "#about"
    },
    {
      num: "03",
      title: "Curated Offers",
      desc: "Fixed-scope design sprints and support agreements",
      frame: "00:00:45:00",
      href: "#pricing"
    },
    {
      num: "04",
      title: "Inquiry Brief",
      desc: "Dynamic cost planner and intake portal",
      frame: "00:01:00:00",
      href: "#contact"
    }
  ];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#15151C] border-y border-white/[0.08] py-8 overflow-hidden font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[9px] text-[#8B5CF6] tracking-[0.2em] font-bold">
            SECTION INDEX // SYSTEM METRICS
          </span>
          <span className="font-mono text-[9px] text-neutral-500 tracking-wider">
            FRAME-RATE: 24.00 FPS ◆ REC_READY
          </span>
        </div>

        {/* 4-column timeline track rails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 lg:divide-x lg:divide-white/[0.08] border-t border-white/[0.08] pt-6">
          {tracks.map((track, i) => (
            <div 
              key={i}
              onClick={() => handleScroll(track.href)}
              className="group cursor-pointer p-4 md:px-6 relative flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300 min-h-[140px]"
            >
              {/* Timeline Horizontal Line Effect on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#8B5CF6]/40 transition-colors" />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-neutral-500 font-bold">TRACK // {track.num}</span>
                  <span className="font-mono text-[9px] text-[#8B5CF6] font-semibold">{track.frame}</span>
                </div>
                <h4 className="text-sm font-black uppercase text-white tracking-wide group-hover:text-[#8B5CF6] transition-colors mt-2">
                  {track.title}
                </h4>
                <p className="text-[11px] text-[#A1A1AA] font-light leading-snug">
                  {track.desc}
                </p>
              </div>

              {/* Progress track design at bottom of item */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[8px] font-mono text-neutral-600 uppercase">Interpolation Linear</span>
                <span className="text-[10px] font-mono text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity">
                  GO TO LAYER →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
