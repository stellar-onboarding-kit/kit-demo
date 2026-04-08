import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface BuyReviewProps {
  amount: string;
  paymentMethod: string;
  onConfirm: () => void;
}

const PAYMENT_METHOD_NAMES: Record<string, string> = {
  card: "Credit/Debit Card",
  bank: "Bank Transfer",
  "apple-pay": "Apple Pay",
  "google-pay": "Google Pay",
};

export default function BuyReview({ amount, paymentMethod, onConfirm }: BuyReviewProps) {
  const xlmAmount = (Number(amount) / 0.16).toFixed(4);
  const fee = (Number(amount) * 0.029).toFixed(2);
  const total = (Number(amount) + Number(fee)).toFixed(2);

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Review Purchase</ModalTitle>
      <div className="flex flex-col gap-2 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You pay</span>
          <span className="text-(--ck-body-color)">${amount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">You receive</span>
          <span className="text-(--ck-body-color)">{xlmAmount} XLM</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Payment method</span>
          <span className="text-(--ck-body-color)">{PAYMENT_METHOD_NAMES[paymentMethod]}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-(--ck-body-color-muted)">Fee</span>
          <span className="text-(--ck-body-color)">${fee}</span>
        </div>
        <div className="my-2 border-t border-(--ck-body-divider)" />
        <div className="flex justify-between font-medium">
          <span className="text-(--ck-body-color)">Total</span>
          <span className="text-(--ck-body-color)">${total}</span>
        </div>
      </div>
      <ModalDescription>
        Powered by Stripe
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">
        Confirm Purchase
      </Button>
    </div>
  );
}
