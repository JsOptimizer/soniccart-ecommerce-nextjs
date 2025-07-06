import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "gallery">;

const Gallery: FC<Props> = ({ gallery }) => {
  console.log(gallery);
  return (
    <div>
      <CustomImage
        alt={"first"}
        desktop={gallery.first.desktop}
        tablet={gallery.first.tablet}
        mobile={gallery.first.mobile}
      />
      <CustomImage
        alt="second "
        desktop={gallery.second.desktop}
        tablet={gallery.second.tablet}
        mobile={gallery.second.mobile}
      />
      <CustomImage
        alt="third"
        desktop={gallery.third.desktop}
        tablet={gallery.third.tablet}
        mobile={gallery.third.mobile}
      />
    </div>
  );
};

export default Gallery;
