export interface CaseStudyDetails {
  context: string;
  challenge: string;
  audience: string;
  communicationProblem: string;
  strategicDecision: string;
  execution: string;
  result: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  description: string;
  previewVideo: string;
  fullVideoEmbed: string;
  dribbbleUrl: string;
  serviceType: string;
  timecode: string;
  frameRate: string;
  isFeatured?: boolean;
  caseStudy?: CaseStudyDetails;
}

export const PROJECTS: Project[] = [
  {
    id: "haleum-ai",
    name: "Haleum AI",
    category: "Product Launch Film",
    tagline: "Translating multi-agent orchestration into an effortless product story.",
    description: "A launch concept introducing Haleum AI through a concise animated product story. [Independent Concept]",
    previewVideo: "/Assets/Haleum%20Ai%20web%20opt.mp4",
    fullVideoEmbed: "https://www.youtube-nocookie.com/embed/G0HteNQ_KGg?rel=0&autoplay=1",
    dribbbleUrl: "https://dribbble.com/shots/26735082-Haleum-AI-Launch-Explainer-Video",
    serviceType: "Launch Story System",
    timecode: "00:01:24:00",
    frameRate: "24 FPS",
    caseStudy: {
      context: "Haleum develops autonomous AI agent architecture for technical workflows and modern development teams.",
      challenge: "Explaining how multi-agent coordination works under the hood without overwhelming prospective customers with abstract architecture diagrams.",
      audience: "Technical founders, software engineering leaders, and AI workflow architects.",
      communicationProblem: "Autonomous multi-agent orchestration sounds theoretical unless grounded in concrete, visible problem-solving.",
      strategicDecision: "Framed the story around real business tasks: showing intent initiate background agents, communicate collaboratively, and output verifiable results.",
      execution: "Bespoke 3D node visuals combined with rhythmic software UI pacing and spatial sound design.",
      result: "Featured launch film deployed on product launch day, anchoring founder social channels and investor presentations."
    }
  },
  {
    id: "yc-safe",
    name: "YC SAFE",
    category: "Product Storytelling",
    tagline: "Simplifying startup investment and SAFE agreements into clear visual storytelling.",
    description: "Turning YC’s SAFE workflow into a clear, fast-paced feature spotlight. [Independent Concept]",
    previewVideo: "/Assets/SAFE%20Thumbnail%20Web.mp4",
    fullVideoEmbed: "https://www.youtube.com/embed/Tb2vtFCHJ80?si=mdfUmy7jcMv6UTAF&autoplay=1&rel=0&modestbranding=1",
    dribbbleUrl: "https://dribbble.com/aeymotion",
    serviceType: "Launch Story System",
    timecode: "00:01:00:00",
    frameRate: "30 FPS",
    caseStudy: {
      context: "YC Safe financing framework explains how modern startup founders manage early-stage investment.",
      challenge: "Making complex financial instruments like valuation caps, conversion mechanics, and option pools immediately intuitive and engaging.",
      audience: "Startup founders, angel investors, and venture capital operators.",
      communicationProblem: "SAFEs can seem confusing and intimidating with dense legal text and spreadsheets.",
      strategicDecision: "Used clear, high-fidelity UI animation and visual simplicity to break down the SAFE creation process.",
      execution: "Clean typography, fluid interface animations, and dynamic motion design explaining terms step-by-step.",
      result: "Engaging educational and product storytelling film simplifying startup investment."
    }
  },
  {
    id: "seorce-ai",
    name: "Seorce — Content Studio",
    category: "Featured Launch Film",
    tagline: "Simplifying complex AI search intelligence into an intuitive launch narrative.",
    description: "Showing how SEO and AI visibility insights guide content creation.",
    previewVideo: "/Assets/Seorce%20Thumbnail.mp4",
    fullVideoEmbed: "https://www.youtube.com/embed/ogB8hcwYDmI?si=xAVsoSOgt0IxGiJZ&autoplay=1&rel=0&modestbranding=1",
    dribbbleUrl: "https://dribbble.com/shots/27536447-Seorce-AI-Introduction",
    serviceType: "Launch Story System",
    timecode: "00:00:22:00",
    frameRate: "60 FPS",
    isFeatured: true,
    caseStudy: {
      context: "SEORCE is an AI-powered search intelligence platform designed for high-performance marketing and growth teams.",
      challenge: "The product handles deep technical queries across complex datasets. The team needed a clear way to communicate new features without turning the video into a tedious dashboard click-through.",
      audience: "Heads of Growth, SEO Directors, and Technical Marketing decision makers.",
      communicationProblem: "Translating sophisticated machine intelligence into an immediate 'aha moment' that prospects grasp in the first 10 seconds.",
      strategicDecision: "Eliminated cluttered interface walkthroughs. Built the narrative around the core user behavior: typing a single natural-language question ('Just Ask') and letting the AI synthesize actionable intelligence instantly.",
      execution: "High-contrast UI choreography, focused camera zooms, precise typographic callouts, and tailored sound design that punctuates feature breakthroughs.",
      result: "Multiple product and feature launch films delivered across repeat engagements, establishing a continuous storytelling partnership."
    }
  },
  {
    id: "aura-design",
    name: "Sena AI",
    category: "AI Launch Film",
    tagline: "Translating conversational intelligence into an engaging launch narrative.",
    description: "An animated walkthrough of Sena AI’s features and everyday workflow benefits. [Independent Concept]",
    previewVideo: "/Assets/Sena%20AI%20Thumbnail.mp4",
    fullVideoEmbed: "https://www.youtube.com/embed/kHo5V7wBIJU?si=7So9bhQp-APbIAFD&autoplay=1&rel=0&modestbranding=1",
    dribbbleUrl: "https://dribbble.com/aeymotion",
    serviceType: "Launch Story System",
    timecode: "00:01:12:00",
    frameRate: "24 FPS",
    caseStudy: {
      context: "Sena AI builds conversational intelligence tools for next-generation digital customer interactions.",
      challenge: "Communicating the speed, natural conversational cadence, and underlying intelligence without technical friction.",
      audience: "Product leads, CX executives, and technology founders.",
      communicationProblem: "Standard conversational demos fail to convey real-time speed and emotional resonance.",
      strategicDecision: "Centered the launch film around fluid real-time responses and an elevated, human-centric design language.",
      execution: "Kinetic typography, seamless interface transitions, warm visual palette, and tailored sound design.",
      result: "Launch film deployed across primary marketing channels and product launch announcements."
    }
  },
  {
    id: "kinetic-ai",
    name: "Hostinger",
    category: "Infrastructure Announcement",
    tagline: "Visualizing automated server workflows for modern developers.",
    description: "A motion-led introduction to Hostinger’s web hosting experience. [Independent Concept]",
    previewVideo: "/Assets/Hostinger%20thumn%20web%20opt.mp4",
    fullVideoEmbed: "https://www.youtube.com/embed/c7vAdDsWA74?si=mTRcS5L7ghqYOKCm&autoplay=1&rel=0&modestbranding=1",
    dribbbleUrl: "https://dribbble.com/shots/26673234-Hostinger-Promotional-Video",
    serviceType: "Product Storytelling",
    timecode: "00:01:05:18",
    frameRate: "24 FPS",
    caseStudy: {
      context: "Cloud infrastructure concept exploring autonomous server deployment and scale-to-zero capabilities.",
      challenge: "Making invisible backend infrastructure and automated deployment feel tangible and exciting.",
      audience: "DevOps engineers, web agencies, and infrastructure leads.",
      communicationProblem: "Server hosting has looked the same for 15 years. The new experience needed to feel distinctly generational.",
      strategicDecision: "Personified the infrastructure through kinetic 3D blocks that build and reconfigure in real time.",
      execution: "Cinematic camera sweeps, tactile lighting, dark mode UI choreography, and deep industrial sound design.",
      result: "Showcase film demonstrating how deep technical systems can be transformed into cinematic brand stories."
    }
  },
  {
    id: "cortex-ai",
    name: "Just Ask — Seorce",
    category: "Campaign Creative & Cutdowns",
    tagline: "Short-form social cutdowns engineered for high CTR on X and LinkedIn.",
    description: "Showing how a WhatsApp conversation turns SEO and AI visibility data into answers.",
    previewVideo: "/Assets/Just%20Ask%20Thumbnail.mp4",
    fullVideoEmbed: "https://www.youtube.com/embed/X-pCXDBOdJc?si=-GCLxlShhVrcnqjN&autoplay=1&rel=0&modestbranding=1",
    dribbbleUrl: "https://dribbble.com/shots/26267330-OwlyGPT-Motion-Promo",
    serviceType: "Growth Creative Sprint",
    timecode: "00:00:30:12",
    frameRate: "24 FPS",
    caseStudy: {
      context: "SEORCE builds search intelligence tools helping modern teams uncover deep growth opportunities.",
      challenge: "Feature launches were dropping into noisy social feeds without capturing attention past the first two seconds.",
      audience: "Growth directors, product managers, and remote operators looking for workflow acceleration.",
      communicationProblem: "Users scroll quickly past traditional product screenshots. Communication needed a strong opening hook.",
      strategicDecision: "Built 30-second modular sprint creative focusing on immediate time-to-value rather than a full product overview.",
      execution: "Kinetic typography, rapid UI zoom cuts, vibrant color accents, and upbeat percussive pacing.",
      result: "Delivered modular campaign cuts optimized for organic founder posts and targeted ad creative."
    }
  }
];
