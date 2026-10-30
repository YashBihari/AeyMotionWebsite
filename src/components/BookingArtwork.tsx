import { useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function BookingArtwork() {
  const id = useId().replace(/:/g, '');
  const reducedMotion = useReducedMotion();
  const paint = (name: string) => `url(#${id}-${name})`;
  const float = (distance: number) => reducedMotion ? undefined : { y: [0, -distance, 0] };

  return (
    <div aria-hidden="true" className="pointer-events-none h-[320px] sm:h-[380px] xl:h-[604px] w-full max-w-[440px] mx-auto select-none">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" fill="none" focusable="false" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity=".98" />
            <stop offset=".5" stopColor="#FCF6FF" stopOpacity=".86" />
            <stop offset="1" stopColor="#E9D5FF" stopOpacity=".68" />
          </linearGradient>
          <linearGradient id={`${id}-violet`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#C084FC" /><stop offset=".45" stopColor="#8C4BFF" /><stop offset="1" stopColor="#6423BF" />
          </linearGradient>
          <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F9DAFF" /><stop offset=".55" stopColor="#D8A2F5" /><stop offset="1" stopColor="#E46BC5" />
          </linearGradient>
          <radialGradient id={`${id}-pearl`} cx=".3" cy=".2" r=".8">
            <stop stopColor="#FFFFFF" /><stop offset=".5" stopColor="#F3E8FF" /><stop offset="1" stopColor="#BB83EF" />
          </radialGradient>
          <radialGradient id={`${id}-glow`}>
            <stop stopColor="#D8B4FE" stopOpacity=".38" /><stop offset="1" stopColor="#F5D0FE" stopOpacity="0" />
          </radialGradient>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="16" stdDeviation="15" floodColor="#8C4BFF" floodOpacity=".17" />
          </filter>
        </defs>

        <ellipse cx="200" cy="265" rx="205" ry="215" fill={paint('glow')} />

        {/* A floating conversation tile. */}
        <motion.g animate={float(9)} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <g transform="translate(166 64) rotate(9 88 53)" filter={paint('shadow')}>
            <rect x="2" y="5" width="176" height="106" rx="24" fill="#C084FC" fillOpacity=".3" />
            <rect width="176" height="106" rx="24" fill={paint('glass')} stroke="white" strokeWidth="2" />
            <path d="M124 105L134 119L148 104" fill="#F3E8FF" stroke="white" strokeWidth="1.5" />
            <rect x="23" y="25" width="102" height="9" rx="4.5" fill={paint('violet')} />
            <rect x="23" y="46" width="131" height="8" rx="4" fill="#D8B4FE" />
            <rect x="23" y="66" width="77" height="8" rx="4" fill={paint('pink')} />
          </g>
        </motion.g>

        {/* Glass video-call window with sculpted avatars and controls. */}
        <motion.g animate={float(7)} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: .6 }}>
          <g transform="translate(37 225) rotate(-7 145 110)" filter={paint('shadow')}>
            <rect x="3" y="8" width="292" height="224" rx="29" fill="#B58AE5" fillOpacity=".32" />
            <rect width="292" height="224" rx="29" fill={paint('glass')} stroke="white" strokeWidth="2" />
            <path d="M20 17H268" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".85" />
            <circle cx="23" cy="25" r="4" fill="#D8B4FE" />
            <circle cx="37" cy="25" r="4" fill="#E9D5FF" />
            <circle cx="51" cy="25" r="4" fill="#F0D1F7" />
            <rect x="18" y="45" width="160" height="123" rx="19" fill="#EEE2FF" stroke="white" />
            <circle cx="98" cy="88" r="21" fill={paint('violet')} />
            <path d="M58 148C58 126 76 113 98 113C120 113 138 126 138 148V154H58Z" fill={paint('violet')} />
            <path d="M83 76C87 71 94 68 100 69" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
            <rect x="189" y="45" width="85" height="58" rx="13" fill="#F6E9FC" stroke="white" />
            <circle cx="231" cy="67" r="11" fill={paint('pink')} />
            <path d="M209 95C210 81 220 78 231 78C243 78 253 83 254 95" fill={paint('pink')} />
            <rect x="189" y="112" width="85" height="56" rx="13" fill="#E9DFFE" stroke="white" />
            <circle cx="231" cy="132" r="10" fill={paint('violet')} />
            <path d="M211 160C211 148 220 143 231 143C242 143 251 148 251 160" fill={paint('violet')} />
            <rect x="82" y="184" width="37" height="25" rx="12.5" fill="white" fillOpacity=".9" />
            <path d="M97 191V198A4 4 0 0 0 105 198V191M101 190V196" stroke="#8C4BFF" strokeWidth="2" strokeLinecap="round" />
            <rect x="128" y="184" width="37" height="25" rx="12.5" fill={paint('violet')} />
            <rect x="138" y="192" width="12" height="9" rx="2" stroke="white" strokeWidth="1.5" />
            <path d="M151 194L156 191V202L151 199Z" fill="white" />
            <rect x="174" y="184" width="37" height="25" rx="12.5" fill={paint('pink')} />
            <path d="M184 198C188 192 197 192 201 198" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Customer avatars and a small connection badge. */}
        <motion.g animate={float(11)} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <g transform="translate(11 145) rotate(-12 65 34)" filter={paint('shadow')}>
            <rect width="132" height="68" rx="22" fill={paint('glass')} stroke="white" strokeWidth="2" />
            {[0, 1, 2].map((person) => (
              <g key={person} transform={`translate(${19 + person * 31} 18)`}>
                <circle cx="15" cy="16" r="19" fill={person === 1 ? '#F5E3FB' : '#EEE0FF'} stroke="white" strokeWidth="2" />
                <circle cx="15" cy="11" r="6" fill={paint(person === 1 ? 'pink' : 'violet')} />
                <path d="M4 28C4 19 10 17 15 17C21 17 26 21 26 28" fill={paint(person === 1 ? 'pink' : 'violet')} />
              </g>
            ))}
          </g>
        </motion.g>

        <circle cx="351" cy="190" r="13" fill={paint('pearl')} />
        <circle cx="44" cy="460" r="10" fill={paint('pearl')} />
        <path d="M328 418V434M320 426H336" stroke="#D8B4FE" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
