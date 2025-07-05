import Link from "next/link";
import { FC } from "react";
import { TImage } from "../types";
import CustomImage from "./CustomImage";
import CustomBtn from "./form/CustomBtn";

type Props = {
  name: string;
} & TImage;

const ProductCard: FC<Props> = ({ name, desktop, mobile, tablet }) => {
  return (
    <article className="flex items-center justify-center flex-col gap-4">
      <CustomImage
        alt={name}
        desktop={desktop}
        tablet={tablet}
        mobile={mobile}
      />
      <p>{name}</p>
      <Link href={""}>
        <CustomBtn title="see product" />
      </Link>
    </article>
  );
};

export default ProductCard;
