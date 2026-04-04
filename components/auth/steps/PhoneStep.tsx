"use client";
import { Input } from "../../ui/input";
import { PrimaryButton } from "../shared/buttons";
import { ArrowRight } from "lucide-react";
import React, { useState, useCallback } from "react";

export const PhoneStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [value, setValue] = useState("");
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );
  return (
    <form
      className="flex items-center justify-between bg-[#171717] rounded-[16px] p-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (value) onNext();
      }}
    >
      <Input
        value={value}
        onChange={handleInput}
        placeholder="+1 (555) 555-5555"
        className="focus-visible:border-none focus-visible:ring-0 bg-transparent dark:bg-transparent outline-none border-none shadow-none focus:outline-none focus:ring-0 focus:border-none text-[#262626] font-xl text-white font-bold"
        style={{ fontSize: "16px" }}
      />
      <div>
        <PrimaryButton
          type="submit"
          className={
            value === "" ? "bg-[#FFFFFF]/5 rounded-[12px]" : "rounded-[12px]"
          }
          disabled={value === ""}
        >
          <ArrowRight className="text-white" />
        </PrimaryButton>
      </div>
    </form>
  );
};
