import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  console.log(gallery);
  return (
    <div className="flex  sm:gap-8 w-full lg:justify-between">
      <div className="flex flex-col sm:gap-8 lg:justify-between">
        <CustomImage
          alt={"first"}
          desktop={gallery.first.desktop}
          tablet={gallery.first.tablet}
          mobile={gallery.first.mobile}
          className=" h-[174px] w-full lg:min-h-[280px] object-cover object-center "
        />
        <CustomImage
          alt="second "
          desktop={gallery.second.desktop}
          tablet={gallery.second.tablet}
          mobile={gallery.second.mobile}
          className="h-[174px] w-full lg:min-h-[280px] object-cover object-center "
        />
      </div>
      <CustomImage
        alt="third"
        desktop={gallery.third.desktop}
        tablet={gallery.third.tablet}
        mobile={gallery.third.mobile}
        className="min-h-full sm:min-w-[395px]  lg:min-w-[600px] object-center object-cover  "
      />
    </div>
  );
};

export default Gallery;
