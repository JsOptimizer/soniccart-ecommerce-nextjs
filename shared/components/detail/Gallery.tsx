import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  console.log(gallery);
  return (
    <div className="grid  grid-cols-1 sm:grid-flow-col sm:grid-cols-5 gap-8 justify-between ">
      <div className="col-span-2 grid grid-rows-2 grid-flow-row">
        <CustomImage
          alt={"first"}
          desktop={gallery.first.desktop}
          tablet={gallery.first.tablet}
          mobile={gallery.first.mobile}
          className=" h-[174px] w-full lg:min-w-[445px] lg:min-h-[280px] object-cover"
        />
        <CustomImage
          alt="second "
          desktop={gallery.second.desktop}
          tablet={gallery.second.tablet}
          mobile={gallery.second.mobile}
          className="h-[174px] w-full lg:min-h-[280px] lg:min-w-[445px] object-cover "
        />
      </div>
      <div className="col-span-3 h-full">
        <CustomImage
          alt="third"
          desktop={gallery.third.desktop}
          tablet={gallery.third.tablet}
          mobile={gallery.third.mobile}
          className="  min-h-full sm:min-w-[395px]  lg:min-w-[600px] object-center object-cover   "
        />
      </div>
    </div>
  );
};

export default Gallery;
