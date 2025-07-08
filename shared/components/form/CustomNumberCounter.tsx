"use client";
import { FC, useCallback, useState } from "react";

type Props = {
  value?: number;
  handleChange?: (count: number) => void;
};

const CustomNumberCounter: FC<Props> = ({ value, handleChange }) => {
  const [count, setCount] = useState<string | number>(value ?? 0);
  const handleAddCount = useCallback(() => {
    setCount((prev) => +prev + 1);
    if (handleChange) handleChange(+count);
  }, [count, handleChange]);
  const handleDecreaseCount = useCallback(() => {
    if (+count > 0) setCount((prev) => +prev - 1);
    if (handleChange) handleChange(+count);
  }, [count, handleChange]);
  return (
    <div className="flex items-center justify-between min-w-24 bg-neutral-100 p-2 text-sm select-none">
      <button
        onClick={handleDecreaseCount}
        className="hover:text-brand cursor-pointer"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={handleAddCount}
        className="hover:text-brand cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default CustomNumberCounter;
