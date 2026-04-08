import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SendSuccessProps {
  txHash: string | null;
  onDone: () => void;
}

export default function SendSuccess({ txHash, onDone }: SendSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Sent</ModalTitle>
      {txHash && (
        <code className="w-full truncate rounded-xl bg-(--ck-body-background-secondary,#f6f7f9) px-4 py-3 text-center text-xs text-(--ck-body-color)">
          {txHash}
        </code>
      )}
      <ModalDescription>
        Your transaction has been submitted to the Stellar network.
      </ModalDescription>
      <Button onClick={onDone} className="w-full">Done</Button>
    </div>
  );
}
