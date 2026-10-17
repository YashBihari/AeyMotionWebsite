import { useId } from 'react';
import { motion, useTransform, type MotionValue } from 'motion/react';

const NIGHT = {
  sky: ['#6B21A8', '#8C4BFF', '#C084FC'], sea: ['#A855F7', '#7C3AED', '#4C1D95'],
  cloud: '#D8B4FE', cloudShade: '#A855F7', island: '#7E22CE',
  leaf: '#581C87', leafLight: '#9333EA', ink: '#3B0764', rock: '#6B21A8',
  foam: '#E9D5FF', skin: '#D8B4FE'
};
const DAY = {
  sky: ['#E9D5FF', '#F3E8FF', '#FDF2F8'], sea: ['#D8B4FE', '#C084FC', '#A855F7'],
  cloud: '#FAF5FF', cloudShade: '#F5D0FE', island: '#A855F7',
  leaf: '#9333EA', leafLight: '#C084FC', ink: '#6B21A8', rock: '#D8B4FE',
  foam: '#FDF4FF', skin: '#F5D0FE'
};

function Illustration({ day }: { day: boolean }) {
  const id = useId().replace(/:/g, '');
  const p = day ? DAY : NIGHT;
  const paint = (name: string) => `url(#${id}-${name})`;
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient id={`${id}-sky`} x2="0" y2="1">
          {p.sky.map((color, i) => <stop key={color} offset={i / 2} stopColor={color} />)}
        </linearGradient>
        <linearGradient id={`${id}-sea`} x2="0" y2="1">
          {p.sea.map((color, i) => <stop key={color} offset={i / 2} stopColor={color} />)}
        </linearGradient>
        <g id={`${id}-leaf`}>
          <path d="M0 0C26 -42 97 -57 148 -27L125 -22L135 -8L110 -11L115 3L89 -2L88 12L64 7L54 21L36 10L22 20Z" fill={p.leafLight} stroke={p.ink} strokeWidth="2" />
          <path d="M0 0Q72 -24 137 -26" fill="none" stroke={p.leaf} strokeWidth="2" />
        </g>
        <g id={`${id}-plant`} fill={p.leafLight} stroke={p.ink} strokeWidth="2" strokeLinejoin="round">
          <path d="M0 0C-51 -64 -64 -57 -29 -22C-94 -38 -92 -13 -33 -9C-77 12 -58 26 -15 4C-19 65 4 67 5 10C49 40 72 27 23 -1C88 -13 70 -35 15 -11C51 -67 21 -69 3 -18Z" />
          <path d="M-5 8L14 43" fill="none" />
        </g>
      </defs>
      <rect width="1200" height="600" fill={paint('sky')} />
      {!day && (
        <g fill="#FAF5FF">
          {Array.from({ length: 48 }, (_, i) => <circle key={i} cx={(i * 139.7 + 35) % 1200} cy={(i * 37.1 + 11) % 220} r={i % 5 ? .8 : 1.5} opacity={.4 + i % 4 * .15} />)}
          <path d="M1056 36A29 29 0 1 0 1079 78A24 24 0 0 1 1056 36Z" fill="#F3E8FF" />
        </g>
      )}
      {day && (
        <g fill="#FDF4FF">
          <circle cx="1055" cy="64" r="49" opacity=".2" />
          <circle cx="1055" cy="64" r="28" opacity=".8" />
        </g>
      )}
      <g fill={p.cloudShade} opacity=".65">
        <path d="M405 323C381 300 394 264 429 263C415 238 439 206 467 211C455 181 478 153 510 156C495 128 522 105 544 111C537 77 580 64 598 91C621 67 651 91 649 113C677 102 702 127 694 153C729 142 750 172 732 197C768 183 796 207 788 233C822 237 821 273 794 280L803 324Z" />
      </g>
      <g fill={p.cloud} stroke={p.cloudShade} strokeWidth="2">
        <path d="M391 308C368 288 380 260 410 257C397 231 419 207 447 210C432 178 456 151 487 157C474 130 496 106 523 111C514 78 555 65 575 87C595 64 625 83 625 105C653 95 679 118 672 144C700 135 726 158 713 185C745 174 770 199 756 223C791 221 812 250 788 273C824 266 853 286 847 310Z" />
        <path d="M38 329C47 307 70 299 89 313C79 282 109 264 131 283C144 247 179 252 188 280C216 266 242 291 230 314C269 292 299 311 300 329Z" />
        <path d="M904 328C908 296 944 283 967 304C961 276 993 252 1015 268C1027 238 1066 238 1074 270C1106 258 1127 285 1117 306C1151 281 1186 299 1208 328Z" />
      </g>
      <rect y="329" width="1200" height="271" fill={paint('sea')} />
      <path d="M0 329H1200M353 371H665M470 391H704M623 449H835M274 480H503M741 545H1011" stroke={p.foam} strokeWidth="1.5" opacity=".65" />
      <path d="M1110 322C1136 293 1160 299 1175 281L1200 287V349L1044 363L978 360L1002 342Z" fill={p.island} stroke={p.ink} strokeWidth="2" />
      <path d="M1200 349L1095 358L1044 371L976 368" fill="none" stroke={p.foam} strokeWidth="4" opacity=".9" />
      <g fill="none" stroke={day ? p.ink : p.foam} strokeWidth="2.5" strokeLinecap="round" opacity=".8">
        <path d="M814 177Q827 170 840 181Q847 169 860 172M946 137Q955 132 964 140Q970 131 981 134M757 219Q768 213 779 221Q785 214 795 216" />
      </g>

      {/* A palm canopy and hand-drawn foliage frame the coast. */}
      <g stroke={p.ink} strokeWidth="3">
        <path d="M-28 511C18 353 68 199 159 57L176 67C100 230 66 373 39 527Z" fill={p.rock} />
        <path d="M30 397L64 405M52 331L87 343M77 266L109 280M110 192L136 207" fill="none" opacity=".6" />
      </g>
      <g transform="translate(160 61)">
        {[0, 43, 85, 126, 171, 218, 264].map(angle => <use key={angle} href={`#${id}-leaf`} transform={`rotate(${angle}) scale(1.12)`} />)}
        <circle r="13" fill={p.leaf} />
      </g>
      <g fill={p.leaf}>
        <path d="M0 368C85 388 116 444 169 467S291 513 384 547L494 600H0Z" />
        <path d="M1200 454C1151 472 1102 510 1064 518L1007 574L965 600H1200Z" />
      </g>
      <g>
        <use href={`#${id}-plant`} transform="translate(67 389) scale(1.4)" />
        <use href={`#${id}-plant`} transform="translate(186 473) rotate(27) scale(1.5)" />
        <use href={`#${id}-plant`} transform="translate(306 553) rotate(-23) scale(1.4)" />
        <use href={`#${id}-plant`} transform="translate(1147 519) rotate(-27) scale(1.6)" />
        <use href={`#${id}-plant`} transform="translate(1077 583) rotate(22) scale(1.1)" />
      </g>
      <path d="M810 600L858 535L928 509L1014 539L1061 600Z" fill={p.rock} stroke={p.ink} strokeWidth="3" />
      <path d="M858 535L909 552L928 509M909 552L898 600M946 555L1014 539" fill="none" stroke={p.ink} strokeWidth="2" opacity=".6" />

      {/* A small traveler looking out to sea, echoing the reference composition. */}
      <g transform="translate(928 527)" stroke={p.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-20 -94L-27 -13L-37 4L-11 7L-7 -9L5 -80M13 -83L20 -17L16 5L43 7L36 -8L37 -97" fill={p.skin} />
        <path d="M-29 -159L-35 -89L-8 -80L5 -104L12 -78L42 -86L32 -161Z" fill={p.leaf} />
        <path d="M-30 -87L-8 -80M12 -78L40 -86" stroke="#E9D5FF" strokeWidth="5" />
        <path d="M-30 -232Q0 -245 27 -223L36 -161Q9 -143 -32 -158L-44 -181Z" fill="#A855F7" />
        <path d="M21 -221Q39 -211 40 -191L29 -156L18 -149L9 -157L19 -172L22 -200" fill={p.skin} />
        <path d="M-11 -232L-12 -248L8 -253L11 -230" fill={p.skin} />
        <path d="M-29 -266Q-30 -297 0 -299Q26 -296 26 -272L34 -261L26 -258Q24 -236 1 -238L-17 -247Z" fill={p.skin} />
        <path d="M-29 -266L-24 -244L-12 -255L-6 -269L2 -265L9 -279L25 -272L20 -294L-17 -299Z" fill={p.ink} />
        <path d="M-40 -289Q-29 -332 -1 -328Q24 -323 30 -293Z" fill="#F5D0FE" />
        <path d="M-40 -289Q-4 -304 32 -292L41 -281Q2 -292 -39 -277Z" fill="#C084FC" />
        <ellipse cx="-2" cy="-282" rx="57" ry="13" transform="rotate(-9 -2 -282)" fill="#F5D0FE" />
        <path d="M-35 -290Q-9 -306 30 -299" fill="none" stroke="#D8B4FE" />
        <ellipse cx="-33" cy="-200" rx="25" ry="33" fill="#E9D5FF" />
        <path d="M-28 -234Q-7 -226 -12 -193M-37 -226Q-15 -224 -16 -201" fill="none" stroke="#C084FC" strokeWidth="4" />
        <path d="M-37 4L-11 7M16 5L43 7" stroke={p.ink} strokeWidth="5" />
      </g>
    </svg>
  );
}

export default function AboutLandscape({ daylight }: { daylight: MotionValue<number> }) {
  const nightOpacity = useTransform(daylight, [0, 1], [1, 0]);
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}><Illustration day={false} /></div>
      <motion.div style={{ position: 'absolute', inset: 0, opacity: daylight }}><Illustration day /></motion.div>
      <motion.div style={{ position: 'absolute', inset: 0, opacity: nightOpacity, background: 'linear-gradient(90deg, rgba(59,7,100,.82), rgba(59,7,100,.68) 52%, rgba(59,7,100,.42)), linear-gradient(0deg, rgba(76,29,149,.3), transparent 70%)' }} />
      <motion.div style={{ position: 'absolute', inset: 0, opacity: daylight, background: 'linear-gradient(90deg, rgba(250,245,255,.95), rgba(250,245,255,.85) 52%, rgba(250,245,255,.65)), linear-gradient(0deg, rgba(233,213,255,.3), transparent 70%)' }} />
    </div>
  );
}
