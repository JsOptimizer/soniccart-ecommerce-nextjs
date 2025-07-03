import CustomBtn from "@/shared/components/form/CustomBtn";

const Zx7Speaker = () => {
  return (
    <section className="min-h-[320px] bg-[url('/image-speaker-mob-zx7.jpg')]  rounded-md sm:bg-[url('/image-speaker-tab-zx7.jpg')] lg:bg-[url('/image-speaker-zx7.jpg')] bg-right-bottom bg-cover flex flex-col justify-center p-4 sm:p-14 lg:p-24 ">
      <div className="space-y-4">
        <h4 className="uppercase text-xl sm:text-[28px] font-bold font-manrope">
          zx7 speaker
        </h4>
        <CustomBtn
          title="see product"
          className="bg-transparent text-black block uppercase border  hover:bg-black hover:text-white font-bold"
        />
      </div>
    </section>
  );
};

export default Zx7Speaker;
