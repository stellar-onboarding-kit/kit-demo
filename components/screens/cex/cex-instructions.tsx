import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface CexInstructionsProps {
  onContinue: () => void;
}

export default function CexInstructions({ onContinue }: CexInstructionsProps) {
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2 text-center">
        <ModalTitle>Transfer from Exchange</ModalTitle>
        <ModalDescription>
          Send crypto from your exchange account to your Stellar wallet
        </ModalDescription>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--ck-body-color) text-xs font-bold text-white">1</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-(--ck-body-color)">Copy your wallet address</p>
            <p className="text-xs text-(--ck-body-color-muted)">You'll need this to send funds</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--ck-body-color) text-xs font-bold text-white">2</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-(--ck-body-color)">Go to your exchange</p>
            <p className="text-xs text-(--ck-body-color-muted)">Open Coinbase, Binance, or your preferred exchange</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--ck-body-color) text-xs font-bold text-white">3</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-(--ck-body-color)">Send to your address</p>
            <p className="text-xs text-(--ck-body-color-muted)">Paste your address and confirm the transfer</p>
          </div>
        </div>
      </div>

      <Button onClick={onContinue} className="w-full">
        Copy Address
      </Button>
    </div>
  );
}
