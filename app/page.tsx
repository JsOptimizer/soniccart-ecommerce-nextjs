import { Hero, Zx9Speaker } from "@/features";
import { Header, ProductCategoryList } from "@/shared/components";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-32 font-manrope z-0">
      <Header />
      <Hero />
      <section className="px-16 lg:px-32 flex flex-col gap-32 ">
        <ProductCategoryList />
        <Zx9Speaker />
      </section>
    </main>
  );
}
