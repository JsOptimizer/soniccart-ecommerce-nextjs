import xx99Desktop from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99Mobile from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx99tablet from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import { TImage } from "../types";

export const headphoneFeatures: {
  isNew?: boolean;
  source: TImage;
  name: string;
  desc: string;
  id?: number;
}[] = [
  {
    id: 1,
    isNew: true,
    name: "XX99 Mark II Headphones",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    source: {
      desktop: xx99Desktop,
      tablet: xx99tablet,
      mobile: xx99Mobile,
    },
  },
  {
    id: 1,
    name: "XX99 Mark II Headphones",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    source: {
      desktop: xx99Desktop,
      tablet: xx99tablet,
      mobile: xx99Mobile,
    },
  },
  {
    id: 1,
    name: "XX99 Mark II Headphones",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    source: {
      desktop: xx99Desktop,
      tablet: xx99tablet,
      mobile: xx99Mobile,
    },
  },
];
