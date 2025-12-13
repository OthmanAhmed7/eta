"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { lastWork } from "../lib/LatestWork";
import Button from "./SecodaryButton";
import Link from "next/link";

const LastProjects = () => {
  const [hideButton, setHideButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectNumber, setProjectNumber] = useState(3);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const delayTime = () => {
    setLoading(true);
    const id = setTimeout(() => {
      setHideButton(true);
      setProjectNumber(lastWork.length);
    }, 1500);
    setTimeoutId(id);
  };

  return (
    <section className="mx-auto my-[8rem] max-w-[1200px] flex flex-col justify-center items-center gap-[2rem] lg:gap-[4rem] px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.3rem]">
          Last Projects
        </p>

        <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
          Thrive for Perfection
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[2rem]">
        {lastWork.map((project) =>
          project.id <= projectNumber ? (
            <Link href={`/ProjectCard/${project.id}`} key={project.id}>
              <div className="relative w-full h-[20rem] overflow-hidden group">
                <Image
                  width={500}
                  height={500}
                  alt={project.title}
                  src={project.image}
                  className="group-hover:translate-y-[-10%] transition duration-700 ease-out"
                />
                <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/30 transition duration-700 ease-out"></div>
              </div>

              <p className="text-center mt-[1.5rem] font-[500] text-[1.25rem]">
                {project.title}
              </p>
            </Link>
          ) : (
            ""
          )
        )}
      </div>

      <div
        className={`${hideButton === true ? "hidden" : ""} `}
        onClick={delayTime}
      >
        <Button name={loading === true ? "Loading..." : "Load More"} />
      </div>
    </section>
  );
};

export default LastProjects;
