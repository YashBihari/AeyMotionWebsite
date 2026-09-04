export interface ServiceItem {
  id: string;
  number: string;
  label: string;
  scopeBadge: string;
  titleLine1: string;
  titleLine2: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  optionalExtensions?: string[];
  ctaText: string;
  isFlagship?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "launch-narrative-sprint",
    number: "01",
    label: "OFFER // 01",
    scopeBadge: "STRATEGY + STORY",
    titleLine1: "LAUNCH",
    titleLine2: "NARRATIVE SPRINT",
    title: "LAUNCH NARRATIVE SPRINT",
    tagline: "GET THE STORY RIGHT BEFORE YOU CREATE THE LAUNCH.",
    description: "For B2B AI companies with a strong product but an unclear story. We research the market, sharpen the positioning, and build the launch narrative that guides the creative.",
    deliverables: [
      "Product & Audience Research",
      "Competitive Context",
      "Positioning & Differentiation",
      "Message Hierarchy",
      "Launch Angle",
      "Core Narrative",
      "Draft Script",
      "Creative Direction"
    ],
    ctaText: "BUILD YOUR LAUNCH STORY"
  },
  {
    id: "launch-story-system",
    number: "02",
    label: "OFFER // 02",
    scopeBadge: "STRATEGY + STORY + CREATIVE",
    titleLine1: "LAUNCH",
    titleLine2: "STORY SYSTEM",
    title: "LAUNCH STORY SYSTEM",
    tagline: "FROM PRODUCT STRATEGY TO LAUNCH-READY CREATIVE.",
    description: "For B2B AI companies preparing to launch a new company, product, or major feature. We take the launch from strategy and narrative through a premium launch film and supporting creative.",
    deliverables: [
      "Everything in the Narrative Sprint",
      "Final Launch Script",
      "Storyboard & Creative Direction",
      "Hero Launch Film",
      "Social / Campaign Cutdowns",
      "Product & Launch Assets",
      "Additional Feature / Product Videos",
      "Distribution Recommendations"
    ],
    ctaText: "PLAN YOUR LAUNCH",
    isFlagship: true
  }
];

export const ADDITIONAL_CAPABILITIES = [
  "Motion Design",
  "UI Animation",
  "Product Visualization",
  "3D Design",
  "AI-Assisted Visuals",
  "Sound Design",
  "Product Demos",
  "Social Cutdowns",
  "Website Motion",
  "Brand Motion Systems"
];
