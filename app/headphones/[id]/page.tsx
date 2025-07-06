import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
  ProductDetail,
  ProductsList,
} from "@/shared/components";
import products from "@/shared/data.json";
import { TProduct } from "@/shared/types";
import { FC } from "react";
type Props = {
  params: Promise<{ id: string }>;
};

const page: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const product = products.find((data) => data.id === +id);
  return (
    <main className="w-full flex flex-col gap-32 items-center">
      <Header className="bg-black static" />
      <section className=" container p-8 flex flex-col gap-32 w-full lg:px-16">
        <ProductDetail {...(product as TProduct)} />
        <ProductsList />
        <ProductCategoryList />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default page;
