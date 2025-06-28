import { productsCategories } from "../constants";
import ProductCategoryCard from "./ ProductCategoryCard";

const ProductCategoryList = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 py-4 gap-8 bg-white ">
      {productsCategories.map(({ name, path, source }, idx) => (
        <ProductCategoryCard
          key={idx}
          name={name}
          path={path}
          source={source}
        />
      ))}
    </section>
  );
};

export default ProductCategoryList;
