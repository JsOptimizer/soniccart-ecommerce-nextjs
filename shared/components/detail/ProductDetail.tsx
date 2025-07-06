import { TProduct } from "@/shared/types";
import { FC } from "react";
import Features from "./Features";
import Gallery from "./Gallery";
import Preview from "./Preview";

type Props = {} & TProduct;

const ProductDetail: FC<Props> = ({ gallery }) => {
  return (
    <>
      <Preview />
      <Features />
      <Gallery gallery={gallery} />
    </>
  );
};

export default ProductDetail;
