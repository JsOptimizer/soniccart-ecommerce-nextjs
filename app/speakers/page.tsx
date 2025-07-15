import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
  ProductFeature,
} from "@/shared/components";
import { speakerFeatures } from "@/shared/constants/speaker";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-8 sm:gap-16 lg:gap-32  items-center">
      <Header className="bg-black static" title={"Speakers"} />
      <section className=" container p-4 flex flex-col gap-8 sm:gap-16 lg:gap-32  w-full lg:px-16">
        <ProductFeature products={speakerFeatures} />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
