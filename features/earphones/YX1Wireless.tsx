import CustomBtn from "@/shared/components/form/CustomBtn";

const YX1Wireless = () => {
  return (
    <section className="flex items-center flex-col lg:flex-row  gap-16  lg:justify-between w-full">
      <div className=":bg-[url('/product-yx1-earphones/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/product-yx1-earphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/product-yx1-earphones/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h3 className="uppercase tracking-[15px] text-brand ">new product</h3>
        <p className="uppercase text-[40px] font-bold text-center lg:text-left ">
          YX1 WIRELESS
          <br />
          EARPHONES
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <CustomBtn title="see product" />
      </div>
    </section>
  );
};

export default YX1Wireless;
