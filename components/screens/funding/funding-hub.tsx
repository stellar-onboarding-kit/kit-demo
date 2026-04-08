import { ModalTitle } from "@/components/ui/modal";
import type { StepId } from "@/types/auth";

interface FundingHubProps {
  onSelect: (route: StepId) => void;
}

const FUNDING_ROUTES: { id: StepId; label: string; description: string }[] = [
  { id: "buy-enter-amount",    label: "Buy",          description: "Purchase crypto with card or bank" },
  { id: "receive-select-asset", label: "Receive",      description: "Receive from a Stellar wallet" },
  { id: "cex-instructions",    label: "From Exchange", description: "Transfer from a centralized exchange" },
  { id: "bridge-connect",      label: "Bridge",        description: "Bridge from another chain" },
  { id: "request-generate",    label: "Request",       description: "Request payment from someone" },
];

export default function FundingHub({ onSelect }: FundingHubProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Add Funds</ModalTitle>
      {FUNDING_ROUTES.map((route) => (
        <button
          key={route.id}
          onClick={() => onSelect(route.id)}
          className="flex flex-col gap-1 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
        >
          <span className="text-sm font-medium text-(--ck-body-color)">{route.label}</span>
          <span className="text-xs text-(--ck-body-color-muted)">{route.description}</span>
        </button>
      ))}
    </div>
  );
}
