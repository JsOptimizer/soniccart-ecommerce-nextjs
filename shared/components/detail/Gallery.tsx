import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  return (
    <div className="grid  grid-cols-1  sm:grid-cols-5   sm:grid-rows-2 gap-8 w-full h-[592px] ">
      <div className="col-span-2">
        <CustomImage
          alt={"first"}
          desktop={gallery.first.desktop}
          tablet={gallery.first.tablet}
          mobile={gallery.first.mobile}
          className="size-full  object-cover"
        />
      </div>
      <div className="row-span-2 col-span-3 flex  ">
        <CustomImage
          alt="third"
          desktop={gallery.third.desktop}
          tablet={gallery.third.tablet}
          mobile={gallery.third.mobile}
          className="object-cover size-full  "
        />
      </div>
      <div className="col-span-2">
        <CustomImage
          alt="second "
          desktop={gallery.second.desktop}
          tablet={gallery.second.tablet}
          mobile={gallery.second.mobile}
          className="object-cover h-auto "
        />
      </div>
    </div>
  );
};

export default Gallery;
