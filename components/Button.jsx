import React from "react";

const Button = () => {
  return (
    <button className="relative flex items-center justify-center text-white font-semibold w-[13rem] h-[3.5rem] text-xl group hover:bg-[#fff] hover:text-[#161616] transition duration-500 ease-out">
      Contact Us
      <svg
        width="219"
        height="67"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-.628rem] left-[-.6rem]"
      >
        <rect width="0" height="0" x="10" y="10" fill="white" />
      </svg>
      <div className="bg-white w-0 h-[1px] absolute left-[-1.2rem] btn-line-anim group-hover:bg-[#161616] transition duration-500 ease-out"></div>
      <div className="bg-white w-0 h-[1px] absolute right-[-1.2rem] btn-line-anim group-hover:bg-[#161616] transition duration-500 ease-out"></div>
    </button>
  );
};

export default Button;
