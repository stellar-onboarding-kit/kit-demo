'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { WALLETS } from "@/types/auth";
import { useState, useEffect } from "react";

interface WalletApproveProps {
  walletId: string | null;
  onApproved: (address: string) => void;
  onRetry: () => void;
}

export default function WalletApprove({ walletId, onApproved, onRetry }: WalletApproveProps) {
  const wallet = WALLETS.find((w) => w.id === walletId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    if (!walletId) return;
    
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/wallet/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Connection failed");
        return;
      }

      onApproved(data.address);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Connection failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleConnect();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <ModalTitle>Connection Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onRetry}>Back</Button>
          <Button onClick={handleConnect}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner
        shape="squircle"
        loading={loading}
        logo={
          wallet ? (
            <img src={`/icons/${wallet.icon}.svg`} alt={wallet.name} />
          ) : undefined
        }
      />
      <ModalTitle>Connecting...</ModalTitle>
      <ModalDescription>
        Accept the connection request in {wallet?.name ?? "your wallet"}.
      </ModalDescription>
    </div>
  );
}
