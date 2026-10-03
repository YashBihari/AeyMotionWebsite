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
    startingPrice: "$300",
    description: "Put features in the spotlight.",
    duration: "Up to 15 seconds",
    timeline: "3–5 business days",
    includes: [
      "Product & messaging review",
      "Creative concept",
      "Short-form script / messaging",
      "UI & product animation",
      "Custom motion design",
      "AI voiceover or text-led storytelling",
      "Music & sound design",
      "2 revision rounds",
      "Final web & social-ready export"
    ],
    ctaText: "Discuss your feature video"
  },
  {
    id: "product-launch-video",
    name: "Product Launch",
    startingPrice: "$900",
    description: "Introduce your product. Give people a reason to care.",
    duration: "Up to 45 seconds",
    timeline: "5–7 business days",
    includes: [
      "Product & audience analysis",
      "Launch concept & narrative",
      "Scriptwriting",
      "Storyboard",
      "Custom visual direction",
      "UI & product animation",
      "AI voiceover or text-led storytelling",
      "Music & sound design",
      "2 revision rounds",
      "Final launch-ready exports"
    ],
    ctaText: "Plan your product video"
  },
  {
    id: "product-explainer",
    name: "Product Explainer",
    startingPrice: "$1,200",
    description: "Make your product easy to understand.",
    duration: "60–90 seconds",
    timeline: "7–10 business days",
    includes: [
      "Product, audience & messaging analysis",
      "Creative concept & narrative",
      "Scriptwriting",
      "Detailed storyboard",
      "Custom visual direction",
      "UI, product & motion design",
      "AI voiceover or text-led storytelling",
      "Full sound design",
      "2 revision rounds",
      "Final exports for web & social"
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
