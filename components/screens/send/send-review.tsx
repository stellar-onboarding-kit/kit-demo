import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SendReviewProps {
  to?: string;
  amount?: string;
  token?: string;
  fee?: string;
  onConfirm: () => void;
}

export default function SendReview({
  to = "—",
  amount = "—",
  token = "",
  fee = "—",
  onConfirm,
}: SendReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">To</span>
          <span className="text-(--ck-body-color)">{to}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Amount</span>
          <span className="text-(--ck-body-color)">{amount} {token}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Network Fee</span>
          <span className="text-(--ck-body-color)">{fee}</span>
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
