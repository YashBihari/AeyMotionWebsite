import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

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
      style={{
        background: 'radial-gradient(ellipse at 18% 22%, #eee8f6 0%, transparent 56%), radial-gradient(ellipse at 86% 74%, #f3e9f6 0%, transparent 52%), linear-gradient(180deg, #fcfbfe, #fbf8ff)',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  );
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#F8F6FB] px-6 pb-24 pt-28 text-center sm:px-10"
    >
      <HeroBackdrop />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#DDD6E5] bg-white/75 px-3.5 py-2 text-xs font-medium text-[#17151B] shadow-xs">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-[#00BD8B] shadow-[0_0_6px_1px_rgba(0,189,139,0.36)]" />
          Available for work
        </p>
        <h1 id="hero-title" className="mt-5 max-w-5xl text-balance text-[clamp(2.125rem,4.3vw,4rem)] aey-heading text-[#17151B]">
          Creative video partner for tech brands
        </h1>
        <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-[#514B58] sm:text-base">
          We create launch videos and explainers that make complex products easy to understand and give people a reason to care.
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
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DDD6E5] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#322A3A] transition-colors hover:border-[#A98BD5] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C4BFF]"
          >
            See our work
          </a>
        </div>
        <p className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#5E5668]">
          <span>Worked with:</span>
          <span className="font-semibold">Seorce</span>
          <span className="font-semibold">Essenite</span>
          <span className="font-semibold">Melaya</span>
        </p>
      </div>
      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="absolute bottom-5 left-1/2 z-10 flex size-11 -translate-x-1/2 items-center justify-center rounded-full text-[#766584] transition-colors hover:bg-white/80 hover:text-[#43266B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4BFF]"
      >
        <ChevronDown className="size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
