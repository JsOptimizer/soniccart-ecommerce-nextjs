"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { navigationLinks } from "../constants/nav-link";
import Modal from "./Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SideMenu: FC<Props> = ({ open, onClose }) => {
  const currentPath = usePathname();
  const router = useRouter();
  const handleLink = (path: string) => {
    router.push(path);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} className="justify-normal">
      <nav className="h-full min-w-[40vw]  py-4   lg:hidden bg-white  ">
        <ul className="flex flex-col gap-4 mt-8">
          {navigationLinks.map(({ path, title }) => (
            <li
              key={path}
              className={`text-black/70 p-2 ${
                currentPath === path && "bg-brand-100/20 text-brand"
              }`}
            >
              <button onClick={() => handleLink(path)}>{title}</button>
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
};

export default SideMenu;
