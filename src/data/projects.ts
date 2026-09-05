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
    description: "Launch film demonstrating autonomous multi-agent workflows and benefit-led UI storytelling.",
    previewVideo: "https://ik.imagekit.io/aeymotion/haleum%20thumnbnail%20web.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Haleum%20Ai%20web%20opt.mp4",
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
    id: "didit-logo",
    name: "Didit Infrastructure",
    category: "3D Brand & Identity Motion",
    tagline: "Elevating developer identity infrastructure into a high-craft visual statement.",
    description: "3D brand identity, kinetic motion, and fluid dynamics for Didit developer infrastructure.",
    previewVideo: "https://ik.imagekit.io/aeymotion/Didit%20Logo%209%20web%20opt.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Didit%20Logo%209%20web%20opt.mp4",
    dribbbleUrl: "https://dribbble.com/aeymotion",
    serviceType: "Launch Narrative & Brand Motion",
    timecode: "00:00:15:00",
    frameRate: "60 FPS",
    caseStudy: {
      context: "Didit is a next-generation identity and authentication platform for modern application developers.",
      challenge: "Developer infrastructure brands often appear cold and generic. Didit wanted an unforgettable visual brand asset that felt premium, secure, and fast.",
      audience: "Developers, CTOs, and technical product managers evaluating authentication infrastructure.",
      communicationProblem: "Conveying trust, encryption, and speed visually in under 15 seconds.",
      strategicDecision: "Used fluid 3D glass and metallic materials to symbolize transparency and structural security.",
      execution: "Custom 3D simulation with dynamic optical refraction, fluid physics, and tailored sub-bass sound design.",
      result: "High-impact identity asset deployed across developer portal headers, hero sections, and social media."
    }
  },
  {
    id: "seorce-ai",
    name: "SEORCE - Just Ask",
    category: "Featured Launch Film",
    tagline: "Simplifying complex AI search intelligence into an intuitive launch narrative.",
    description: "Multi-project partnership creating launch films and feature introductions for SEORCE AI.",
    previewVideo: "https://ik.imagekit.io/aeymotion/seorce%20t%20nre.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Seorce%2012%20video%20web.mp4",
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
    description: "Launch film and visual narrative crafted for Sena AI.",
    previewVideo: "https://ik.imagekit.io/aeymotion/Thumnail%20web.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Sena%203%20web%20oopt.mp4",
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
    name: "Hostinger Cloud Concept",
    category: "Infrastructure Announcement",
    tagline: "Visualizing automated server workflows for modern developers.",
    description: "Product announcement video explaining autonomous multi-modal workflows to enterprise teams.",
    previewVideo: "https://ik.imagekit.io/aeymotion/Hostinger%20thumn%20web%20opt.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Hostinger%208%20video%20web%20opt.mp4",
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
    name: "OwlyGPT",
    category: "Campaign Creative & Cutdowns",
    tagline: "Short-form social cutdowns engineered for high CTR on X and LinkedIn.",
    description: "High-impact 30-second campaign videos built for LinkedIn and X feature announcements.",
    previewVideo: "https://ik.imagekit.io/aeymotion/just%20ask%20t%20nre.mp4",
    fullVideoEmbed: "https://ik.imagekit.io/aeymotion/Just%20Ask%20-%20Hero%20Film%2014%20web%20oopt.mp4",
    dribbbleUrl: "https://dribbble.com/shots/26267330-OwlyGPT-Motion-Promo",
    serviceType: "Growth Creative Sprint",
    timecode: "00:00:30:12",
    frameRate: "24 FPS",
    caseStudy: {
      context: "OwlyGPT builds conversational AI tools helping modern operators summarize and action daily workflows.",
      challenge: "Feature launches were dropping into noisy social feeds without capturing attention past the first two seconds.",
      audience: "Knowledge workers, product managers, and remote operators looking for workflow acceleration.",
      communicationProblem: "Users scroll quickly past traditional product screenshots. Communication needed a strong opening hook.",
      strategicDecision: "Built 30-second modular sprint creative focusing on immediate time-to-value rather than a full product overview.",
      execution: "Kinetic typography, rapid UI zoom cuts, vibrant neon color accents, and upbeat percussive pacing.",
      result: "Delivered modular campaign cuts optimized for organic founder posts and targeted ad creative."
    }
  }
];
