export const ease = [0.26, 0.08, 0.25, 1] as const;

export const transitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.12, ease } },
    exit: { opacity: 0, position: "absolute" as const, transition: { duration: 0.1, ease } },
  },
  "fade-scale": {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.12, ease } },
    exit: { opacity: 0, scale: 0.95, position: "absolute" as const, transition: { duration: 0.1, ease } },
  },
  "slide-left": {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.15, ease } },
    exit: { opacity: 0, x: -24, position: "absolute" as const, transition: { duration: 0.12, ease } },
  },
  "slide-right": {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.15, ease } },
    exit: { opacity: 0, x: 24, position: "absolute" as const, transition: { duration: 0.12, ease } },
  },
  "zoom-out-fade": {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.12, ease } },
    exit: { opacity: 0, scale: 0.9, position: "absolute" as const, transition: { duration: 0.1, ease } },
  },
} as const;