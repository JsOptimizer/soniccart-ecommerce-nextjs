"use client";
import React, { FC, useEffect, useRef } from "react";
import { cn } from "../lib";

type Props = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal: FC<Props> = ({ open, onClose, children, className }) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Close on ESC key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Backdrop click closes modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current && onClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <section
      ref={backdropRef}
      className={cn(
        "fixed w-screen h-screen top-0 left-0 bg-black/30 z-40 overflow-hidden flex justify-center items-start",
        className
      )}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      {children}
    </section>
  );
};

export default Modal;
