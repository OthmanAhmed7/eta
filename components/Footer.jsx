import Image from "next/image";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#161616]">
      <div className="relative mx-auto py-[8rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem] ">
        {/* <div>
          <Image
            width={500}
            height={500}
            alt="eta logo 2"
            src="/img/logo-2.jpg"
            className="absolute bottom-0 right-0 z-0"
          />
        </div> */}

        <div className="w-full flex flex-col gap-[2.5rem] pb-[4rem] border-b-[1px] z-10">
          <div className="flex items-end justify-between">
            <Image
              width={500}
              height={500}
              alt="Eta Logo"
              src="/img/logo.png"
            />

            <p className="text-[1.5rem] font-[300] text-white tracking-[.35rem]">
              Get In Touch
            </p>
          </div>

          <div className="w-full flex items-start justify-between text-white">
            <p className="text-[1.125rem] w-[35rem] font-[300] leading-[1.8rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              totam deleniti itaque atque sit commodi quod exercitationem quam
              ea ex?
            </p>

            <div className="">
              <p>(002) 0100 008 3181 - (002) 0100 522 0653</p>
              <p>20, Villa Hanin, El-Bahr st.</p>
              <p>employer@eta.com</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-white w-full z-10">
          <p className="">
            All Rights Reserved |{" "}
            <a href="https://portfolio-v2-ten-tau.vercel.app/" target="_Blank">
              Othman Ahmed
            </a>
          </p>

          <div className="flex items-center gap-[1.5rem]">
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
