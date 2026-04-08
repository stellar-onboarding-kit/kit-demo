import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SendReviewProps {
  onConfirm: () => void;
}

export default function SendReview({ onConfirm }: SendReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">To</span>
          <span className="text-(--ck-body-color)">0x1234...5678</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Amount</span>
          <span className="text-(--ck-body-color)">0.00 ETH</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Network Fee</span>
          <span className="text-(--ck-body-color)">~$0.00</span>
        </div>
      </div>
      <ModalDescription>
        Please review the details before confirming.
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">
        Confirm Send
      </Button>
    </div>
  );
}
