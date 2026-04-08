'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface SendConfirmProps {
  destination: string;
  amount: string;
  asset: string;
  onSuccess: (txHash: string) => void;
  onRetry: () => void;
}

export default function SendConfirm({ destination, amount, asset, onSuccess, onRetry }: SendConfirmProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/transaction/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, amount, asset }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Transaction failed");
        return;
      }

      onSuccess(data.hash);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSend();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <ModalTitle>Transaction Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onRetry}>Back</Button>
          <Button onClick={handleSend}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="circle" loading={loading} />
      <ModalTitle>Sending...</ModalTitle>
      <ModalDescription>
        Your transaction is being signed and submitted.
      </ModalDescription>
    </div>
  );
}
