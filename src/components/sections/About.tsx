"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_BIO, COMPETENCIES, fadeInUp } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full mb-12" />
        </motion.div>

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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/photo.jpg"
                alt="Piotr Zając"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-8 text-text-primary"
          {...fadeInUp}
        >
          What I Bring
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPETENCIES.map((comp, i) => (
            <motion.div
              key={comp.title}
              className="group p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
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
