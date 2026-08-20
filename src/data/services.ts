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
      "Explainer Videos",
      "Product Demos",
      "Product Walkthroughs",
      "Homepage Videos",
      "Feature Explainers"
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
      "Launch Films",
      "Feature Launches",
      "Product Teasers",
      "Campaign Assets",
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
      "Feature Motion",
      "LinkedIn Content",
      "Short-form Product Videos",
      "Reels",
      "YouTube Shorts",
      "UI Motion"
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
