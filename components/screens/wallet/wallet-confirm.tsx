import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { WALLETS } from "@/types/auth";

interface WalletConfirmProps {
  walletId: string | null;
}

export default function WalletConfirm({ walletId }: WalletConfirmProps) {
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
        Accept the connection request in{" "}
        {wallet?.name ?? "your wallet"}.
      </ModalDescription>
    </div>
  );
}
