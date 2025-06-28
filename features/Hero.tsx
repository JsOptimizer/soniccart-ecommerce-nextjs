"use client";
import CustomBtn from "@/shared/components/form/CustomBtn";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] bg-cover bg-no-repeat text-white px-32 pt-20 bg-center md:bg-[url('/image-header.jpg')] lg:bg-[url('/image-hero.jpg')]">
      <hr className="border-neutral-100" />
      <div className="flex items-center justify-center size-full lg:justify-normal">
        <div className="flex flex-col gap-4  max-w-[396px] md:items-center lg:items-start">
          <h4 className="uppercase tracking-[12px] text-sm text-neutral-50/50 md:text-center lg:text-left">
            NEW PRODUCT
          </h4>
          <p className="uppercase text-[56px] font-bold font-manrope md:text-center lg:text-left ">
            XX99 Mark II Headphones
          </p>
          <p className=" md:max-w-80 text-sm text-neutral-50/80 md:text-center lg:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="inline-flex md:justify-center lg:justify-normal">
            {" "}
            <CustomBtn title="See Product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
