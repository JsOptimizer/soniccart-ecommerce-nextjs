import { TProduct } from "@/shared/types";
import { FC } from "react";

type Props = {} & Pick<TProduct, "features" | "includes">;

const Features: FC<Props> = ({ features, includes }) => {
  return (
    <section className="flex items-start justify-between flex-col sm:gap-16 lg:flex-row text-sm">
      <div className="flex flex-col gap-8">
        <h4 className="text-[32px] font-bold text-left">Features</h4>
        <p className="max-w-[635px] text-[15px] text-black/40 ">
          {features.split("\n\n").map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="text-[32px] font-bold text-left ">in the box</h4>
        <ul className="flex flex-col gap-2">
          {includes.map(({ item, quantity }, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="text-brand">{quantity}x</span>
              <span className="text-black/60">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
