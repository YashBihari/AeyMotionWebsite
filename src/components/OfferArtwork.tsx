import { useId } from 'react';

/** Decorative miniatures share the hero's glass, ceramic forms and orbit lines. */
export default function OfferArtwork({ index }: { index: number }) {
  const id = useId().replace(/:/g, '');
  const paint = (name: string) => `url(#${id}-${name})`;
  return (
    <div className="offer-artwork" aria-hidden="true">
      <svg viewBox="0 0 260 270" fill="none" className="offer-artwork-scene" focusable="false">
        <defs>
          <linearGradient id={`${id}-glass`} x1="30" y1="50" x2="215" y2="205" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity=".85" />
            <stop offset=".5" stopColor="#F5EBFF" stopOpacity=".48" />
            <stop offset="1" stopColor="#FCE8F6" stopOpacity=".7" />
          </linearGradient>
          <linearGradient id={`${id}-rim`} x1="30" y1="60" x2="200" y2="215" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" /><stop offset=".5" stopColor="white" stopOpacity=".9" /><stop offset="1" stopColor="#EEDBFF" />
          </linearGradient>
          <linearGradient id={`${id}-purple`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#C084FC" /><stop offset=".5" stopColor="#A64FF2" /><stop offset="1" stopColor="#7626D1" />
          </linearGradient>
          <linearGradient id={`${id}-bar`}>
            <stop stopColor="#A34DF3" /><stop offset=".65" stopColor="#D77DF1" /><stop offset="1" stopColor="#EB9BD9" />
          </linearGradient>
          <radialGradient id={`${id}-sphere`} cx=".3" cy=".23" r=".85">
            <stop stopColor="white" /><stop offset=".2" stopColor="#FDF1FF" /><stop offset=".45" stopColor="#EFB6F5" />
            <stop offset=".7" stopColor="#CB79E8" /><stop offset="1" stopColor="#8436B9" />
          </radialGradient>
          <radialGradient id={`${id}-pearl`} cx=".3" cy=".25" r=".8">
            <stop stopColor="white" /><stop offset=".45" stopColor="#FBF5FF" /><stop offset=".8" stopColor="#DDC0F5" /><stop offset="1" stopColor="#B080D3" />
          </radialGradient>
          <linearGradient id={`${id}-stage`} x2="1" y2=".3">
            <stop stopColor="#A86BF0" /><stop offset=".5" stopColor="#D59BF1" /><stop offset="1" stopColor="#F3B9DF" />
          </linearGradient>
          <linearGradient id={`${id}-wall`}>
            <stop stopColor="#954CEB" /><stop offset=".45" stopColor="#BE6CF1" /><stop offset="1" stopColor="#ED91D9" />
          </linearGradient>
          <radialGradient id={`${id}-ambient`}>
            <stop stopColor="#D8A1F3" stopOpacity=".35" /><stop offset="1" stopColor="#F3DFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="130" cy="170" rx="129" ry="100" fill={paint('ambient')} />
        <path d="M-12 87C63 82 145 -2 253 35M-9 188C49 134 106 262 275 137"
          stroke="#C9A0ED" strokeOpacity=".5" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M34 224V235C34 261 227 261 227 235V224Z" fill={paint('wall')} />
        <ellipse cx="130.5" cy="224" rx="96.5" ry="25" fill={paint('stage')} stroke="#F7DFFF" strokeWidth="1.2" />
        <ellipse cx="130.5" cy="221" rx="90" ry="20" stroke="white" strokeOpacity=".4" />

        <g className="offer-artwork-drift">
          <circle cx={index === 1 ? 91 : 174} cy="164" r={index === 1 ? 51 : 56} fill={paint('sphere')} />
          <circle cx="229" cy="115" r="12" fill={paint('pearl')} />

          {index === 0 && (
            <>
              <g transform="rotate(-9 116 126)">
                <rect x="24" y="63" width="177" height="119" rx="17" fill={paint('glass')} stroke={paint('rim')} strokeWidth="1.8" />
                <path d="M34 66H182" stroke="white" strokeOpacity=".7" strokeLinecap="round" />
                <rect x="42" y="82" width="46" height="9" rx="4.5" fill={paint('bar')} />
                <rect x="42" y="103" width="136" height="5" rx="2.5" fill="#CBAAE8" fillOpacity=".55" />
                <rect x="42" y="116" width="103" height="5" rx="2.5" fill="#CBAAE8" fillOpacity=".35" />
                <rect x="42" y="139" width="48" height="23" rx="8" fill={paint('purple')} />
                <path d="M56 150H76M72 146L76 150L72 154" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g className="offer-artwork-detail">
                <rect x="111" y="144" width="111" height="61" rx="14" fill={paint('glass')} stroke="white" strokeWidth="1.7" />
                <rect x="127" y="160" width="71" height="7" rx="3.5" fill={paint('bar')} />
                <rect x="127" y="175" width="47" height="6" rx="3" fill={paint('bar')} opacity=".65" />
                <path d="M181 188L186 207L191 200L199 197Z" fill={paint('purple')} stroke="#F7E9FF" strokeWidth="1.4" strokeLinejoin="round" />
              </g>
            </>
          )}

          {index === 1 && (
            <>
              <g transform="rotate(-10 126 118)">
                <rect x="36" y="58" width="180" height="122" rx="19" fill={paint('glass')} stroke={paint('rim')} strokeWidth="1.8" />
                <path d="M48 62H192" stroke="white" strokeOpacity=".7" strokeLinecap="round" />
                <path d="M112 91Q109 89 109 94V137Q109 142 113 139L147 117Q152 114 147 111Z" fill={paint('purple')} />
                <path d="M114 94L144 112" stroke="#E8BFFF" strokeWidth="2" strokeLinecap="round" />
                <path d="M58 158H192" stroke="#D7B9EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M58 158H118" stroke="#AF65E6" strokeWidth="3" strokeLinecap="round" />
                <circle cx="118" cy="158" r="3.5" fill="white" />
              </g>
              <g className="offer-artwork-detail" transform="rotate(5 162 64)">
                <rect x="111" y="35" width="119" height="48" rx="13" fill={paint('glass')} stroke="white" strokeWidth="1.6" />
                <rect x="126" y="48" width="62" height="6" rx="3" fill={paint('bar')} />
                <rect x="126" y="62" width="88" height="6" rx="3" fill={paint('bar')} opacity=".65" />
              </g>
              <g transform="translate(56 201)">
                <path d="M0 -17L17 -7L0 3L-17 -7Z" fill="#E4C6FF" stroke="#F9EEFF" strokeWidth="1" />
                <path d="M-17 -7L0 3V23L-17 13Z" fill="#AB5CEE" />
                <path d="M0 3L17 -7V13L0 23Z" fill="#7F2ACD" />
              </g>
            </>
          )}

          {index === 2 && (
            <>
              <g transform="rotate(-7 91 95)">
                <rect x="29" y="49" width="134" height="84" rx="16" fill={paint('glass')} stroke={paint('rim')} strokeWidth="1.8" />
                <rect x="47" y="66" width="64" height="7" rx="3.5" fill={paint('bar')} />
                <rect x="47" y="81" width="97" height="7" rx="3.5" fill={paint('bar')} opacity=".75" />
                <rect x="47" y="96" width="80" height="7" rx="3.5" fill={paint('bar')} opacity=".55" />
              </g>
              <g className="offer-artwork-detail">
                <g transform="rotate(4 117 181)">
                  <rect x="32" y="139" width="169" height="82" rx="16" fill={paint('glass')} stroke="white" strokeWidth="1.8" />
                  <path d="M53 194C74 194 78 168 98 175S133 211 169 159" stroke="#D9B1F2" strokeWidth="7" strokeLinecap="round" />
                  <path d="M53 192C74 192 78 166 98 173S133 209 169 157" stroke={paint('purple')} strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M158 158L174 151L171 168Z" fill={paint('purple')} stroke="#F3D9FF" strokeWidth="1" strokeLinejoin="round" />
                  <circle cx="53" cy="192" r="5" fill={paint('sphere')} />
                </g>
              </g>
            </>
          )}
          <circle cx="33" cy="181" r="7" fill={paint('pearl')} />
        </g>
      </svg>
    </div>
  );
}
