"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

type Props = { socials: Social[] };

function Header({ socials }: Props) {
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
            className="hover:scale-110 duration-200 cursor-pointer"
            target="_blank"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <a
          href="Artur_Levchenko.pdf"
          download
          className="uppercase text-sm text-gray-400"
        >
          <MdDownload size="1.4rem" className="text-gray-400 mr-2" />
        </a>

        <a
          href="Artur_Levchenko.pdf"
          download
          className="uppercase text-sm text-gray-400"
        >
          <span className="cursor-pointer hidden md:inline-flex mr-3 ">
            Download
          </span>
        </a>

        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 50, width: 50 }}
          url="#contact"
        />
        <Link href="#contact" className="uppercase text-sm text-gray-400">
          <span className="cursor-pointer hidden md:inline-flex">
            Get In Touch
          </span>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
