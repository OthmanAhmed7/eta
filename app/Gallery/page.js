import React from "react";
import { projects } from "@/lib/Projects";
import Image from "next/image";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section>
        {projects.map((project, index) => (
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

            <section className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-[3rem] max-w-[1200px] m-auto px-[1rem]">
              <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] py-[5rem] w-full">
                {project.projects.map((site) => (
                  <section key={site.id}>
                    <Link
                      href={`/ProjectCard/${site.id}`}
                      className="flex flex-col items-center justify-center gap-[1rem]"
                    >
                      <div className="relative overflow-hidden group">
                        <Image
                          src={site.img}
                          alt={site.title}
                          width={200}
                          height={120}
                          className="bg-cover bg-center w-[15rem] h-[10rem] scale-125 group-hover:translate-y-[-13%] transition duration-500 ease-out"
                        />

                        <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/30 transition duration-500 ease-out"></div>
                      </div>
                      <p className="font-[600] text-[1.25rem]">{site.title}</p>
                    </Link>
                  </section>
                ))}
              </section>

              <section className="flex lg:flex-col items-center justify-center gap-[2.5rem] pt-[5rem]">
                {index != 0 ? (
                  <Link
                    href={`#${projects[index - 1].id}`}
                    className="flex lg:flex-col items-center justify-center gap-[1rem] text-[1.15rem]"
                  >
                    <IoIosArrowUp />
                    <p>PREV</p>
                  </Link>
                ) : (
                  ""
                )}

                {index != projects.length - 1 ? (
                  <Link
                    href={`#${projects[index + 1].id}`}
                    className="flex lg:flex-col items-center justify-center gap-[1rem] text-[1.15rem]"
                  >
                    <p>NEXT</p>
                    <IoIosArrowDown />
                  </Link>
                ) : (
                  ""
                )}
              </section>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default page;
