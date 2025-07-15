import CustomImage from "./CustomImage";

const BestGear = () => {
  return (
    <section className="flex items-center justify-center flex-wrap-reverse gap-8   lg:justify-between ">
      <div className="flex flex-col  lg:items-start gap-4 sm:px-8  ">
        <p className="uppercase text-center  lg:text-left  font-bold font-manrope text-[28px] sm:text-[40px]  ">
          bringing you the
          <br />
          <span className="text-brand">best</span> audio gear
        </p>
        <p className="lg:w-[445px] text-center lg:text-left text-[15px] text-black-950/60 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <CustomImage
        alt={"mob-gear"}
        mobile={"/image-best-mob-gear.jpg"}
        tablet={"/image-best-tab-gear.jpg"}
        desktop={"/image-best-gear.jpg"}
        className="w-full lg:min-h-[500px] "
      />
    </section>
  );
};

export default BestGear;
