import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface ReceiveSuccessProps {
  onDone: () => void;
}

export default function ReceiveSuccess({ onDone }: ReceiveSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Received</ModalTitle>
      <ModalDescription>
        Funds have been received successfully.
      </ModalDescription>
      <Button onClick={onDone} className="w-full">
        Done
      </Button>
    </div>
  );
}
