"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { cn } from "../lib";
import { TImage } from "../types";

type Props = {
  alt: string;
  className?: string;
} & TImage;

const CustomImage: FC<Props> = ({
  className,
  alt,
  desktop,
  mobile,
  tablet,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | StaticImport>(desktop);
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: currentWidth } = window;

      if (currentWidth >= 1024) {
        setCurrentSrc(desktop);
      } else if (currentWidth >= 640 && currentWidth < 1024) {
        setCurrentSrc(tablet);
      } else {
        setCurrentSrc(mobile);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the window size is already different
    handleResize();

    // This line removes the event listener for the 'resize' event
    return () => window.removeEventListener("resize", handleResize);
  }, [desktop, mobile, tablet]);
  return (
    <div>
      <Image
        src={currentSrc}
        alt={alt}
        width={1000}
        height={1000}
        className={cn("rounded-md object-cover w-full", className)}
        placeholder="blur"
        blurDataURL="/blur.png"
      />
    </div>
  );
};

export default CustomImage;
