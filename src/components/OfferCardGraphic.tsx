import { useId } from 'react';

/** Quiet, edge-to-edge diagrams drawn directly into the offer surfaces. */
export default function OfferCardGraphic({ index }: { index: number }) {
  const id = useId().replace(/:/g, '');
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <div className="offer-card-graphic" aria-hidden="true">
      <svg viewBox="0 0 260 240" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${id}-ink`} x1="45" y1="60" x2="210" y2="185" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BC8BF0" /><stop offset="1" stopColor="#8951C5" />
          </linearGradient>
          <linearGradient id={`${id}-wash`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="white" stopOpacity=".8" /><stop offset="1" stopColor="#E5D3F6" stopOpacity=".4" />
          </linearGradient>
          <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="white" stopOpacity="0" /><stop offset=".18" stopColor="white" />
            <stop offset=".8" stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id={`${id}-edge`}>
            <rect width="260" height="240" fill={paint('fade')} />
          </mask>
          <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r=".7" fill="#B895D8" fillOpacity=".25" />
          </pattern>
        </defs>
        <g mask={paint('edge')}>
          <rect width="260" height="240" fill={paint('grid')} />

          {index === 0 && (
            <>
              <path d="M-20 86H66Q80 86 80 100V145Q80 159 94 159H280M-20 183H43Q57 183 57 169V72Q57 58 71 58H280"
                stroke="#CBB5E2" strokeOpacity=".45" strokeWidth="1" />
              <rect x="66" y="78" width="130" height="94" rx="16" fill={paint('wash')} />
              <path d="M66 98V86Q66 78 74 78H86M176 78H188Q196 78 196 86V98M196 152V164Q196 172 188 172H176M86 172H74Q66 172 66 164V152"
                stroke={paint('ink')} strokeWidth="1.5" strokeLinecap="round" />
              <rect x="88" y="99" width="59" height="4" rx="2" fill="#C5ADDD" fillOpacity=".65" />
              <rect x="88" y="110" width="83" height="4" rx="2" fill="#DAC8EB" />
              <rect className="offer-card-accent" x="88" y="130" width="67" height="22" rx="7" fill={paint('ink')} />
              <path d="M101 141H141M137 137L141 141L137 145" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M165 151L171 172L176 164L185 161Z" fill="#FAF6FF" stroke="#A57BCB" strokeWidth="1.3" strokeLinejoin="round" />
              <circle cx="57" cy="58" r="3" fill="#F9F3FF" stroke="#C1A4DB" />
              <circle cx="196" cy="159" r="3" fill="#F9F3FF" stroke="#C1A4DB" />
            </>
          )}

          {index === 1 && (
            <>
              <circle cx="130" cy="122" r="101" stroke="#DCCBEE" strokeOpacity=".4" />
              <circle cx="130" cy="122" r="77" stroke="#D4BCE9" strokeOpacity=".55" />
              <circle cx="130" cy="122" r="53" fill={paint('wash')} stroke="#C7A8E0" strokeOpacity=".7" />
              <path d="M130 21A101 101 0 0 1 231 122M53 122A77 77 0 0 1 130 45"
                stroke={paint('ink')} strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round" />
              <path className="offer-card-accent" d="M119 105Q115 102 115 108V138Q115 144 120 141L145 126Q151 122 145 118Z"
                fill={paint('ink')} />
              <circle cx="130" cy="45" r="3" fill="#B88BDC" stroke="#FBF6FF" />
              <circle cx="231" cy="122" r="3" fill="#B88BDC" stroke="#FBF6FF" />
              <path d="M23 200H88M98 200H153M163 200H238" stroke="#D7C2E8" strokeWidth="3" strokeLinecap="round" />
              <path d="M23 200H61" stroke="#B58BD7" strokeWidth="3" strokeLinecap="round" />
              <path d="M61 194V206" stroke="#9D70C6" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}

          {index === 2 && (
            <>
              <path d="M-20 176H66Q80 176 80 162V136Q80 122 94 122H150Q164 122 164 108V83Q164 69 178 69H280"
                stroke="#D7C2E8" strokeWidth="1.5" />
              <path d="M-20 200H48Q56 200 56 192V80M206 36V152Q206 160 214 160H280"
                stroke="#E1D1EE" strokeWidth="1" />
              <rect x="32" y="152" width="48" height="48" rx="12" fill={paint('wash')} stroke="#D6BFE7" />
              <path d="M44 166H65M44 174H59M44 182H63" stroke="#BA98D7" strokeWidth="2" strokeLinecap="round" />
              <rect className="offer-card-accent" x="105" y="98" width="48" height="48" rx="12" fill={paint('ink')} />
              <path d="M119 112H139M119 120H133M119 128H137" stroke="white" strokeOpacity=".85" strokeWidth="2" strokeLinecap="round" />
              <rect x="182" y="45" width="48" height="48" rx="12" fill={paint('wash')} stroke="#D6BFE7" />
              <path d="M196 69L203 76L216 62" stroke="#AA7FCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="80" cy="136" r="3" fill="#F8F1FE" stroke="#C2A1DA" />
              <circle cx="164" cy="83" r="3" fill="#F8F1FE" stroke="#C2A1DA" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
