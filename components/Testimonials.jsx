"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/Testimonials";

import { FaQuoteLeft } from "react-icons/fa6";

const Testimonials = () => {
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setUserId((id) => (id === testimonials.length - 1 ? 0 : id + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [userId]);

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
              <div key={item.id} className="relative pb-[.4rem] text-[1.15rem]">
                {/* {userId + 1 === item.id ? (
                  <span class="inline-block rotate-45 opacity-100 before:content-[''] before:absolute before:top-0 before:left-0 before:border-[4px] before:border-black before:border-l-transparent before:border-t-transparent before:border-b-transparent transition ease-out duration-[1.5s]"></span>
                ) : (
                  <span class="inline-block rotate-45 opacity-0 before:content-[''] before:absolute before:top-0 before:left-0 before:border-[4px] before:border-black before:border-l-transparent before:border-t-transparent before:border-b-transparent transition ease-out duration-[1.5s]"></span>
                )} */}
                <span
                  className={`absolute top-0 left-0 block rotate-45 transition-opacity duration-300 ${
                    userId + 1 === item.id ? "opacity-100" : "opacity-0"
                  } before:content-[''] before:absolute before:top-0 before:left-0 before:border-[4px] before:border-black before:border-l-transparent before:border-t-transparent before:border-b-transparent`}
                />
                <p
                  onClick={() => setUserId(item.id - 1)}
                  className={`cursor-pointer ${
                    userId + 1 === item.id
                      ? "text-slate-700 translate-x-[1rem]"
                      : "text-slate-400 translate-x-0"
                  } transition ease-out duration-[1.5s]`}
                >
                  {item.name}
                </p>
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
                className="flex flex-col items-center text-center py-[4rem] translate-y-[0rem] transition ease-out duration-[1.5s]"
                style={{ transform: `translateY(-${userId * 21}rem)` }}
              >
                <FaQuoteLeft className="text-[2rem]" />

                <p className="py-[1rem] text-[1.25rem] leading-[1.8rem] text-slate-500 w-[40rem]">
                  {item.text}
                </p>

                <p className="text-[1.5rem] font-[600]">-{item.name}</p>

                <p className="tracking-[.15rem] font-[300] text-slate-500">
                  {item.jobTitle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
