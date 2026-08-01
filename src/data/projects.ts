export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  previewVideo: string;
  fullVideoEmbed: string;
  dribbbleUrl: string;
  serviceType: string;
  timecode: string;
  frameRate: string;
}

export const PROJECTS: Project[] = [
  {
    id: "haleum-ai",
    name: "Haleum AI",
    category: "AI Product Storytelling",
    description: "Launch video demonstrating multi-agent workflows and benefit-led UI storytelling.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785544263/Haleum_AI_1_wzpdxn.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785544263/Haleum_AI_1_wzpdxn.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849102-Haleum-AI-Product-Storytelling",
    serviceType: "Product Storytelling Videos",
    timecode: "00:01:24:00",
    frameRate: "24 FPS"
  },
  {
    id: "didit-logo",
    name: "DIDIT LOGO MOTION",
    category: "3D Logo & Brand Motion",
    description: "3D logo motion, fluid dynamics, and brand identity animation for Didit.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785542936/Didit_Logo_9_yaoiht.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785542936/Didit_Logo_9_yaoiht.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849103-Didit-Logo-Motion",
    serviceType: "3D Motion & Identity",
    timecode: "00:00:15:00",
    frameRate: "60 FPS"
  },
  {
    id: "aura-design",
    name: "HEALTHCARE",
    category: "Brand Motion & Campaign",
    description: "Motion system combining generative design, fluid typography, and product cutdowns.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785543462/Healthcare_2_tnc9jh.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785543462/Healthcare_2_tnc9jh.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849104-Aura-AI-Brand-Motion",
    serviceType: "Brand Motion",
    timecode: "00:02:10:04",
    frameRate: "24 FPS"
  },
  {
    id: "cortex-ai",
    name: "OwlyGPT",
    category: "Feature Video",
    description: "High-impact 30s campaign videos built for LinkedIn and X feature announcements.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785543728/Circular_2_txmwkr.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785543728/Circular_2_txmwkr.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849105-Cortex-AI-Short-Form",
    serviceType: "Short-Form Product Content",
    timecode: "00:00:30:12",
    frameRate: "24 FPS"
  },
  {
    id: "nexus-llm",
    name: "Seorce - Just Ask",
    category: "Feature Introduction",
    description: "A product video created to introduce and showcase a new feature from SEORCE AI.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785545509/Just_Ask_-_Hero_Film_14_slqvqn.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785545509/Just_Ask_-_Hero_Film_14_slqvqn.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849106-Nexus-LLM-Interactive-UI",
    serviceType: "Product Storytelling Videos",
    timecode: "00:00:22:00",
    frameRate: "60 FPS"
  },
  {
    id: "kinetic-ai",
    name: "Hostiner Concept Video",
    category: "Feature Launch Motion",
    description: "Product announcement video explaining autonomous multi-modal workflows to enterprise teams.",
    previewVideo: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785544670/Hostinger_8_x2zsw1.mp4",
    fullVideoEmbed: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1785544670/Hostinger_8_x2zsw1.mp4",
    dribbbleUrl: "https://dribbble.com/shots/23849107-Kinetic-AI-Feature-Launch",
    serviceType: "Product Storytelling Videos",
    timecode: "00:01:05:18",
    frameRate: "24 FPS"
  }
];
