import { ModalTitle } from "@/components/ui/modal";
import type { StepId } from "@/types/auth";

interface SendSelectTypeProps {
  onSelect: (type: StepId) => void;
}

const SEND_TYPES: { id: StepId; label: string; description: string }[] = [
  { id: "send-enter-address", label: "Wallet Address", description: "Send to an address or ENS" },
  { id: "send-select-contact", label: "Contact",       description: "Send to a saved contact" },
  { id: "send-scan-qr",       label: "Scan QR",        description: "Scan a QR code" },
];

export default function SendSelectType({ onSelect }: SendSelectTypeProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Send</ModalTitle>
      {SEND_TYPES.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className="flex flex-col gap-1 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
        >
          <span className="text-sm font-medium text-(--ck-body-color)">{type.label}</span>
          <span className="text-xs text-(--ck-body-color-muted)">{type.description}</span>
        </button>
      ))}
    </div>
  );
}
