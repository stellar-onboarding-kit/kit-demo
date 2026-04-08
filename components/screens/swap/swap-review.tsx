import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SwapReviewProps {
  onConfirm: () => void;
}

export default function SwapReview({ onConfirm }: SwapReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review Swap</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You pay</span>
          <span className="text-(--ck-body-color)">0.00 XLM</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You receive</span>
          <span className="text-(--ck-body-color)">0.00 USDC</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Rate</span>
          <span className="text-(--ck-body-color)">1 XLM = 0.00 USDC</span>
        </div>
      </div>
      <ModalDescription>
        Rate may change. Swap will revert if price moves unfavorably.
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">
        Confirm Swap
      </Button>
    </div>
  );
}
