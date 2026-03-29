"use client";

import { motion } from "framer-motion";
import { PERSONAL, CLIENTS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">{PERSONAL.name}</span>{" "}
          <span className="text-text-primary">{PERSONAL.surname}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {PERSONAL.headline}
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button href="#contact">Let&apos;s Talk</Button>
        </motion.div>
      </div>

      {/* Clients bar */}
      <motion.div
        className="relative z-10 mt-24 md:mt-32 w-full max-w-4xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-text-muted text-xs uppercase tracking-[0.25em] text-center mb-6">
          Built products for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-text-muted text-sm md:text-base font-medium hover:text-text-secondary transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
