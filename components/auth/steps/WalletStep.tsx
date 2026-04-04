"use client";
import Image from "next/image";
import { PrimaryButton } from "../shared/buttons";
import { PlusIcon } from "lucide-react";
import React from "react";

const WALLETS = [
  { id: "metamask", name: "MetaMask", icon: "metamask" },
  { id: "coinbase-wallet", name: "Coinbase Wallet", icon: "coinbase" },
  { id: "phantom", name: "Phantom", icon: "phantom" },
  { id: "rainbow-wallet", name: "Rainbow Wallet", icon: "rainbow-wallet" },
  { id: "other-wallets", name: "Other Wallets", icon: "other-wallets" },
];

export const WalletStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="flex flex-col gap-1">
    {WALLETS.map((wallet) => (
      <div
        key={wallet.id}
        onClick={onNext}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        className="rounded-[16px] bg-[#171717] p-4 flex items-center justify-start gap-6 cursor-pointer hover:bg-[#1e1e1e] transition-colors"
      >
        <Image
          src={`/icons/${wallet.icon}.svg`}
          alt={wallet.name}
          width={32}
          height={32}
        />
        <p className="text-lg tracking-wide my-0">{wallet.name}</p>
      </div>
    ))}
    <PrimaryButton className="mt-4 w-full py-3 flex items-center gap-2 bg-[#FF2056] hover:bg-[#FF2056]/80">
      <PlusIcon className="size-4.5" />
      Create a new wallet
    </PrimaryButton>
  </div>
);

export const WalletConfirmStep: React.FC = () => (
  <div className="py-6 text-center">Wallet successfully linked.</div>
);
