import CustomBtn from "@/shared/components/form/CustomBtn";

const Zx7Speaker = () => {
  return (
    <section className="min-h-[320px] rounded-md lg:bg-[url('/image-speaker-zx7.jpg')] bg-right-bottom bg-cover flex flex-col justify-center lg:p-24 ">
      <div className="space-y-4">
        <h4 className="uppercase text-[28px] font-bold font-manrope">
          zx7 speaker
        </h4>
        <CustomBtn
          title="see product"
          className="bg-transparent text-black block uppercase border  hover:bg-transparent font-bold"
        />
      </div>
    </section>
  );
};

export default Zx7Speaker;
