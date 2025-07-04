import { StaticImageData } from "next/image";
import xx99MarkDesktopPath from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99MarMobPath from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import xx99MarkTabPath from "../assets/shared/tablet/image-xx99-mark-two-headphones.jpg";

export const suggestProducts: {
  name: string;
  //   id: string;
  desktopPath: StaticImageData;
  tabletPath: StaticImageData;
  mobilePath: StaticImageData;
}[] = [
  {
    name: "XX99 MARK I",
    desktopPath: xx99MarkDesktopPath,
    tabletPath: xx99MarkTabPath,
    mobilePath: xx99MarMobPath,
  },
  {
    name: "XX99 MARK I",
    desktopPath: xx99MarkDesktopPath,
    tabletPath: xx99MarkTabPath,
    mobilePath: xx99MarMobPath,
  },
  {
    name: "XX99 MARK I",
    desktopPath: xx99MarkDesktopPath,
    tabletPath: xx99MarkTabPath,
    mobilePath: xx99MarMobPath,
  },
];
