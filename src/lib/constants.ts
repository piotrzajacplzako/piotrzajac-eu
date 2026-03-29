import {
  HeartPulse,
  Rocket,
  ShieldCheck,
  Globe,
  Users,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const PERSONAL = {
  name: "Piotr",
  surname: "Zając",
  fullName: "Piotr Zając",
  headline: "Founder. Builder. HealthTech Leader.",
  tagline:
    "I build and scale digital health products that work — clinically, technically, and commercially. 15+ years, 75+ products, one successful exit.",
  email: "piotr.zajac@me.com",
  linkedin: "https://linkedin.com/in/zajacp",
  location: "Kraków, Poland",
};

export const ABOUT_BIO = [
  "I'm an exited founder, HealthTech operator, and EO member who's spent 15+ years turning medical expertise into software that scales. I built Untitled Kingdom from zero to a leading HealthTech software company — 75+ delivered health products, clients like Elvie and Takeda, compliance-ready architecture for FDA and MDR — before a successful acquisition by Monterail in December 2024.",
  "Today I lead Monterail's HealthTech practice, driving international expansion across US and EU markets. But my ambitions go beyond one company. I'm building an ecosystem of ventures in health, preventive medicine, and longevity — because I believe the best way to fix healthcare is to build the future of it, not wait for it.",
];

export interface Competency {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const COMPETENCIES: Competency[] = [
  {
    icon: HeartPulse,
    title: "HealthTech Product Strategy",
    description:
      "75+ digital health products shipped. Connected devices, RPM, digital therapeutics, FemTech.",
  },
  {
    icon: Rocket,
    title: "Founder & Exit Experience",
    description:
      "Built Untitled Kingdom (13 years), scaled it, and led it to acquisition. I know the founder journey inside out.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Ready Architecture",
    description:
      "FDA/MDR-aware systems from day one. Not regulatory consulting — engineering that's built to pass.",
  },
  {
    icon: Globe,
    title: "International Expansion",
    description:
      "Scaling HealthTech businesses across US and EU markets. European quality, global ambition.",
  },
  {
    icon: Users,
    title: "EO Leadership",
    description:
      "Past President of EO Poland. Active member of Entrepreneurs' Organization, connecting founders across industries.",
  },
  {
    icon: Lightbulb,
    title: "Venture Building",
    description:
      "Currently building an ecosystem in preventive medicine and longevity. Always creating what's next.",
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const JOURNEY: Milestone[] = [
  {
    year: "2012",
    title: "Founded Untitled Kingdom",
    description: "Co-founded a HealthTech software company in Kraków",
  },
  {
    year: "2022",
    title: "President of EO Poland",
    description:
      "Elected President of Entrepreneurs' Organization Poland",
  },
  {
    year: "2024",
    title: "Successful Exit",
    description: "Untitled Kingdom acquired by Monterail",
  },
  {
    year: "2025",
    title: "HealthTech Director at Monterail",
    description: "Leading international HealthTech expansion across US & EU",
  },
  {
    year: "Now",
    title: "Building What's Next",
    description:
      "Creating a venture ecosystem in health & preventive medicine",
  },
];

export const CLIENTS = [
  "Elvie",
  "Johnson & Johnson",
  "Takeda",
  "Merck",
  "MysteryVibe",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};
