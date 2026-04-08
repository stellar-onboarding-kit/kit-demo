import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

interface SendConfirmProps {
  loading: boolean;
  error: string | null;
}

export default function SendConfirm({ loading, error }: SendConfirmProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      {loading && <Spinner shape="circle" loading />}
      <ModalTitle>{error ? "Failed" : "Sending..."}</ModalTitle>
      <ModalDescription>
        {error ?? "Your transaction is being signed and submitted."}
      </ModalDescription>
    </div>
  );
}
