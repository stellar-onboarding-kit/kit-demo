import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

interface SwapConfirmProps {
  loading: boolean;
  error: string | null;
}

export default function SwapConfirm({ loading, error }: SwapConfirmProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      {loading && <Spinner shape="circle" loading />}
      <ModalTitle>{error ? "Swap Failed" : "Swapping..."}</ModalTitle>
      <ModalDescription>
        {error ?? "Building and submitting your swap transaction."}
      </ModalDescription>
    </div>
  );
}
