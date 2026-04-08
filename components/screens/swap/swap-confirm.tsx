import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

export default function SwapConfirm() {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="circle" loading />
      <ModalTitle>Swapping...</ModalTitle>
      <ModalDescription>
        Your swap is being processed.
      </ModalDescription>
    </div>
  );
}
