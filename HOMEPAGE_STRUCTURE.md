# Aeymotion Homepage — Wireframe & Copy Structure Specification
**Visual Archetype:** *Dark Editorial SaaS Motion Studio with Timeline-Inspired Background Mechanics*

This document defines the complete content wireframe, layout direction, copy, and specific visual treatments for each of the nine primary sections of the Aeymotion homepage. It implements the aesthetic principles established in `DESIGN_SYSTEM.md`.

---

## Navigation & Page Header (Global System)
*   **Aesthetic Treatment:** Floating ultra-thin frosted dark header with fine grid dividers.
*   **Technical Details:** Bounded by `border-white/[0.08]` with a dynamic backdrop blur (`backdrop-blur-md`).
*   **Structure:**
    *   **Left Segment:** Aeymotion Wordmark (Inter Black, uppercase) + active status dot (`#8B5CF6`, pulse animation).
    *   **Center Segment:** Technical Section Index matching the Chapters: `01 SELECTED CASES` // `02 SERVICES` // `03 PRICING` // `04 BRIEF`.
    *   **Right Segment:** Primary CTA Button: `START PROJECT` (rounded-xl, high-contrast white).

---

## Section 01 // Hero Stage
*   **Section Label:** `INTRO // DIRECT FROM CREATIVE LAB`
*   **Layout Direction:** Balanced, high-density editorial grid. Two asymmetrical columns.
*   **Headline:** "Motion systems for products that need to be understood **fast.**"
*   **Supporting Copy:** "Aeymotion helps SaaS, AI, and product-led brands turn complex dev architectures and user flows into premium, high-converting product motion assets."
*   **Primary CTA Copy:** "Start a project" (High-contrast solid White button).
*   **Secondary CTA Copy:** "View work" (Transparent button with fine outline).
*   **Motion-Production Background Elements:**
    *   **Bezier Curve Paths:** Semi-transparent vector lines sweeping behind the text, with adjustable keyframe handle nodes highlighted in `#8B5CF6`.
    *   **Frame Grids:** A subtle `rgba(255, 255, 255, 0.02)` background grid system representing a 4rem x 4rem layout canvas.
*   **Color & Panel Scheme:** Outer wrapper is `#050507` (void black). Below the folds sits the **Showreel Panel**, a giant modular frame styled with `#1A102B` (Deep Violet) displaying the cinematic looped showreel thumbnail inside an inner `#050507` container.

---

## Section 02 // Chapter Navigation & Section Index
*   **Section Label:** `CHAPTER NAVIGATION // SECTION INDEX`
*   **Layout Direction:** 4-column horizontal horizontal rail mimicking a multi-track editor workspace.
*   **Headline:** "SYSTEM METRICS"
*   **Key Content Blocks:**
    1.  **Track 01:** `01 // Selected Cases` — Interactive timeline track mapping client success stories.
    2.  **Track 02:** `02 // Specialized Units` — Core video categories and production divisions.
    3.  **Track 03:** `03 // Curated Offers` — Fixed-scope design sprints and support agreements.
    4.  **Track 04:** `04 // Inquiry Brief` — Dynamic cost planner and intake portal.
*   **Notes for Visual Treatment:** Rendered with thin vertical divider rails (`border-white/[0.08]`) and monospaced frame-counters (`00:00:15:00`, `00:00:30:00`). Hovering over a track lights up a subtle horizontal progress line across the cell.
*   **Color Scheme:** Deep, low-saturation Graphite (`#15151C`) base panel running full-width.

---

## Section 03 // Selected Work (Featured Cases)
*   **Section Label:** `CHAPTER 01 // SELECTED CASES`
*   **Layout Direction:** Alternating, edge-to-edge full-bleed bands. Alternates visual-column left, copy-column right (and vice-versa) across sections. Fully responsive.
*   **Featured Cases & Headlines:**
    *   **Case 01: HALEUM AI** — "Kinetic interface storytelling for multi-agent frameworks."
    *   **Case 02: HOSTINGER** — "Premium motion systems for website builders."
    *   **Case 03: VECTOR** — "Translating sophisticated fintech concepts to smooth graphics."
    *   **Case 04: INSTAGRAM UX** — "Organic choreography and responsive UI loading states."
    *   **Case 05: SENA AI** — "Pristine dark-mode visualization for complex AI frameworks."
*   **Key Content Blocks:** 
    *   *Visual Media Block:* Embedded, high-fidelity looped HTML5 mp4 previews with micro-scale interactive triggers.
    *   *System Specifications:* Dedicated tags listing technical delivery specs (e.g. `Product Film`, `AI System Animation`, `3D Vector Choreography`).
*   **CTA Copy:** "Play Feature Film" (Integrated circular play button over media, scaling on hover with spring physics).
*   **Notes for Visual Treatment:** Standard page side margins are completely omitted. Each work item is its own full-bleed strip running horizontally to the edges of the browser, bounded by ultra-thin dark dividers.
*   **Background Panel Colors:** 
    *   Haleum AI: `#1A102B` (Deep Violet)
    *   Hostinger: `#0D1B2E` (Deep Navy)
    *   Vector: `#0D211B` (Deep Green)
    *   Instagram UX: `#24180F` (Warm Dark Brown)
    *   Sena AI: `#1C1033` (Dark Purple)

---

## Section 04 // Services (Specialized Units)
*   **Section Label:** `CHAPTER 02 // SERVICES`
*   **Layout Direction:** Sticky 2-column sidebar grid. Left side sticky header, right side 2x2 grid.
*   **Headline:** "SPECIALIZED MOTION UNITS."
*   **Supporting Copy:** "We act as modular production systems for SaaS and AI. Each unit is engineered specifically to translate raw technical architectures into high-end cinematic assets that convert."
*   **Key Content Blocks:**
    1.  **Launch Videos:** "A high-impact premium film designed to tell your brand story and capture attention on product launches."
    2.  **Product Demos:** "High-fidelity interactive visual walkthroughs illustrating complex cloud networks or SaaS product structures."
    3.  **Feature Motion Packs:** "Repeatable micro-animation systems that assist your product team in demonstrating new features and updates."
    4.  **Social Motion Assets:** "Visually cohesive, snackable motion assets optimized for LinkedIn campaigns and high-converting paid social ads."
*   **Notes for Visual Treatment:** 
    *   **Keyframe Dots:** Tiny vector dots plotted in the background of each card, connected by faint dotted lines to represent motion keyframes.
    *   **Timeline Strips:** A small representation of a 4-channel timeline block positioned at the bottom of each card, highlighting its active layer.
*   **Panel Colors:** Rounded `rounded-2xl` blocks styled in individual category colors (Launch: `#1A102B`, Demos: `#0D1B2E`, Feature Packs: `#0D211B`, Social Assets: `#24180F`).

---

## Section 05 // Interactive Pricing & Offers Module
*   **Section Label:** `CHAPTER 03 // CURATED OFFERS`
*   **Layout Direction:** Tab-switching specifications split. Left column offers a compact, horizontal click-selector showing the four tiers. Right column is a rich, responsive split panel showcasing detailed specs, deliverables, and pricing calculators.
*   **Headline:** "PRICING & SPRINT PACKS"
*   **Supporting Copy:** "Transparent pricing models designed to scale your visual marketing pipelines. Stop gambling on freelancers; unlock productized certainty."
*   **Key Content Blocks:**
    *   **Launch Sprint (starts at $12,500):** Focuses on premium brand films and launch animations.
    *   **Feature Pack Sprints (starts at $6,000):** High-volume micro-animations for recurring feature launches.
    *   **GTM Core Package (starts at $18,000):** Comprehensive GTM launch packages containing a master video and multi-format social exports.
    *   **Monthly Motion Support (starts at $9,500):** Dedicated recurring design capacity for ongoing product updates.
*   **Notes for Visual Treatment:**
    *   **UI Wireframe Overlays:** Backdrops of cards feature clean, high-contrast UI skeleton wireframes mimicking a render preview or video editor workspace.
    *   **Interactive Pricing Calculator:** Live calculation fields that update price ranges based on user inputs for Aspect Ratios, Narrative/Voice Hooks, and Delivery Speeds.
*   **Background Colors:** Interactive panels utilize alternating colors (`#17111F`, `#0B1A2A`, `#1C1033`, `#0E201A`) bounded by clean, modern borders.

---

## Section 06 // Operational Process (Workflow)
*   **Section Label:** `CHAPTER 04 // OPERATIONAL WORKFLOW`
*   **Layout Direction:** Horizontal progress layout. 3x2 grid with asymmetric block cards representing production stages.
*   **Headline:** "A precise, cinematic motion timeline."
*   **Supporting Copy:** "How we translate your complex product interfaces into highly polished, conversion-oriented stories."
*   **Key Content Blocks:**
    *   `PHASE // 01` — **Scripting & Narrative:** "Aligning your product's value proposition into a tight, conversion-focused voice narrative."
    *   `PHASE // 02` — **Storyboarding:** "Mapping out the visual choreography frame-by-frame, establishing clear motion logic."
    *   `PHASE // 03` — **Bespoke Design:** "Crafting the premium, bespoke art direction. You see exactly how the final pixels will look."
    *   `PHASE // 04` — **Motion Direction:** "Choreographing vectors, interface frames, and 3D paths into perfectly paced motion structures."
    *   `PHASE // 05` — **Cinematic Sound:** "Mixing customized sound effects, atmospheric sub-bass, and professional voice overs."
    *   `PHASE // 06` — **Delivery & Asset Handoff:** "Exporting clean, custom web elements optimized for lightning-fast loads, landing pages, and decks."
*   **Notes for Visual Treatment:** Large translucent monospaced step counters (`01`, `02`, `03`) sit in the background of each card. Cards utilize distinct background colors connected conceptually with tiny timeline timeline track lines.

---

## Section 07 // Proof & Testimonials (Verified Impact)
*   **Section Label:** `PROOF // CLIENT EVALUATIONS`
*   **Layout Direction:** High-contrast testimonial grid. Features a massive central single-quote block paired with small, technical sidebar case cards.
*   **Headline:** "ENGINEERED FOR HIGH-CONVERTING TEAMS."
*   **Supporting Copy:** "Read objective feedback from leading software engineering, SaaS, and AI founders who scaled their marketing conversion with Aeymotion."
*   **Key Content Blocks:**
    *   *Master Quote:* "Aeymotion translated our highly complex deep API node architecture into an Apple-quality product video in less than 3 weeks. Conversion rose by 34% within the first month of launch." (AI Infrastructure Founder).
    *   *Client Badges:* Minimalist technical client logos and domain indicators (e.g., `haleum.ai`, `hostinger.com`, `vector.fi`) aligned in a low-saturation grid.
*   **Notes for Visual Treatment:** Heavy typography, utilizing the Inter Black display style for quotes. Borders are kept tight and neat.
*   **Color & Panel Scheme:** Styled with deep Graphite (`#15151C`) card layers with an outer background of `#050507`.

---

## Section 08 // FAQ Teaser
*   **Section Label:** `TECHNICAL INQUIRIES // FAQ`
*   **Layout Direction:** Clean, single-column accordion stack. Each row collapses and expands with a smooth easing motion.
*   **Headline:** "SYSTEM CAPABILITIES FAQ"
*   **Key Content Blocks:**
    *   *Question:* "What do you require from our development/product team?"
    *   *Answer:* "We only require a basic technical brief or product walkthrough. We handle scriptwriting, UI recreation, art direction, and sound design internally."
    *   *Question:* "Do we get the raw working project files?"
    *   *Answer:* "Yes, all source project files (After Effects, Figma assets, vector grids) are fully delivered upon project handoff."
    *   *Question:* "How are security and intellectual property handled?"
    *   *Answer:* "We sign binding non-disclosure agreements (NDAs) prior to any briefing call. All product assets are kept on isolated, secure cloud networks."
*   **Notes for Visual Treatment:** Expand and collapse states are animated using motion layout springs. An active FAQ item lights up its borders with `#8B5CF6`.

---

## Section 09 // Final CTA Stage
*   **Section Label:** `TERMINAL // REQUEST PROPOSAL`
*   **Layout Direction:** Large, high-impact centered card bounded by generous negative space.
*   **Headline:** "Ready to make your product **unignorable?**"
*   **Supporting Copy:** "We take on a limited number of projects per month to ensure high-fidelity, premium custom motion design. Secure your slot with Aeymotion today."
*   **Primary CTA Copy:** "Request a Proposal" (Centering an icon indicator).
*   **Notes for Visual Treatment:** 
    *   **Render Preview Panels:** Centered card has a subtle visual background resembling a render-queue screen with a loading progression indicator.
    *   **Colors:** Deep Indigo/Violet gradients bleeding into Warm Peach accents (`#F59E7B`) from the corners. The outer frame is bordered by a clean `#15151C` divider.
