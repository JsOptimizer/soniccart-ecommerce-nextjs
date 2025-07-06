import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TProduct = {
  id: number;
  slug: string;
  name: string;
  image: TImage;
  category: string;
  categoryImage: TImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: TInclude[];
  gallery: TGallery;
  others: TOther[];
  nameBreak?: number;
};

export type TImage = {
  mobile: string | StaticImport;
  tablet: string | StaticImport;
  desktop: string | StaticImport;
};

export type TInclude = {
  quantity: number;
  item: string;
};

export type TGallery = {
  first: TImage;
  second: TImage;
  third: TImage;
};

export type TOther = {
  slug: string;
  name: string;
  image: TImage;
};
