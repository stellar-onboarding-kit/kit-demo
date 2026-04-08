import { ModalTitle } from "@/components/ui/modal";
import { SETTINGS_ITEMS } from "@/types/auth";
import type { StepId } from "@/types/auth";

interface SettingsMainProps {
  onSelect: (route: StepId) => void;
}

export default function SettingsMain({ onSelect }: SettingsMainProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Settings</ModalTitle>
      {SETTINGS_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className="rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left text-sm font-medium text-(--ck-body-color) transition-colors hover:opacity-80"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
