"use client";
import React, { FC } from "react";
import { cn } from "../lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Modal: FC<Props> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "fixed w-screen h-screen top-0 bottom-0 bg-black/30 z-40 overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Modal;
