"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ children, href, variant = "primary", onClick }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-secondary text-background hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-105",
    secondary:
      "border border-border text-text-secondary hover:text-text-primary hover:border-accent/50 hover:bg-surface-light",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
