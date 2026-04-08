import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SendEnterAmountProps {
  onNext: () => void;
}

export default function SendEnterAmount({ onNext }: SendEnterAmountProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Enter Amount</ModalTitle>
      <Input type="number" placeholder="0.00" />
      <Button onClick={onNext} className="w-full">
        Review
      </Button>
    </div>
  );
}
