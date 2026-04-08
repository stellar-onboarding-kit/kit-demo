import { useCallback } from "react";
import { useHistory } from "@/hooks/use-history";
import { useAuthStore } from "@/stores/auth";
import { STEPS, WALLETS } from "@/types/auth";
import type { StepId } from "@/types/auth";

/**
 * Composes navigation history + auth store into a single
 * interface for the connect-wallet modal.
 *
 * Usage:
 *   const modal = useConnectModal("wallet-select");
 *   modal.selectWallet("metamask");
 *   modal.nav.back();
 */
export function useConnectModal(initial: StepId = "wallet-select") {
  const nav = useHistory(initial);

  const selectedWalletId = useAuthStore((s) => s.selectedWalletId);
  const setSelectedWalletId = useAuthStore((s) => s.setSelectedWalletId);

  const step = STEPS.find((s) => s.id === nav.current);
  const wallet = WALLETS.find((w) => w.id === selectedWalletId);

  const selectWallet = useCallback(
    (walletId: string) => {
      setSelectedWalletId(walletId);
      nav.push("wallet-confirm");
    },
    [setSelectedWalletId, nav]
  );

  /** Derive heading from current step + selected wallet */
  const heading =
    nav.current === "wallet-confirm" && wallet
      ? wallet.name
      : step?.label;

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        nav.reset();
        setSelectedWalletId(null);
      }
    },
    [nav, setSelectedWalletId]
  );

  return {
    nav,
    step,
    heading,
    selectedWalletId,
    wallet,
    selectWallet,
    handleOpenChange,
  };
}
