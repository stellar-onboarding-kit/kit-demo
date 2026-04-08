'use client'

import { ModalDescription } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/lib/stellar";
import { QRCode } from "react-qrcode-logo";
import { useState } from "react";

interface ReceiveQrProps {
  address: string | null;
  onCopy: () => void;
}

export default function ReceiveQr({ address, onCopy }: ReceiveQrProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <div className="flex items-center justify-center rounded-2xl bg-white p-4">
        {address ? (
          <QRCode
            value={address}
            size={192}
            quietZone={10}
            bgColor="#FFFFFF"
            fgColor="#000000"
            qrStyle="squares"
            eyeRadius={5}
          />
        ) : (
          <div className="flex size-48 items-center justify-center">
            <span className="text-xs text-(--ck-body-color-muted)">No address</span>
          </div>
        )}
      </div>
      <ModalDescription>
        Scan this QR code or copy your Stellar address.
      </ModalDescription>
      <code className="w-full truncate rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-4 py-3 text-center text-xs text-(--ck-body-color)">
        {address ? truncateAddress(address, 8) : "—"}
      </code>
      <Button variant="outline" onClick={handleCopy} className="w-full">
        {copied ? "✓ Copied!" : "📋 Copy Address"}
      </Button>
    </div>
  );
}
