import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SwapReviewProps {
  sellAsset: string;
  buyAsset: string;
  amount: string;
  slippage: number;
  onConfirm: () => void;
}

export default function SwapReview({ sellAsset, buyAsset, amount, slippage, onConfirm }: SwapReviewProps) {
  const minReceived = (Number(amount) * (1 - slippage)).toFixed(7);

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review Swap</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You send</span>
          <span className="text-(--ck-body-color)">{amount} {sellAsset}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You receive (min)</span>
          <span className="text-(--ck-body-color)">{minReceived} {buyAsset}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Slippage</span>
          <span className="text-(--ck-body-color)">{(slippage * 100).toFixed(1)}%</span>
        </div>
      </div>
      <ModalDescription>
        Uses Stellar path_payment_strict_send for best rate.
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">Confirm Swap</Button>
    </div>
  );
}
