import React from "react";

const Button = ({ name }) => {
  return (
    <button className="relative flex items-center justify-center text-[#161616] font-[300] tracking-[.15rem] w-[13rem] h-[3.55rem] text-[1.2rem] group hover:bg-[#161616] hover:text-[#fff] transition duration-700 ease-out">
      {name}
      <svg
        width="219"
        height="70"
        className="absolute top-[-.628rem] left-[-.6rem]"
      >
        <rect
          width="0"
          height="0"
          x="10"
          y="10"
          fill="#161616"
          className="secondary"
        />
      </svg>
      <div className="bg-[#161616] w-0 h-[1px] absolute left-[-1.2rem] btn-line-anim group-hover:bg-[#fff] transition duration-500 ease-out"></div>
      <div className="bg-[#161616] w-0 h-[1px] absolute right-[-1.2rem] btn-line-anim group-hover:bg-[#fff] transition duration-500 ease-out"></div>
    </button>
  );
};

export default Button;
