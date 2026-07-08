"use client";

import { motion } from "framer-motion";
import { JOURNEY } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          overline="02 — Journey"
          title="The Journey"
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {JOURNEY.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className="relative flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-border-strong flex items-center justify-center shadow-sm">
                  <span className="font-display text-accent text-xs md:text-sm font-semibold">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
