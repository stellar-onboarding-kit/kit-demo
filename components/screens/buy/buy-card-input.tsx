import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface BuyCardInputProps {
  amount: string;
  onConfirm: () => void;
}

export default function BuyCardInput({ amount, onConfirm }: BuyCardInputProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ") : cleaned;
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const isValid = cardNumber.replace(/\s/g, "").length === 16 && expiry.length === 5 && cvc.length === 3;

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Select the Amount</ModalTitle>
      
      <div className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <span className="text-2xl">💳</span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-(--ck-body-color)">Credit and Debit card</span>
          <span className="text-xs text-(--ck-body-color-muted)">Fees 1-2%</span>
        </div>
        <span className="text-(--ck-body-color-muted)">›</span>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="4141 4141 4141 4141"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value.slice(0, 19)))}
            className="pr-16"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="flex h-6 w-10 items-center justify-center rounded bg-white">
              <div className="flex gap-0.5">
                <div className="h-4 w-4 rounded-full bg-red-500 opacity-80" />
                <div className="h-4 w-4 rounded-full bg-orange-400 opacity-80 -ml-2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value.slice(0, 5)))}
            className="flex-1"
          />
          <Input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
            className="flex-1"
          />
        </div>
      </div>

      <Button onClick={onConfirm} disabled={!isValid} className="w-full">
        Buy
      </Button>

      <ModalDescription className="text-center">
        Powered by <span className="font-bold">stripe</span>
      </ModalDescription>
    </div>
  );
}
