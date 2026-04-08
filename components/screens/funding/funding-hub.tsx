import { ModalTitle } from "@/components/ui/modal";
import { FUNDING_ROUTES } from "@/types/auth";
import type { StepId } from "@/types/auth";

interface FundingHubProps {
  onSelect: (route: StepId) => void;
}

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
