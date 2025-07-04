"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { cn } from "../lib";

type Props = {
  desktopSrc: string | StaticImport;
  tabletSrc: string | StaticImport;
  mobileSrc: string | StaticImport;
  alt: string;
  className?: string;
};

const CustomImage: FC<Props> = ({
  className,
  alt,
  desktopSrc,
  mobileSrc,
  tabletSrc,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | StaticImport>("");
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: currentWidth } = window;

      if (currentWidth >= 1024) {
        setCurrentSrc(desktopSrc);
      } else if (currentWidth >= 640 && currentWidth < 1024) {
        setCurrentSrc(tabletSrc);
      } else {
        setCurrentSrc(mobileSrc);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the window size is already different
    handleResize();

    // This line removes the event listener for the 'resize' event
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopSrc, mobileSrc, tabletSrc]);
  return (
    <div>
      <Image
        src={currentSrc}
        alt={alt}
        className={cn("rounded-md object-cover", className)}
      />
    </div>
  );
};

export default CustomImage;
