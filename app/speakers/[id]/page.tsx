import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
  ProductsList,
} from "@/shared/components";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-32 items-center">
      <Header className="bg-black static" />
      <section className=" container p-8 flex flex-col gap-32 w-full lg:px-16">
        <ProductsList />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
