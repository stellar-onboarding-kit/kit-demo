import { useCallback } from "react";
import { useAuthStore } from "@/stores/auth";
import { useWalletStore } from "@/stores/wallet";
import {
  getBalances,
  getPayments,
  buildPaymentXdr,
  buildSwapXdr,
} from "@/lib/stellar";

export function useStellar() {
  const address = useAuthStore((s) => s.connectedAddress);
  const { setBalances, setPayments, setLoading, setError, setTxHash } =
    useWalletStore.getState();

  const fetchBalances = useCallback(async () => {
    if (!address) return;
    setLoading(true);
    setError(null);
    try {
      const balances = await getBalances(address);
      setBalances(balances);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch balances");
    } finally {
      setLoading(false);
    }
  }, [address, setBalances, setLoading, setError]);

  const fetchPayments = useCallback(async () => {
    if (!address) return;
    setLoading(true);
    setError(null);
    try {
      const payments = await getPayments(address);
      setPayments(payments);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch payments");
    } finally {
      setLoading(false);
    }
  }, [address, setPayments, setLoading, setError]);

  const prepareSendXdr = useCallback(() => {
    if (!address) return null;
    const { destination, amount, asset } = useWalletStore.getState().send;
    return buildPaymentXdr({ source: address, destination, amount, asset });
  }, [address]);

  const prepareSwapXdr = useCallback(() => {
    if (!address) return null;
    const { sellAsset, buyAsset, amount, slippage } = useWalletStore.getState().swap;
    return buildSwapXdr({ source: address, sellAsset, buyAsset, amount, slippage });
  }, [address]);

  return {
    address,
    fetchBalances,
    fetchPayments,
    prepareSendXdr,
    prepareSwapXdr,
    setTxHash,
    setError,
    setLoading,
  };
}
