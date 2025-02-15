import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#161616]">
      <div className="mx-auto py-[8rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem] ">
        <div>
          <div className="flex flex-col items-start ">
            <Image
              width={500}
              height={500}
              alt="Eta Logo"
              src="/img/logo.png"
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et
              possimus obcaecati optio consequatur laboriosam incidunt voluptate
              nemo impedit. Sint.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
