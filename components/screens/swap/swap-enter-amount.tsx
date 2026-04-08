import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SwapEnterAmountProps {
  onNext: () => void;
}

export default function SwapEnterAmount({ onNext }: SwapEnterAmountProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Enter Amount</ModalTitle>
      <Input type="number" placeholder="0.00" />
      <Button onClick={onNext} className="w-full">
        Review Swap
      </Button>
    </div>
  );
}
