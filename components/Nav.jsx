import Image from "next/image";
import React from "react";

import { RiMenuFoldFill } from "react-icons/ri";

const Nav = () => {
  return (
    <section className="fixed flex mx-auto w-[100%] h-[5rem] z-50 translate-x-[6%]">
      <nav className="flex justify-between items-center max-w-[1440px] w-full px-[1rem] py-[1rem]">
        <a href="#">
          <Image
            src="/img/logo.png"
            height={1000}
            width={1000}
            alt="Eta logo"
            className="w-[7rem] h-[3rem]"
          />
        </a>

        <RiMenuFoldFill className="w-[2.5rem] h-[2.5rem] text-white" />
      </nav>
    </section>
  );
};

export default Nav;
