import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        pageName={"Services"}
        header={"Explore What We Can Do For You"}
      />

      <section className="flex flex-col m-auto items-start max-w-[1200px] py-[5rem]">
        <SectionHeader header={"Services"} title={"Our Way of Serving You"} />

        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Every project we craft carries its own signature identity. Eta Group
          has enhanced hundreds of spaces across residential, commercial,
          hospitality, and retail sectors, consistently delivering distinguished
          results. Guided by our core values and an unwavering commitment to
          quality, we continue to set new standards in unique interior design.
        </p>
      </section>
    </>
  );
};

export default page;
