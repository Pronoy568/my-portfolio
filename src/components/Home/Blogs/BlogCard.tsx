"use client";
import React, { useState } from "react";
import { MyBlogsCardProps } from "./Blog";
import Image from "next/image";

const BlogCard: React.FC<MyBlogsCardProps> = ({ item }) => {

  return (
    <>
      <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
        <Image
          className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
          height={300}
          width={300}
          src={item?.image}
          alt={item?.title}
        />
          <h1 className="text-2xl font-bold pt-6 pb-3 text-white">{item?.title}</h1>
          <p className="text-lg text-gray-200">{item?.description}</p>

          <button className="mt-4">
              <a
                href={item?.link}
                className="btn text-white"
                target="_blank"
              >
                Details
              </a>
            </button>
      </div>
    </>
  );
};

export default BlogCard;