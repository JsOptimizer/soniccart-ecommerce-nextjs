import { FC } from "react";
import { cn } from "../../lib";

type Props = {
  title: string;
  variant?: "default" | "outline";
  className?: string;
  onClick?: () => void;
};

const CustomBtn: FC<Props> = ({
  title,
  className,
  onClick,
  variant = "default",
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `px-8 py-4 bg-brand hover:bg-brand-100 flex items-center justify-center text-white font-manrope font-bold text-[13px] cursor-pointer ${
          variant === "outline" &&
          "bg-transparent text-neutral-100 hover:text-brand hover:bg-transparent"
        }`,
        className
      )}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
