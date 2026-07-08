import {
  HeartPulse,
  Rocket,
  ShieldCheck,
  Globe,
  Users,
  Lightbulb,
  Building2,
  Newspaper,
  Sprout,
  Activity,
  Hourglass,
  Network,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const PERSONAL = {
  name: "Piotr",
  surname: "Zając",
  fullName: "Piotr Zając",
  headline: "Exited Founder. HealthTech Operator. Venture Builder.",
  tagline:
    "I've spent 15+ years turning medical expertise into software that scales — 75+ digital health products shipped, one company built and exited. Now I'm building what's next in preventive health and longevity.",
  email: "piotr.zajac@me.com",
  linkedin: "https://linkedin.com/in/zajacp",
  newsletter:
    "https://www.linkedin.com/newsletters/healthtech-pulse-7069731560584826881/",
  location: "Kraków, Poland",
};

export const ABOUT_BIO = [
  "I'm an exited founder and HealthTech operator. Over 13 years I built Untitled Kingdom from zero into a leading HealthTech software company: 75+ digital health products delivered for clients like Elvie, Johnson & Johnson, and Takeda, with compliance-ready architecture for FDA and MDR from day one. In December 2024 the company was acquired by Monterail.",
  "Today I lead Monterail's HealthTech practice and its expansion across US and EU markets. Beyond that, I'm building an ecosystem of ventures in preventive medicine and longevity, writing the HealthTech Pulse newsletter, and staying close to the founder community through the Entrepreneurs' Organization, where I served as President of EO Poland.",
  "I believe the best way to fix healthcare is to build the future of it, not wait for it.",
];

export interface CurrentRole {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export const CURRENT_ROLES: CurrentRole[] = [
  {
    icon: Building2,
    title: "HealthTech Director at Monterail",
    description:
      "I own Monterail's HealthTech strategy and client acquisition, positioning the company as the engineering partner of choice for founders and enterprises building regulated digital health products in the US and EU.",
  },
  {
    icon: Newspaper,
    title: "HealthTech Pulse",
    description:
      "My LinkedIn newsletter on building and scaling digital health products: regulatory reality, product decisions, and what's actually working in HealthTech right now.",
    link: {
      label: "Read on LinkedIn",
      href: "https://www.linkedin.com/newsletters/healthtech-pulse-7069731560584826881/",
    },
  },
  {
    icon: Sprout,
    title: "Venture Ecosystem",
    description:
      "Building an ecosystem of ventures in preventive medicine and longevity — pairing founder experience with deep healthcare domain expertise to create what's next.",
  },
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
      "Built Untitled Kingdom over 13 years, scaled it, and led it to acquisition. I know the founder journey from first invoice to term sheet.",
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
    description:
      "Co-founded a software company in Kraków and grew it into a leading HealthTech studio — 75+ digital health products for clients like Elvie, Johnson & Johnson, and Takeda.",
  },
  {
    year: "2022",
    title: "President of EO Poland",
    description:
      "Elected President of Entrepreneurs' Organization Poland, part of the global EO network of founders.",
  },
  {
    year: "2024",
    title: "Successful Exit",
    description:
      "Untitled Kingdom acquired by Monterail in December 2024 — the close of a 13-year founder chapter.",
  },
  {
    year: "2025",
    title: "HealthTech Director at Monterail",
    description:
      "Leading the HealthTech practice after the acquisition — strategy, brand, and client acquisition across US and EU markets.",
  },
  {
    year: "Now",
    title: "Building the Future of Health",
    description:
      "Monterail HealthTech expansion · venture ecosystem in preventive medicine and longevity · HealthTech Pulse newsletter.",
  },
];

export const CLIENTS = [
  "Elvie",
  "Johnson & Johnson",
  "Takeda",
  "Eargo Hearing",
  "MysteryVibe",
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "15+", label: "years in HealthTech" },
  { value: "75+", label: "digital health products shipped" },
  { value: "13", label: "years as founder & CEO" },
  { value: "1", label: "successful exit — Dec 2024" },
];

export interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const VENTURE_FOCUS: FocusArea[] = [
  {
    icon: Activity,
    title: "Preventive Medicine",
    description:
      "Care that starts before the diagnosis — products that catch problems early instead of managing them late.",
  },
  {
    icon: Hourglass,
    title: "Longevity",
    description:
      "Extending healthspan, not just lifespan — turning longevity science into products people actually use.",
  },
  {
    icon: Network,
    title: "Ecosystem Approach",
    description:
      "Not one bet but a portfolio of connected ventures — sharing domain expertise, infrastructure, and lessons from 75+ shipped products.",
  },
];

export interface WorkPath {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WORK_PATHS: WorkPath[] = [
  {
    icon: Building2,
    title: "Build a health product",
    description:
      "Work with my team at Monterail on regulated digital health products — from first prototype to FDA/MDR-ready platforms.",
  },
  {
    icon: Sprout,
    title: "Partner on ventures",
    description:
      "Investing, co-founding, or bringing domain expertise to preventive medicine and longevity? Let's talk about building together.",
  },
  {
    icon: Handshake,
    title: "Connect founder-to-founder",
    description:
      "Through the EO network, HealthTech Pulse, or a straight-up conversation about the founder journey and exits.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Ventures", href: "#ventures" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contact", href: "#contact" },
];

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: EASE_OUT },
};
