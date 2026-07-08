"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  ABOUT_BIO,
  CURRENT_ROLES,
  COMPETENCIES,
  fadeInUp,
} from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading overline="01 — About" title="Who I Am" className="mb-14" />

        {/* Bio + Photo */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <motion.div className="lg:col-span-3 space-y-6" {...fadeInUp}>
            {ABOUT_BIO.map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex items-start justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/photo.jpg"
                alt="Piotr Zając"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* What I Do Now */}
        <motion.h3
          className="font-display text-2xl md:text-3xl font-medium mb-8 text-text-primary"
          {...fadeInUp}
        >
          What I Do Now
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {CURRENT_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                <role.icon size={20} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">
                {role.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {role.description}
              </p>
              {role.link && (
                <a
                  href={role.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
                >
                  {role.link.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Competencies */}
        <motion.h3
          className="font-display text-2xl md:text-3xl font-medium mb-8 text-text-primary"
          {...fadeInUp}
        >
          What I Bring
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPETENCIES.map((comp, i) => (
            <motion.div
              key={comp.title}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                <comp.icon size={20} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">
                {comp.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {comp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
