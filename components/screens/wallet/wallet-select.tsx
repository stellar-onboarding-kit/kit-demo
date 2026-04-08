import { OrDivider } from "@/components/ui/modal";
import { WALLETS } from "@/types/auth";

interface WalletSelectProps {
  onSelect: (walletId: string) => void;
}

export default function WalletSelect({ onSelect }: WalletSelectProps) {
  return (
    <div className="flex flex-col gap-3 text-center">
      {WALLETS.map((w) => (
        <button
          key={w.id}
          onClick={() => onSelect(w.id)}
          className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left text-sm transition-colors hover:opacity-80"
        >
          <img
            src={`/icons/${w.icon}.svg`}
            alt={w.name}
            className="size-8"
          />
          {w.name}
        </button>
      ))}
      <OrDivider />
      <p className="text-sm text-(--ck-body-color-muted)">
        More wallets coming soon
      </p>
    </div>
  );
}
