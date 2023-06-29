"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";
import { RiDownload2Fill } from "react-icons/ri";
import Link from "next/link";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <RiDownload2Fill
          size="1.2rem"
          className="hidden md:inline-flex text-sm text-gray-400"
        />
        <a href="test.pdf" download className="uppercase text-sm text-gray-400">
          <span className="cursor-pointer hidden md:inline-flex">
            Download CV
          </span>
        </a>

        <Link href="#contact" className="uppercase text-sm text-gray-400">
          {/* <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          /> */}
          <span className="cursor-pointer hidden md:inline-flex">
            Get In Touch
          </span>
        </Link>
      </motion.div>
    </header>
  );
}
