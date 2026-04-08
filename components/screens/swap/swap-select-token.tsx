import { ModalTitle } from "@/components/ui/modal";
import { TOKENS } from "@/types/auth";

interface SwapSelectTokenProps {
  direction: "in" | "out";
  onSelect: () => void;
}

export default function SwapSelectToken({ direction, onSelect }: SwapSelectTokenProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Select Token to {direction === "in" ? "Swap" : "Receive"}</ModalTitle>
      {TOKENS.map((token) => (
        <button
          key={token}
          onClick={onSelect}
          className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left text-sm font-medium text-(--ck-body-color) transition-colors hover:opacity-80"
        >
          {token}
        </button>
      ))}
    </div>
  );
}
