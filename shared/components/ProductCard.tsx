import Link from "next/link";
import { FC } from "react";
import { TImage } from "../types";
import CustomImage from "./CustomImage";
import CustomBtn from "./form/CustomBtn";

type Props = {
  name: string;
  id: number;
  path: string;
} & TImage;

const ProductCard: FC<Props> = ({
  name,
  desktop,
  mobile,
  tablet,
  path,
  id,
}) => {
  return (
    <article className="flex items-center justify-center flex-col gap-4">
      <CustomImage
        alt={name}
        desktop={desktop}
        tablet={tablet}
        mobile={mobile}
        className="w-full h-[120px] sm:w-[224px] lg:min-w-[350px] sm:h-[318px] "
      />
      <p>{name}</p>
      <Link href={`/${path}/${id}`}>
        <CustomBtn title="see product" />
      </Link>
    </article>
  );
};

export default ProductCard;
