import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
  ProductFeature,
} from "@/shared/components";
import { headphoneFeatures } from "@/shared/constants/headphone";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-32 items-center">
      <Header className="bg-black static" title={"HeapPhones"} />
      <section className=" container p-8 flex flex-col gap-32 w-full lg:px-16">
        {/* <Xx99Mark2 />
        <XX99Mark1 />
        <XX59Mark /> */}
        <ProductFeature products={headphoneFeatures} />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
