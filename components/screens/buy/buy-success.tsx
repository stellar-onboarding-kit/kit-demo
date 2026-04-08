import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface BuySuccessProps {
  amount: string;
  onDone: () => void;
}

export default function BuySuccess({ amount, onDone }: BuySuccessProps) {
  const xlmAmount = (Number(amount) / 0.16).toFixed(4);

  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <div className="text-5xl">✓</div>
      <ModalTitle>Purchase Complete</ModalTitle>
      <div className="rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-6 py-3">
        <p className="text-2xl font-bold text-(--ck-body-color)">{xlmAmount} XLM</p>
        <p className="text-sm text-(--ck-body-color-muted)">${amount}</p>
      </div>
      <ModalDescription>
        Your crypto has been added to your wallet.
      </ModalDescription>
      <Button onClick={onDone} className="w-full mt-2">Done</Button>
    </div>
  );
}
