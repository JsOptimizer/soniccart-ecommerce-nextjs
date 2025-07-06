import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  console.log(gallery);
  return (
    <div className="flex gap-8 w-full justify-between">
      <div className="flex flex-col gap-4">
        <CustomImage
          alt={"first"}
          desktop={gallery.first.desktop}
          tablet={gallery.first.tablet}
          mobile={gallery.first.mobile}
          className=" lg:min-h-[280px] "
        />
        <CustomImage
          alt="second "
          desktop={gallery.second.desktop}
          tablet={gallery.second.tablet}
          mobile={gallery.second.mobile}
          className=" lg:min-h-[280px] "
        />
      </div>
      <CustomImage
        alt="third"
        desktop={gallery.third.desktop}
        tablet={gallery.third.tablet}
        mobile={gallery.third.mobile}
        className="min-h-full min-w-[600px]  "
      />
    </div>
  );
};

export default Gallery;
