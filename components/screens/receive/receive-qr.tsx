import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/lib/stellar";

interface ReceiveQrProps {
  address: string | null;
  onCopy: () => void;
}

export default function ReceiveQr({ address, onCopy }: ReceiveQrProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <div className="flex size-48 items-center justify-center rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9)">
        <span className="text-xs text-(--ck-body-color-muted)">QR Code</span>
      </div>
      <ModalDescription>
        Scan this QR code or copy your Stellar address.
      </ModalDescription>
      <code className="w-full truncate rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-4 py-3 text-center text-xs text-(--ck-body-color)">
        {address ? truncateAddress(address, 8) : "—"}
      </code>
      <Button variant="outline" onClick={onCopy} className="w-full">
        Copy Address
      </Button>
    </div>
  );
}
