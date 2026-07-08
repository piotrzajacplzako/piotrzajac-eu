"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

interface CountUpProps {
  value: string; // e.g. "75+", "13", "1"
}

export default function CountUp({ value }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(reduceMotion ? target : 0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(count, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, reduceMotion, count, target]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {reduceMotion ? target : <motion.span>{rounded}</motion.span>}
      {suffix}
    </span>
  );
}
