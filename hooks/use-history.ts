import { useCallback, useState } from "react";
import type { StepId } from "@/types/auth";
import { STEP_NEXT } from "@/types/auth";

export function useHistory(initial: StepId = "welcome") {
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

  const replace = useCallback((id: StepId) => {
    setHistory([id]);
  }, []);

  const reset = useCallback(() => {
    setHistory([initial]);
  }, [initial]);

  return { current, canGoBack, push, pushNext, back, replace, reset };
}

export type UseHistoryReturn = ReturnType<typeof useHistory>;
