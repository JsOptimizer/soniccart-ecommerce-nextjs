import { FC } from "react";
import { cn } from "../../lib";

type Props = {
  title: string;
  value?: boolean;
};

const CustomRadio: FC<Props> = ({ title, value }) => {
  return (
    <label
      htmlFor={title}
      className={cn(
        `border-2 rounded-lg lg:min-w-[300px] border-neutral-100 max-w-full group: p-3 flex items-center gap-2 hover:border-brand-100 text-sm has-checked:border-brand-100`
      )}
    >
      <input
        id={title}
        type="radio"
        defaultChecked={value}
        className={`accent-brand size-4`}
      />
      <span className="font-bold">{title}</span>
    </label>
  );
};

export default CustomRadio;
