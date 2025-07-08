import CustomBtn from "@/shared/components/form/CustomBtn";
import { currencyFormatter } from "@/shared/lib";
import Image from "next/image";

const CartPreview = () => {
  return (
    <section className="bg-white p-8 rounded-md flex flex-col gap-4 h-auto text-sm text-black/50">
      <h4 className="font-bold text-xl uppercase">Summary</h4>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/image-earphones-tab-yx1.jpg"}
              alt="product"
              height={50}
              width={50}
              className="size-16 rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-bold uppercase">name</span>
              <span>{currencyFormatter().format(0)}</span>
            </div>
          </div>
          <span>x{4}</span>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(10)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(34)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>VAT(Included)</span>
          <span className="text-black font-bold">
            {currencyFormatter().format(43)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>Grand Total</span>
        <span className="text-brand font-bold">
          {currencyFormatter().format(3434)}
        </span>
      </div>
      <CustomBtn title="Continue and Pay" />
    </section>
  );
};

export default CartPreview;
