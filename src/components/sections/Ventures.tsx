"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VENTURE_FOCUS, fadeInUp } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          overline="03 — Ventures"
          title="What I'm Building"
          className="mb-8"
        />

        <motion.p
          className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-14"
          {...fadeInUp}
        >
          Healthcare is still built around treating the sick. I&apos;m putting
          my founder experience and healthcare domain expertise behind an
          ecosystem of ventures that flips that — starting with prevention and
          longevity.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {VENTURE_FOCUS.map((area, i) => (
            <SpotlightCard key={area.title} index={i}>
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                <area.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {area.description}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-strong transition-colors"
          {...fadeInUp}
        >
          Building in this space? Let&apos;s compare notes
          <ArrowUpRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
