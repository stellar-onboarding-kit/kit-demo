import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/lib/stellar";

interface SendReviewProps {
  to: string;
  amount: string;
  asset: string;
  onConfirm: () => void;
}

export default function SendReview({ to, amount, asset, onConfirm }: SendReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">To</span>
          <span className="text-(--ck-body-color)">{truncateAddress(to)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Amount</span>
          <span className="text-(--ck-body-color)">{amount} {asset}</span>
        </div>
      </div>
      <ModalDescription>
        This will build a Stellar payment XDR for signing.
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">
        Confirm Send
      </Button>
    </div>
  );
}
