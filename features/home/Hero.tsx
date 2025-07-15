"use client";
import CustomBtn from "@/shared/components/form/CustomBtn";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center h-dvh sm:h-[90vh] bg-cover bg-center text-white    pt-20 bg-[url('/image-header-mob.jpg')]  sm:bg-[url('/image-header.jpg')] lg:bg-[url('/image-hero.jpg')] ">
      <section className="container mx-auto h-full px-8 lg:px-16">
        <hr className="border-neutral-100" />
        <div className="flex items-center justify-center size-full lg:justify-normal">
          <div className="flex flex-col gap-4  max-w-[396px] px-4 lg:px-0 items-center lg:items-start">
            <h4 className="uppercase tracking-[12px] text-sm text-neutral-50/50 md:text-center lg:text-left">
              NEW PRODUCT
            </h4>
            <p className="uppercase text-[36px] sm:text-[56px] font-bold font-manrope text-center lg:text-left ">
              XX99 Mark II Headphones
            </p>
            <p className=" md:max-w-80 text-sm text-neutral-50/80 text-center lg:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="inline-flex sm:justify-center lg:justify-normal">
              {" "}
              <Link href={"/headphones/4"}>
                {" "}
                <CustomBtn title="See Product" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
