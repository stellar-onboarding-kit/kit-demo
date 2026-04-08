import { ModalDescription, ModalTitle } from "@/components/ui/modal";

interface Provider {
  id: string;
  name: string;
  icon: string;
  fees: string;
}

const PROVIDERS: Provider[] = [
  { id: "card", name: "Credit and Debit card", icon: "💳", fees: "1-2%" },
  { id: "moonpay", name: "Moonpay", icon: "🌙", fees: "1-2%" },
  { id: "coinbase", name: "Coinbase", icon: "🔵", fees: "1-2%" },
  { id: "mercuryo", name: "Mercuryo", icon: "✦", fees: "1-2%" },
];

interface BuySelectProviderProps {
  onSelect: (providerId: string) => void;
}

export default function BuySelectProvider({ onSelect }: BuySelectProviderProps) {
  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Select On Ramp</ModalTitle>
      <div className="flex flex-col gap-2">
        {PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            onClick={() => onSelect(provider.id)}
            className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
          >
            <span className="text-3xl">{provider.icon}</span>
            <div className="flex flex-1 flex-col">
              <span className="font-medium text-(--ck-body-color)">{provider.name}</span>
              <span className="text-sm text-(--ck-body-color-muted)">Fees {provider.fees}</span>
            </div>
            <span className="text-(--ck-body-color-muted)">›</span>
          </button>
        ))}
      </div>
      <ModalDescription className="text-center">
        We support multiple providers to give you the lowest fees and best support suited for your needs.
      </ModalDescription>
      <button className="text-center text-sm text-blue-500">
        ⓘ How does it work?
      </button>
    </div>
  );
}
