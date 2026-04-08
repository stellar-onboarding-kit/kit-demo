import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SettingsDisconnectProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function SettingsDisconnect({ onConfirm, onCancel }: SettingsDisconnectProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <ModalTitle>Disconnect Wallet</ModalTitle>
      <ModalDescription>
        Are you sure you want to disconnect? You will need to reconnect to use the app.
      </ModalDescription>
      <div className="flex w-full gap-3">
        <Button variant="outline" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
        <Button onClick={onConfirm} className="flex-1">
          Disconnect
        </Button>
      </div>
    </div>
  );
}
