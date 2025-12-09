import Link from "next/link";
import React from "react";

const Button = ({ name }) => {
  return (
    <Link
      href={"/ContactUs"}
      className="relative flex items-center justify-center text-white font-[300] tracking-[.15rem] w-[13rem] h-[3.55rem] text-[1.2rem] group hover:bg-[#fff] hover:text-[#161616] transition duration-700 ease-out"
    >
      {name}
      <svg
        width="219"
        height="70"
        className="absolute top-[-.628rem] left-[-.6rem]"
      >
        <rect width="0" height="0" x="10" y="10" fill="white" />
      </svg>
      <div className="bg-white w-0 h-[1px] absolute left-[-1.2rem] btn-line-anim group-hover:bg-[#161616] transition duration-500 ease-out"></div>
      <div className="bg-white w-0 h-[1px] absolute right-[-1.2rem] btn-line-anim group-hover:bg-[#161616] transition duration-500 ease-out"></div>
    </Link>
  );
};

export default Button;
