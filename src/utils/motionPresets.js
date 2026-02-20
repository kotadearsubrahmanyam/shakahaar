import { smoothEase } from "./easing";

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: smoothEase,
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const hoverLift = {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

export const softScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};
