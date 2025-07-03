import CustomBtn from "@/shared/components/form/CustomBtn";

const ZX9Speaker = () => {
  return (
    <section className="flex items-center flex-col lg:flex-row  gap-16  lg:justify-between w-full">
      <div className=":bg-[url('/product-zx9-speaker/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/product-zx9-speaker/tablet/image-category-page-preview.jpg')] lg:bg-[url('/product-zx9-speaker/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h3 className="uppercase tracking-[15px] text-brand ">new product</h3>
        <p className="uppercase text-[40px] font-bold text-center lg:text-left ">
          ZX9
          <br />
          SPEAKER
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <CustomBtn title="see product" />
      </div>
    </section>
  );
};

export default ZX9Speaker;
