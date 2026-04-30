import type { Variants, Transition } from "framer-motion";

export const fluid: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 22,
  mass: 0.9,
};

export const cubicFluid = [0.32, 0.72, 0, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: cubicFluid },
  },
};

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

export const revealRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: cubicFluid },
  },
};
