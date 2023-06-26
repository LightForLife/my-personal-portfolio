"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pet from "../../../public/Pet.png";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const components = document.querySelectorAll("#component");
  //   const container: HTMLElement = document.querySelector("#slider")!;

  //   gsap.to(components, {
  //     xPercent: -100 * (components.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: 1,
  //       // snap: 1 / (components.length - 1),
  //       end: () => "+=" + container.offsetWidth,
  //     },
  //   });
  // }, []);

  // const components = document.querySelectorAll("#component");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        id="slider"
        className="relative w-full flex overflow-x-scroll overflow-y-auto snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            id="component"
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    id="component"
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    width={500}
                    height={500}
                    alt="A picture of the project on different devices"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
