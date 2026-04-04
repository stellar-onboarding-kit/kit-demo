import { useCallback, useState } from "react";
import { STEPS, STEP_NEXT, StepId } from "@/types/auth";

/**
 * Manages auth step navigation with a history stack so that "back" always
 * returns to wherever the user actually came from — not a hardcoded index.
 *
 * Examples:
 *   email → email-confirm          back → email
 *   (main) → wallet-select         back → email  (or whichever main was active)
 *   wallet-select → wallet-confirm back → wallet-select
 */
export function useStep(initial: StepId = "email") {
  // history[0] is the current step; history[1] is where back goes, etc.
  const [history, setHistory] = useState<StepId[]>([initial]);

  const currentStepId = history[0];
  const currentStep = STEPS.find((s) => s.id === currentStepId)!;
  const canGoBack = history.length > 1;

  /** Push a specific step onto the history stack. */
  const goToStep = useCallback((id: StepId) => {
    setHistory((prev) => [id, ...prev]);
  }, []);

  /** Push the natural "next" step for the current step. */
  const goToNext = useCallback(() => {
    const next = STEP_NEXT[currentStepId];
    if (next) setHistory((prev) => [next, ...prev]);
  }, [currentStepId]);

  /** Pop the history stack — goes back to wherever the user came from. */
  const goBack = useCallback(() => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(1) : prev));
  }, []);

  /** Jump to a main tab — clears history so back isn't available from tabs. */
  const goToTab = useCallback((id: StepId) => {
    setHistory([id]);
  }, []);

  /** Reset to initial state (e.g. when modal closes). */
  const reset = useCallback(() => {
    setHistory([initial]);
  }, [initial]);

  return {
    currentStepId,
    currentStep,
    canGoBack,
    goToStep,
    goToNext,
    goBack,
    goToTab,
    reset,
  };
}
