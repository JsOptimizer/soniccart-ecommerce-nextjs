import { TProduct } from "@/shared/types";
import { FC } from "react";
import Gallery from "./Gallery";

type Props = {} & TProduct;

const ProductDetail: FC<Props> = ({ gallery }) => {
  return (
    <>
      <Gallery gallery={gallery} />
    </>
  );
};

export default ProductDetail;
