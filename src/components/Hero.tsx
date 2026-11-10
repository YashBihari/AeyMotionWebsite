import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

const clientLogos = [
  {
    "name": "Seorce",
    "src": "/Assets/seorce-logo-bw.png",
    "width": 587,
    "height": 140
  },
  {
    "name": "Essenite",
    "src": "/Assets/essenite-logo-bw.png",
    "width": 772,
    "height": 145
  },
  {
    "name": "Melaya",
    "src": "/Assets/melaya-logo-bw.png",
    "width": 551,
    "height": 133
  }
];

const TILE_SIZE = 15;
const REVEAL_RADIUS = 96;
const HOLD_MS = 95;
const FADE_MS = 330;

type RevealTile = {
  column: number;
  row: number;
  openedAt: number;
  touchedAt: number;
  strength: number;
};

function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest('section');
    const context = canvas?.getContext('2d');
    if (!canvas || !hero || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tiles = new Map<string, RevealTile>();
    let width = 0;
    let height = 0;
    let gradient: CanvasGradient | undefined;
    let frame = 0;
    let previous: { x: number; y: number; time: number } | undefined;

    const clear = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      previous = undefined;
      tiles.clear();
      context.clearRect(0, 0, width, height);
    };

    const resize = () => {
      clear();
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.ceil(width * ratio);
      canvas.height = Math.ceil(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      // Match the supplied logo's colors without putting the wordmark in the effect.
      gradient = context.createLinearGradient(0, 0, width * .83, height);
      gradient.addColorStop(0, '#FFD5A0');
      gradient.addColorStop(.23, '#F5A459');
      gradient.addColorStop(.48, '#D68A98');
      gradient.addColorStop(.73, '#A35DCD');
      gradient.addColorStop(1, '#7027F1');
    };

    const draw = (now: number) => {
      frame = 0;
      context.clearRect(0, 0, width, height);
      if (!gradient) return;
      context.fillStyle = gradient;
      for (const [key, tile] of tiles) {
        const fade = Math.min(1, Math.max(0, (now - tile.touchedAt - HOLD_MS) / FADE_MS));
        if (fade === 1) {
          tiles.delete(key);
          continue;
        }
        const open = Math.min(1, Math.max(0, (now - tile.openedAt) / 65));
        const size = (TILE_SIZE - 1) * (.42 + .58 * open) * (1 - .22 * fade);
        const inset = (TILE_SIZE - size) / 2;
        context.globalAlpha = tile.strength * (.4 + .6 * open) * (1 - fade) ** 1.6;
        context.fillRect(tile.column * TILE_SIZE + inset, tile.row * TILE_SIZE + inset, size, size);
      }
      context.globalAlpha = 1;
      if (tiles.size) frame = requestAnimationFrame(draw);
    };

    const stamp = (x: number, y: number, time: number) => {
      for (let row = Math.max(0, Math.floor((y - REVEAL_RADIUS) / TILE_SIZE)); row < Math.min(Math.ceil(height / TILE_SIZE), (y + REVEAL_RADIUS) / TILE_SIZE); row++) {
        for (let column = Math.max(0, Math.floor((x - REVEAL_RADIUS) / TILE_SIZE)); column < Math.min(Math.ceil(width / TILE_SIZE), (x + REVEAL_RADIUS) / TILE_SIZE); column++) {
          const distance = Math.hypot((column + .5) * TILE_SIZE - x, (row + .5) * TILE_SIZE - y);
          const edge = REVEAL_RADIUS - ((column * 31 + row * 17) % 23);
          if (distance >= edge) continue;
          const key = `${column}:${row}`;
          const tile = tiles.get(key);
          const strength = .23 + .53 * (1 - distance / edge);
          tiles.set(key, { column, row, openedAt: tile?.openedAt ?? time, touchedAt: time, strength });
        }
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || reducedMotion.matches || !gradient) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const time = performance.now();
      if (previous && time - previous.time < 100) {
        const steps = Math.min(12, Math.ceil(Math.hypot(x - previous.x, y - previous.y) / TILE_SIZE));
        for (let step = 1; step < steps; step++) {
          const progress = step / steps;
          stamp(previous.x + (x - previous.x) * progress, previous.y + (y - previous.y) * progress, time);
        }
      }
      stamp(x, y, time);
      previous = { x, y, time };
      if (!frame && tiles.size) frame = requestAnimationFrame(draw);
    };

    const leave = () => { previous = undefined; };
    const observer = new ResizeObserver(resize);
    resize();
    observer.observe(canvas);
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', leave);
    reducedMotion.addEventListener('change', clear);
    return () => {
      observer.disconnect();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
      reducedMotion.removeEventListener('change', clear);
      clear();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  );
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <>
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col items-center gap-10 overflow-hidden bg-page-surface px-6 pb-8 pt-24 text-center sm:gap-14 sm:px-10"
    >
      <HeroBackdrop />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pb-8 sm:pb-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#DDD6E5] bg-white/75 px-3.5 py-2 text-xs font-medium text-neutral-900 shadow-xs">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-[#00BD8B] shadow-[0_0_6px_1px_rgba(0,189,139,0.36)]" />
          Available for work
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-5xl text-balance text-[clamp(1.625rem,4.8vw,3.75rem)] aey-heading text-neutral-900"
        >
          <span className="block">Creative video partner</span>
          <span className="block">for tech brands ready to</span>
          <span className="block">launch and scale</span>
        </h1>
        <p className="mt-5 max-w-lg text-pretty font-['Inter',Arial,sans-serif] text-[clamp(.75rem,3.3vw,.875rem)] leading-relaxed text-neutral-600 sm:text-base">
          <span className="block">We create launch videos and explainers</span>
          <span className="block">that make complex products easy to understand</span>
          <span className="block">and give people a reason to care.</span>
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onBookCall}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#27232D] bg-[#17151B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#43266B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            Book a call <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
          <a
            href="#work"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DDD6E5] bg-white/70 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-[#A98BD5] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            See our work
          </a>
        </div>
      </div>
      <p id="trusted-brands" className="relative z-10 text-sm font-semibold text-neutral-900 sm:text-base">
        Trusted by scaling brands
      </p>
    </section>
    <section aria-labelledby="trusted-brands" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative after:pointer-events-none after:absolute after:-inset-x-[100vw] after:-bottom-px after:h-px after:bg-[#C4BACB] before:pointer-events-none before:absolute before:-inset-x-[100vw] before:-top-px before:h-px before:bg-[#C4BACB] grid grid-cols-3 border-y border-l border-[#C4BACB]">
          {clientLogos.map(({ name, src, width, height }) => (
            <div key={name} className="flex h-[192px] min-w-0 items-center justify-center border-r border-[#C4BACB] px-3 sm:h-[228px] sm:px-6">
              <img src={src} alt={name} width={width} height={height} className="h-6 w-auto max-w-full object-contain invert-[.40] sm:h-9" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
