"use client";
import Link from "next/link";
import React from "react";
import Heading from "./Heading";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "@/components/ui/ScrollToTop";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

function Footer() {
  return (
    <footer className="relative flex  h-full w-full flex-col items-center justify-center overflow-hidden    bg-center  text-white">
      <div className="z-50 mx-auto mt-16 h-full w-full max-w-7xl px-5 pt-20 ">
        <div className="flex flex-col items-center gap-4">
          <div className="">
            <Heading imagePlace={false} />
          </div>

          <div className="flex flex-wrap justify-center text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <Link
              href="#"
              className="inline-block px-3 py-2 font-normal transition hover:text-primary md:px-6"
            >
              Home
            </Link>
            <Link
              href="#"
              className="inline-block px-3 py-2 font-normal transition hover:text-primary md:px-6"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="inline-block px-3 py-2 font-normal transition hover:text-primary md:px-6"
            >
              Services
            </Link>

            <Link
              href="#"
              className="inline-block px-3 py-2 font-normal transition hover:text-primary md:px-6"
            >
              Help
            </Link>
          </div>
          <div className=" w-48 border-b border-solid border-b-white"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 justify-items-center gap-3 text-center">
            <Link href="#">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link href="#">
              <FaXTwitter className="h-6 w-6" />
            </Link>
            <Link href="#">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="#">
              <FaGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div className="radial-gradient absolute bottom-[-35rem] -z-30 h-[30rem]  w-full  rounded-full  blur-[8rem] sm:h-[35rem] md:h-[40rem]"></div>
    </footer>
  );
}

export default Footer;
