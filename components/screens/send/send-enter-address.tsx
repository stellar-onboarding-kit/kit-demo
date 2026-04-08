import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SendEnterAddressProps {
  onNext: () => void;
}

export default function SendEnterAddress({ onNext }: SendEnterAddressProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Enter Address</ModalTitle>
      <Input placeholder="Wallet address or ENS name" />
      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
