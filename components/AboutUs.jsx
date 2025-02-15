import React from "react";

const AboutUs = () => {
  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex flex-col lg:flex-row justify-center items-center gap-[2rem] lg:gap-[6rem] px-[1rem]">
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-2 grid-rows-2 border-[.8rem] border-[#181818]">
          <div className="row-span-2 place-content-center px-[4.7rem] md:px-[6rem] py-[1.5rem] md:py-[2rem] flex flex-col items-center justify-center text-[#181818] border-r-[1px] border-[#181818]">
            <p className="text-[6rem] md:text-[10rem]">10</p>
            <p className="text-center font-[300] tracking-[.15rem] ">
              Years of <br />
              Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-[4.7rem] md:px-[6rem] py-[1.5rem] md:py-[2rem] border-b-[1px] border-[#181818] text-[#181818]">
            <p className="text-[3rem] md:text-[5rem]">68</p>
            <p className="font-[300] tracking-[.15rem] ">Projects</p>
          </div>

          <div className="flex flex-col items-center justify-center px-[4.7rem] md:px-[6rem] py-[1.5rem] md:py-[2rem] text-[#181818]">
            <p className="text-[3rem] md:text-[5rem]">21</p>
            <p className="font-[300] tracking-[.15rem] ">Clients</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col justify-center items-start gap-[1rem]">
          <div>
            <p className="font-[300] tracking-[.45rem] text-[1.3rem]">
              About Us
            </p>

            <h2 className="text-[2.8rem] md:text-[3.5rem] font-[700] leading-[4rem] tracking-tight">
              All Our Attention <br /> Is For Your Comfort
            </h2>
          </div>

          <p className="text-slate-500 max-w-[30rem] text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            ex dolorem? Praesentium asperiores enim sed similique, dolore vitae
            laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, ex dolorem? Praesentium asperiores enim sed
            similique, dolore vitae laboriosam dolor.
          </p>

          <p className="text-slate-500 max-w-[30rem] text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, optio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
