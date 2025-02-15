"use client";

import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactUs = () => {
  const [inputClick, setInputClick] = useState(false);

  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex flex-col justify-center items-center px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center font-[300] tracking-[.45rem] text-[1.3rem]">
          Contact
        </p>

        <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
          Talk With Us!
        </h2>
      </div>

      <div className="flex items-center justify-center gap-[10rem]">
        <div className="flex-1 flex-col gap-[2rem] my-[2.5rem]">
          <p className="text-slate-500 text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            necessitatibus dolorum vitae obcaecati? Totam officiis hic inventore
            adipisci esse maiores nisi similique doloremque voluptas odio?
            inventore adipisci esse maiores nisi similique doloremque voluptas
            odio?
          </p>

          <div className="flex items-center justify-start gap-[2rem] mt-[4rem]">
            <div className="flex flex-col flex-1 items-start gap-[2rem]">
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                Phone
              </h4>

              <p className="text-slate-500 text-[1.1rem]">(002) 01000083181</p>
            </div>

            <div className="flex flex-col flex-1 items-start gap-[2rem]">
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                Email
              </h4>

              <p className="text-slate-500 text-[1.1rem]">employer@eta.com</p>
            </div>

            <div className="flex flex-col flex-1 items-start gap-[2rem]">
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                WhatsApp
              </h4>

              <p className="text-slate-500 text-[1.1rem]">Chat With Us</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full self-end">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-[2rem]"
          >
            <div className="flex items-center gap-[1.5rem] w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full h-[2.5rem] border border-[#161616]"
                />

                <span
                  className={`absolute top-[20%] left-[8%] text-slate-500 transition duration-700 ease-out group`}
                >
                  Name
                </span>
              </div>
              <input
                type="text"
                className="w-full h-[2.5rem] border border-[#161616]"
              />
            </div>

            <input
              type="email"
              className="w-full h-[2.5rem] border border-[#161616]"
            />

            <textarea
              name=""
              id=""
              className="w-full h-[8rem] border border-[#161616]"
            ></textarea>

            <button className="flex items-center self-end mt-[.5rem] gap-[.8rem] w-[5rem] h-[1.5rem] text-slate-600">
              Submit <MdArrowOutward />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
