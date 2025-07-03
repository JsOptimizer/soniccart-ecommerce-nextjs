import CustomBtn from "@/shared/components/form/CustomBtn";

const Xx99Mark2 = () => {
  return (
    <section className="flex items-center flex-col lg:flex-row flex-wrap-reverse gap-16 lg:gap-0 lg:justify-between w-full">
      <div className=":bg-[url('/headphones/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/headphones/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h3 className="uppercase tracking-[15px] text-brand ">new product</h3>
        <p className="uppercase text-[40px] font-bold ">
          XX99 Mark II
          <br /> Headphones
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <CustomBtn title="see product" />
      </div>
    </section>
  );
};

export default Xx99Mark2;
