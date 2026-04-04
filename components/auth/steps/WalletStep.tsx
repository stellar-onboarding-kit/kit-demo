"use client";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { WALLETS } from "@/types/auth";
import { PrimaryButton } from "../shared/buttons";

export const WalletStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="flex flex-col gap-1">
    {WALLETS.map((wallet) => (
      <div
        key={wallet.id}
        onClick={onNext}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        className="rounded-[16px] bg-card hover:bg-muted transition-colors cursor-pointer p-4 flex items-center gap-4"
      >
        <Image src={`/icons/${wallet.icon}.svg`} alt={wallet.name} width={32} height={32} unoptimized />
        <p className="text-base font-medium my-0">{wallet.name}</p>
      </div>
    ))}
    <PrimaryButton className="mt-2 w-full py-3 flex items-center gap-2 bg-[#FF2056] hover:bg-[#FF2056]/80">
      <PlusIcon className="size-4" />
      Create a new wallet
    </PrimaryButton>
  </div>
);

export const WalletConfirmStep: React.FC = () => (
  <div className="py-6 text-center text-muted-foreground">Wallet successfully linked.</div>
);
