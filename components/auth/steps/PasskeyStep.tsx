"use client";
import Image from "next/image";
import { PrimaryButton } from "../shared/buttons";
import { ArrowRight } from "lucide-react";
import React from "react";

export const PasskeyStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <form
    className="flex items-center justify-between bg-[#171717] rounded-[16px] p-2"
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
  >
    <div className="flex items-center gap-2 px-2">
      <Image
        src="/icons/finger-print.svg"
        alt="passkey"
        width={24}
        height={24}
        unoptimized
      />
      <p
        className="focus-visible:border-none focus-visible:ring-0 my-0 outline-none border-none shadow-none focus:outline-none focus:ring-0 focus:border-none text-[#262626] font-xl text-[#6E6E6E]"
        style={{ fontSize: "16px" }}
      >
        Login with passkey
      </p>
    </div>
    <div>
      <PrimaryButton type="submit" className="rounded-[12px]">
        <ArrowRight className="text-white" />
      </PrimaryButton>
    </div>
  </form>
);
