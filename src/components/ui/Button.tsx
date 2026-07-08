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
    "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-base transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-text-primary text-background hover:bg-accent-strong",
    secondary:
      "border border-border-strong text-text-primary hover:border-accent hover:text-accent",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
