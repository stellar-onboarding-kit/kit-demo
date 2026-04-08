import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface ReceiveQrProps {
  onCopy: () => void;
}

export default function ReceiveQr({ onCopy }: ReceiveQrProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <ModalTitle>Receive</ModalTitle>
      <div className="flex size-48 items-center justify-center rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9)">
        <span className="text-xs text-(--ck-body-color-muted)">QR Code</span>
      </div>
      <ModalDescription>
        Scan this QR code or copy the address below.
      </ModalDescription>
      <code className="w-full truncate rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-4 py-3 text-center text-xs text-(--ck-body-color)">
        GABCD...WXYZ
      </code>
      <Button variant="outline" onClick={onCopy} className="w-full">
        Copy Address
      </Button>
    </div>
  );
}
