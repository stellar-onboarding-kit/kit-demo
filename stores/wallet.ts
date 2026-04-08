import { create } from "zustand";
import type { StellarBalance, StellarPayment } from "@/lib/stellar";

interface SendState {
  destination: string;
  amount: string;
  asset: string;
  memo: string;
}

interface SwapState {
  sellAsset: string;
  buyAsset: string;
  amount: string;
  slippage: number;
}

interface WalletStore {
  balances: StellarBalance[];
  setBalances: (balances: StellarBalance[]) => void;

  payments: StellarPayment[];
  setPayments: (payments: StellarPayment[]) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  error: string | null;
  setError: (error: string | null) => void;

  txHash: string | null;
  setTxHash: (hash: string | null) => void;

  send: SendState;
  setSend: (partial: Partial<SendState>) => void;
  resetSend: () => void;

  swap: SwapState;
  setSwap: (partial: Partial<SwapState>) => void;
  resetSwap: () => void;
}

const INITIAL_SEND: SendState = {
  destination: "",
  amount: "",
  asset: "XLM",
  memo: "",
};

const INITIAL_SWAP: SwapState = {
  sellAsset: "XLM",
  buyAsset: "USDC",
  amount: "",
  slippage: 0.01,
};

export const useWalletStore = create<WalletStore>((set) => ({
  balances: [],
  setBalances: (balances) => set({ balances }),

  payments: [],
  setPayments: (payments) => set({ payments }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  error: null,
  setError: (error) => set({ error }),

  txHash: null,
  setTxHash: (hash) => set({ txHash: hash }),

  send: INITIAL_SEND,
  setSend: (partial) => set((s) => ({ send: { ...s.send, ...partial } })),
  resetSend: () => set({ send: INITIAL_SEND, txHash: null, error: null }),

  swap: INITIAL_SWAP,
  setSwap: (partial) => set((s) => ({ swap: { ...s.swap, ...partial } })),
  resetSwap: () => set({ swap: INITIAL_SWAP, txHash: null, error: null }),
}));
