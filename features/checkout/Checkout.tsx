import CartPreview from "./CartPreview";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-flow-col gap-4 items-start">
      <CheckoutForm />
      <CartPreview />
    </section>
  );
};

export default Checkout;
