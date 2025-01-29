import React from "react";

const AboutUs = () => {
  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex justify-center items-center gap-[10rem]">
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-2 grid-rows-2 border-[.8rem] border-[#181818]">
          <div className="row-span-2 place-content-center px-[6rem] py-[2rem] flex flex-col items-center justify-center text-[#181818] border-r-[1px] border-[#181818]">
            <p className="text-[8rem]">10</p>
            <p className="text-center font-[500]">
              Years of <br />
              Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-b-[1px] border-[#181818]">
            <p className="text-[4rem]">68</p>
            <p className="font-[500]">Projects</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[4rem]">21</p>
            <p className="font-[500]">Clients</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col justify-center items-start gap-[1rem]">
          <p className="font-[300] tracking-[.2rem]">About Us</p>

          <h2 className="text-[4rem] font-[700] leading-[5rem] tracking-tight">
            All Our Attention <br /> Is For Your Comfort
          </h2>

          <p className="text-slate-500 w-[30rem] text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            ex dolorem? Praesentium asperiores enim sed similique, dolore vitae
            laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, ex dolorem? Praesentium asperiores enim sed
            similique, dolore vitae laboriosam dolor.
          </p>

          <p className="text-slate-500 w-[30rem] text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, optio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
