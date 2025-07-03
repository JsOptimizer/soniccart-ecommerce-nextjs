import CustomBtn from "@/shared/components/form/CustomBtn";

const ZX7Speaker = () => {
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row  gap-16  lg:justify-between w-full">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="uppercase text-[40px] font-bold text-center lg:text-left ">
          ZX7
          <br />
          SPEAKER
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use.
        </p>
        <CustomBtn title="see product" />
      </div>
      <div className=":bg-[url('/product-zx7-speaker/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/product-zx7-speaker/tablet/image-category-page-preview.jpg')] lg:bg-[url('/product-zx7-speaker/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
    </section>
  );
};

export default ZX7Speaker;
