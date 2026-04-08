'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface SwapConfirmProps {
  sellAsset: string;
  buyAsset: string;
  amount: string;
  onSuccess: (txHash: string, received: string) => void;
  onRetry: () => void;
}

export default function SwapConfirm({ sellAsset, buyAsset, amount, onSuccess, onRetry }: SwapConfirmProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSwap = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/transaction/swap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sellAsset, buyAsset, amount }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Swap failed");
        return;
      }

      onSuccess(data.hash, data.amountReceived);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Swap failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSwap();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <ModalTitle>Swap Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onRetry}>Back</Button>
          <Button onClick={handleSwap}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="circle" loading={loading} />
      <ModalTitle>Swapping...</ModalTitle>
      <ModalDescription>
        Building and submitting your swap transaction.
      </ModalDescription>
    </div>
  );
}
