"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTrigger,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useConnectModal } from "@/hooks/use-connect-modal";
import { getScreen } from "@/components/screens/registry";

import "@/components/screens";

const ConnectWalletButton = () => {
  const { nav, heading, screenContext, handleOpenChange } =
    useConnectModal("wallet-select");

  const renderer = getScreen(nav.current);

  return (
    <Modal onOpenChange={handleOpenChange}>
      <ModalTrigger render={<Button>Connect Wallet</Button>} />
      <ModalContent>
        <ModalHeader
          heading={heading}
          headingKey={nav.current}
          onBack={nav.canGoBack ? nav.back : undefined}
        />
        <ModalBody pageKey={nav.current}>
          {renderer?.(screenContext)}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWalletButton;
