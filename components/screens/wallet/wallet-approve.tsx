import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { WALLETS } from "@/types/auth";

interface WalletApproveProps {
  walletId: string | null;
  onApproved: () => void;
  onRetry: () => void;
}

export default function WalletApprove({ walletId, onApproved, onRetry }: WalletApproveProps) {
  const wallet = WALLETS.find((w) => w.id === walletId);

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner
        shape="squircle"
        loading
        logo={
          wallet ? (
            <img src={`/icons/${wallet.icon}.svg`} alt={wallet.name} />
          ) : undefined
        }
      />
      <ModalTitle>Connecting...</ModalTitle>
      <ModalDescription>
        Accept the connection request in {wallet?.name ?? "your wallet"}.
      </ModalDescription>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onRetry}>Try again</Button>
        <Button onClick={onApproved}>Simulate Connect</Button>
      </div>
    </div>
  );
}
