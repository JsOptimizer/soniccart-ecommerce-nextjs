import speaker from "@/shared/assets/images/home/desktop/image-speaker-zx9.png";
import Image from "next/image";

const Zx9Speaker = () => {
  return (
    <section className="bg-brand rounded-lg relative h-[560px] ">
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
      <div className="z-20 size-full relative flex items-end">
        <Image
          src={speaker}
          alt="speaker"
          height={500}
          width={500}
          className="w-72"
        />
      </div>
    </section>
  );
};

export default Zx9Speaker;
