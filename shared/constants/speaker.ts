import zx7Desktop from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7Mobile from "../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import zx7Tablet from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx9Desktop from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9Mobile from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9Tablet from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import { TImage } from "../types";

export const speakerFeatures: {
  isNew?: boolean;
  source: TImage;
  name: string;
  desc: string;
  id?: number;
}[] = [
  {
    id: 1,
    isNew: true,
    name: "ZX9\nSPEAKER",
    desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    source: {
      desktop: zx9Desktop,
      tablet: zx9Tablet,
      mobile: zx9Mobile,
    },
  },
  {
    id: 1,
    name: "ZX7\nSPEAKER",
    desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    source: {
      desktop: zx7Desktop,
      tablet: zx7Tablet,
      mobile: zx7Mobile,
    },
  },
];
