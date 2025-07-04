import yx1Desktop from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Mobile from "../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1Tablet from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import { TImage } from "../types";

export const earphoneFeatures: {
  isNew?: boolean;
  source: TImage;
  name: string;
  nameBreak: number;
  desc: string;
  path: string;
  id: number;
}[] = [
  {
    id: 1,
    isNew: true,
    name: "YX1 WIRELESS EARPHONES",
    nameBreak: 12,
    desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    source: {
      desktop: yx1Desktop,
      tablet: yx1Tablet,
      mobile: yx1Mobile,
    },
    path: "earphones",
  },
];
