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

      <section className="flex flex-col m-auto items-start max-w-[1200px] py-[5rem] px-[1rem]">
        <SectionHeader header={"Services"} title={"Our Way of Serving You"} />

        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Every project we create carries a unique identity. Eta Group has
          transformed hundreds of residential, commercial, hospitality, and
          retail spaces, consistently delivering exceptional results. Guided by
          our core values and commitment to quality, we continue to set new
          standards in distinctive interior design.
        </p>

        <h3 className="text-slate-500 text-[1.2rem] font-[600] mb-[.5rem]">
          Plan
        </h3>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          At Eta Group, we deliver high-standard, tailored master planning with
          punctuality, professionalism, and precision. For us, it’s a refined
          blend of art and science—where creative vision meets real-world
          practicality.
        </p>

        <h3 className="text-slate-500 text-[1.2rem] font-[600] mb-[.5rem]">
          Design
        </h3>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          We believe that a successful design is one that reflects the
          individual needs, lifestyle, and preferences of our clients. Eta Group
          offers a comprehensive portfolio of services for large-scale projects,
          from luxury residential architecture and refined interior design to
          modern office spaces and distinctive retail and showroom concepts.
        </p>

        <h3 className="text-slate-500 text-[1.2rem] font-[600] mb-[.5rem]">
          Implementation
        </h3>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Concepts are easy to sketch; executing them is the true Mastery
        </p>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          At Eta Group, we spare clients the stress of finding reliable
          contractors. We manage the entire process—from initial design to full
          execution—ensuring every detail aligns perfectly with the original
          vision.
        </p>

        <h3 className="text-slate-500 text-[1.2rem] font-[600] mb-[.5rem]">
          Furniture
        </h3>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Furniture is the soul of any interior, shaping its mood and character.
          We provide fully customized furniture for residential, corporate, and
          specialty spaces, balancing functionality, elegance, and comfort to
          create interiors that are both refined and inviting.
        </p>
      </section>
    </>
  );
};

export default page;
