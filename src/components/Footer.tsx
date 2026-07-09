import { useEffect, useRef } from 'react';

export default function Footer() {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const trackEye = (eyeEl: HTMLDivElement | null, pupilEl: HTMLDivElement | null) => {
        if (!eyeEl || !pupilEl) return;
        const rect = eyeEl.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Max translation displacement in pixels inside the white eyeball
        const maxDist = 16;

        if (dist === 0) {
          pupilEl.style.transform = 'translate(0px, 0px)';
        } else {
          const angle = Math.atan2(dy, dx);
          // Scale down the distance factor to make visual movement natural and gradual
          const force = Math.min(dist * 0.04, maxDist);
          const tx = Math.cos(angle) * force;
          const ty = Math.sin(angle) * force;

          pupilEl.style.transform = `translate(${tx}px, ${ty}px)`;
        }
      };

      const trackBody = (bodyEl: HTMLDivElement | null) => {
        if (!bodyEl) return;
        const rect = bodyEl.getBoundingClientRect();
        const bodyX = rect.left + rect.width / 2;
        const bodyY = rect.top + rect.height / 2;

        const dx = mouseX - bodyX;
        const dy = mouseY - bodyY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const angle = Math.atan2(dy, dx);

        // Max elastic body offset translation
        const maxTx = 22;
        const maxTy = 18;

        // Force factor that is proportional to distance but plateaus elegantly
        const force = dist / (dist + 300);

        const tx = Math.cos(angle) * force * maxTx;
        const ty = Math.sin(angle) * force * maxTy;

        // Squash & stretch: stretch in the direction of the cursor (dy < 0 is vertical stretch)
        const stretchAmount = 0.08; // maximum 8% stretch
        const stretch = -Math.sin(angle) * force * stretchAmount;

        const scaleX = 1 - stretch * 0.5;
        const scaleY = 1 + stretch;

        // Add subtle tilt based on horizontal deviation
        const tiltStrength = 4; // degrees
        const tilt = Math.cos(angle) * force * tiltStrength;

        bodyEl.style.transformOrigin = 'bottom center';
        bodyEl.style.transform = `translate(${tx}px, ${ty}px) scale(${scaleX}, ${scaleY}) rotate(${tilt}deg)`;
      };

      trackEye(leftEyeRef.current, leftPupilRef.current);
      trackEye(rightEyeRef.current, rightPupilRef.current);
      trackBody(bodyRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] pt-16 pb-0 px-6 md:px-12 mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-items-stretch pb-44 md:pb-56 relative z-20">
        
        {/* Left column: Vertical Navigation list */}
        <div className="flex flex-col gap-4 items-start text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B5CF6] mb-1">
            CONTACT // DIRECT
          </span>
          <div className="space-y-2">
            <a
              href="mailto:hello@aeymotion.com"
              className="font-sans text-[20px] md:text-[24px] uppercase font-black tracking-tight text-white hover:text-[#8B5CF6] transition-all duration-300 block py-0.5 border-b border-white/10 hover:border-[#8B5CF6] pb-1.5"
            >
              hello@aeymotion.com
            </a>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
              Write to us directly with your product brief or inquiries.
            </p>
          </div>
        </div>

        {/* Center column - Spacer for elegance */}
        <div className="hidden md:block"></div>

        {/* Right column: Brand & Copyright */}
        <div className="flex flex-col gap-6 items-start md:items-end md:text-right">
          <div className="flex items-center gap-2.5 group justify-end">
            <img 
              src="/logo.svg" 
              className="w-6 h-6 rounded-full shadow-[0_2px_8px_rgba(139,92,246,0.15)] group-hover:scale-108 transition-all duration-500" 
              alt="Logo" 
            />
            <span className="text-xl font-black tracking-tighter uppercase text-white hover:text-[#8B5CF6] transition-colors cursor-default">
              Aeymotion.
            </span>
          </div>
          
          <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 leading-relaxed">
            © {new Date().getFullYear()} Aeymotion Studio.<br />
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            <a href="https://dribbble.com/aeymotion" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a>
            <a href="https://www.instagram.com/aey.motion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/aeymotion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Interactive Peeking Blob Character at the bottom center of the footer */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[180px] md:h-[240px] pointer-events-none flex justify-center z-10">
        <div 
          ref={bodyRef}
          style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
          className="w-[101%] h-[260px] md:h-[320px] bg-gradient-to-tr from-[#8B5CF6] via-[#A855F7] to-[#F59E7B] shadow-[0_-15px_45px_rgba(139,92,246,0.3)] relative translate-y-0 transition-transform duration-200 ease-out flex justify-center cursor-pointer group pointer-events-auto"
        >
          {/* Eyes container */}
          <div className="absolute top-[18%] md:top-[16%] flex gap-12 md:gap-24">
            {/* Left Eye */}
            <div 
              ref={leftEyeRef} 
              className="w-[60px] h-[72px] md:w-[78px] md:h-[92px] bg-white rounded-full flex items-center justify-center relative shadow-[inset_0_3px_6px_rgba(0,0,0,0.06),0_3px_6px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Pupil */}
              <div 
                ref={leftPupilRef} 
                className="w-[28px] h-[32px] md:w-[35px] md:h-[40px] bg-[#050505] rounded-full shadow-[inset_1px_1.5px_3px_rgba(255,255,255,0.6)] transition-transform duration-75 ease-out" 
              />
            </div>

            {/* Right Eye */}
            <div 
              ref={rightEyeRef} 
              className="w-[60px] h-[72px] md:w-[78px] md:h-[92px] bg-white rounded-full flex items-center justify-center relative shadow-[inset_0_3px_6px_rgba(0,0,0,0.06),0_3px_6px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Pupil */}
              <div 
                ref={rightPupilRef} 
                className="w-[28px] h-[32px] md:w-[35px] md:h-[40px] bg-[#050505] rounded-full shadow-[inset_1px_1.5px_3px_rgba(255,255,255,0.6)] transition-transform duration-75 ease-out" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
