export interface ServiceItem {
  id: string;
  number: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "product-storytelling",
    number: "01",
    label: "SERVICE // 01",
    title: "PRODUCT STORYTELLING",
    tagline: "EXPLAIN WHAT YOU'RE BUILDING.",
    description: "Product videos, demos, explainers, walkthroughs, and feature stories designed to communicate your product clearly.",
    deliverables: [
      "Product & Audience Research",
      "Story & Concept Development",
      "Scriptwriting",
      "Storyboarding",
      "Art Direction",
      "Motion Design",
      "Sound Design",
      "Final Delivery"
    ],
    ctaText: "DISCUSS PRODUCT STORYTELLING"
  },
  {
    id: "launch-gtm",
    number: "02",
    label: "SERVICE // 02",
    title: "LAUNCH & GTM MOTION",
    tagline: "MAKE THE LAUNCH MATTER.",
    description: "Motion assets built around new products, features, announcements, and go-to-market campaigns.",
    deliverables: [
      "Launch Strategy",
      "Creative Concept",
      "Messaging & Copy Direction",
      "Storyboarding",
      "Art Direction",
      "Motion Production",
      "Campaign Adaptations",
      "Social Cutdowns"
    ],
    ctaText: "PLAN A LAUNCH"
  },
  {
    id: "motion-systems",
    number: "03",
    label: "SERVICE // 03",
    title: "PRODUCT MOTION SYSTEMS",
    tagline: "KEEP YOUR PRODUCT MOVING.",
    description: "Ongoing motion assets that turn product updates, features, and ideas into content across your marketing channels.",
    deliverables: [
      "Creative Direction",
      "Visual System Development",
      "Motion Guidelines",
      "Asset Design",
      "Motion Production",
      "Content Adaptations",
      "Platform Optimization",
      "Ongoing Content Support"
    ],
    ctaText: "BUILD A MOTION SYSTEM"
  }
];

export const ADDITIONAL_CAPABILITIES = [
  "Brand Motion",
  "3D Visualization",
  "Motion Systems",
  "AI-assisted Production"
];
