import { useCallback } from "react";
import { useHistory } from "@/hooks/use-history";
import { useStellar } from "@/hooks/use-stellar";
import { useAuthStore } from "@/stores/auth";
import { useWalletStore } from "@/stores/wallet";
import { getStep, WALLETS } from "@/types/auth";
import type { StepId } from "@/types/auth";
import type { ScreenContext } from "@/components/screens/registry";

export function useConnectModal(initial: StepId = "wallet-select") {
  const nav = useHistory(initial);
  const stellar = useStellar();

  const selectedWalletId = useAuthStore((s) => s.selectedWalletId);
  const setSelectedWalletId = useAuthStore((s) => s.setSelectedWalletId);

  const balances = useWalletStore((s) => s.balances);
  const payments = useWalletStore((s) => s.payments);
  const loading = useWalletStore((s) => s.loading);
  const error = useWalletStore((s) => s.error);
  const txHash = useWalletStore((s) => s.txHash);
  const send = useWalletStore((s) => s.send);
  const setSend = useWalletStore((s) => s.setSend);
  const swap = useWalletStore((s) => s.swap);
  const setSwap = useWalletStore((s) => s.setSwap);

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
    address: stellar.address,
    balances,
    payments,
    loading,
    error,
    txHash,
    send,
    setSend,
    swap,
    setSwap,
    fetchBalances: stellar.fetchBalances,
    fetchPayments: stellar.fetchPayments,
    prepareSendXdr: stellar.prepareSendXdr,
    prepareSwapXdr: stellar.prepareSwapXdr,
    setTxHash: stellar.setTxHash,
  };

  return {
    nav,
    heading,
    screenContext,
    handleOpenChange,
  };
}
