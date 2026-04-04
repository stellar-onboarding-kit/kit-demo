"use client";
import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../../ui/input";
import { PrimaryButton } from "../shared/buttons";

export const EmailStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [value, setValue] = useState("");
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);

  return (
    <form
      className="flex items-center justify-between bg-card rounded-[16px] p-2"
      onSubmit={(e) => { e.preventDefault(); if (value) onNext(); }}
    >
      <Input
        value={value}
        onChange={handleInput}
        placeholder="email@acme.com"
        className="bg-transparent outline-none border-none shadow-none focus-visible:ring-0 placeholder:text-muted-foreground font-bold"
        style={{ fontSize: "16px" }}
      />
      <PrimaryButton
        type="submit"
        className={cn("rounded-[12px]", value === "" ? "bg-foreground/5" : "")}
        disabled={value === ""}
      >
        <ArrowRight className="size-4 text-white" />
      </PrimaryButton>
    </form>
  );
};
