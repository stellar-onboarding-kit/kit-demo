import { create } from "zustand";

interface AuthStore {
  /** Whether the connect modal is open */
  open: boolean;
  setOpen: (open: boolean) => void;

  /** Currently selected wallet id (e.g. "metamask") */
  selectedWalletId: string | null;
  setSelectedWalletId: (id: string | null) => void;

  /** Connected wallet address after successful connection */
  connectedAddress: string | null;
  setConnectedAddress: (address: string | null) => void;

  /** Whether a wallet is currently connected */
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
