"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "../shared/buttons";

export const PasskeyStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <form
    className="flex items-center justify-between bg-card rounded-[16px] p-2"
    onSubmit={(e) => { e.preventDefault(); onNext(); }}
  >
    <div className="flex items-center gap-2 px-2">
      <Image src="/icons/finger-print.svg" alt="passkey" width={24} height={24} unoptimized />
      <p className="text-muted-foreground my-0" style={{ fontSize: "16px" }}>
        Login with passkey
      </p>
    </div>
    <PrimaryButton type="submit" className="rounded-[12px]">
      <ArrowRight className="size-4 text-white" />
    </PrimaryButton>
  </form>
);
