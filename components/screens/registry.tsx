import type { StepId } from "@/types/auth";
import type { ReactNode } from "react";
import type { UseHistoryReturn } from "@/hooks/use-history";
import type { StellarBalance, StellarPayment } from "@/lib/stellar";

export interface ScreenContext {
  nav: UseHistoryReturn;

  selectedWalletId: string | null;
  selectWallet: (walletId: string) => void;

  address: string | null;
  balances: StellarBalance[];
  payments: StellarPayment[];
  loading: boolean;
  error: string | null;
  txHash: string | null;

  send: {
    destination: string;
    amount: string;
    asset: string;
    memo: string;
  };
  setSend: (partial: Partial<ScreenContext["send"]>) => void;

  swap: {
    sellAsset: string;
    buyAsset: string;
    amount: string;
    slippage: number;
  };
  setSwap: (partial: Partial<ScreenContext["swap"]>) => void;

  fetchBalances: () => Promise<void>;
  fetchPayments: () => Promise<void>;
  prepareSendXdr: () => unknown;
  prepareSwapXdr: () => unknown;
  setTxHash: (hash: string | null) => void;
  closeModal: () => void;
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
