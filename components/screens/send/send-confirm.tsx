import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

export default function SendConfirm() {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="circle" loading />
      <ModalTitle>Sending...</ModalTitle>
      <ModalDescription>
        Your transaction is being processed.
      </ModalDescription>
    </div>
  );
}
