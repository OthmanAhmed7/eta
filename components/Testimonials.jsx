import React from "react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/Testimonials";

import { FaQuoteLeft } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col items-start max-w-[1200px] m-auto px-[1rem] pb-[2rem]">
        <SectionHeader
          header={"Testimonials"}
          title={"We Care About Your Comments"}
        />
      </section>

      <section className="flex items-start justify-start gap-[5rem] max-w-[1200px] m-auto h-[20rem] px-[1rem]">
        {/* Testimonials Names */}
        <section className="flex-[1] w-full h-full relative border-[3px] px-[2rem]">
          <div className="absolute top-[-1rem] left-[-.5rem] bg-white">
            {testimonials.map((item) => (
              <div key={item.id} className="pb-[.4rem] text-[1.15rem]">
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Content */}
        <section className="flex-[6] items-center justify-center w-full h-full">
          <div className="w-full h-full overflow-hidden shadow-2xl">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center py-[4rem]"
              >
                <FaQuoteLeft className="text-[2rem]" />

                <p className="py-[1rem] text-[1.25rem] leading-[1.8rem] text-slate-500 w-[40rem]">
                  {item.text}
                </p>

                <p className="text-[1.5rem] font-[600]">-{item.name}</p>

                <p className="tracking-[.15rem] font-[300]">{item.jobTitle}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
