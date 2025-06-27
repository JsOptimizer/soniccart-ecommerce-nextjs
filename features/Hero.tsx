"use client";
import CustomBtn from "@/shared/components/form/CustomBtn";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] bg-cover bg-no-repeat text-white px-32 pt-20 bg-center bg-[url('/image-hero.jpg')]">
      <hr className="border-neutral-100" />
      <div className="flex items-center h-full">
        <div className="flex flex-col gap-4">
          <h4>NEW PRODUCT</h4>
          <p>XX99 Mark II Headphones</p>
          <p className="w-80 text-xs">
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
