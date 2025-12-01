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

      <section className="flex flex-col m-auto items-start max-w-[1200px]">
        <SectionHeader
          header={"Locations"}
          title={"Choose The Nearest Location"}
        />
      </section>
    </>
  );
};

export default page;
