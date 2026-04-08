import ConnectWalletButton from "@/components/auth/connect-wallet-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <ConnectWalletButton />
    </div>
  )
}