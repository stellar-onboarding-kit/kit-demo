import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface CreateSmartAccountProps {
  onConfirm: () => void;
}

export default function CreateSmartAccount({ onConfirm }: CreateSmartAccountProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Create Smart Account</ModalTitle>
      <ModalDescription>
        A smart account gives you gasless transactions, session keys, and batch operations.
      </ModalDescription>
      <Button onClick={onConfirm} className="w-full">
        Create Account
      </Button>
    </div>
  );
}
