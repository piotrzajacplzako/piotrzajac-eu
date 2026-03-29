"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { PERSONAL, fadeInUp } from "@/lib/constants";
import SocialLink from "@/components/ui/SocialLink";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full mb-8 mx-auto" />
          <p className="text-text-secondary text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Whether it&apos;s HealthTech product strategy, founder challenges,
            market expansion, or just pressure-testing your roadmap — I&apos;m
            always open to a good conversation.
          </p>
        </motion.div>

        <motion.a
          href={`mailto:${PERSONAL.email}`}
          className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-accent hover:text-accent-secondary transition-colors duration-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Mail size={24} />
          {PERSONAL.email}
        </motion.a>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SocialLink
            href={PERSONAL.linkedin}
            icon={LinkedinIcon}
            label="LinkedIn"
          />
          <SocialLink
            href={`mailto:${PERSONAL.email}`}
            icon={Mail}
            label="Email"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MapPin size={14} />
          <span>{PERSONAL.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
