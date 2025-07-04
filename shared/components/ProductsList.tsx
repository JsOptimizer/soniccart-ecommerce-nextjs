import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="flex flex-col gap-8">
      <p className="text-center text-[32px] uppercase font-bold ">
        you may also like
      </p>
      <div className="grid lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, idx) => (
          <ProductCard key={idx} name="" />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
