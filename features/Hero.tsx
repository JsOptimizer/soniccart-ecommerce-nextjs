"use client";
import CustomBtn from "@/shared/components/form/CustomBtn";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] bg-cover bg-no-repeat text-white px-32 pt-20 bg-center  md:bg-[url('/image-hero.jpg')]">
      <hr className="border-neutral-100" />
      <div className="flex items-center h-full max-w-[396px]">
        <div className="flex flex-col gap-4">
          <h4 className="uppercase tracking-[12px] text-sm text-neutral-50/50">
            NEW PRODUCT
          </h4>
          <p className="uppercase text-[56px] font-bold font-manrope ">
            XX99 Mark II Headphones
          </p>
          <p className=" md:max-w-80 text-sm text-neutral-50/80">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="inline-flex">
            {" "}
            <CustomBtn title="See Product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
