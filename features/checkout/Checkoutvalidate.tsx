import { Modal } from "@/shared/components";
import CustomBtn from "@/shared/components/form/CustomBtn";
import { currencyFormatter } from "@/shared/lib";
import Image from "next/image";
import { FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Checkoutvalidate: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={onClose}
    >
      <section className="container flex  items-center justify-center">
        <div className="min-w-[500px] rounded-md bg-white flex flex-col gap-8 p-8 ">
          <div>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
          </div>
          <h4 className="text-[32px] font-bold text-black ">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h4>
          <p>You will receive an email confirmation shortly.</p>

          <div className="grid grid-flow-col">
            <div className="bg-neutral-100 rounded-l-md p-4 flex flex-col justify-center gap-4">
              <div className="flex items-start gap-4">
                <Image
                  src={"/image-earphones-tab-yx1.jpg"}
                  alt="product"
                  height={100}
                  width={100}
                  className="size-10"
                />
                <div className="flex flex-col gap-1">
                  <span className="uppercase font-bold text-black">
                    name product
                  </span>
                  <span className="">{currencyFormatter().format(2000)}</span>
                </div>
                <span>x{4}</span>
              </div>
              <hr />
              <p className="text-center">and {2} other item(s)</p>
            </div>
            <div className="bg-black rounded-r-md p-4 text-white flex flex-col items-start  justify-center gap-4">
              <h6 className="text-neutral-50/60 text-[15px] uppercase ">
                Grand Total
              </h6>
              <p>{currencyFormatter().format(4000)}</p>
            </div>
          </div>

          <CustomBtn title="Back To Home " />
        </div>
      </section>
    </Modal>
  );
};

export default Checkoutvalidate;
