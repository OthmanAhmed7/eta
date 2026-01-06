"use client";

import React from "react";
import { lastWork } from "@/lib/LatestWork";
import { projects } from "@/lib/Projects";
import Image from "next/image";

const page = async ({ params }) => {
  const resolveParams = await params;
  const work = lastWork.find((w) => w.id === parseInt(resolveParams.id));
  const project = projects.find((p) => p.id === parseInt(resolveParams.id));

  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {work ? (
        <section className="flex flex-col lg:flex-row items-start gap-[3rem] max-w-[1200px] m-auto py-[5rem] px-[1rem]">
          <section className="flex-[2]">
            <h1 className="text-[2.5rem] font-[700] mb-[1rem]">{work.title}</h1>

            <div>
              {work.description.map((desc) => (
                <p
                  key={desc.id}
                  className="text-[1.25rem] text-slate-600 mb-[1.5rem] tracking-[.02rem] leading-[2rem]"
                >
                  {desc.paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="flex-1">
            {work.gallery.map((img) => (
              <div key={img.id}>
                <Image
                  alt={work.title}
                  src={img.img}
                  width={1000}
                  height={1000}
                  className="mb-[1rem]"
                />
              </div>
            ))}
          </section>
        </section>
      ) : (
        <section className="flex items-start gap-[3rem] max-w-[1200px] m-auto py-[5rem] px-[1rem]">
          <section className="flex-[2]">
            <h1 className="text-[2.5rem] font-[700] mb-[1rem]">
              {project.title}
            </h1>

            <div>
              {project.description.map((desc) => (
                <p
                  key={desc.id}
                  className="text-[1.25rem] text-slate-600 mb-[1.5rem] tracking-[.02rem] leading-[2rem]"
                >
                  {desc.paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="flex-1">
            {project.gallery.map((img) => (
              <div key={img.id}>
                <Image
                  alt={project.title}
                  src={img.img}
                  width={1000}
                  height={1000}
                  className="mb-[1rem]"
                />
              </div>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default page;
