"use client";

import { useRef, useEffect, useCallback } from "react";
import { MotionConfig, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { WalletIcon } from "lucide-react";

import { useAuthModalStore } from "@/hooks/useAuthModalStore";
import { useStep } from "@/hooks/useStep";
import useMeasure from "@/hooks/use-measure";
import { Tabs } from "../shared/Tabs";
import { Socials } from "../shared/Socials";
import { PrimaryButton } from "../shared/buttons";
import { DefaultHeader, PageHeader } from "./ModalHeader";
import { StepRenderer } from "../steps/StepRenderer";

const stepVariants = {
  initial: { filter: "blur(2.5px)", opacity: 0 },
  animate: { filter: "blur(0px)", opacity: 1 },
  exit:    { filter: "blur(2.5px)", opacity: 0 },
};

export const SignInModal: React.FC = () => {
  const { open, setOpen } = useAuthModalStore();
  const { currentStepId, currentStep, canGoBack, goToStep, goToNext, goBack, goToTab, reset } = useStep();

  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height } = useMeasure({ ref: contentRef });

  useEffect(() => {
    if (open && modalRef.current) {
      const prev = document.activeElement as HTMLElement | null;
      modalRef.current.focus();
      return () => { prev?.focus(); };
    }
  }, [open]);

  useEffect(() => { if (!open) reset(); }, [open, reset]);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  if (!currentStep) return null;

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.2 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        className="fixed inset-0 bg-black/30 z-50"
        style={{ pointerEvents: open ? "auto" : "none" }}
        onClick={handleClose}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={currentStep.label}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, height }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className={cn(
              "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[360px] overflow-hidden rounded-[28px] will-change-transform z-100",
              "bg-background text-foreground",
              "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_12px_32px_-8px_rgba(0,0,0,0.12)]",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={contentRef} className="h-fit w-full">
              <div className="p-2">
                <motion.div layout className="space-y-3">

                  {currentStep.main || !canGoBack
                    ? <DefaultHeader setOpen={handleClose} />
                    : <PageHeader title={currentStep.label} setOpen={handleClose} onBack={goBack} />
                  }

                  {currentStep.main && (
                    <>
                      <Socials />
                      <Tabs setCurrentStep={goToTab} currentStepId={currentStepId} />
                    </>
                  )}

                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      layout
                      key={currentStepId}
                      variants={stepVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col gap-6"
                    >
                      <StepRenderer id={currentStepId} onNext={goToNext} />
                    </motion.div>
                  </AnimatePresence>

                  {currentStep.main && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-border" />
                        <p className="text-muted-foreground text-xs">OR</p>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                      <div className="p-3">
                        <PrimaryButton
                          className="w-full py-3 flex items-center gap-2"
                          onClick={() => goToStep("wallet-select")}
                        >
                          <WalletIcon className="size-4.5" />
                          Connect wallet
                        </PrimaryButton>
                      </div>
                    </>
                  )}

                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default SignInModal;
