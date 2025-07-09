"use client";
import CustomBtn from "@/shared/components/form/CustomBtn";
import { cartPreview } from "@/shared/constants/cart";
import { currencyFormatter } from "@/shared/lib";
import Image from "next/image";
import { useState } from "react";
import Checkoutvalidate from "./Checkoutvalidate";

const CartPreview = () => {
  const [validateCheckout, setValidateCheckout] = useState(false);
  const { products, ...otherData } = cartPreview;

  const handleCheckout = () => {
    setValidateCheckout(true);
  };
  return (
    <section className="bg-white p-8 rounded-md flex flex-col gap-4 h-auto text-sm text-black/50">
      <h4 className="font-bold text-xl uppercase">Summary</h4>
      {products.map(({ name, path, price, quantity }, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={path}
              alt={`product-${name}`}
              height={50}
              width={50}
              className="size-16 rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-bold uppercase">{name}</span>
              <span>{currencyFormatter().format(price)}</span>
            </div>
          </div>
          <span>x{quantity}</span>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(otherData.total)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(otherData.shipping)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>VAT(Included)</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(otherData.vat)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>Grand Total</span>
        <span className="text-brand font-bold">
          {currencyFormatter().format(otherData.grandTotal)}
        </span>
      </div>
      <CustomBtn title="Continue and Pay" onClick={handleCheckout} />
      <Checkoutvalidate
        open={validateCheckout}
        onClose={() => setValidateCheckout(!open)}
      />
    </section>
  );
};

export default CartPreview;
