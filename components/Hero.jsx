import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen w-full bg-cover bg-no-repeat bg-[#181818] flex flex-col items-center justify-center">
      <Image
        src="/img/logo.png"
        width={800}
        height={800}
        alt="Eta logo"
        className="translate-y-[-14%] z-30 absolute w-[50rem]"
      />

      <div className="translate-y-[380%] z-30">
        <Button name={"Contact Us"} />
      </div>

      <Image
        src="/img/subtle-prism.svg"
        width={2000}
        height={1000}
        alt="topography background pattern"
        className="bg-cover absolute top-0 left-0 opacity-15"
      />
    </section>
  );
};

export default Hero;
