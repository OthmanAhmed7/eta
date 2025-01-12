import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed flex justify-between items-center max-w-[1280px] z-50 px-[1rem] py-[1rem]">
      <a href="#">
        <Image
          src="/img/logo.png"
          height={1000}
          width={1000}
          alt="Eta logo"
          className="w-[7rem]"
        />
      </a>
    </nav>
  );
};

export default Nav;
