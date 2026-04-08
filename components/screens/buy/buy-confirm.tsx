'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface BuyConfirmProps {
  amount: string;
  provider: string;
  onSuccess: () => void;
  onRetry: () => void;
}

const PROVIDER_NAMES: Record<string, string> = {
  card: "Credit Card",
  moonpay: "Moonpay",
  coinbase: "Coinbase",
  mercuryo: "Mercuryo",
};

export default function BuyConfirm({ amount, provider, onSuccess, onRetry }: BuyConfirmProps) {
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
      <ModalTitle>{PROVIDER_NAMES[provider] || "Processing"}</ModalTitle>
      <div className="relative">
        <Spinner shape="circle" loading={loading} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">
            {provider === "card" && "💳"}
            {provider === "moonpay" && "🌙"}
            {provider === "coinbase" && "🔵"}
            {provider === "mercuryo" && "✦"}
          </span>
        </div>
      </div>
      <ModalTitle>Please wait</ModalTitle>
      <ModalDescription>
        Waiting for the transaction to confirm
      </ModalDescription>
      <Button variant="outline" onClick={handlePurchase} className="mt-4">
        🔄 Try again
      </Button>
    </div>
  );
}
