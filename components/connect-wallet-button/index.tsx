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
import { useAuthStore } from "@/stores/auth";
import { getScreen } from "@/components/screens/registry";
import { truncateAddress } from "@/lib/stellar";

import "@/components/screens";

const ConnectWalletButton = () => {
  const isConnected = useAuthStore((s) => s.isConnected);
  const connectedAddress = useAuthStore((s) => s.connectedAddress);
  
  const initialScreen = isConnected ? "wallet-home" : "wallet-select";
  const { nav, heading, screenContext, handleOpenChange } = useConnectModal(initialScreen);

  const renderer = getScreen(nav.current);

  const buttonText = isConnected && connectedAddress 
    ? truncateAddress(connectedAddress) 
    : "Connect Wallet";

  return (
    <Modal onOpenChange={handleOpenChange}>
      <ModalTrigger render={<Button>{buttonText}</Button>} />
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
