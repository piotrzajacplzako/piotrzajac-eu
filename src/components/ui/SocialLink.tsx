"use client";

import { motion } from "framer-motion";
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-surface-light transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </motion.a>
  );
}
