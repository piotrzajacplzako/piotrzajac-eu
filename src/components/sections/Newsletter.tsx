"use client";

import { motion } from "framer-motion";
import { PERSONAL, fadeInUp } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section id="newsletter" className="border-t border-border bg-surface-muted/50">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-5 gap-10 md:items-center">
          <motion.div className="md:col-span-3" {...fadeInUp}>
            <p className="overline-label mb-4">04 — Newsletter</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-text-primary mb-4">
              HealthTech Pulse
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
              Field notes from building and scaling digital health products —
              regulatory reality, product decisions, and what&apos;s actually
              working in HealthTech. Published on LinkedIn.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button href={PERSONAL.newsletter} external>
              Subscribe on LinkedIn
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
