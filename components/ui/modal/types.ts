import type { Dialog } from "@base-ui/react/dialog";

export interface ModalProps extends Dialog.Root.Props {
  children: React.ReactNode;
}

export interface ModalContentProps extends Dialog.Popup.Props {
  showCloseButton?: boolean;
  children: React.ReactNode;
}

export interface ModalFooterProps extends React.ComponentProps<"div"> {
  showCloseButton?: boolean;
  children?: React.ReactNode;
}
