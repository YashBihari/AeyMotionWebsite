# Aeymotion Studio — Visual Design System & Frontend Strategy
**Theme:** *Dark Editorial SaaS Motion Studio with Kinetic Timelines & Structural Color Divisions*

This document serves as the absolute source of truth for the Aeymotion visual identity. It bridges high-end editorial design (inspired by *stateofaidesign.com*) with premium motion-production mechanics (inspired by *astra-motion.com*), crafted specifically for developer-first tools, SaaS, and AI brands.

---

## 1. Visual Direction Summary
Aeymotion’s aesthetic sits at the intersection of **technical precision** and **cinematic luxury**. It rejects standard generic SaaS landing page templates (which look "Apple-soft" or over-rounded) in favor of a **structured, high-contrast grid-and-panel system**. 

- **The Feeling:** Premium, technical, cinematic, organized, and deeply aligned with enterprise engineering teams.
- **The Mechanic:** Content is structured inside modular panels utilizing dark, rich, localized color blocks (e.g., Deep Violet, Deep Navy, Deep Green, Warm Brown) to differentiate divisions of the page, rather than utilizing boring monolithic backgrounds or flashy rainbows.

---

## 2. Color Palette & Semantic Mapping
The color scheme leverages a pure-dark canvas styled with luxurious, low-saturation backgrounds and highly intentional tech-accent highlights.

| Token | HEX | Tailwind/CSS Usage | Semantic Context |
| :--- | :--- | :--- | :--- |
| **Main Background** | `#050507` | `bg-[#050507]` | Outer page wrap, high-density void spacer |
| **Soft Black** | `#0B0B0F` | `bg-[#0B0B0F]` | Primary interface cards, text inputs, form containers |
| **Graphite** | `#15151C` | `bg-[#15151C]` | Secondary panels, global alert containers, footers |
| **Deep Violet** | `#1A102B` | `bg-[#1A102B]` | Main Hero video panel, Chapter 01 (Product Film) |
| **Dark Purple** | `#1C1033` | `bg-[#1C1033]` | Chapter 02 (AI Systems), Sena AI Case study panel |
| **Royal Purple** | `#4C1D95` | `bg-[#4C1D95]` | Radial glow highlights, subtle interactive hover-borders |
| **Primary Violet** | `#8B5CF6` | `text-[#8B5CF6]` | Key technical markers, inline accent typography, dots |
| **Electric Purple**| `#A855F7` | `text-[#A855F7]` | Secondary highlights, gradient mid-points |
| **SaaS Blue** | `#38BDF8` | `text-sky-400` | Code parameters, developer nodes, vector axis labels |
| **Deep Navy** | `#0D1B2E` | `bg-[#0D1B2E]` | Chapter 03 (SaaS Walkthroughs), Hostinger Case study panel |
| **Deep Green** | `#0D211B` | `bg-[#0D211B]` | Chapter 04 (Fintech Logic), Vector Case study panel |
| **Warm Dark Brown**| `#24180F` | `bg-[#24180F]` | Instagram Case, Sound & Audio Design systems |
| **Warm CTA Accent** | `#F59E7B` | `bg-[#F59E7B]` | Conversion triggers, highlight tags, pricing callouts |
| **Primary Text** | `#F4F4F5` | `text-[#F4F4F5]` | Display headers, primary readable strings, button text |
| **Secondary Text** | `#A1A1AA` | `text-[#A1A1AA]` | Body copies, descriptions, technical specification labels |
| **Muted Text** | `#71717A` | `text-[#71717A]` | Captions, non-essential status lines, inactive steps |
| **Border** | `rgba(...)` | `border-white/[0.08]` | Micro-line divider grids, container outlines |

---

## 3. Aeymotion Gradient System
Gradients must never look muddy or generic. Use multi-stop linear and radial formulas with high-density colors.

*   **Primary Kinetic Gradient:** 
    `bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F59E7B]`  
    *Usage:* Hero text accentuation, active pricing tier badges.
*   **Ambient Glow System:**  
    `bg-gradient-to-b from-[#8B5CF6]/5 to-transparent blur-[120px]`  
    *Usage:* Hero backdrop, section headers (absolute positioning only, pointer-events-none).
*   **The Contrast Divider:**  
    `bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent`  
    *Usage:* Micro-grid separators dividing modular segments.

---

## 4. Background Element System & Kinetic Timelines
To convey "motion-first", the background features subtle structural elements that mimic motion editor timelines, vector paths, and coordinate systems.

1.  **Editorial Grid Background:**  
    ```css
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 4rem 4rem;
    mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
    ```
2.  **Modular Full-Width Case Bands:**  
    Instead of isolated cards floating inside a wide grid, cases are designed as full-bleed horizontal color bands running directly to the left and right edges of the website:
    *   No side margins between sections on the container wrapper level.
    *   Alternating color backgrounds (`#1A102B`, `#0D1B2E`, `#0D211B`, `#24180F`, `#1C1033`).
3.  **Timeline Guides:**  
    Fine, high-contrast borders (`border-white/[0.08]`) that map the layout horizontally and vertically, simulating the structure of video editing software (After Effects/Premiere timelines).

---

## 5. Typography Direction
We pair modern display faces with technical monospaced types to reflect high production values.

*   **Display Font (Headings):** **Inter (sans-serif)** or **Space Grotesk** (applied uppercase, tracking-tight, black weight).
    ```css
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    ```
*   **Technical Label Font (Status/Meta):** **JetBrains Mono** or **Fira Code**.
    ```css
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    ```

---

## 6. Shape / Radius System
Our shapes are structured, bold, and modern. We reject bubbly circular roundedness on main cards.
*   **Hero Video Containers:** `rounded-2xl`
*   **Feature/Operational Cards:** `rounded-2xl`
*   **Interactive Input Fields & Buttons:** `rounded-xl`
*   **Highlight Badges:** `rounded-full` (for pure-functional tags only)

---

## 7. Border & Card Style
To maintain high contrast and depth:
*   **Cards:** Styled with a solid, colored background based on the division category (e.g., `#0D1B2E`), bounded by `border-white/[0.08]`.
*   **Card Hover State:** Keep transitions sharp. Smooth border changes to `border-white/20`, with a micro scale boost (`scale-[1.005]`) and active inner icon shifts.
*   **Decorative Bottom Bars:** Active states highlight cards with a `h-[3px] w-0 group-hover:w-full bg-white/20` transition.

---

## 8. Section Numbering & Editorial Headers
Aeymotion treats sections like editorial chapters. Every module must lead with a precise, monospaced tag:
*   **Chapters:** `CHAPTER 01 // SELECTED CASES` (placed in a 2px-wide Left accent-line frame colored with `#8B5CF6`).
*   **Subheadings:** `UNIT // 01` or `DIVISION // 01` tracking technical components of the pipeline.

---

## 9. Button & CTA Style
CTAs should feel mechanical and premium, triggering clear visual feedback.

*   **Primary CTA (Launch/Action):**  
    `px-6 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#8B5CF6] hover:text-white transition-all rounded-xl shadow-xl`
*   **Secondary CTA (Spec Explorer):**  
    `px-6 py-3.5 border border-white/[0.12] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-xl`

---

## 10. Animation & Motion Direction
All layout interactions utilize `motion` (imported from `motion/react`) configured with realistic physical curves:

*   **The Editorial Curve (Symmetric easing):**  
    `ease: [0.16, 1, 0.3, 1]` with a transition duration of `0.8s`.
*   **Micro-Interactive Springs:**  
    `type: "spring", stiffness: 350, damping: 25` (specifically for hover interactions on buttons and play frames).
*   **Staggered Entrance:**  
    Stagger child animations by `0.06s` - `0.1s` to give an editorial building feel as the page loads.

---

## 11. The Dos & Don'ts of Premium Dark Design

### Do:
*   **DO** use deep, saturated backgrounds (`#1A102B`, `#0D1B2E`, `#0D211B`, `#24180F`) inside panels to separate product divisions horizontally.
*   **DO** leave ample breathing space. Generous negative space is the fastest shortcut to looking premium.
*   **DO** use monospaced text elements for technical meta tags and labels.
*   **DO** implement beautiful, high-fidelity real video overlays using HTML5 or embedded Vimeo.

### Don't:
*   **DONT** use generic neon-cyan-blue-purple gradients on every card. That is typical "AI slop" and dilutes SaaS authority.
*   **DONT** pile status icons, telemetry codes, simulated container lines, or terminal console logs in the margins unless explicitly requested. Authentic enterprise customers want clean delivery, not cyber-roleplay.
*   **DONT** rounded-off container borders to full circular styles (`rounded-3xl` or `rounded-full` on main cards). Keep them crisp, balanced, and structurally professional.

---

## 12. Maintaining Restraint (No Tech-Larping)
To ensure the website stays professional and high-converting, all visual markers must be literal and meaningful. 
*   **Do not show simulated container health logs** or mock console traces.
*   **Name sections with humble, authentic language:** Use "Selected Cases", "Pricing & Sprint Packs", and "Inquiry Brief". 
*   **Avoid over-engineered names** like *"Chronos Engine"* or *"Omni-Matrix Core"*. Clean execution is the highest form of sophistication.
