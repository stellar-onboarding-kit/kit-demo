import { create } from "zustand";

interface ConnectedWalletAddressState {
  address: string | null;
  setAddress: (address: string | null) => void;
}

export const useConnectedWalletAddress = create<ConnectedWalletAddressState>((set) => ({
  address: null,
  setAddress: (address) => set({ address }),
}));
