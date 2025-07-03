import CustomBtn from "@/shared/components/form/CustomBtn";

const XX99Mark1 = () => {
  return (
    <section className="flex items-center  lg:flex-row flex-col-reverse gap-16 lg:gap-0 lg:justify-between w-full">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="uppercase text-[40px] font-bold ">
          XX99 Mark I<br />
          Headphones
        </p>
        <p className="text-[15px] max-w-[445px] text-black/60 text-center lg:text-left ">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <CustomBtn title="see product" />
      </div>
      <div className=":bg-[url('/xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')] sm:h-[362px] w-full sm:bg-[url('/xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')]   rounded-md bg-cover bg-center lg:w-[540px] lg:h-[560px] " />
    </section>
  );
};

export default XX99Mark1;
