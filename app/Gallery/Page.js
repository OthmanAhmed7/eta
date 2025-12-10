import React from "react";
import { projects } from "@/lib/Projects";

const Page = () => {
  return (
    <>
      <section>
        {projects.map((project) => (
          <section key={project.id} id={project.id}>
            <section
              className="relative h-screen w-full bg-cover bg-no-repeat flex flex-col items-center justify-center px-[1rem]"
              style={{ backgroundImage: `${project.img}` }}
            >
              <p>{project.title}</p>
            </section>

            <section></section>
          </section>
        ))}
      </section>
    </>
  );
};

export default Page;
