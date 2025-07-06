import { TProduct } from "@/shared/types";
import Link from "next/link";
import { FC } from "react";
import Features from "./Features";
import Gallery from "./Gallery";
import Preview from "./Preview";

type Props = { listPath?: string } & TProduct;

const ProductDetail: FC<Props> = ({
  gallery,
  name,
  image,
  description,
  new: isNew,
  price,
  nameBreak,
  features,
  includes,
  listPath,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Link href={`/${listPath}`} className="text-black/60 capitalize ">
          Go back
        </Link>
        <Preview
          name={name}
          image={image}
          description={description}
          price={price}
          isNew={isNew}
          nameBreak={nameBreak}
        />
      </div>
      <Features features={features} includes={includes} />
      <Gallery gallery={gallery} />
    </>
  );
};

export default ProductDetail;
