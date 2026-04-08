import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import type { SpinnerProps } from "./types";

const spinTransition = {
  duration: 1.2,
  repeat: Infinity,
  ease: "linear" as const,
  repeatType: "loop" as const,
};

function CircleRing() {
  return (
    <motion.svg
      aria-hidden="true"
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 block h-full w-full"
      animate={{ rotate: 360 }}
      transition={spinTransition}
    >
      <path
        d="M52 100C24.3858 100 2 77.6142 2 50"
        stroke="url(#ck_circle_grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="ck_circle_grad" x1="2" y1="48.5" x2="53" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--ck-spinner-color)" />
          <stop offset="1" stopColor="var(--ck-spinner-color)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

function SquircleRing() {
  return (
    <motion.div
      className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0%,var(--ck-spinner-color)_10%,var(--ck-spinner-color)_25%,transparent_35%)]"
      animate={{ rotate: 360 }}
      transition={{ ...spinTransition, duration: 1.25 }}
    />
  );
}

const logoClasses = [
  "[&_img]:pointer-events-none [&_img]:block [&_img]:h-full [&_img]:w-full",
  "[&_svg]:pointer-events-none [&_svg]:block [&_svg]:h-full [&_svg]:w-full",
].join(" ");

const smallLogoClasses =
  "[&_img]:h-[85%] [&_img]:w-[85%] [&_svg]:h-[85%] [&_svg]:w-[85%]";

function Spinner({
  shape = "circle",
  logo,
  smallLogo,
  loading = true,
  unavailable = false,
}: SpinnerProps) {
  if (shape === "squircle") {
    return (
      <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] p-[3px]">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="squircle-ring"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SquircleRing />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative z-1 flex items-center justify-center rounded-[20px] bg-(--ck-body-background) p-0.5">
          <div className="flex items-center justify-center rounded-2xl bg-(--ck-body-background) p-1">
            <div
              className={cn(
                "flex size-16 items-center justify-center overflow-hidden rounded-xl",
                logoClasses,
                !unavailable && smallLogo && smallLogoClasses
              )}
              style={unavailable ? { borderRadius: 0 } : undefined}
            >
              {logo}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div className="relative z-4 h-[100px] w-[100px]">
      <motion.div
        className={cn(
          "absolute inset-1.5 z-2 flex items-center justify-center overflow-hidden rounded-full bg-(--ck-body-background)",
          logoClasses,
          !unavailable && smallLogo && smallLogoClasses
        )}
        style={unavailable ? { borderRadius: 0 } : undefined}
      >
        {logo}
      </motion.div>
      <motion.div className="absolute inset-[-2px]">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="circle-ring"
              className="pointer-events-none absolute inset-0 z-1 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CircleRing />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <svg
        aria-hidden="true"
        className="relative z-3 block"
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
      />
    </motion.div>
  );
}

export { Spinner };
export type { SpinnerProps } from "./types";
