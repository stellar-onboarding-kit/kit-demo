"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const PrimaryButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => (
  <button
    type="button"
    className={cn(
      "rounded-full min-h-[40px] px-4 font-medium text-white bg-blue-500 hover:bg-blue-600/80 flex items-center justify-center transition-colors disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive?: boolean }
> = ({ children, className, isActive, ...props }) => (
  <button
    type="button"
    className={cn(
      "px-3 rounded-lg font-medium flex items-center justify-center w-fit select-none transition-colors border-none",
      isActive ? "bg-white/10" : "",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
