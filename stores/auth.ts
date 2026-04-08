import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedWalletId: string | null;
  setSelectedWalletId: (id: string | null) => void;
  connectedAddress: string | null;
  setConnectedAddress: (address: string | null) => void;
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
  disconnect: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      open: false,
      setOpen: (open) => set({ open }),
      selectedWalletId: null,
      setSelectedWalletId: (id) => set({ selectedWalletId: id }),
      connectedAddress: null,
      setConnectedAddress: (address) => set({ connectedAddress: address }),
      isConnected: false,
      setIsConnected: (value) => set({ isConnected: value }),
      disconnect: () => set({ 
        connectedAddress: null, 
        isConnected: false, 
        selectedWalletId: null 
      }),
    }),
    {
      name: "stellar-wallet-auth",
      partialize: (state) => ({
        connectedAddress: state.connectedAddress,
        isConnected: state.isConnected,
        selectedWalletId: state.selectedWalletId,
      }),
    }
  )
);
