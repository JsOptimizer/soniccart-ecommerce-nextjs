import { CustomInput, CustomRadio } from "@/shared/components";

const CheckoutForm = () => {
  return (
    <section className="bg-white p-8 flex flex-col gap-8">
      <h3 className="font-bold uppercase">Checkout</h3>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Billing Details</h5>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput title="Name" placeholder="Michael Olalekan" />
          <CustomInput title="Email Address" placeholder="example@gmail.com" />
          <CustomInput title="Phone Number" placeholder="+22890928435" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Shipping Info</h5>
        <div className="col-span-2">
          <CustomInput title="Address" placeholder="Lome-agoee" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput title="ZipCode" placeholder="+2278" />
          <CustomInput title="City" placeholder="Lome" />
          <CustomInput title="Country" placeholder="Togo" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Payment Details</h5>
        <div className="grid grid-cols-2 gap-4">
          <p>Payment method</p>
          <div className="flex flex-col gap-4">
            <CustomRadio title="e-money" />
            <CustomRadio title="cash on delivery" />
          </div>
          <CustomInput title="e-money number" placeholder="489583423" />
          <CustomInput title="e-money pin" placeholder="4535" />
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
