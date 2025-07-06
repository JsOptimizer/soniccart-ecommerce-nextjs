import Link from "next/link";
import { FC } from "react";
import { cn } from "../lib";
import { TImage } from "../types";
import CustomImage from "./CustomImage";
import CustomBtn from "./form/CustomBtn";

type Props = {
  isNew?: boolean;
  source: TImage;
  name: string;
  desc: string;
  className?: string;
  id: number;
  nameBreak: number;
  path: string;
};

const ProductShowCase: FC<Props> = ({
  desc,
  name,
  source,
  isNew,
  nameBreak,
  className,
  path,
  id,
}) => {
  return (
    <article
      className={cn(
        "flex items-center  lg:flex-row flex-col gap-16   lg:justify-between  w-full",
        className
      )}
    >
      <CustomImage
        alt={name}
        {...source}
        className="h-[362px] w-full lg:h-[560px] lg:min-w-[540px]"
      />
      <div className="flex flex-col items-center lg:items-start gap-4">
        {isNew && (
          <h3 className="uppercase tracking-[15px] text-brand ">new product</h3>
        )}
        <p className="uppercase text-[40px] font-bold ">
          {name.slice(0, nameBreak)}
          <br />
          {name.slice(nameBreak)}
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          {desc}
        </p>
        <Link href={`/${path}/${id}`}>
          <CustomBtn title="see product" />
        </Link>
      </div>
    </article>
  );
};

export default ProductShowCase;
