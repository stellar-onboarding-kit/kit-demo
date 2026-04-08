import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onConnect: () => void;
}

export default function Welcome({ onConnect }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Welcome to Stellar</ModalTitle>
      <ModalDescription>
        Connect your wallet to get started with the decentralized web.
      </ModalDescription>
      <Button onClick={onConnect} className="w-full">
        Connect Wallet
      </Button>
    </div>
  );
}
