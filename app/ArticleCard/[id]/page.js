import React from "react";
import { articles } from "@/lib/Articles";
import Image from "next/image";

const page = async ({ params }) => {
  const resolveParams = await params;
  const article = articles.find((a) => a.id === parseInt(resolveParams.id));
  return (
    <>
      <article className="flex flex-col-reverse lg:flex-row items-start justify-center gap-[3rem] m-auto max-w-[1200px] py-[5rem] px-[1rem]">
        <section className="flex-1">
          <h1 className="text-[2.5rem] font-[700] mb-[1rem]">
            {article.title}
          </h1>
          {article.description.map((desc) => (
            <p
              key={desc.id}
              className="text-[1.25rem] text-slate-600 mb-[1.5rem] tracking-[.02rem] leading-[2rem]"
            >
              {desc.paragraph}
            </p>
          ))}
        </section>

        <section className="flex-1 w-full">
          <Image
            alt={article.title}
            src={article.image}
            width={1000}
            height={1000}
          />
        </section>
      </article>
    </>
  );
};

export default page;
