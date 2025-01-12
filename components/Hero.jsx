import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-cover bg-no-repeat bg-[#181818] flex flex-col items-center justify-center">
      <Image
        src="/img/hero-1.jpg"
        width={800}
        height={800}
        alt="Eta logo"
        className="translate-y-[-15%]"
      />

      <Button name={"Contact Us"} />
    </section>
  );
};

export default Hero;
