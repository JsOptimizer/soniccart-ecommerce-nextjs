import CustomBtn from "@/shared/components/form/CustomBtn";

const XX59Mark = () => {
  return (
    <section className="flex items-center  lg:flex-row flex-col gap-16   lg:justify-between  w-full">
      <div className=":bg-[url('/product-xx59-headphones/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/product-xx59-headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/product-xx59-headphones/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="uppercase text-[40px] font-bold ">
          XX59 <br /> Headphones
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <CustomBtn title="see product" />
      </div>
    </section>
  );
};

export default XX59Mark;
