'use client'

import { Modal, ModalBody, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger, OrDivider } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ConnectWalletButton = () => {
  const [page, setPage] = useState<"list" | "detail">("list");
  return (
    <Modal>
      <ModalTrigger render={<Button>Connect Wallet</Button>} />
      <ModalContent>
        <ModalHeader
          heading={page === "list" ? "Select Wallet" : "MetaMask"}
          headingKey={page}
          onBack={page === "detail" ? () => setPage("list") : undefined}
          onInfo={page === "list" ? () => alert("Info clicked") : undefined}
        />
        <ModalBody pageKey={page}>
          {page === "list" ? (
            <div className="flex flex-col gap-3 text-center">
              {["MetaMask", "Coinbase", "Rainbow", "Phantom"].map((w) => (
                <button
                  key={w}
                  onClick={() => setPage("detail")}
                  className="rounded-2xl bg-[var(--ck-body-background-secondary,#f6f7f9)] p-4 text-left text-sm transition-colors hover:opacity-80"
                >
                  {w}
                </button>
              ))}
              <OrDivider />
              <p className="text-sm text-[var(--ck-body-color-muted)]">
                More wallets coming soon
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <Spinner shape="squircle" loading />
              <ModalTitle>Connecting...</ModalTitle>
              <ModalDescription>
                Accept the connection request in your wallet.
              </ModalDescription>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};


export default ConnectWalletButton