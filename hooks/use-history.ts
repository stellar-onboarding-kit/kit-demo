import { useCallback, useState } from "react";
import type { StepId } from "@/types/auth";
import { STEP_NEXT } from "@/types/auth";

/**
 * Manages screen navigation with a history stack.
 * "back" always returns to wherever the user came from.
 */
export function useHistory(initial: StepId = "email") {
  const [history, setHistory] = useState<StepId[]>([initial]);

  const current = history[0];
  const canGoBack = history.length > 1;

  const push = useCallback((id: StepId) => {
    setHistory((prev) => [id, ...prev]);
  }, []);

  const pushNext = useCallback(() => {
    const next = STEP_NEXT[current];
    if (next) setHistory((prev) => [next, ...prev]);
  }, [current]);

  const back = useCallback(() => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(1) : prev));
  }, []);

  /** Jump to a screen and clear history (e.g. switching tabs). */
  const replace = useCallback((id: StepId) => {
    setHistory([id]);
  }, []);

  const reset = useCallback(() => {
    setHistory([initial]);
  }, [initial]);

  return { current, canGoBack, push, pushNext, back, replace, reset };
}

export type UseHistoryReturn = ReturnType<typeof useHistory>;