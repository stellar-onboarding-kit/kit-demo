"use client";
import { motion } from "motion/react";
import { MAIN_STEPS, StepId } from "@/types/auth";

export const Tabs: React.FC<{
  setCurrentStep: (stepId: StepId) => void;
  currentStepId: StepId;
}> = ({ setCurrentStep, currentStepId }) => (
  <div className="relative flex items-center w-full bg-card p-1 rounded-xl">
    {MAIN_STEPS.map((tab) => {
      const isActive = currentStepId === tab.id;
      return (
        <button
          key={tab.id}
          onClick={() => setCurrentStep(tab.id)}
          className="relative flex-1 h-[40px] flex items-center justify-center font-medium"
          type="button"
        >
          {isActive && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-foreground/5 rounded-lg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      );
    })}
  </div>
);
