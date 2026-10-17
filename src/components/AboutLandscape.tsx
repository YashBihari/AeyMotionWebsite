import { useId } from 'react';
import { motion, type MotionValue } from 'motion/react';

type ScenePalette = {
  sky: string[]; water: string[]; clouds: string; cloudEdge: string;
  far: string; mountain: string; face: string; snow: string;
  ridge: string; forest: string; shore: string; light: string;
};

const NIGHT: ScenePalette = {
  sky: ['#382064', '#8550BC', '#DE9CDE'], water: ['#9166BD', '#65438F', '#261541'],
  clouds: '#B58AD3', cloudEdge: '#E6B4E9', far: '#9163B1', mountain: '#67418D',
  face: '#9F6BC3', snow: '#E6CBF6', ridge: '#54316E', forest: '#321A4D',
  shore: '#1D102F', light: '#F0ABFC'
};
const DAY: ScenePalette = {
  sky: ['#9D91E8', '#D1B9F4', '#FCE3E6'], water: ['#D7BEEB', '#B89CD9', '#6E5C99'],
  clouds: '#F8DEED', cloudEdge: '#FFF4E8', far: '#B5A0D3', mountain: '#8973AE',
  face: '#C5A4DB', snow: '#FFF1FA', ridge: '#78649B', forest: '#51416D',
  shore: '#352946', light: '#FDE5C4'
};

function Illustration({ day }: { day: boolean }) {
  const id = useId().replace(/:/g, '');
  const p = day ? DAY : NIGHT;
  const paint = (name: string) => `url(#${id}-${name})`;
  const trees = (count: number, base: number, min: number, spread: number) =>
    Array.from({ length: count }, (_, i) => {
      const x = i * 1240 / (count - 1) - 20;
      const h = min + (Math.sin(i * 7.17) + 1) * spread / 2;
      const y = base - Math.sin(i * .24) * 15;
      return <path key={i} d={`M${x} ${y - h}l${-h * .27} ${h * .57}h${h * .13}l${-h * .22} ${h * .36}h${h * .3}v${h * .16}h${h * .12}v${-h * .16}h${h * .3}l${-h * .22} ${-h * .36}h${h * .13}Z`} />;
    });
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient id={`${id}-sky`} x2="0" y2="1">
          {p.sky.map((color, i) => <stop key={color} offset={i / 2} stopColor={color} />)}
        </linearGradient>
        <linearGradient id={`${id}-water`} x2="0" y2="1">
          {p.water.map((color, i) => <stop key={color} offset={i / 2} stopColor={color} />)}
        </linearGradient>
        <linearGradient id={`${id}-reflection`} x2="0" y2="1">
          <stop stopColor="white" stopOpacity=".44" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-mirror`}>
          <rect y="354" width="1200" height="246" fill={paint('reflection')} />
        </mask>
        <linearGradient id={`${id}-horizon`}>
          <stop stopColor={p.light} stopOpacity="0" /><stop offset=".65" stopColor={p.light} /><stop offset="1" stopColor={p.light} stopOpacity=".2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill={paint('sky')} />
      {!day && (
        <g fill="#FFF2FF">
          {Array.from({ length: 55 }, (_, i) => {
            const x = (i * 131.7 + 33) % 1200;
            const y = (i * 43.3 + 13) % 210;
            return <circle key={i} cx={x} cy={y} r={i % 6 === 0 ? 1.5 : .7} opacity={.35 + (i % 4) * .16} />;
          })}
          <path d="M958 47A31 31 0 1 0 982 92A26 26 0 0 1 958 47Z" fill="#FAE9FF" />
          <path d="M720 30V42M714 36H726M1065 112V120M1061 116H1069" stroke="#FFF0FF" strokeWidth="1.5" />
          <path d="M410 88L590 18M730 81L883 15" stroke="#E9D5FF" strokeWidth=".6" opacity=".45" />
        </g>
      )}
      {day && (
        <g>
          <circle cx="965" cy="72" r="54" fill="#FFF0D4" opacity=".13" />
          <circle cx="965" cy="72" r="35" fill="#FFF2DC" opacity=".3" />
          <circle cx="965" cy="72" r="23" fill="#FFF3DC" />
        </g>
      )}
      <g fill={p.clouds} opacity=".8">
        <path d="M571 189C569 169 588 156 609 162C616 126 666 120 682 155C710 140 733 155 735 177H768L777 195H556Z" />
        <path d="M941 149C943 122 969 110 991 117C985 83 1021 59 1049 77C1060 83 1068 95 1068 109C1093 95 1120 111 1120 132H1164L1178 151Z" />
        <path d="M154 180C158 159 178 150 198 156C204 129 240 127 256 150C278 140 300 156 302 177Z" />
      </g>
      <g fill="none" stroke={p.cloudEdge} strokeWidth="4" opacity=".5">
        <path d="M603 164C616 131 658 129 674 153M995 117C994 85 1022 72 1042 81" />
      </g>
      <g id={`${id}-land`}>
        <path d="M0 295L89 226L150 263L267 174L345 248L423 213L495 260L619 157L706 216L815 137L897 205L1026 142L1128 226L1200 188V356H0Z" fill={p.far} />
        <path d="M515 340L643 228L718 162L754 207L881 72L1008 243L1105 284L1170 356Z" fill={p.mountain} />
        <path d="M881 72L839 188L855 238L754 207L780 263L643 228L515 340L770 303L925 326L945 217Z" fill={p.face} />
        <path d="M881 72L839 188L860 173L874 199L883 149L908 175L898 132L932 153Z" fill={p.snow} />
        <path d="M718 162L683 216L712 204L727 222L729 189L754 207Z" fill={p.snow} opacity=".7" />
        <path d="M0 313L160 278L230 298L345 250L472 293L573 263L690 299L811 254L903 281L1058 217L1200 249V356H0Z" fill={p.ridge} />
        <g fill={p.ridge}>{trees(78, 311, 18, 24)}</g>
        <path d="M0 302C140 322 192 340 300 318S480 319 554 331S720 337 813 318S957 267 1035 282S1135 296 1200 265V357H0Z" fill={p.forest} />
        <g fill={p.forest}>{trees(99, 347, 20, 39)}</g>
      </g>
      <rect y="355" width="1200" height="245" fill={paint('water')} />
      <g mask={paint('mirror')}>
        <use href={`#${id}-land`} transform="translate(0 710) scale(1 -1)" />
      </g>
      <path d="M0 356H1200" stroke={paint('horizon')} strokeWidth="4" />
      <path d="M470 365H1090M624 384H1020M501 405H696M754 432H1121M611 459H867M780 482H1003M297 512H559M878 540H1151"
        stroke={p.light} strokeWidth="1" opacity=".35" />
      <g transform="translate(796 345)">
        <path d="M0 -42L-22 0H0ZM4 -31L23 -1H4Z" fill={day ? '#FFFAF0' : '#FFF0FC'} />
        <path d="M-25 5H27L15 12H-15Z" fill={p.light} />
        <path d="M1 -47V7" stroke="#FFECFF" strokeWidth="1.3" />
        <path d="M-22 20L0 56V20ZM4 20V46L23 20Z" fill={p.light} opacity=".22" />
      </g>
      <path d="M0 548L83 532L139 545L187 538L224 563L310 572L353 600H0ZM900 600L973 564L1012 570L1080 534L1127 541L1200 505V600Z" fill={p.shore} />
      <path d="M1034 576L1043 539M1051 568L1061 513M1067 561L1087 530M58 548L48 510M76 549L86 518" stroke={p.shore} strokeWidth="3" />
    </svg>
  );
}

export default function AboutLandscape({ daylight }: { daylight: MotionValue<number> }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}><Illustration day={false} /></div>
      <motion.div style={{ position: 'absolute', inset: 0, opacity: daylight }}><Illustration day /></motion.div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(23,10,43,.88) 0%, rgba(28,12,51,.74) 52%, rgba(32,14,56,.58) 100%), linear-gradient(0deg, rgba(20,9,38,.55), transparent 70%)' }} />
    </div>
  );
}
