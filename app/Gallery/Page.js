import React from "react";
import { projects } from "@/lib/Projects";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section>
        {projects.map((project) => (
          <section key={project.id} id={project.id}>
            <section
              className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-[1rem]"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/45"></div>
              <p className="text-[4rem] font-[600] text-white z-40 ">
                {project.title}
              </p>
            </section>

            <section className="py-[5rem]">
              {project.projects.map((site) => (
                <section key={site.id} className="grid grid-cols-3">
                  <div>
                    <Image
                      src={site.img}
                      alt={site.title}
                      width={120}
                      height={120}
                    />
                    <p>{site.title}</p>
                  </div>
                </section>
              ))}
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default Page;
