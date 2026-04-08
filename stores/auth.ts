import { create } from "zustand";

interface AuthStore {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedWalletId: string | null;
  setSelectedWalletId: (id: string | null) => void;
  connectedAddress: string | null;
  setConnectedAddress: (address: string | null) => void;
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  selectedWalletId: null,
  setSelectedWalletId: (id) => set({ selectedWalletId: id }),
  connectedAddress: null,
  setConnectedAddress: (address) => set({ connectedAddress: address }),
  isConnected: false,
  setIsConnected: (value) => set({ isConnected: value }),
}));
