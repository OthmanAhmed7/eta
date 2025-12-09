import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        pageName={"About Us"}
        header={"Our work blends creativity with meaningful knowledge-sharing."}
      />

      <section className="flex flex-col m-auto items-left justify-center w-full max-w-[1200px] pt-[5rem] pb-[5rem] px-[1rem]">
        <SectionHeader
          header={"About Us"}
          title={"Our Attention Is For Your Comfort."}
        />

        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Our team manages every step of the process — from developing the
          initial idea and concept to full realization. We value tradition and
          thoughtfully blend it with innovation. Each of our projects carries
          its own artistic identity paired with functional, practical solutions.
        </p>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          For us, every project begins with truly understanding the client. We
          believe that the best results come from listening carefully to their
          ideas, preferences, and expectations. Our goal is always to capture
          their individuality and translate it into a design that feels
          meaningful and personal. We take the time to explore their lifestyle,
          the atmosphere they want to achieve, and the values they want the
          space to reflect. Through this process, we ensure that each project
          becomes a genuine expression of the client’s identity, not just a
          design solution. Your vision shapes our direction, and we are always
          ready to hear what inspires you.
        </p>
        <p className="text-slate-500 text-[1.2rem] mb-[2rem]">
          Eta Group has grown to become a trusted name in luxury interior
          design, offering complete turnkey solutions across residential,
          commercial, retail, and hospitality sectors. Our approach is based on
          thorough planning, strong technical expertise, and a commitment to
          delivering high-quality results. We work to ensure that every project
          runs smoothly, from early sketches and material selection to final
          installation and handover. With a wide range of completed projects, we
          continue to demonstrate our ability to adapt to different styles and
          requirements while maintaining the highest design standards.
        </p>
        <p className="text-slate-500 text-[1.2rem]">
          Established in 2014 by Omar Dora, Eta Group has grown into a
          distinguished name in high-end design. Over the years, the company has
          built a strong reputation for excellence.
        </p>
      </section>
    </>
  );
};

export default page;
