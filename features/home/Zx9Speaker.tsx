import CustomBtn from "@/shared/components/form/CustomBtn";
import Link from "next/link";

const Zx9Speaker = () => {
  return (
    <section className="bg-brand p-8 rounded-lg relative h-auto lg:min-h-[480px] lg:h-[65vh] z-0 overflow-hidden sm:p-16 lg:p-32">
      <div className="container flex flex-col items-center gap-16 lg:flex-row lg:justify-between lg:items-center relative z-20">
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <svg
            className="absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[944px] lg:h-[944px] z-0"
            viewBox="0 0 944 944"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
          <div
            className="
            relative z-10
            w-56 h-56 bg-contain bg-no-repeat
            bg-[url('/image-speaker-mob-zx9.png')]
            sm:bg-[url('/image-speaker-tab-zx9.png')]
            lg:bg-[url('/image-speaker-zx9.png')]
            lg:w-[410px] lg:h-[493px]
          "
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:w-auto lg:items-start text-white gap-4 relative z-10">
          <h4 className="text-[36px] sm:text-[56px] text-center lg:text-left font-bold uppercase">
            ZX9 <br /> SPEAKER
          </h4>
          <p className="text-sm lg:w-auto lg:max-w-96 text-center lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href={"/speakers/6"}>
            <CustomBtn
              title="See product"
              className="bg-black uppercase hover:bg-black/80"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Zx9Speaker;
