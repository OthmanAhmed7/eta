import React from "react";
import PageHeader from "@/components/PageHeader";
import ContactUs from "@/components/ContactUs";
import SectionHeader from "@/components/SectionHeader";

const page = () => {
  return (
    <>
      <PageHeader pageName={"Contact Us"} header={"Let Us Connect With You."} />

      <ContactUs />

      <section className="flex flex-col m-auto items-start max-w-[1200px] pb-[5rem]">
        <SectionHeader
          header={"Locations"}
          title={"Choose The Nearest Location"}
        />

        <section className="grid grid-cols-3 gap-[12.4rem]">
          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer group hover:bg-[#161616] hover:text-white transition ease-in-out duration-500">
            <span className="w-[5rem] h-[1px] bg-[#161616] mb-[1rem] group-hover:bg-white"></span>

            <h3 className="font-[500] mb-[1.5rem]">Al-Shuhdaa</h3>

            <p>Placeholder Address</p>
            <p>Placeholder Phone</p>
            <p>email:employer@eta.com</p>
          </section>

          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer hover:bg-[#161616] hover:text-white transition ease-in-out duration-500">
            <span className="w-[5rem] h-[1px] bg-[#161616] mb-[1rem]"></span>

            <h3 className="font-[500] mb-[1.5rem]">Sadat</h3>

            <p>Placeholder Address</p>
            <p>Placeholder Phone</p>
            <p>email:employer@eta.com</p>
          </section>

          <section className="bg-[#e7e7e7] p-[2.5rem] flex flex-col cursor-pointer hover:bg-[#161616] hover:text-white transition ease-in-out duration-500">
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
