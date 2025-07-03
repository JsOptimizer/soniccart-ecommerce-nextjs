const BestGear = () => {
  return (
    <section className="flex items-center justify-center flex-wrap-reverse gap-8   lg:justify-between ">
      <div className="flex flex-col items-start   gap-4  ">
        <p className="uppercase  font-bold font-manrope text-[40px] ">
          bringing you the
          <br /> <span className="text-brand">best</span> audio gear
        </p>
        <p className="w-[445px] text-[15px] text-black-950/60 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="bg-[url('/image-best-mob-gear.jpg')] sm:bg-[url('/image-best-tab-gear.jpg')] lg:bg-[url('/image-best-gear.jpg')] w-full h-[300px] lg:h-[588px] lg:w-[544px] bg-cover bg-no-repeat rounded-md" />
    </section>
  );
};

export default BestGear;
