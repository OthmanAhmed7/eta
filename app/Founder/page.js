import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <section className="flex items-start m-auto py-[10rem]">
        {/* First Column */}
        <section className="flex-1">
          <div>
            <SectionHeader header={"CEO & Founder"} title={"Omar Dora"} />
          </div>
        </section>

        {/* Second Column */}
        <section className="flex flex-col flex-1 items-start gap-[1rem]">
          <Image
            alt="Founder Omar Dora Image"
            width={500}
            height={500}
            src="/img/omar_dora.jpg"
          />

          <div className="flex flex-1 justify-end items-center gap-[1.5rem]">
            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-[#161616] group hover:bg-[#161616] transition duration-500 ease-out"
            >
              <FaFacebookF className="text-[1.125rem] group-hover:text-white transition duration-500 ease-out" />
            </a>

            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-[#161616] group hover:bg-[#161616] transition duration-500 ease-out"
            >
              <FaInstagram className="text-[1.125rem] group-hover:text-white transition duration-500 ease-out" />
            </a>
            <a
              href=""
              target="_Blank"
              className="p-[.5rem] border border-[#161616] group hover:bg-[#161616] transition duration-500 ease-out"
            >
              <FaTiktok className="text-[1.125rem] group-hover:text-white transition duration-500 ease-out" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
