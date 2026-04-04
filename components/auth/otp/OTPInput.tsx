"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OTPInput as BaseOTPInput } from "input-otp";
import { toast } from "sonner";
import { OTPSlot } from "./OTPSlot";

const CORRECT_OTP = "123456";

export function FamilyStyleOTP() {
  const [value, setValue] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const otpRef = useRef<HTMLInputElement>(null);

  const disabled = value.length !== 6 || isVerifying;

  const handleSubmit = () => {
    if (isVerifying || value.length !== 6) return;
    setIsVerifying(true);
    setErrorMessage("");
    setTimeout(() => {
      if (value === CORRECT_OTP) {
        toast.message("Successfully verified", { description: "Your OTP has been verified." });
      } else {
        setIsShaking(true);
        setErrorMessage("Invalid validation code");
      }
      setValue("");
      setIsVerifying(false);
      otpRef.current?.focus();
      otpRef.current?.setSelectionRange(0, 0);
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col">
      <p className="text-muted-foreground text-sm text-center mb-6">
        Enter the code sent to your email.
      </p>

      <motion.div
        animate={isShaking ? { x: [0, -5, 5, -2.5, 2.5, 0] } : { x: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => setIsShaking(false)}
      >
        <BaseOTPInput
          ref={otpRef}
          value={value}
          maxLength={6}
          containerClassName="flex gap-2 items-center mb-2"
          onChange={(v) => {
            if (!/^\d*$/.test(v)) { setIsShaking(true); return; }
            setValue(v);
            if (errorMessage) setErrorMessage("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value.length === 6) { e.preventDefault(); handleSubmit(); }
          }}
          render={({ slots }) => (
            <div className="flex gap-2 items-center justify-between w-full">
              <div className="flex gap-2 flex-1">
                {slots.slice(0, 3).map((slot, idx) => (
                  <OTPSlot key={idx} {...slot} isShaking={isShaking} isVerifying={isVerifying} delay={idx * 100} />
                ))}
              </div>
              <div className="h-0.5 w-2 rounded-full bg-border" />
              <div className="flex gap-2 flex-1">
                {slots.slice(3).map((slot, idx) => (
                  <OTPSlot key={idx} {...slot} isShaking={isShaking} isVerifying={isVerifying} delay={(idx + 3) * 100} />
                ))}
              </div>
            </div>
          )}
        />
      </motion.div>

      <AnimatePresence>
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-rose-500 text-xs text-center mb-2"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <span className="text-muted-foreground mb-4 text-[13px] text-center py-2 pt-4">
        Didn't receive a code?{" "}
        <button
          className="cursor-pointer font-semibold text-blue-500"
          onClick={() => toast.message("Verification code has been sent", {
            description: "Normally you would get a code but this is just a prototype ;)",
          })}
        >
          Resend
        </button>
      </span>

      <button
        disabled={disabled}
        onClick={handleSubmit}
        data-verifying={isVerifying}
        className="flex h-[40px] w-full items-center justify-center rounded-full font-semibold select-none transition-colors duration-200 ease-out active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 text-white bg-blue-500 hover:bg-blue-600 data-[verifying=true]:bg-muted data-[verifying=true]:text-muted-foreground"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isVerifying ? (
            <motion.span
              key="verifying"
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-spin">
                <path d="M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.024 13.2418 10.2961 13.5433C9.56814 13.8448 8.78793 14 8 14C7.21206 14 6.43185 13.8448 5.70389 13.5433C4.97594 13.2418 4.31451 12.7998 3.75736 12.2426C3.2002 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 7.21207 2.15519 6.43186 2.45672 5.7039C2.75825 4.97595 3.2002 4.31451 3.75736 3.75736C4.31451 3.20021 4.97594 2.75825 5.7039 2.45673C6.43185 2.1552 7.21207 2 8 2C8.78793 2 9.56814 2.1552 10.2961 2.45673C11.0241 2.75826 11.6855 3.20021 12.2426 3.75736C12.7998 4.31452 13.2417 4.97595 13.5433 5.7039C13.8448 6.43186 14 7.21207 14 8L14 8Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"/>
                <path d="M14 8C14 8.94687 13.7759 9.88029 13.346 10.7239C12.9162 11.5676 12.2927 12.2976 11.5267 12.8541C10.7607 13.4107 9.87381 13.778 8.9386 13.9261C8.0034 14.0743 7.04641 13.9989 6.14589 13.7063" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              Verifying
            </motion.span>
          ) : (
            <motion.span
              key="submit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              Submit
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
