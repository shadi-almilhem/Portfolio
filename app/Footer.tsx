"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { bodoni_moda } from "@/fonts";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

const SOCIAL_LINKS = [
  { icon: FaFacebook, link: "https://www.facebook.com/ShadiAlMilhem" },
  { icon: FaXTwitter, link: "https://x.com/shadi_m02" },
  { icon: FaInstagram, link: "https://www.instagram.com/shadi_m02" },
  { icon: FaGithub, link: "https://github.com/shadi-almilhem" },
];

function Footer() {
  return (
    <footer className="relative flex  h-full w-full flex-col items-center justify-center overflow-hidden bg-center text-white">
      <div className="z-50 mx-auto mt-16 h-full w-full max-w-7xl px-5 pt-20 ">
        <div className="flex flex-col items-center gap-4">
          <div className="">
            <h2
              className={`text-glow gradient-text relative inline-block justify-center px-4 text-center font-semibold ${bodoni_moda.className}`}
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              Shadi Al Milhem
            </h2>
          </div>

          <div className="flex flex-wrap justify-center text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            {NAV_LINKS.map((navLink) => (
              <Link
                aria-label={`${navLink.link}`}
                key={navLink.name}
                href={navLink.link}
                className="inline-block px-3 py-2 font-normal  transition-all duration-300 hover:font-semibold hover:text-purple-400 md:px-6"
              >
                {navLink.name}
              </Link>
            ))}
          </div>
          <div className="w-48 border-b border-solid border-b-white"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 justify-items-center gap-3 text-center">
            {SOCIAL_LINKS.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Link
                  aria-label={`${socialLink.link}`}
                  key={index}
                  href={socialLink.link}
                >
                  <Icon className="h-6 w-6 text-white/85 transition-all duration-300 hover:text-white" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div className="radial-gradient absolute bottom-[-35rem] -z-30 h-[30rem]  w-full  rounded-full  blur-[8rem] sm:h-[35rem] md:h-[40rem]"></div>
    </footer>
  );
}

export default Footer;
