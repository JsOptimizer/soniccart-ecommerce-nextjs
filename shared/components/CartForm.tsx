"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { cartProduct } from "../constants/cart";
import { currencyFormatter } from "../lib";
import Modal from "./Modal";
import CustomBtn from "./form/CustomBtn";
import CustomNumberCounter from "./form/CustomNumberCounter";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

const CartForm: FC<Props> = ({ onClose, open }) => {
  const router = useRouter();

  const handlerSubmit = () => {
    router.push("/checkout");
  };
  return (
    <Modal className="" open={open} onClose={() => onClose(open)}>
      <div className="container mt-20 flex items-start justify-center sm:justify-end px-4 sm:px-16  ">
        <div className="bg-white min-w-[377px] rounded-md p-4 sm:p-8 flex flex-col gap-4 text-sm ">
          <div className="flex items-center justify-between">
            <h6 className="font-bold uppercase">
              Cart {` `} {`(${0})`}
            </h6>
            <button className="text-black/50">Remove all </button>
          </div>
          <div className="flex flex-col gap-4">
            {cartProduct.map(({ name, path, price, quantity }, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={path}
                    alt={name}
                    height={50}
                    width={50}
                    className="size-16 rounded-md"
                  />
                  <div className="flex flex-col">
                    <span>{name}</span>
                    <span>{currencyFormatter().format(price)}</span>
                  </div>
                </div>
                <CustomNumberCounter value={quantity} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="uppercase text-black/50">Total</p>
            <span className="font-bold">
              {currencyFormatter().format(5396)}
            </span>
          </div>
          <CustomBtn title="Checkout" onClick={handlerSubmit} />
        </div>
      </div>
    </Modal>
  );
};

export default CartForm;
