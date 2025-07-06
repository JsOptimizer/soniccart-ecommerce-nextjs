import xx59Desktop from "../assets/shared/desktop/image-xx59-headphones.jpg";
import xx99Desktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import zx9Desktop from "../assets/shared/desktop/image-zx9-speaker.jpg";
import xx59Mobile from "../assets/shared/mobile/image-xx59-headphones.jpg";
import xx99Mobile from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import zx9Mobile from "../assets/shared/mobile/image-zx9-speaker.jpg";
import xx59Tablet from "../assets/shared/tablet/image-xx59-headphones.jpg";
import xx99Tablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import zx9Tablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import { TImage } from "../types";

export const suggestProducts: (TImage & {
  name: string;
  id: number;
  path: string;
})[] = [
  {
    name: "XX99 MARK I",
    desktop: xx99Desktop,
    tablet: xx99Tablet,
    mobile: xx99Mobile,
    id: 3,
    path: "headphones",
  },
  {
    name: "XX59",
    desktop: xx59Desktop,
    tablet: xx59Tablet,
    mobile: xx59Mobile,
    id: 2,
    path: "headphones",
  },
  {
    name: "ZX9 SPEAKER",
    desktop: zx9Desktop,
    tablet: zx9Tablet,
    mobile: zx9Mobile,
    id: 6,
    path: "speakers",
  },
];
