import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";
import CustomBtn from "../form/CustomBtn";
import CustomNumberCounter from "../form/CustomNumberCounter";

type Props = {
  isNew: boolean;
} & Pick<TProduct, "image" | "name" | "description" | "price" | "nameBreak">;

const Preview: FC<Props> = ({
  image,
  name,
  isNew,
  description,
  price,
  nameBreak,
}) => {
  return (
    <section className="flex flex-col  sm:flex-row items-center lg:justify-between text-sm sm:gap-8">
      <CustomImage
        alt={name}
        desktop={image?.desktop}
        tablet={image?.tablet}
        mobile={image?.mobile}
        className="h-[327px] min-w-[327px] sm:h-auto  lg:w-[545px] "
      />
      <div className="space-y-4">
        {isNew && (
          <h5 className="uppercase tracking-[15px] text-brand ">new product</h5>
        )}
        <h3 className="uppercase text-[40px] font-bold ">
          {name.slice(0, nameBreak)}
          <br />
          {name.slice(nameBreak)}
        </h3>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center sm:text-left ">
          {description}
        </p>
        <p className="font-bold">
          ${` `}
          {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 3 }).format(
            price
          )}
        </p>
        <div className="flex items-center gap-4">
          <CustomNumberCounter />
          <CustomBtn title="Add to cart" className="py-2" />
        </div>
      </div>
    </section>
  );
};

export default Preview;
