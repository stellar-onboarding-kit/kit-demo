import { useCallback } from "react";
import { useHistory } from "@/hooks/use-history";
import { useAuthStore } from "@/stores/auth";
import { getStep, WALLETS } from "@/types/auth";
import type { StepId } from "@/types/auth";
import type { ScreenContext } from "@/components/screens/registry";

export function useConnectModal(initial: StepId = "wallet-select") {
  const nav = useHistory(initial);

  const selectedWalletId = useAuthStore((s) => s.selectedWalletId);
  const setSelectedWalletId = useAuthStore((s) => s.setSelectedWalletId);

  const step = getStep(nav.current);
  const wallet = WALLETS.find((w) => w.id === selectedWalletId);

  const selectWallet = useCallback(
    (walletId: string) => {
      setSelectedWalletId(walletId);
      nav.push("wallet-approve");
    },
    [setSelectedWalletId, nav]
  );

  const heading =
    nav.current === "wallet-approve" && wallet
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

  const screenContext: ScreenContext = {
    nav,
    selectedWalletId,
    selectWallet,
  };

  return {
    nav,
    heading,
    screenContext,
    handleOpenChange,
  };
}
