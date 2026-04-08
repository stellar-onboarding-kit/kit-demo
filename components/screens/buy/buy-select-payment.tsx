import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "card", name: "Credit/Debit Card", icon: "💳", description: "Instant" },
  { id: "bank", name: "Bank Transfer", icon: "🏦", description: "1-3 business days" },
  { id: "apple-pay", name: "Apple Pay", icon: "🍎", description: "Instant" },
  { id: "google-pay", name: "Google Pay", icon: "📱", description: "Instant" },
];

interface BuySelectPaymentProps {
  onSelect: (methodId: string) => void;
}

export default function BuySelectPayment({ onSelect }: BuySelectPaymentProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Select Payment Method</ModalTitle>
      <div className="flex flex-col gap-2">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
          >
            <span className="text-2xl">{method.icon}</span>
            <div className="flex flex-1 flex-col">
              <span className="font-medium text-(--ck-body-color)">{method.name}</span>
              <span className="text-sm text-(--ck-body-color-muted)">{method.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
