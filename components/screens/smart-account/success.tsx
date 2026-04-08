import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface SmartAccountSuccessProps {
  onContinue: () => void;
}

export default function SmartAccountSuccess({ onContinue }: SmartAccountSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <ModalTitle>Wallet Ready</ModalTitle>
      <ModalDescription>
        Your smart account has been created successfully.
      </ModalDescription>
      <Button onClick={onContinue} className="w-full">
        Continue
      </Button>
    </div>
  );
}
