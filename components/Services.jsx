import React from "react";

const Services = () => {
  return (
    <section className=" bg-[#161616] text-white">
      <div className="max-w-[1440px] flex flex-col justify-center items-center mx-auto py-[8rem] gap-[4rem] px-[1rem]">
        <div className="flex flex-col w-full">
          <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.3rem]">
            Services
            <span className="h-[3px] w-[7rem] bg-white"></span>
          </p>

          <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
            We Take Good Care of You
          </h2>
        </div>

        <div className="flex items-center justify-center gap-[2rem]">
          <div className="relative px-[1.5rem] pt-[2.5rem] border overflow-hidden border-white h-[24rem] bg-[url(/img/furniture.png)] bg-cover group">
            <div className="absolute top-0 left-0 bg-[#161616] w-full h-full z-10 group-hover:opacity-80 transition ease-out duration-500"></div>
            <p className="z-20 relative font-[800] text-[4rem] stroke text-transparent">
              01
            </p>

            <h3 className="z-20 relative font-[400] text-[1.5rem] tracking-[.03rem]">
              Furniture
            </h3>

            <p className="z-20 relative text-slate-300 mt-[1rem] text-[1.125rem] font-[300] translate-y-[250%] group-hover:translate-y-0 transition duration-500 ease-out">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              minima quibusdam labore reprehenderit voluptatibus similique neque
              est vero vitae blanditiis!
            </p>

            <a
              href=""
              className="z-20 absolute bottom-[1.05rem] left-[1.5rem] font-[300]"
            >
              Read More
            </a>
          </div>

          <div className="relative px-[1.5rem] pt-[2.5rem] border overflow-hidden border-white h-[24rem] bg-[url(/img/interior.png)] bg-cover group">
            <div className="absolute top-0 left-0 bg-[#161616] w-full h-full z-10 group-hover:opacity-80 transition ease-out duration-500"></div>
            <p className="z-20 relative font-[800] text-[4rem] stroke text-transparent">
              02
            </p>

            <h3 className="z-20 relative font-[400] text-[1.5rem] tracking-[.03rem]">
              Interior
            </h3>

            <p className="z-20 relative text-slate-300 mt-[1rem] text-[1.125rem] font-[300] translate-y-[250%] group-hover:translate-y-0 transition duration-500 ease-out">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              minima quibusdam labore reprehenderit voluptatibus similique neque
              est vero vitae blanditiis!
            </p>

            <a
              href=""
              className="z-20 absolute bottom-[1.05rem] left-[1.5rem] font-[300]"
            >
              Read More
            </a>
          </div>

          <div className="relative px-[1.5rem] pt-[2.5rem] border overflow-hidden border-white h-[24rem] bg-[url(/img/exterior.png)] bg-cover group">
            <div className="absolute top-0 left-0 bg-[#161616] w-full h-full z-10 group-hover:opacity-80 transition ease-out duration-500"></div>
            <p className="z-20 relative font-[800] text-[4rem] stroke text-transparent">
              03
            </p>

            <h3 className="z-20 relative font-[400] text-[1.5rem] tracking-[.03rem]">
              Exterior
            </h3>

            <p className="z-20 relative text-slate-300 mt-[1rem] text-[1.125rem] font-[300] translate-y-[250%] group-hover:translate-y-0 transition duration-500 ease-out">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              minima quibusdam labore reprehenderit voluptatibus similique neque
              est vero vitae blanditiis!
            </p>

            <a
              href=""
              className="z-20 absolute bottom-[1.05rem] left-[1.5rem] font-[300]"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
