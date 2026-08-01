# Aeymotion Studio — "Motion Timeline DNA" Visual System
**Concept:** *A cohesive background language blending video-editing timelines, keyframe interpolation, and biological-inspired flow.*

---

## 1. Concept Explanation: "Motion Timeline DNA"
The **Motion Timeline DNA** is Aeymotion’s signature background motif. Instead of generic abstract shapes or camera-roll rolls, we construct an elegant, structured system of visual assets mimicking video editing tools:
*   **The Timeline Track (The Helix):** A series of horizontal, parallel, semi-transparent track lanes (`border-white/[0.04]`) that curve or ripple diagonally down the background, creating a structured flow.
*   **Keyframe Nodes (The Base Pairs):** Interactive diamond-shaped points (`◆` / rotated `div` or SVG elements) placed at critical intersections of the tracks. These represent keyframes in animation.
*   **Bezier Curve Paths (The Splines):** Curved vectors connecting these nodes. They mimic After Effects easing graph curves, transitioning with high-fidelity smoothness.
*   **Time-Stamp Frames:** Small monospaced frame-counters (`00:00:12:15`) printed in muted lettering near keyframe intersections, providing an authentic technical aesthetic.

This is a **kinetic timeline framework**. It tells the user: *We construct motion with pixel-level mathematical precision.*

---

## 2. Gradient Recipes in CSS
We define four core gradient profiles using the Aeymotion color space to build high-end depth.

```css
:root {
  /* Core Brand Pigments */
  --void-black: #050507;
  --soft-black: #0B0B0F;
  --graphite: #15151C;
  --deep-violet: #1A102B;
  --royal-purple: #4C1D95;
  --primary-violet: #8B5CF6;
  --electric-purple: #A855F7;
  --saas-blue: #38BDF8;
  --warm-peach: #F59E7B;
}

/* 1. Hero Ambient Backdrop Glow (Epic Depth) */
.gradient-hero-ambient {
  background: radial-gradient(
    circle at 50% -20%,
    rgba(139, 92, 246, 0.15) 0%,
    rgba(76, 29, 149, 0.05) 45%,
    rgba(5, 5, 7, 0) 80%
  );
}

/* 2. Soft Technical Panel Backing */
.gradient-panel-spec {
  background: linear-gradient(
    135deg,
    rgba(21, 21, 28, 0.7) 0%,
    rgba(11, 11, 15, 0.9) 100%
  );
}

/* 3. The Cinematic CTA Glow (High Contrast Action) */
.gradient-cta-trigger {
  background: linear-gradient(
    135deg,
    var(--primary-violet) 0%,
    var(--electric-purple) 50%,
    var(--warm-peach) 100%
  );
}

/* 4. Modular Interactive Offer Cards */
.gradient-offer-launch {
  background: linear-gradient(135deg, #17111F 0%, #050507 100%);
}
.gradient-offer-feature {
  background: linear-gradient(135deg, #0B1A2A 0%, #050507 100%);
}
.gradient-offer-gtm {
  background: linear-gradient(135deg, #1C1033 0%, #050507 100%);
}
.gradient-offer-monthly {
  background: linear-gradient(135deg, #0E201A 0%, #050507 100%);
}
```

---

## 3. Semantic Mapping: Where to Deploy
*   **Hero Section:** Ambient backdrop glow overlaid with standard grid patterns and a prominent central Bezier-path vector.
*   **Chapter Sections:** The background alternates with highly saturated horizontal bands using our *Modular Color Divisions*.
*   **Pricing Module:** Offer cards utilize distinct linear gradients depending on tier, bounded by fine `border-white/[0.08]`.
*   **CTA Final Module:** Rich glowing gradient applied directly to the card interior, utilizing the cinematic warm-peach endpoint to drive conversions.

---

## 4. How to Build the "Motion Timeline DNA" in Key Sections

### A. The Hero Background Layout (HTML + SVG)
We overlay a custom vector track representing the easing curve behind the display headline.

```html
<div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
  <!-- 1. The Global 4rem Grid -->
  <div class="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
  
  <!-- 2. The Ambient Deep Glow -->
  <div class="absolute inset-0 gradient-hero-ambient"></div>
  
  <!-- 3. The Bezier Spline Path Overlay -->
  <svg class="absolute w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
    <!-- Motion Axis Line -->
    <line x1="10%" y1="60%" x2="90%" y2="60%" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="4 4" />
    
    <!-- Motion Bezier Spline -->
    <path d="M 100,500 C 300,500 400,200 800,200 S 1100,600 1400,400" 
          fill="none" 
          stroke="url(#saas-motion-grad)" 
          stroke-width="1.5" />
          
    <!-- Handle Controls / Tangents -->
    <circle cx="300" cy="500" r="3" fill="#8B5CF6" />
    <line x1="300" y1="500" x2="350" y2="420" stroke="#8B5CF6" stroke-width="1" />
    <circle cx="350" cy="420" r="4" fill="#F59E7B" />
    
    <!-- Gradients Definition -->
    <defs>
      <linearGradient id="saas-motion-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8B5CF6" />
        <stop offset="50%" stop-color="#38BDF8" />
        <stop offset="100%" stop-color="#F59E7B" />
      </linearGradient>
    </defs>
  </svg>
</div>
```

### B. Interactive Offer Cards & Timelines (Pricing Module)
Underlying the pricing options, we position a visual representation of After Effects timeline tracks:

```html
<div class="relative p-8 rounded-2xl border border-white/[0.08] gradient-panel-spec overflow-hidden group">
  <!-- Aesthetic Timeline Channels (Absolute bottom) -->
  <div class="absolute bottom-4 left-6 right-6 h-6 flex flex-col gap-1 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity">
    <div class="h-1 bg-white/20 w-full rounded-full relative">
      <div class="absolute left-[30%] top-[-2px] w-2 h-2 bg-[#8B5CF6] rotate-45"></div> <!-- Active Keyframe -->
    </div>
    <div class="h-1 bg-white/10 w-2/3 rounded-full"></div>
    <div class="h-1 bg-white/10 w-4/5 rounded-full relative">
      <div class="absolute left-[65%] top-[-2px] w-2 h-2 bg-[#F59E7B] rotate-45"></div> <!-- Secondary Keyframe -->
    </div>
  </div>
  
  <!-- Actual content cards layered cleanly on top -->
  <div class="relative z-10">
    <span class="font-mono text-[9px] text-[#8B5CF6] tracking-widest">CHAPTER 03 // 01</span>
    <h3 class="text-xl font-black text-white mt-1 uppercase">Launch Sprint</h3>
  </div>
</div>
```

---

## 5. Masking, Blur, & Density Guidelines
To preserve content legibility:
1.  **Mask Image (Fadeout):** Ensure grids and splines do not stretch with equal intensity down the entire page. Use radial CSS masking:
    ```css
    mask-image: radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%);
    ```
2.  **Backdrop Blurs:** Panels overlapping ambient flares must deploy `backdrop-blur-xl` or `backdrop-blur-md` to smooth out transitions.
3.  **Low Contrast Base:** Base grids must run at very low opacities (`opacity-[0.02]` or `opacity-[0.03]`). If they are too bright, they compete with primary readable copy.

---

## 6. Micro-Animation Guidelines
The "Motion Timeline DNA" is dynamic. Apply these lightweight CSS and Framer Motion behaviors to make elements react cleanly:

1.  **Keyframe Glow Pulse:** Keyframe diamond nodes should glow/pulse subtly:
    ```css
    @keyframes keyframe-pulse {
      0%, 100% { transform: scale(1) rotate(45deg); opacity: 0.8; }
      50% { transform: scale(1.15) rotate(45deg); opacity: 1; box-shadow: 0 0 8px rgba(139, 92, 246, 0.6); }
    }
    ```
2.  **Slow Line Flow:** Draw dashed track paths and translate them horizontally to simulate running video frame structures:
    ```css
    @keyframes line-flow {
      to { stroke-dashoffset: -20; }
    }
    .track-flow-line {
      stroke-dasharray: 5 5;
      animation: line-flow 12s linear infinite;
    }
    ```

---

## 7. Crucial Guardrails: What to Avoid
*   **No Random Floating Circles:** Do not throw arbitrary blurry circles around without structural placement. Ambient glows must sit exactly under headers, behind key video models, or inside conversion boxes.
*   **No Cyberpunk Noise:** Avoid heavy glowing matrix cascades or high-tech HUD diagrams. The Aeymotion design is *editorial*—clean like a premium, dense architecture report, but accented by pristine motion design curves.
*   **No Obtrusive Contrast:** Do not make background timeline lines too dark or saturated. If lines stand out more than body text, increase transparency instantly.

---

## 8. Tailwind CSS Configuration Guide
Integrate these custom utilities in your global `src/index.css` or `tailwind.config.js`:

```css
@theme {
  --background-image-grid-pattern: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
}

.bg-grid-pattern {
  background-image: var(--background-image-grid-pattern);
  background-size: 3rem 3rem;
}
```
This guarantees any React component can easily call `className="bg-grid-pattern"` to mount the background framework immediately.
