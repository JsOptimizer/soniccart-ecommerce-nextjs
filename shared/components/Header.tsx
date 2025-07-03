import { cn } from "@/shared/lib";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { navigationLinks } from "../constants/nav-link";

type Props = {
  className?: string;
  title?: string | null;
};

const Header: FC<Props> = ({ className, title = null }) => {
  return (
    <header className={cn("bg-transparent absolute z-30 w-full", className)}>
      <div className="mx-auto container text-white py-8 sm:px-16 lg:px-32 flex justify-between">
        <div className="flex items-center gap-16">
          <div className="lg:hidden">
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          </div>

          <Image
            src={"/audiophile.png"}
            height={50}
            width={200}
            alt="logo"
            className="w-28"
          />
        </div>
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-8 text-sm text-neutral-100 uppercase text-[13px]">
            {navigationLinks.map(({ path, title }) => (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      {title && (
        <h1 className="text-white text-center py-8 text-[40px] sm:block hidden uppercase font-bold ">
          {title}
        </h1>
      )}
    </header>
  );
};

export default Header;
