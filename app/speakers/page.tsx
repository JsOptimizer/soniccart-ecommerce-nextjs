import { ZX7Speaker, ZX9Speaker } from "@/features";
import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
} from "@/shared/components";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-32 items-center">
      <Header className="bg-black static" title={"Speakers"} />
      <section className=" container p-8 flex flex-col gap-32 w-full lg:px-16">
        <ZX9Speaker />
        <ZX7Speaker />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
