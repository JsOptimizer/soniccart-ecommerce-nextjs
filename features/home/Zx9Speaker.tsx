// import speaker from "@/shared/assets/images/home/desktop/image-speaker-zx9.png";
// import Image from "next/image";

import CustomBtn from "@/shared/components/form/CustomBtn";

const Zx9Speaker = () => {
  return (
    <section className="bg-brand rounded-lg relative h-auto lg:min-h-[480px] lg:h-[65vh] z-0 overflow-hidden sm:p-16 lg:p-32">
      <svg
        className="absolute -left-32 -top-10  z-0"
        width="944"
        height="944"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
          <circle cx="472" cy="472" r="235.5" />
          <circle cx="472" cy="472" r="270.5" />
          <circle cx="472" cy="472" r="471.5" />
        </g>
      </svg>
      <div className="container flex flex-col items-center gap-16 lg:flex-row lg:justify-between  lg:items-start  relative z-20">
        <div className="sm:bg-[url('/image-speaker-tab-zx9.png')] sm:w-56 lg:bg-[url('/image-speaker-zx9.png')] h-56 lg:size-[55vh]  bg-contain bg-no-repeat  " />
        <div className="flex flex-col items-center justify-center  sm:w-auto  lg:items-start text-white gap-4">
          <h4 className="text-[56px] text-center lg:text-left font-bold uppercase">
            ZX9 <br /> SPEAKER
          </h4>
          <p className="text-sm lg:w-auto max-w-96 text-center lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <CustomBtn
            title="See product"
            className="bg-black uppercase hover:bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Zx9Speaker;
