import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion, type Variants, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/constants";

import type { ModalProps, ModalContentProps, ModalFooterProps } from "./types";
import {XIcon as CloseIcon, CaretLeftIcon as BackIcon, QuestionIcon as InfoIcon} from "@phosphor-icons/react"


function Modal({ ...props }: ModalProps) {
  return <Dialog.Root data-slot="modal" {...props} />;
}

function ModalTrigger({ ...props }: Dialog.Trigger.Props) {
  return <Dialog.Trigger data-slot="modal-trigger" {...props} />;
}

function ModalClose({ ...props }: Dialog.Close.Props) {
  return <Dialog.Close data-slot="modal-close" {...props} />;
}

function ModalOverlay({ className, ...props }: Dialog.Backdrop.Props) {
  return (
    <Dialog.Backdrop
      data-slot="modal-overlay"
      className={cn(
        "fixed inset-0 z-[1]",
        "bg-[var(--ck-overlay-background,rgba(71,88,107,0.24))]",
        "backdrop-blur-[var(--ck-overlay-backdrop-filter-blur,0px)]",
        "duration-100 ease-out",
        "data-open:animate-in data-open:fade-in-0",
        "data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

function ModalContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: ModalContentProps) {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <Dialog.Popup
        data-slot="modal-content"
        className={cn(
          "fixed inset-0 z-[3] pointer-events-none",
          "flex items-center justify-center",
          className
        )}
        {...props}
      >
        <motion.div
          className={cn(
            "pointer-events-auto relative z-[2]",
            "overflow-hidden rounded-[var(--ck-border-radius,20px)]",
            "bg-(--ck-body-background) text-(--ck-body-color)",
            "shadow-[var(--ck-modal-box-shadow,0_2px_15px_rgba(0,0,0,0.08))]",
            "duration-100 ease-out",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-[0.97]",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-[0.97]"
          )}
        >
          {children}
          {showCloseButton && (
            <Dialog.Close
              data-slot="modal-close-button"
              className={cn(
                "absolute right-[17px] top-[22px] z-[3]",
                "flex size-8 cursor-pointer items-center justify-center rounded-2xl p-0",
                "text-(--ck-body-action-color) bg-(--ck-body-background)",
                "transition-[background-color,transform] duration-200 ease-in-out",
                "hover:bg-(--ck-body-background-secondary)",
                "active:scale-90",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ck-accent-color)"
              )}
            >
              <CloseIcon />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          )}
        </motion.div>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

function ModalHeader({
  className,
  onBack,
  onInfo,
  heading,
  headingKey,
  ...props
}: React.ComponentProps<"div"> & {
  onBack?: () => void;
  onInfo?: () => void;
  heading?: React.ReactNode;
  headingKey?: string;
}) {
  return (
    <div
      data-slot="modal-header"
      className={cn(
        "relative z-[3] h-16 pointer-events-auto",
        className
      )}
      {...props}
    >
      {/* Left slot: back or info button */}
      <div className="absolute left-5 top-[23px] size-8">
        <AnimatePresence mode="wait">
          {onBack ? (
            <motion.button
              key="back"
              onClick={onBack}
              className={cn(
                "absolute inset-0 flex w-full cursor-pointer items-center justify-center rounded-2xl p-0",
                "text-(--ck-body-action-color) bg-(--ck-body-background)",
                "transition-[background-color,transform] duration-200 ease-in-out",
                "hover:bg-(--ck-body-background-secondary)",
                "active:scale-90",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ck-accent-color)"
              )}
              aria-label="Go back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <BackIcon />
            </motion.button>
          ) : onInfo ? (
            <motion.button
              key="info"
              onClick={onInfo}
              className={cn(
                "absolute inset-0 flex w-full cursor-pointer items-center justify-center rounded-2xl p-0",
                "text-(--ck-body-action-color) bg-(--ck-body-background)",
                "transition-[background-color,transform] duration-200 ease-in-out",
                "hover:bg-(--ck-body-background-secondary)",
                "active:scale-90",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ck-accent-color)"
              )}
              aria-label="More information"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <InfoIcon />
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Heading — animated crossfade on key change */}
      <div className="pointer-events-none absolute inset-x-[52px] top-[25px] flex h-[26px] select-none items-center justify-center text-center text-[17px] font-[var(--ck-modal-heading-font-weight,600)] leading-5 text-(--ck-body-color)">
        <AnimatePresence mode="wait">
          {heading && (
            <motion.div
              key={headingKey ?? (typeof heading === "string" ? heading : "heading")}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {heading}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Body — auto-measuring height with smooth transition                */
/* ------------------------------------------------------------------ */

function ModalBody({
  className,
  children,
  pageKey,
  transitionType = "fade-scale",
  customTransition,
  ...props
}: Omit<HTMLMotionProps<"div">, "transition"> & {
  pageKey?: string;
  transitionType?: keyof typeof transitions;
  customTransition?: Variants;
}) {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
  }, [children, pageKey, updateHeight]);

  // ResizeObserver for dynamic content
  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [updateHeight]);

  const variants = customTransition ?? transitions[transitionType];

  return (
    <motion.div
      data-slot="modal-body"
      className={cn("relative overflow-hidden", className)}
      animate={{ height: height ?? "auto" }}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pageKey ?? "body"}
          ref={contentRef}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-[360px] max-w-full px-6 pb-6 pt-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function ModalFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: ModalFooterProps) {
  return (
    <div
      data-slot="modal-footer"
      className={cn(
        "border-t border-(--ck-body-color)/5 px-5 py-3 text-center text-xs text-(--ck-body-color-muted)",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <Dialog.Close
          className="mt-2 cursor-pointer text-sm font-medium text-(--ck-body-color) underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ck-accent-color)"
        >
          Close
        </Dialog.Close>
      )}
    </div>
  );
}


function ModalTitle({ className, ...props }: Dialog.Title.Props) {
  return (
    <Dialog.Title
      data-slot="modal-title"
      className={cn(
        "m-0 p-0 text-[19px] font-[var(--ck-modal-h1-font-weight,600)] leading-[22px] text-(--ck-body-color)",
        className
      )}
      {...props}
    />
  );
}


function ModalDescription({ className, ...props }: Dialog.Description.Props) {
  return (
    <Dialog.Description
      data-slot="modal-description"
      className={cn(
        "text-base font-normal leading-[21px] text-(--ck-body-color-muted)",
        "[&_strong]:font-medium [&_strong]:text-(--ck-body-color)",
        className
      )}
      {...props}
    />
  );
}


function OrDivider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative mt-4 select-none text-center text-[15px] font-normal leading-[21px] text-(--ck-body-color-muted) before:absolute before:inset-x-0 before:top-1/2 before:z-[2] before:h-px before:-translate-y-px before:bg-(--ck-body-divider)">
      <span className="relative z-[2] inline-block select-none bg-(--ck-body-background) px-3.5 transition-colors duration-200">
        {children ?? "or"}
      </span>
    </div>
  );
}


export {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalTrigger,
  OrDivider,
};
