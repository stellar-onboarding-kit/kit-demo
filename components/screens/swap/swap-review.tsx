import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SwapReviewProps {
  tokenIn?: string;
  tokenOut?: string;
  amountIn?: string;
  amountOut?: string;
  rate?: string;
  onConfirm: () => void;
}

export default function SwapReview({
  tokenIn = "—",
  tokenOut = "—",
  amountIn = "—",
  amountOut = "—",
  rate = "—",
  onConfirm,
}: SwapReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review Swap</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You pay</span>
          <span className="text-(--ck-body-color)">{amountIn} {tokenIn}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You receive</span>
          <span className="text-(--ck-body-color)">{amountOut} {tokenOut}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Rate</span>
          <span className="text-(--ck-body-color)">{rate}</span>
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
