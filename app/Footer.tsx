import Link from "next/link";
import React from "react";
import Heading from "./Heading";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

function Footer() {
  return (
    <footer
      className="bg-black flex flex-col items-center justify-center bg-cover bg-center pb-32 text-white"
      style={{
        backgroundImage:
          'url("https://assets.website-files.com/63904f663019b0d8edf8d57c/6399731b4cdf484f42d3d80b_Mask%20group%20(2).svg")',
      }}
    >
      <div className="z-50 mx-auto mt-16 w-full max-w-7xl px-5 ">
        <div className="flex flex-col items-center">
          <Heading imagePlace={false} />
          <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
            >
              Home
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
            >
              Services
            </Link>

            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
            >
              Help
            </Link>
          </div>
          <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 justify-items-center gap-3 text-center">
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaGithub />
            </Link>
          </div>
          <p className="max-[479px]:text-sm">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
