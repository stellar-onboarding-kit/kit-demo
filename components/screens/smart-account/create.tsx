'use client'

import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface CreateSmartAccountProps {
  onSuccess: () => void;
}

export default function CreateSmartAccount({ onSuccess }: CreateSmartAccountProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createAccount = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      if (Math.random() < 0.05) {
        setError("Failed to deploy smart account");
        return;
      }

      onSuccess();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Account creation failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createAccount();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <ModalTitle>Creation Failed</ModalTitle>
        <ModalDescription className="text-red-500">{error}</ModalDescription>
        <Button onClick={createAccount} className="w-full">Try Again</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="squircle" loading={loading} />
      <ModalTitle>Creating Account...</ModalTitle>
      <ModalDescription>
        Please wait while your smart account is being deployed.
      </ModalDescription>
    </div>
  );
}
