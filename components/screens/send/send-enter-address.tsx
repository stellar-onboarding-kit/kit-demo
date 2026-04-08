import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SendEnterAddressProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function SendEnterAddress({ value, onChange, onNext }: SendEnterAddressProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Enter Address</ModalTitle>
      <Input
        placeholder="Stellar address (G...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onNext} disabled={!value.trim()} className="w-full">
        Continue
      </Button>
    </div>
  );
}
