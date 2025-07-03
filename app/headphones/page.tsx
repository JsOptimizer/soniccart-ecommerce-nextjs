import { Xx99Mark2 } from "@/features";
import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
} from "@/shared/components";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-32">
      <Header className="bg-black static" />
      <section className="px-32 flex flex-col gap-32">
        <Xx99Mark2 />
        <ProductCategoryList />
      </section>
      <BestGear />
      <Footer />
    </main>
  );
};

export default page;
