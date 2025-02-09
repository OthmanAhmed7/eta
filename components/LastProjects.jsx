"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { lastWork } from "../lib/LatestWork";
import Button from "./SecodaryButton";

const LastProjects = () => {
  const [hideButton, setHideButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectNumber, setProjectNumber] = useState(3);
  const [timeoutId, setTimeoutId] = useState(null);

  // Clear timeout on component unmount
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
    }, 2000);
    setTimeoutId(id);
  };

  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.5rem]">
          Last Projects
        </p>

        <h2 className="text-[4rem] font-[700] leading-[5rem] tracking-tight">
          Thrive for Perfection
        </h2>
      </div>

      <div className="grid grid-cols-3 w-full gap-[2rem]">
        {lastWork.map((i) =>
          i.id <= projectNumber ? (
            <div key={i.id}>
              <div className="relative w-full h-[20rem] overflow-hidden group">
                <Image
                  width={500}
                  height={500}
                  alt={i.title}
                  src={i.image}
                  className="group-hover:translate-y-[-10%] transition duration-700 ease-out"
                />
                <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/30 transition duration-700 ease-out"></div>
              </div>

              <p className="text-center mt-[1.5rem] font-[500] text-[1.25rem]">
                {i.title}
              </p>
            </div>
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
