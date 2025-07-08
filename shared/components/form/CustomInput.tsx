import { ChangeEvent, FC } from "react";
import { cn } from "../../lib";

type Props = {
  title: string;
  isError?: boolean;
  errorMessage?: string;
  name?: string;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const CustomInput: FC<Props> = ({
  title,
  errorMessage,
  isError,
  name,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="text-sm flex flex-col gap-1 w-full">
      <div
        className={cn(
          `flex items-center justify-between ${isError && "text-red-500"}`
        )}
      >
        <label htmlFor="">{title}</label>
        {isError && <p>{errorMessage}</p>}
      </div>
      <input
        type="text"
        name={name}
        className={cn(
          `p-3 border-neutral-100 border-2  min-w-[300px] rounded-lg w-full focus-visible:outline-brand ${
            isError && "focus-visible:outline-red-700 border-red-700"
          } `
        )}
        defaultValue={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
