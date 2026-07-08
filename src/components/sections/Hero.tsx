"use client";

import { motion } from "framer-motion";
import { PERSONAL, CLIENTS, EASE_OUT } from "@/lib/constants";
import Button from "@/components/ui/Button";

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.p className="overline-label mb-6" {...enter(0)}>
          {PERSONAL.headline}
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-text-primary mb-8"
          {...enter(0.1)}
        >
          {PERSONAL.name}{" "}
          <span className="italic text-accent">{PERSONAL.surname}</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          {...enter(0.2)}
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div className="flex flex-wrap items-center gap-4" {...enter(0.3)}>
          <Button href="#contact">Let&apos;s Talk</Button>
          <Button href={PERSONAL.linkedin} variant="secondary" external>
            LinkedIn
          </Button>
        </motion.div>
      </div>

      {/* Clients bar */}
      <motion.div
        className="max-w-5xl mx-auto px-6 w-full mt-20 md:mt-28 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <p className="overline-label shrink-0">Built products for</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="text-text-muted text-sm md:text-base font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
