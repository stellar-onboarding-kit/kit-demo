"use client";
import Image from "next/image";
import { PrimaryButton } from "../shared/buttons";
import { motion } from "motion/react";
import React from "react";

export const PasskeyConfirmStep: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] p-0.25">
      <motion.div
        className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #4DAFFE 10%, #4DAFFE 25%, transparent 35%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 rounded-[22px]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="bg-preview-bg z-1 flex items-center justify-center rounded-[20px] p-0.5">
        <div className="flex items-center justify-center rounded-2xl bg-[#232323] p-1">
          <div className="flex size-16 items-center justify-center rounded-xl bg-[#000]">
            <Image
              src="/icons/finger-print.svg"
              alt="passkey"
              width={32}
              height={32}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2 pb-1.5">
      <h1 className="text-xl font-bold">Waiting for passkey</h1>
      <p className="text-gray-500 w-[75%] text-center text-md leading-6">
        Please follow prompts to verify your passkey
      </p>
      <PrimaryButton className="mt-4 w-full py-3 flex items-center gap-2">
        Continue
      </PrimaryButton>
    </div>
  </div>
);
