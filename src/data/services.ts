export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  isFeatured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Product Storytelling Videos",
    subtitle: "Core High-Value Service",
    description: "Explain how your product works, demonstrate its value, or introduce a new product or feature through clear storytelling and polished motion.",
    deliverables: [
      "Explainer videos",
      "Product videos",
      "Product demo videos",
      "Launch videos",
      "Feature announcement videos",
      "Homepage videos"
    ],
    isFeatured: true
  },
  {
    number: "02",
    title: "Short-Form Product Content",
    subtitle: "Social & Growth Motion",
    description: "Focused 15–45 second videos designed to communicate product benefits, promote features, and keep your company visible across social platforms.",
    deliverables: [
      "15–45 second vertical videos",
      "LinkedIn videos",
      "Instagram Reels",
      "YouTube Shorts",
      "Paid social creative",
      "Feature clips",
      "Product announcements"
    ],
    isFeatured: false
  },
  {
    number: "03",
    title: "Brand Motion",
    subtitle: "Visual Identity System",
    description: "Logo and brand animations that give your product a distinctive, polished, and consistent motion identity.",
    deliverables: [
      "Logo animations",
      "Logo reveals",
      "Intro animations",
      "Outro animations",
      "Animated brand elements",
      "Loading animations",
      "Splash-screen animations"
    ],
    isFeatured: false
  },
  {
    number: "04",
    title: "Interactive Product Animation",
    subtitle: "Web & In-App Motion",
    description: "Lightweight Rive and Lottie animations created for websites, product interfaces, onboarding, and interactive digital experiences.",
    deliverables: [
      "Rive animation",
      "Lottie animation",
      "Interactive web animation",
      "Animated icons",
      "UI microinteractions",
      "Loading states",
      "Product onboarding animation",
      "Interface feedback"
    ],
    isFeatured: false
  }
];
