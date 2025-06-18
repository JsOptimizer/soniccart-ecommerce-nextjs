import { FC } from "react";
import { cn } from "../lib";

type Props = {
  title: string;
};

const CustomBtn: FC<Props> = ({}) => {
  return <button className={cn(``)}>CustomBtn</button>;
};

export default CustomBtn;
