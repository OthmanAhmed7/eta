import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import SectionHeader from "@/components/SectionHeader";

const page = () => {
  return (
    <>
      <section className="relative h-screen w-full bg-cover overflow-hidden bg-no-repeat bg-[#181818] flex flex-col items-center justify-center px-[1rem]">
        <Image
          src="/img/subtle-prism.svg"
          width={2000}
          height={1000}
          alt="topography background pattern"
          className="bg-cover absolute top-0 left-0 opacity-15 h-[100vh]"
        />
      </section>

      <ContactUs />

      <section className="flex flex-col m-auto items-start max-w-[1200px] pb-[5rem]">
        <SectionHeader
          header={"Locations"}
          title={"Choose The Nearest Location"}
        />

        <section className="grid grid-cols-3 gap-[10rem] justify-between">
          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer group hover:bg-[#161616] hover:text-white transition ease-in-out 1.5s">
            <span className="w-[5rem] h-[1px] bg-[#161616] mb-[1rem] group-hover:bg-white"></span>

            <h3 className="font-[500] mb-[1.5rem]">Al-Shuhdaa</h3>

            <p>Placeholder Address</p>
            <p>Placeholder Phone</p>
            <p>email:employer@eta.com</p>
          </section>

          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer hover:bg-[#161616] hover:text-white transition ease-in-out .5s">
            <span className="w-[5rem] h-[1px] bg-[#161616] mb-[1rem]"></span>

            <h3 className="font-[500] mb-[1.5rem]">Sadat</h3>

            <p>Placeholder Address</p>
            <p>Placeholder Phone</p>
            <p>email:employer@eta.com</p>
          </section>

          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer hover:bg-[#161616] hover:text-white transition ease-in-out .5s">
            <span className="w-[5rem] h-[1px] bg-[#161616] mb-[1rem]"></span>

            <h3 className="font-[500] mb-[1.5rem]">Shibin El-Kom</h3>

            <p>Placeholder Address</p>
            <p>Placeholder Phone</p>
            <p>email:employer@eta.com</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
