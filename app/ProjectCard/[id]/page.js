import React from "react";
import { lastWork } from "@/lib/LatestWork";
import Image from "next/image";

const page = async ({ params }) => {
  const resolveParams = await params;
  const projects = lastWork.find((p) => p.id === parseInt(resolveParams.id));

  return (
    <>
      <section className="flex items-start gap-[3rem] max-w-[1200px] m-auto py-[5rem] px-[1rem]">
        <section className="flex-[2]">
          <h1 className="text-[2.5rem] font-[700] mb-[1rem]">
            {projects.title}
          </h1>
        </section>

        <section className="flex-1">
          {projects.gallery.map((img) => (
            <div key={img.id}>
              <Image
                alt={projects.title}
                src={img.img}
                width={1000}
                height={1000}
                className="mb-[1rem]"
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default page;
