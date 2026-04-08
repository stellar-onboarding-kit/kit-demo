import type { StepId } from "@/types/auth";
import type { ReactNode } from "react";

export type ScreenRenderer = (ctx: ScreenContext) => ReactNode;

export interface ScreenContext {
  selectWallet: (walletId: string) => void;
  selectedWalletId: string | null;
}

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
