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

const PROVIDER_ICONS: Record<string, string> = {
  card: "💳",
  moonpay: "🌙",
  coinbase: "🔵",
  mercuryo: "✦",
};

export default function BuyConfirm({ amount, provider, onSuccess, onRetry }: BuyConfirmProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);

  const handlePurchase = async () => {
    if (hasRun) return;
    
    setHasRun(true);
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (Math.random() < 0.1) {
        setError("Payment failed. Please try again.");
        setHasRun(false);
        return;
      }

      onSuccess();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Purchase failed");
      setHasRun(false);
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
        <div className="text-5xl text-red-500">✕</div>
        <ModalTitle>Purchase Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <div className="flex gap-3 w-full">
          <Button variant="outline" onClick={onRetry} className="flex-1">Back</Button>
          <Button onClick={handlePurchase} className="flex-1">Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>{PROVIDER_NAMES[provider] || "Processing"}</ModalTitle>
      
      <div className="relative flex items-center justify-center" style={{ width: '120px', height: '120px' }}>
        <Spinner shape="circle" loading={loading} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl">
            {PROVIDER_ICONS[provider] || "💳"}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium text-(--ck-body-color)">Please wait</p>
        <ModalDescription>
          Waiting for the transaction to confirm
        </ModalDescription>
      </div>
    </div>
  );
}
