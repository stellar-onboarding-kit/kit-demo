'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface BuyConfirmProps {
  amount: string;
  paymentMethod: string;
  onSuccess: () => void;
  onRetry: () => void;
}

export default function BuyConfirm({ amount, paymentMethod, onSuccess, onRetry }: BuyConfirmProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (Math.random() < 0.1) {
        setError("Payment failed. Please try again.");
        return;
      }

      onSuccess();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Purchase failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePurchase();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <ModalTitle>Purchase Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onRetry}>Back</Button>
          <Button onClick={handlePurchase}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="circle" loading={loading} />
      <ModalTitle>Processing...</ModalTitle>
      <ModalDescription>
        Your payment is being processed. This may take a moment.
      </ModalDescription>
    </div>
  );
}
