"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { SOCIALS } from "@/types/auth";
import React from "react";

export const Socials: React.FC = () => (
  <div className="flex gap-1">
    {SOCIALS.map((social) => (
      <motion.div
        key={social.id}
        layout
        className="overflow-hidden rounded-xl bg-[#171717] p-3 flex-1 flex items-center justify-center"
      >
        <div className="flex items-center gap-2">
          <Image
            src={`/icons/${social.icon}.svg`}
            alt={social.name}
            width={24}
            height={24}
          />
        </div>
      </motion.div>
    ))}
  </div>
);
