"use client";

import Link from "next/link";
import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

import { MdArrowOutward } from "react-icons/md";

const ContactUs = () => {
  const [nameInput, setNameInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [messageInput, setMessageInput] = useState();

  console.log(nameInput);
  return (
    <section className="mx-auto my-[8rem] max-w-[1200px] flex flex-col justify-center items-center px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center font-[300] tracking-[.45rem] text-[1.3rem]">
          Contact
        </p>

        <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
          Talk With Us!
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[2rem] lg:gap-[6rem]">
        <div className="flex-1 flex-col gap-[2rem] my-[2.5rem]">
          <p className="text-slate-500 text-[1.2rem]">
            Now, as you've learned about our finishing expertise, it's time to
            reach out and start building something amazing together. Our team at
            Eta Group is ready to listen, advise, and bring your vision to life.
            Let's connect today and lay the foundation for your perfect space!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-start gap-[2rem] mt-[4rem]">
            <Link
              href={"https://wa.me/201000083181"}
              target="_blank"
              className="flex flex-col flex-1 items-start gap-[2rem]"
            >
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                Phone
              </h4>

              <p className="text-slate-500 text-[1.1rem]">(002) 01000083181</p>
            </Link>

            <Link
              href={"mailto:example@gmail.com"}
              className="flex flex-col flex-1 items-start gap-[2rem]"
            >
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                Email
              </h4>

              <p className="text-slate-500 text-[1.1rem]">employer@eta.com</p>
            </Link>

            <Link
              href={"https://wa.me/201000083181"}
              target="_blank"
              className="flex flex-col flex-1 items-start gap-[2rem]"
            >
              <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

              <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
                WhatsApp
              </h4>

              <p className="text-slate-500 text-[1.1rem]">Chat With Us</p>
            </Link>
          </div>
        </div>

        {/* Contact Us Form */}
        <div className="flex-1 w-full self-end">
          <form
            action="https://formspree.io/f/xblnkwvk"
            method="POST"
            target="_blank"
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            {/* Name + Phone */}
            <div className="flex items-center gap-6 w-full">
              {/* Name */}
              <FloatingInput
                className={"floating-label"}
                label="Name"
                type="text"
                value={nameInput}
                name="name"
                onChange={(e) => setNameInput(e.target.value)}
                required
              />

              {/* Phone */}
              <FloatingInput
                className={"floating-label"}
                label="Phone"
                type="tel"
                value={phoneInput}
                name="phone"
                onChange={(e) => setPhoneInput(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <FloatingInput
              className={"floating-full-label"}
              label="Email"
              type="email"
              value={emailInput}
              name={"email"}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />

            {/* Message */}
            <div className="relative w-full group">
              <label
                className={`absolute ${
                  !messageInput
                    ? "top-[8%] bg-transparent"
                    : "top-[-9%] bg-white"
                }  left-[3%] text-slate-500 pointer-events-none group-focus-within:bg-white group-focus-within:top-[-9%] group-focus-within:left-[1.5%] group-focus-within:text-[.9rem] group-focus-within:px-[.1rem] transition-all duration-500 ease-out`}
              >
                Message
              </label>

              <textarea
                className="floating-textarea"
                name="message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center self-end mt-2 gap-2 px-4 py-2 text-slate-600 hover:text-black transition-colors"
            >
              Submit <MdArrowOutward />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
