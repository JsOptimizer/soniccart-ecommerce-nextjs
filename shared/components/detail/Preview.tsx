import { TProduct } from "@/shared/types";
import { FC } from "react";
import CustomImage from "../CustomImage";

type Props = {} & Pick<TProduct, "image" | "name">;

const Preview: FC<Props> = ({ image, name }) => {
  return (
    <section>
      <CustomImage
        alt={name}
        desktop={image?.desktop}
        tablet={image?.tablet}
        mobile={image?.mobile}
      />
    </section>
  );
};

export default Preview;
