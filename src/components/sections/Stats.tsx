"use client";

import { motion } from "framer-motion";
import { STATS, EASE_OUT } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  return (
    <section aria-label="Career highlights" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_OUT }}
            >
              <p className="font-display text-4xl md:text-5xl font-medium text-text-primary mb-2">
                <CountUp value={stat.value} />
              </p>
              <p className="text-sm text-text-muted leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
