import { TProduct } from "@/shared/types";
import { FC } from "react";
import Features from "./Features";
import Gallery from "./Gallery";
import Preview from "./Preview";

type Props = {} & TProduct;

const ProductDetail: FC<Props> = ({
  gallery,
  name,
  image,
  description,
  new: isNew,
  price,
  nameBreak,
}) => {
  return (
    <>
      <Preview
        name={name}
        image={image}
        description={description}
        price={price}
        isNew={isNew}
        nameBreak={nameBreak}
      />
      <Features />
      <Gallery gallery={gallery} />
    </>
  );
};

export default ProductDetail;
