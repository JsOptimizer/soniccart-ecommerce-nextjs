import { StaticImageData } from "next/image";
import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

export const productsCategories: {
  name: string;
  path: string;
  source: StaticImageData;
}[] = [
  {
    name: "Headphones",
    source: headphone,
    path: "",
  },
  {
    name: "Speakers",
    source: speaker,
    path: "",
  },
  {
    name: "Earphones",
    source: earphone,
    path: "",
  },
];
