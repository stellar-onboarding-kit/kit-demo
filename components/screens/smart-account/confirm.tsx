import { ModalDescription, ModalTitle } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";

export default function SmartAccountConfirm() {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <Spinner shape="squircle" loading />
      <ModalTitle>Creating Account...</ModalTitle>
      <ModalDescription>
        Please wait while your smart account is being deployed.
      </ModalDescription>
    </div>
  );
}
