import type { StepId } from "@/types/auth";
import type { ReactNode } from "react";
import type { UseHistoryReturn } from "@/hooks/use-history";

export interface ScreenContext {
  nav: UseHistoryReturn;
  selectedWalletId: string | null;
  selectWallet: (walletId: string) => void;
}

export type ScreenRenderer = (ctx: ScreenContext) => ReactNode;

const registry = new Map<StepId, ScreenRenderer>();

export function registerScreen(id: StepId, renderer: ScreenRenderer) {
  registry.set(id, renderer);
}

export function getScreen(id: StepId): ScreenRenderer | undefined {
  return registry.get(id);
}

export function hasScreen(id: StepId): boolean {
  return registry.has(id);
}
