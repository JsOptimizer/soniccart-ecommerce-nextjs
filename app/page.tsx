import { Hero, Yx1EarPhones, Zx7Speaker, Zx9Speaker } from "@/features";
import {
  BestGear,
  Footer,
  Header,
  ProductCategoryList,
} from "@/shared/components";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-8 sm:gap-16 lg:gap-32  font-manrope z-0 w-full">
      <div className="w-full">
        <Header />
        <Hero />
      </div>
      <section className="container  flex flex-col gap-8 sm:gap-16 lg:gap-32  w-full lg:px-16">
        <ProductCategoryList />
        <Zx9Speaker />
        <Zx7Speaker />
        <Yx1EarPhones />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
}
