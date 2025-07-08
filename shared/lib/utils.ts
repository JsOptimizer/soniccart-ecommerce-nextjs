import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs));
}

export function currencyFormatter() {
  const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    maximumSignificantDigits: 3,
    currency: "usd",
  });

  return intl;
}
