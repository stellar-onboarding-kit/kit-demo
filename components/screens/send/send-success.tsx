import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SendSuccessProps {
  onDone: () => void;
}

export default function SendSuccess({ onDone }: SendSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Sent</ModalTitle>
      <ModalDescription>
        Your transaction has been submitted successfully.
      </ModalDescription>
      <Button onClick={onDone} className="w-full">
        Done
      </Button>
    </div>
  );
}
