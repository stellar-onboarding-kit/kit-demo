import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SendEnterAmountProps {
  value: string;
  asset: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function SendEnterAmount({ value, asset, onChange, onNext }: SendEnterAmountProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Enter Amount</ModalTitle>
      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="0.00"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
        />
        <span className="flex items-center px-3 text-sm font-medium text-(--ck-body-color)">{asset}</span>
      </div>
      <Button onClick={onNext} disabled={!value || Number(value) <= 0} className="w-full">
        Review
      </Button>
    </div>
  );
}
