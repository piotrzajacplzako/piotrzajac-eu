"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/constants";

interface SectionHeadingProps {
  overline: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div className={`${alignment} ${className}`} {...fadeInUp}>
      <p className="overline-label mb-4">{overline}</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-text-primary">
        {title}
      </h2>
    </motion.div>
  );
}
