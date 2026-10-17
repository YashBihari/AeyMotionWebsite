import { useId } from 'react';

export default function OfferArtwork({ index }: { index: number }) {
  const id = useId().replace(/:/g, '');
  const paint = (name: string) => `url(#${id}-${name})`;
  return (
    <div className="offer-artwork" aria-hidden="true">
      <svg viewBox="0 0 260 270" fill="none" className="offer-artwork-scene">
        <defs>
          <linearGradient id={`${id}-glass`} x1="35" y1="35" x2="230" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity=".98" /><stop offset=".55" stopColor="#F5EBFF" stopOpacity=".92" /><stop offset="1" stopColor="#DCC7F4" stopOpacity=".95" />
          </linearGradient>
          <linearGradient id={`${id}-purple`} x1="70" y1="70" x2="190" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BE89FF" /><stop offset=".48" stopColor="#9350ED" /><stop offset="1" stopColor="#6024BA" />
          </linearGradient>
          <linearGradient id={`${id}-pink`} x1="55" y1="65" x2="190" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C094FF" /><stop offset="1" stopColor="#EEB6E4" />
          </linearGradient>
          <radialGradient id={`${id}-ambient`}>
            <stop stopColor="#C69BEF" stopOpacity=".3" /><stop offset="1" stopColor="#D9BFF1" stopOpacity="0" />
          </radialGradient>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="190%" height="200%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#733AAF" floodOpacity=".18" />
          </filter>
        </defs>
        <ellipse cx="130" cy="170" rx="125" ry="100" fill={paint('ambient')} />
        {index === 0 && (
          <g className="offer-artwork-drift">
            <g transform="translate(29 49) rotate(-9 99 86)" filter={paint('shadow')}>
              <rect x="3" y="7" width="194" height="151" rx="18" fill="#CDB3E7" />
              <rect width="194" height="151" rx="18" fill={paint('glass')} stroke="white" strokeWidth="1.5" />
              <path d="M0 31H194" stroke="#DBC7EC" />
              <circle cx="15" cy="16" r="3" fill="#B08BD1" /><circle cx="26" cy="16" r="3" fill="#D3BCE5" /><circle cx="37" cy="16" r="3" fill="#E5D8F0" />
              <rect x="13" y="44" width="34" height="94" rx="8" fill="#E8DBF2" />
              <path d="M22 57H37M22 70H32M22 83H37" stroke="#B495D0" strokeWidth="3" strokeLinecap="round" />
              <rect x="59" y="45" width="119" height="16" rx="5" fill="white" fillOpacity=".8" />
              <rect x="59" y="74" width="73" height="6" rx="3" fill="#C7ACDF" />
              <rect x="59" y="87" width="103" height="5" rx="2.5" fill="#DFCEE9" />
              <rect x="59" y="100" width="89" height="5" rx="2.5" fill="#DFCEE9" />
              <rect x="59" y="117" width="57" height="18" rx="6" fill={paint('pink')} />
            </g>
            <g className="offer-artwork-detail">
              <g transform="translate(91 111) rotate(-9 69 30)" filter={paint('shadow')}>
                <rect x="2" y="5" width="137" height="58" rx="13" fill="#8D4BC1" />
                <rect width="137" height="58" rx="13" fill={paint('purple')} stroke="#E5C9FF" strokeWidth="1.5" />
                <rect x="13" y="14" width="30" height="30" rx="8" fill="white" fillOpacity=".2" />
                <path d="M22 29L27 34L35 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M55 23H116M55 34H99" stroke="white" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" />
              </g>
              <path d="M203 170L209 193L215 185L225 182Z" fill="#7735C7" stroke="#FBF4FF" strokeWidth="2" strokeLinejoin="round" />
            </g>
            <path d="M41 220H94" stroke="#B893D8" strokeWidth="3" strokeLinecap="round" strokeOpacity=".35" />
          </g>
        )}
        {index === 1 && (
          <g className="offer-artwork-drift">
            <g transform="translate(34 64) rotate(8 95 64)" filter={paint('shadow')}>
              <rect x="2" y="6" width="187" height="136" rx="19" fill="#B48CD5" />
              <rect width="187" height="136" rx="19" fill={paint('glass')} stroke="white" strokeWidth="1.5" />
              <rect x="11" y="12" width="165" height="94" rx="12" fill={paint('purple')} />
              <path d="M18 86C52 22 91 98 169 25" stroke="white" strokeOpacity=".17" strokeWidth="15" />
              <circle cx="94" cy="58" r="25" fill="white" fillOpacity=".95" />
              <path d="M89 47L105 58L89 69V47Z" fill="#8C4BFF" stroke="#8C4BFF" strokeLinejoin="round" />
              <path d="M17 121H167" stroke="#D5BFEB" strokeWidth="4" strokeLinecap="round" />
              <path d="M17 121H69" stroke="#A66CE3" strokeWidth="4" strokeLinecap="round" />
              <circle cx="69" cy="121" r="4" fill="white" />
            </g>
            <g className="offer-artwork-detail">
              <g transform="translate(155 142) rotate(-12 31 45)" filter={paint('shadow')}>
                <rect x="2" y="4" width="61" height="88" rx="12" fill="#C59ADE" />
                <rect width="61" height="88" rx="12" fill={paint('glass')} stroke="white" strokeWidth="1.5" />
                <rect x="7" y="8" width="47" height="58" rx="8" fill={paint('pink')} />
                <path d="M25 28L39 37L25 46Z" fill="white" />
                <path d="M13 75H48" stroke="#C3A0DE" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g transform="translate(31 39) rotate(-15)" filter={paint('shadow')}>
                <path d="M0 12L43 0L31 42L21 24L0 12Z" fill={paint('pink')} stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M21 24L43 0" stroke="#9C5DDB" strokeWidth="1.5" />
              </g>
            </g>
          </g>
        )}
        {index === 2 && (
          <g className="offer-artwork-drift">
            <path d="M56 97C113 97 106 156 165 156S204 202 227 202" stroke="#BE93E5" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
            <g transform="translate(24 53) rotate(-10 49 43)" filter={paint('shadow')}>
              <rect x="2" y="5" width="99" height="86" rx="15" fill="#CBA8E5" />
              <rect width="99" height="86" rx="15" fill={paint('glass')} stroke="white" strokeWidth="1.5" />
              <rect x="11" y="12" width="76" height="48" rx="8" fill="#E6D6F3" />
              <path d="M18 51L36 28L51 44L62 34L81 51Z" fill={paint('pink')} />
              <path d="M15 72H66" stroke="#BE9CD8" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g transform="translate(85 106) rotate(7 57 45)" filter={paint('shadow')}>
              <rect x="2" y="5" width="115" height="93" rx="16" fill="#9B60C8" />
              <rect width="115" height="93" rx="16" fill={paint('purple')} stroke="#E9CFFF" strokeWidth="1.5" />
              <path d="M18 24H63M18 37H94M18 50H78" stroke="white" strokeOpacity=".7" strokeWidth="5" strokeLinecap="round" />
              <rect x="17" y="65" width="37" height="13" rx="5" fill="white" fillOpacity=".25" />
            </g>
            <g className="offer-artwork-detail">
              <g transform="translate(160 160) rotate(-9 41 35)" filter={paint('shadow')}>
                <rect x="2" y="4" width="82" height="71" rx="14" fill="#CBA8E5" />
                <rect width="82" height="71" rx="14" fill={paint('glass')} stroke="white" strokeWidth="1.5" />
                <circle cx="41" cy="31" r="17" fill={paint('pink')} />
                <path d="M34 31L39 36L49 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 58H57" stroke="#B991D7" strokeWidth="3" strokeLinecap="round" />
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
