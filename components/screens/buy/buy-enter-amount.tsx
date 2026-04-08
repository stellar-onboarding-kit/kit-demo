import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BuyEnterAmountProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function BuyEnterAmount({ value, onChange, onNext }: BuyEnterAmountProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Buy Crypto</ModalTitle>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-(--ck-body-color-muted)">Amount (USD)</label>
        <Input
          type="number"
          placeholder="0.00"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <Button onClick={onNext} disabled={!value || Number(value) <= 0} className="w-full">
        Continue
      </Button>
    </div>
  );
}
