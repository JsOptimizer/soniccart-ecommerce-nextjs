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
  id?: number;
};

const ProductShowCase: FC<Props> = ({
  desc,
  name,
  source,
  isNew,
  className,
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
        className="h-[362px] w-full lg:h-[560px]"
      />
      <div className="flex flex-col items-center lg:items-start gap-4">
        {isNew && (
          <h3 className="uppercase tracking-[15px] text-brand ">new product</h3>
        )}
        <p className="uppercase text-[40px] font-bold ">{name}</p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          {desc}
        </p>
        <CustomBtn title="see product" />
      </div>
    </article>
  );
};

export default ProductShowCase;
