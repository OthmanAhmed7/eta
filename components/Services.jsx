import React from "react";

const Services = () => {
  return (
    <section className=" bg-[#161616] text-white">
      <div className="max-w-[1440px] flex flex-col justify-center items-center mx-auto my-[8rem] gap-[4rem] px-[1rem]">
        <div className="flex flex-col w-full">
          <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.3rem]">
            Services
            <span className="h-[3px] w-[7rem] bg-white"></span>
          </p>

          <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
            We Take Good Care of You
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
