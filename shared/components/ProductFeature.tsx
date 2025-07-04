import { FC } from "react";
import { TImage } from "../types";
import ProductShowCase from "./ProductShowcase";

type Props = {
  products: {
    isNew?: boolean;
    nameBreak: number;
    source: TImage;
    name: string;
    desc: string;
    id?: number;
  }[];
};

const ProductFeature: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product, idx) => (
        <ProductShowCase
          key={idx}
          {...product}
          className={idx % 2 === 0 ? "flex-col" : " lg:flex-row-reverse"}
        />
      ))}
    </>
  );
};

export default ProductFeature;
