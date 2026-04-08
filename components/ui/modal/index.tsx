import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion, type Variants, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { transitions, ease } from "@/lib/constants";

import type { ModalProps, ModalContentProps, ModalFooterProps } from "./types";


/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13L13 1M1 1L13 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1L1 8L8 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z"
        fill="currentColor"
      />
    </svg>
  );
}


function Modal({ ...props }: ModalProps) {
  return <Dialog.Root data-slot="modal" {...props} />;
}

function ModalTrigger({ ...props }: Dialog.Trigger.Props) {
  return <Dialog.Trigger data-slot="modal-trigger" {...props} />;
}

function ModalClose({ ...props }: Dialog.Close.Props) {
  return <Dialog.Close data-slot="modal-close" {...props} />;
}

/* ------------------------------------------------------------------ */
/*  Overlay — animated fade                                            */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Content — animated scale + auto-height                             */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Header — controller bar with animated back/info/close              */
/* ------------------------------------------------------------------ */

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
