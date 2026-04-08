import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SettingsDisconnectConfirmProps {
  onDone: () => void;
}

export default function SettingsDisconnectConfirm({ onDone }: SettingsDisconnectConfirmProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Disconnected</ModalTitle>
      <ModalDescription>
        Your wallet has been disconnected.
      </ModalDescription>
      <Button onClick={onDone} className="w-full">Close</Button>
    </div>
  );
}
