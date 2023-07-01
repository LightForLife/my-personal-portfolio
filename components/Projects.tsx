"use client";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col max-w-full justify-evenly text-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{ 700: { slidesPerView: 1 } }}
          className="projectsSlider z-30"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project._id}>
              <div className="w-screen text-center flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[20px] md:p-44 h-screen">
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).width(600).url()}
                  alt="A picture of the project on different devices"
                  className=" w-[460px] md:w-[540px] xl:w-[700px]"
                />

                <div className="space-y-8 px-0 md:px-10 max-w-6xl">
                  <Link
                    href={project.linkToBuild}
                    // rel="noopener noreferrer"
                    target="_blank"
                    className="text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50"
                  >
                    {project.title}
                  </Link>
                  <span className="block text-2xl font-semibold text-center">
                    Team Project {i + 1} of {projects.length}
                  </span>
                  <div className="flex items-center space-x-2 justify-center">
                    {project?.technologies.map((technology) => (
                      <Image
                        className="h-10 w-10"
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        width={500}
                        height={500}
                        alt="Pictures of technology logos"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-center">{project.summary}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
