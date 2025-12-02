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

      <section className="flex flex-col m-auto items-start max-w-[1200px]">
        <SectionHeader header={"Services"} title={"Our Way of Serving You"} />
      </section>
    </>
  );
};

export default page;
