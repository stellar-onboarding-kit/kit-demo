import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/lib/stellar";
import { useState } from "react";

interface CexCopyAddressProps {
  address: string | null;
  onDone: () => void;
}

export default function CexCopyAddress({ address, onDone }: CexCopyAddressProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2 text-center">
        <ModalTitle>Your Wallet Address</ModalTitle>
        <ModalDescription>
          Copy this address to send funds from your exchange
        </ModalDescription>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
          <p className="break-all text-center text-sm font-mono text-(--ck-body-color)">
            {address}
          </p>
        </div>

        <Button onClick={handleCopy} variant="outline" className="w-full">
          {copied ? "✓ Copied!" : "📋 Copy Address"}
        </Button>
      </div>

      <div className="rounded-2xl border border-(--ck-body-divider) bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <p className="text-xs text-(--ck-body-color-muted)">
          ⚠️ Make sure to select the Stellar network when sending from your exchange. Sending on the wrong network may result in loss of funds.
        </p>
      </div>

      <Button onClick={onDone} className="w-full">
        Done
      </Button>
    </div>
  );
}
