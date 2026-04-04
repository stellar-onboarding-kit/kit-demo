"use client";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SlotProps } from "input-otp";

function AnimatedChar({ value }: { value: string | null }) {
  return (
    <div className="relative flex h-[40px] w-[32px] items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={value ?? "empty"}
          initial={{ opacity: 0.25, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.08, ease: "easeInOut" }}
          className={cn("absolute", value === null ? "text-foreground/20" : "")}
        >
          {value ?? "0"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export const OTPSlot: React.FC<
  SlotProps & { isShaking?: boolean; isVerifying: boolean; delay: number }
> = ({ char, isActive, isShaking, isVerifying, delay }) => (
  <motion.div
    layout
    className={cn(
      "relative flex h-[45px] min-w-[36px] flex-1 items-center justify-center rounded-[10px] text-base font-semibold",
      "bg-card text-foreground",
      isVerifying && "opacity-50"
    )}
    style={{ animationDelay: `${delay}ms` }}
  >
    <AnimatedChar value={char} />
    {isActive && (
      <motion.div
        layoutId="otp-indicator"
        className={cn(
          "absolute inset-0 z-10 rounded-[10px] border-[3px]",
          isShaking ? "border-rose-400" : "border-blue-400",
          isVerifying && "border-none"
        )}
        transition={{ duration: 0.12, ease: "easeInOut" }}
      />
    )}
  </motion.div>
);
