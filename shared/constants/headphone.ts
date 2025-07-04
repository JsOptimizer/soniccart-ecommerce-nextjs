import xx59Desktop from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59Mobile from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59tablet from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx99IDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99IMobile from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99ITablet from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
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
    name: "XX99 Mark I Headphones",
    desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    source: {
      desktop: xx99IDesktop,
      tablet: xx99ITablet,
      mobile: xx99IMobile,
    },
  },
  {
    id: 1,
    name: "XX59 Headphones",
    desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    source: {
      desktop: xx59Desktop,
      tablet: xx59tablet,
      mobile: xx59Mobile,
    },
  },
];
