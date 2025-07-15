import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  path: string;
  source: StaticImageData;
  name: string;
};

const ProductCategoryCard: FC<Props> = ({ name, path, source }) => {
  return (
    <Link
      href={path}
      className="relative rounded-lg p-4 group flex flex-col mt-28 sm:mt-4  justify-end  items-center  bg-neutral-50 w-full h-[204px] cursor-pointer"
    >
      <Image
        src={source}
        alt={name}
        height={200}
        width={200}
        className="absolute -top-[80px]"
      />
      <div className="flex flex-col items-center justify-center  uppercase text-sm gap-2 ">
        <h5>{name}</h5>
        <div className="text-xs flex items-center gap-2 group-hover:text-brand ">
          shop
          <div>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
