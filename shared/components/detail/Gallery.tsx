import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  return (
    <div className="grid  grid-cols-1  sm:grid-cols-5   sm:grid-rows-2 gap-8 w-full">
      <div className="col-span-2 row-span-1 flex ">
        <CustomImage
          alt={"first"}
          desktop={gallery.first.desktop}
          tablet={gallery.first.tablet}
          mobile={gallery.first.mobile}
          className="w-full  object-cover h-full"
        />
      </div>
      <div className="row-span-2 col-span-3 order-3 sm:order-none ">
        <CustomImage
          alt="third"
          desktop={gallery.third.desktop}
          tablet={gallery.third.tablet}
          mobile={gallery.third.mobile}
          className="object-contain"
        />
      </div>
      <div className="col-span-2 row-span-1 flex ">
        <CustomImage
          alt="second "
          desktop={gallery.second.desktop}
          tablet={gallery.second.tablet}
          mobile={gallery.second.mobile}
          className="object-cover h-full "
        />
      </div>
    </div>
  );
};

export default Gallery;
