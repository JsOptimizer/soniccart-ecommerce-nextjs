import { suggestProducts } from "../constants";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="flex flex-col gap-8">
      <p className="text-center text-[32px] uppercase font-bold ">
        you may also like
      </p>
      <div className="grid lg:grid-cols-3 gap-8">
        {suggestProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
