import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BuyEnterAmountProps {
  value: string;
  provider: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onChangeProvider: () => void;
}

const PROVIDER_NAMES: Record<string, string> = {
  card: "Credit and Debit card",
  moonpay: "Moonpay",
  coinbase: "Coinbase",
  mercuryo: "Mercuryo",
};

const PROVIDER_ICONS: Record<string, string> = {
  card: "💳",
  moonpay: "🌙",
  coinbase: "🔵",
  mercuryo: "✦",
};

export default function BuyEnterAmount({ value, provider, onChange, onNext, onChangeProvider }: BuyEnterAmountProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Select the Amount</ModalTitle>
      
      <button
        onClick={onChangeProvider}
        className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 transition-colors hover:opacity-80"
      >
        <span className="text-2xl">{PROVIDER_ICONS[provider]}</span>
        <div className="flex flex-1 flex-col text-left">
          <span className="text-sm font-medium text-(--ck-body-color)">{PROVIDER_NAMES[provider]}</span>
          <span className="text-xs text-(--ck-body-color-muted)">Fees 1-2%</span>
        </div>
        <span className="text-(--ck-body-color-muted)">›</span>
      </button>

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
