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

      <div className="grid grid-cols-3 gap-[2rem]">
        {articles.map((i) =>
          i.id <= articlesNumber ? (
            <div key={i.id}>
              <div>
                <Image width={500} height={500} alt={i.title} src={i.image} />
              </div>

              <div>
                <h3>{i.title}</h3>

                <p>{i.text}</p>
              </div>
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
