"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { PERSONAL, WORK_PATHS, fadeInUp } from "@/lib/constants";
import SocialLink from "@/components/ui/SocialLink";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          overline="05 — Contact"
          title="Let's Talk"
          align="center"
          className="mb-8"
        />

        <motion.p
          className="text-text-secondary text-base md:text-lg mb-14 max-w-lg mx-auto leading-relaxed text-center"
          {...fadeInUp}
        >
          Building a digital health product? Exploring ventures in preventive
          medicine? Or just want to trade founder notes? I&apos;m always open
          to a good conversation.
        </motion.p>

        {/* How we can work together */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 text-left">
          {WORK_PATHS.map((path, i) => (
            <motion.div
              key={path.title}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                <path.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {path.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {path.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">

        <motion.a
          href={`mailto:${PERSONAL.email}`}
          className="font-display inline-flex items-center gap-3 text-2xl md:text-3xl font-medium text-text-primary hover:text-accent transition-colors duration-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Mail size={26} className="text-accent" />
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
      </div>
    </section>
  );
}
