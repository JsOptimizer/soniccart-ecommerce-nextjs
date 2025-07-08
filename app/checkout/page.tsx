import { Checkout } from "@/features";
import { Footer, Header } from "@/shared/components";

const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-8 sm:gap-16 lg:gap-32  items-center bg-neutral-50">
      <Header className="bg-black static" />
      <section className=" container p-8 flex flex-col gap-8 sm:gap-16 lg:gap-32  w-full lg:px-16">
        <Checkout />
      </section>
      <Footer />
    </main>
  );
};

export default page;
