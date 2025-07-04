import Link from "next/link";
import { FC } from "react";
import CustomBtn from "./form/CustomBtn";

type Props = {
  name: string;
};

const ProductCard: FC<Props> = ({}) => {
  return (
    <article className="flex items-center justify-center flex-col gap-4">
      <div className=" h-[120]  sm:h-[318px] w-full lg:h-[318px] rounded-md bg-neutral-100 " />
      <p>title</p>
      <Link href={""}>
        <CustomBtn title="see product" />
      </Link>
    </article>
  );
};

export default ProductCard;
