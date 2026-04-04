"use client";
import { SecondaryButton } from "../shared/buttons";
import { XIcon, ArrowLeft } from "lucide-react";
import React from "react";

export const DefaultHeader: React.FC<{ setOpen: (open: boolean) => void }> = ({
  setOpen,
}) => (
  <div className="w-full flex items-center justify-between p-2">
    <h2 className="text-lg font-semibold pl-3">Sign in</h2>
    <SecondaryButton
      onClick={() => setOpen(false)}
      className="w-[32px] h-[32px] rounded-full p-0 bg-[#171717]"
    >
      <XIcon className="size-5" />
    </SecondaryButton>
  </div>
);

export const PageHeader: React.FC<{
  onBack: () => void;
  title: string;
  setOpen: (open: boolean) => void;
}> = ({ onBack, title, setOpen }) => (
  <div className="relative w-full flex items-center justify-between p-2">
    <SecondaryButton
      onClick={onBack}
      className="bg-[#171717] size-[32px] rounded-full p-0"
    >
      <ArrowLeft />
    </SecondaryButton>
    <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
      {title}
    </h2>
    <SecondaryButton
      onClick={() => setOpen(false)}
      className="w-[32px] h-[32px] rounded-full p-0 bg-[#171717]"
    >
      <XIcon />
    </SecondaryButton>
  </div>
);
