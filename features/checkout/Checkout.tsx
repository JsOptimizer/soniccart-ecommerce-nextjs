import CartPreview from "./CartPreview";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <section className="grid grid-flow-col gap-4 items-start">
      <CheckoutForm />
      <CartPreview />
    </section>
  );
};

export default Checkout;
