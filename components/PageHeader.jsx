import React from "react";
import Image from "next/image";

const PageHeader = ({ pageName, header }) => {
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

        <p className="text-white font-thin tracking-[.15em] text-[1.25rem]">
          {pageName}
        </p>

        <h1 className="text-white text-[3rem] text-center font-[600] max-w-[60rem]">
          {header}
        </h1>
      </section>
    </>
  );
};

export default PageHeader;
