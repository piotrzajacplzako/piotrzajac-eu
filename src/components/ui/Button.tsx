"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
}

const MAGNET_STRENGTH = 0.18;
const MAGNET_MAX = 6;

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * MAGNET_STRENGTH;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * MAGNET_STRENGTH;
    x.set(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dx)));
    y.set(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dy)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classes}
      style={{ x, y }}
      whileTap={{ scale: 0.98 }}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Component>
  );
}
