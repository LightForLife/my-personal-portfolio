"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import js from "../../../public/js.png";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/public/my-foto.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="/public/js.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/public/js.png"
            alt=""
            width={40}
            height={40}
          />{" "}
          <Image
            className="h-10 w-10 rounded-full"
            src="/public/js.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
      </div>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary pointsSummary points</li>
        <li>Summary pointsSummary points</li>
        <li>Summary pointsSummary points</li>
        <li>Summary pointsSummary points</li>
        <li>Summary pointsSummary points</li>
      </ul>
    </article>
  );
}
