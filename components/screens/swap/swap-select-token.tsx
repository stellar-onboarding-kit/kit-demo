import { ModalTitle } from "@/components/ui/modal";
import { TOKENS } from "@/types/auth";

interface SwapSelectTokenProps {
  direction: "in" | "out";
  current: string;
  onSelect: (token: string) => void;
}

export default function SwapSelectToken({ direction, current, onSelect }: SwapSelectTokenProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Select Token to {direction === "in" ? "Swap" : "Receive"}</ModalTitle>
      {TOKENS.map((token) => (
        <button
          key={token}
          onClick={() => onSelect(token)}
          className={`flex items-center gap-3 rounded-2xl p-4 text-left text-sm font-medium transition-colors hover:opacity-80 ${
            token === current
              ? "bg-(--ck-accent-color)/10 text-(--ck-accent-color)"
              : "bg-(--ck-body-background-secondary,#f6f7f9) text-(--ck-body-color)"
          }`}
        >
          {token}
        </button>
      ))}
    </div>
  );
}
