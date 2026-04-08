'use client'

import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import type { StellarBalance } from "@/lib/stellar";

interface WalletHomeProps {
  address: string | null;
  balances: StellarBalance[];
  loading: boolean;
  fetchBalances: () => Promise<void>;
  onSend: () => void;
  onReceive: () => void;
  onSwap: () => void;
  onCopy: () => void;
}

export default function WalletHome({
  address,
  balances,
  loading,
  fetchBalances,
  onSend,
  onReceive,
  onSwap,
  onCopy,
}: WalletHomeProps) {
  useEffect(() => {
    if (address) {
      fetchBalances();
    }
  }, [address]);

  const totalUsd = balances.reduce((sum, b) => sum + Number(b.usdValue || 0), 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <ModalTitle className="text-4xl font-bold">
          ${totalUsd.toFixed(2)}
        </ModalTitle>
        <p className="text-sm text-(--ck-body-color-muted)">Total Balance</p>
      </div>

      <div className="flex gap-2">
        <Button onClick={onSend} className="flex-1">Send</Button>
        <Button onClick={onSwap} className="flex-1">Swap</Button>
        <Button onClick={onReceive} variant="outline" className="flex-1">Receive</Button>
        <Button onClick={onCopy} variant="outline" className="px-3">📋</Button>
      </div>

      <div className="flex flex-col gap-2">
        {loading && balances.length === 0 ? (
          <p className="py-8 text-center text-sm text-(--ck-body-color-muted)">Loading...</p>
        ) : balances.length === 0 ? (
          <p className="py-8 text-center text-sm text-(--ck-body-color-muted)">No assets found</p>
        ) : (
          balances.map((balance) => (
            <div
              key={balance.asset}
              className="flex items-center justify-between rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4"
            >
              <div className="flex flex-col">
                <span className="font-medium text-(--ck-body-color)">{balance.asset}</span>
                <span className="text-sm text-(--ck-body-color-muted)">
                  ${balance.usdValue}
                </span>
              </div>
              <span className="font-medium text-(--ck-body-color)">
                {Number(balance.balance).toFixed(4)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
