export interface PackageOffer {
  id: string;
  name: string;
  startingPrice: string;
  description: string;
  duration: string;
  timeline: string;
  includes: string[];
  ctaText: string;
}

export const PACKAGES: PackageOffer[] = [
  {
    id: "feature-spotlight",
    name: "Feature Spotlight",
    startingPrice: "$900",
    description: "Put features in the spotlight.",
    duration: "Up to 20 seconds",
    timeline: "5–7 business days per video",
    includes: [
      "Script & scene plan",
      "UI animation & motion graphics",
      "Music & sound effects",
      "One aspect ratio"
    ],
    ctaText: "Discuss your feature video"
  },
  {
    id: "product-launch-video",
    name: "Product Launch",
    startingPrice: "$1,800",
    description: "Introduce your product. Give people a reason to care.",
    duration: "Up to 45 seconds",
    timeline: "10–15 business days",
    includes: [
      "Script & storyboard",
      "UI animation & motion graphics",
      "Music & sound design",
      "AI voiceover or text-led video",
      "One aspect ratio"
    ],
    ctaText: "Plan your product video"
  },
  {
    id: "product-explainer",
    name: "Product Explainer",
    startingPrice: "$2,800",
    description: "Make your product easy to understand.",
    duration: "60–90 seconds",
    timeline: "15–20 business days",
    includes: [
      "Script & storyboard",
      "Key feature & workflow animation",
      "Supporting motion graphics",
      "Music & sound design",
      "AI voiceover or text-led video",
      "One aspect ratio"
    ],
    ctaText: "Plan your product explainer"
  }
];

// Deprecated alias for backwards compatibility if needed
export type ServiceItem = PackageOffer;
export const SERVICES = PACKAGES;


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
