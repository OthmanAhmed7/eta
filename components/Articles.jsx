"use client";

import React, { useState, useEffect } from "react";
import { articles } from "@/lib/Articles";
import Image from "next/image";
import Button from "./SecodaryButton";

const Articles = () => {
  const [articlesNumber, setArticlesNumber] = useState(3);
  const [loading, setLoading] = useState(false);
  const [hideButton, setHideButton] = useState(false);
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
      setArticlesNumber(articles.length);
    }, 1500);
    setTimeoutId(id);
  };

  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex flex-col justify-center items-center gap-[4rem] px-[1rem]">
      <div className="flex flex-col w-full">
        <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.3rem]">
          Articles
        </p>

        <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
          Food for Thoughts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {articles.map((i) =>
          i.id <= articlesNumber ? (
            <div
              key={i.id}
              className="relative flex flex-col gap-[1rem] overflow-hidden group"
            >
              <div className="absolute z-10 top-0 left-0 w-[100%] h-[100%] bg-[#161616] opacity-0 group-hover:opacity-80 transition duration-500 ease-out"></div>
              <div className="group-hover:scale-125 transition duration-500 ease-out">
                <Image width={500} height={500} alt={i.title} src={i.image} />
              </div>

              <div className="absolute top-[35%] px-[1.5rem] text-center z-20">
                <h3 className="font-[500] text-[1.5rem] tracking-[.03rem] mb-[1rem] py-[.5rem] bg-white">
                  {i.title}
                </h3>

                <p className="text-white text-[1.125rem] font-[400] translate-y-[200%] group-hover:translate-y-0 transition duration-500 ease-out">
                  {i.text}
                </p>
              </div>

              <a
                href={i.link}
                className="z-20 absolute bottom-[1.05rem] left-[1.5rem] font-[300] text-white"
              >
                Read More
              </a>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      {articlesNumber !== articles.length ? (
        <div onClick={delayTime}>
          <Button name={loading === false ? "Load More" : "Loading..."} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Articles;
