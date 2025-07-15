import { CustomInput, CustomRadio } from "@/shared/components";

const CheckoutForm = () => {
  return (
    <section className="bg-white p-8 flex flex-col gap-8">
      <h3 className="font-bold uppercase">Checkout</h3>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Billing Details</h5>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput title="Name" placeholder="Alexei Ward" />
          <CustomInput title="Email Address" placeholder="alexei@mail.com" />
          <CustomInput title="Phone Number" placeholder="+1 202-555-0136" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Shipping Info</h5>
        <div className="col-span-2">
          <CustomInput title="Address" placeholder="1137 Williams Avenue" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput title="ZipCode" placeholder="+10001" />
          <CustomInput title="City" placeholder="New York" />
          <CustomInput title="Country" placeholder="United States" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h5 className="text-brand">Payment Details</h5>
        <div className="grid grid-cols-2 gap-4">
          <p>Payment method</p>
          <div className="flex flex-col gap-4">
            <CustomRadio value={true} title="e-money" />
            <CustomRadio value={false} title="cash on delivery" />
          </div>
          <CustomInput title="e-money number" placeholder="238521993" />
          <CustomInput title="e-money pin" placeholder="6891" />
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
