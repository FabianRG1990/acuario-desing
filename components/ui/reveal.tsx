"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cubicFluid } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "p" | "span";
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  amount = 0.4,
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: cubicFluid, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
