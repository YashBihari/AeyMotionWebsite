import React, { useEffect, useRef } from 'react';
import { BRAND_LINKS } from '../data/config';

interface FooterProps {
  onBookCall: () => void;
}

export default function Footer({ onBookCall }: FooterProps) {
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
        const maxDist = 16;

        if (dist === 0) {
          pupilEl.style.transform = 'translate(0px, 0px)';
        } else {
          const angle = Math.atan2(dy, dx);
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
        const maxTx = 22;
        const maxTy = 18;
        const force = dist / (dist + 300);

        const tx = Math.cos(angle) * force * maxTx;
        const ty = Math.sin(angle) * force * maxTy;
        const stretchAmount = 0.08;
        const stretch = -Math.sin(angle) * force * stretchAmount;
        const scaleX = 1 - stretch * 0.5;
        const scaleY = 1 + stretch;
        const tiltStrength = 4;
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

  const handleScrollNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-white pt-16 md:pt-20 pb-0 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-items-stretch pb-64 md:pb-80 relative z-20">
        
        {/* Left column: Brand & Positioning Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              className="w-7 h-7 rounded-full shadow-sm" 
              alt="Aeymotion Logo" 
            />
            <span className="text-xl font-black tracking-tight uppercase text-white">
              Aeymotion
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
            Motion and interactive animation studio for AI, SaaS, and technology companies.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${BRAND_LINKS.email}`}
              className="text-xs font-mono font-bold text-[#B98FD4] hover:text-white border-b border-[#B98FD4]/40 hover:border-white transition-colors pb-0.5"
            >
              {BRAND_LINKS.email}
            </a>
          </div>
        </div>

        {/* Center column: Section Navigation Links */}
        <div className="flex flex-col gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <span className="text-[10px] font-bold text-[#8C4BFF] mb-1">NAVIGATION</span>
          <a href="#work" onClick={(e) => handleScrollNav(e, 'work')} className="hover:text-white transition-colors">Work</a>
          <a href="#services" onClick={(e) => handleScrollNav(e, 'services')} className="hover:text-white transition-colors">Services</a>
          <a href="#process" onClick={(e) => handleScrollNav(e, 'process')} className="hover:text-white transition-colors">Process</a>
          <a href="#about" onClick={(e) => handleScrollNav(e, 'about')} className="hover:text-white transition-colors">About</a>
          <button onClick={onBookCall} className="text-left hover:text-white transition-colors uppercase cursor-pointer">Book a Call</button>
        </div>

        {/* Right column: Social links & Copyright */}
        <div className="flex flex-col gap-4 items-start md:items-end md:text-right">
          <span className="text-[10px] font-mono font-bold text-[#8C4BFF] uppercase tracking-wider">CONNECT</span>
          <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href={BRAND_LINKS.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a>
            <a href={BRAND_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={BRAND_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>

          <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 pt-4">
            © {new Date().getFullYear()} Aeymotion Studio. All rights reserved.
          </p>
        </div>

      </div>

      {/* Interactive Peeking Blob Character at bottom center */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[160px] md:h-[200px] pointer-events-none flex justify-center z-10">
        <div 
          ref={bodyRef}
          style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
          className="w-[101%] h-[240px] md:h-[280px] bg-gradient-to-tr from-[#8C4BFF] via-[#A855F7] to-[#F2A979] shadow-2xl relative translate-y-0 transition-transform duration-200 ease-out flex justify-center pointer-events-auto"
        >
          {/* Eyes */}
          <div className="absolute top-[18%] md:top-[16%] flex gap-12 md:gap-24">
            <div 
              ref={leftEyeRef} 
              className="w-[52px] h-[64px] md:w-[68px] md:h-[82px] bg-white rounded-full flex items-center justify-center relative shadow-inner overflow-hidden"
            >
              <div 
                ref={leftPupilRef} 
                className="w-[24px] h-[28px] md:w-[30px] md:h-[34px] bg-[#171717] rounded-full transition-transform duration-75 ease-out" 
              />
            </div>

            <div 
              ref={rightEyeRef} 
              className="w-[52px] h-[64px] md:w-[68px] md:h-[82px] bg-white rounded-full flex items-center justify-center relative shadow-inner overflow-hidden"
            >
              <div 
                ref={rightPupilRef} 
                className="w-[24px] h-[28px] md:w-[30px] md:h-[34px] bg-[#171717] rounded-full transition-transform duration-75 ease-out" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
