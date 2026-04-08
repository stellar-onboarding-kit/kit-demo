import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SwapSuccessProps {
  onDone: () => void;
}

export default function SwapSuccess({ onDone }: SwapSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Swap Complete</ModalTitle>
      <ModalDescription>
        Your tokens have been swapped successfully.
      </ModalDescription>
      <Button onClick={onDone} className="w-full">
        Done
      </Button>
    </div>
  );
}
