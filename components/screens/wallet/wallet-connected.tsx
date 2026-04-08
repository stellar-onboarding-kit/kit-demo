import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/lib/stellar";

interface WalletConnectedProps {
  address: string | null;
  onContinue: () => void;
}

export default function WalletConnected({ address, onContinue }: WalletConnectedProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Connected</ModalTitle>
      {address && (
        <code className="rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-4 py-3 text-xs text-(--ck-body-color)">
          {truncateAddress(address)}
        </code>
      )}
      <ModalDescription>
        Your wallet is connected. Set up a smart account for the best experience.
      </ModalDescription>
      <Button onClick={onContinue} className="w-full">Continue</Button>
    </div>
  );
}
