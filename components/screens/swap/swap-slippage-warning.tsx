import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SwapSlippageWarningProps {
  onProceed: () => void;
  onAdjust: () => void;
}

export default function SwapSlippageWarning({ onProceed, onAdjust }: SwapSlippageWarningProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <ModalTitle>High Slippage Warning</ModalTitle>
      <ModalDescription>
        This swap has a high price impact. You may receive significantly less than expected.
      </ModalDescription>
      <div className="flex w-full gap-3">
        <Button variant="outline" onClick={onAdjust} className="flex-1">
          Adjust
        </Button>
        <Button onClick={onProceed} className="flex-1">
          Proceed Anyway
        </Button>
      </div>
    </div>
  );
}
