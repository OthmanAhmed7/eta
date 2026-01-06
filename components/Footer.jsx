import Image from "next/image";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#161616]">
      <div className="relative mx-auto py-[5rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem] ">
        <div className="w-full flex flex-col gap-[2.5rem] pb-[4rem] border-b-[1px] z-10">
          <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-0 items-center md:items-end justify-between">
            <Image
              width={500}
              height={500}
              alt="Eta Logo"
              src="/img/logo.avif"
              className="flex-1"
            />

            <p className="flex flex-1 justify-end text-[1.5rem] font-[300] text-white tracking-[.35rem]">
              Get In Touch
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-[1.5rem] md:gap-0 items-start justify-between text-white">
            <p className="flex flex-1 text-[1.125rem] max-w-[43.5rem] font-[300] leading-[1.8rem]">
              Eta Group - Transforming spaces with expert finishing solutions.
              Quality craftsmanship, trusted service, and exceptional results
              every time.
            </p>

            <div className="flex flex-col flex-1 items-end">
              <p>(002) 0100 008 3181 - (002) 0100 522 0653</p>
              <p>20, Villa Hanin, El-Bahr st.</p>
              <p>employer@eta.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-[1.5rem] md:gap-0 items-center justify-between text-white w-full z-10">
          <p className="flex flex-1 gap-1">
            All Rights Reserved |{" "}
            <a href="https://portfolio-v2-ten-tau.vercel.app/" target="_Blank">
              Othman Ahmed
            </a>
          </p>

          <div className="flex flex-1 justify-end items-center gap-[1.5rem]">
            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-white group hover:bg-white transition duration-500 ease-out"
            >
              <FaFacebookF className="text-[1.125rem] group-hover:text-[#161616] transition duration-500 ease-out" />
            </a>

            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-white group hover:bg-white transition duration-500 ease-out"
            >
              <FaInstagram className="text-[1.125rem] group-hover:text-[#161616] transition duration-500 ease-out" />
            </a>
            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-white group hover:bg-white transition duration-500 ease-out"
            >
              <FaTiktok className="text-[1.125rem] group-hover:text-[#161616] transition duration-500 ease-out" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
