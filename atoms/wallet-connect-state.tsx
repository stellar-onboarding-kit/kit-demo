import { create } from "zustand";

interface WalletConnectState {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
}

export const useWalletConnectState = create<WalletConnectState>((set) => ({
  isConnected: false,
  setIsConnected: (value) => set({ isConnected: value }),
}));
