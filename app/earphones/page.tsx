import { YX1Wireless } from "@/features";
import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
} from "@/shared/components";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-32 items-center">
      <Header className="bg-black static" title={"earphones"} />
      <section className=" container p-8 flex flex-col gap-32 w-full lg:px-16">
        <YX1Wireless />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
