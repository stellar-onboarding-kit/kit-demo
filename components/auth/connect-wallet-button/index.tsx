"use client";

import { useWalletConnectState } from "@/atoms/wallet-connect-state";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ConnectWalletButton() {
  const isConnected = useWalletConnectState((s) => s.isConnected);
  const setIsConnected = useWalletConnectState((s) => s.setIsConnected);

  const connectWallet = () => {
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
  };

  useEffect(() => {
    alert(isConnected);
  }, [isConnected]);

  return (
    <Button
      onClick={() => {
        isConnected ? disconnectWallet() : connectWallet();
      }}
    >
      Connect wallet
    </Button>
  );
}
