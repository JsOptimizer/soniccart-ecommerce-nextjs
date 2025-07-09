import { StaticImport } from "next/dist/shared/lib/get-img-props";
import xx59Path from "../assets/cart/image-xx59-headphones.jpg";
import xx99Path from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import yx1 from "../assets/cart/image-yx1-earphones.jpg";

export const cartProduct: {
  name: string;
  path: string | StaticImport;
  price: number;
  quantity: number;
}[] = [
  {
    name: "XX99 MK II",
    price: 2999,
    path: xx99Path,
    quantity: 1,
  },
  {
    name: "XX59",
    price: 899,
    path: xx59Path,
    quantity: 2,
  },
  {
    name: "yx1",
    price: 599,
    path: yx1,
    quantity: 1,
  },
];

export const cartPreview: {
  total: number;
  vat: number;
  grandTotal: number;
  shipping: number;
  products: {
    path: StaticImport;
    price: number;
    quantity: number;
    name: string;
  }[];
} = {
  total: 5396,
  shipping: 50,
  vat: 1079,
  grandTotal: 5446,
  products: [
    {
      path: xx99Path,
      name: "xx99 mk ii",
      price: 2999,
      quantity: 1,
    },
    {
      name: "xx59",
      path: xx59Path,
      quantity: 2,
      price: 899,
    },
    {
      name: "yx1",
      path: yx1,
      price: 599,
      quantity: 1,
    },
  ],
};
