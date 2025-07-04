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
};

export type TImage = {
  mobile: string;
  tablet: string;
  desktop: string;
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
