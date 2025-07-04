import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import CustomBtn from "./form/CustomBtn";

type Props = {
  name: string;
  desktopPath: StaticImageData;
  tabletPath: StaticImageData;
  mobilePath: StaticImageData;
};

const ProductCard: FC<Props> = ({ name, desktopPath }) => {
  return (
    <article className="flex items-center justify-center flex-col gap-4">
      {/* <div
        className={` h-[120]  sm:h-[318px] w-full lg:h-[318px] rounded-md bg-neutral-100 `}
      /> */}
      <Image
        src={desktopPath}
        alt={name}
        height={388}
        width={100}
        className="lg:block hidden h-[318px] w-full "
      />
      <p>{name}</p>
      <Link href={""}>
        <CustomBtn title="see product" />
      </Link>
    </article>
  );
};

export default ProductCard;
