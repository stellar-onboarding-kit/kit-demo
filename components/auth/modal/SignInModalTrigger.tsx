"use client";
import { ReactNode } from "react";
import { useAuthModalStore } from "@/hooks/useAuthModalStore";

export interface SignInModalTriggerProps {
  children: ReactNode;
}

export function SignInModalTrigger({ children }: SignInModalTriggerProps) {
  const setOpen = useAuthModalStore((s) => s.setOpen);
  return (
    <span
      onClick={() => setOpen(true)}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </span>
  );
}
