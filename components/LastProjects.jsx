import React from "react";
import Image from "next/image";
import { lastWork } from "../lib/LatestWork";

const LastProjects = () => {
  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.5rem]">
          Last Projects
        </p>

        <h2 className="text-[4rem] font-[700] leading-[5rem] tracking-tight">
          Thrive for Perfection
        </h2>
      </div>

      <div className="grid grid-cols-3 w-full gap-[1.5rem]">
        {lastWork.map((i) => (
          <div key={i.id}>
            <Image
              width={500}
              height={500}
              alt={i.title}
              src={i.image}
              className="w-full h-[20rem]"
            />

            <p className="text-center mt-[1.5rem] font-[500] text-[1.25rem]">
              {i.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastProjects;
