import CustomBtn from "@/shared/components/form/CustomBtn";
import Link from "next/link";

const Yx1EarPhones = () => {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
      <div className="bg-[url('/image-earphones-mob-yx1.jpg')] sm:bg-[url('/image-earphones-tab-yx1.jpg')] lg:bg-[url('/image-earphones-yx1.jpg')] bg-cover bg-center h-[200px] sm:h-[320px] rounded-md " />
      <div className="bg-neutral-100 rounded-md flex flex-col justify-center gap-4 items-start p-8 h-[200px] sm:h-[320px] ">
        <h4 className="uppercase text-[28px] font-bold ">yx1 earphones</h4>
        <Link href={"/earphones/1"}>
          <CustomBtn
            title="see product"
            className="bg-transparent text-black hover:bg-black hover:text-white font-bold border inline-flex"
          />
        </Link>
      </div>
    </section>
  );
};

export default Yx1EarPhones;
