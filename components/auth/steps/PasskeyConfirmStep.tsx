"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { PrimaryButton } from "../shared/buttons";

export const PasskeyConfirmStep: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] p-0.5">
      <motion.div
        className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%]"
        style={{ background: "conic-gradient(from 0deg, transparent 0%, #4DAFFE 10%, #4DAFFE 25%, transparent 35%)" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <div className="relative z-10 flex items-center justify-center rounded-[20px] p-0.5 bg-background">
        <div className="flex items-center justify-center rounded-2xl bg-card p-1">
          <div className="flex size-16 items-center justify-center rounded-xl bg-muted">
            <Image src="/icons/finger-print.svg" alt="passkey" width={32} height={32} unoptimized />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2 pb-1.5">
      <h1 className="text-xl font-bold">Waiting for passkey</h1>
      <p className="text-muted-foreground w-[75%] text-center text-sm leading-6">
        Please follow prompts to verify your passkey
      </p>
      <PrimaryButton className="mt-4 w-full py-3">Continue</PrimaryButton>
    </div>
  </div>
);
