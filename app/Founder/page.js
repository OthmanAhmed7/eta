import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-start gap-[4rem] max-w-[1200px] m-auto py-[10rem] px-[1rem]">
        {/* First Column */}
        <section className="flex-1">
          <div>
            <SectionHeader header={"CEO & Founder"} title={"Omar Dora"} />
          </div>

          <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
            Omar Dora is the founder and CEO of Eta Group, leading the company
            since its establishment in 2014. With a clear vision for high-end
            interior and architectural design, he has guided Eta Group to become
            a recognized name in luxury and turnkey solutions across
            residential, commercial, retail, and hospitality sectors.
          </p>
          <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
            Omar emphasizes the balance between creativity, functionality, and
            client individuality. Under his leadership, Eta Group delivers
            projects that are both aesthetically exceptional and practical.
          </p>
          <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
            Since founding Eta Group, Omar has overseen the completion of
            hundreds of projects, ensuring consistency, quality, and attention
            to detail at every stage. His dedication to excellence and
            innovation has positioned the company as a trusted partner for
            clients seeking distinctive and refined interior and architectural
            solutions.
          </p>
          <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
            Omar believes successful design comes from close collaboration with
            clients. He ensures every project reflects the client’s vision while
            maintaining Eta Group’s high standards.
          </p>
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
