"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "@/public/SH-logo.svg";
import useRotateOnScroll from "@/components/hooks/useRotateOnScroll";
import NavMobile from "@/app/nav-mobile";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useRotateOnScroll(logoRef);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else setHidden(false);
  });

  return (
    <>
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-180%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        className="flexBetween fixed z-50 mx-auto flex w-full items-center gap-2 rounded-md bg-transparent px-8 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md sm:gap-8 md:mt-8 md:w-fit md:rounded-full md:border-2 md:border-white/20 md:px-4 md:py-[2px] md:pl-1 md:pr-2 md:shadow-none lg:w-fit"
      >
        <div ref={logoRef}>
          <Image
            className="h-[50px] w-[50px] -rotate-[18deg]"
            src={logo}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="">
          <ul className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className="md:bold-16 bold-14 md:hover:bg-inherit relative mx-2 text-white/90 transition duration-300 before:h-[1px] hover:text-white md:mx-4 md:before:absolute md:before:-bottom-0.5 md:before:block md:before:w-full md:before:origin-bottom-right md:before:scale-x-0 md:before:bg-white md:before:transition md:before:duration-300 md:before:ease-out md:hover:text-white md:hover:before:origin-bottom-left md:hover:before:scale-x-100 lg:mx-8"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={"default"}
            className="gradient-button rounded-full text-white"
          >
            <Link className="font-semibold tracking-wide" href="/">
              Contact
            </Link>
          </Button>
          {isMenuOpen ? (
            <BiX
              className="flex h-[25px] w-[25px] cursor-pointer text-white md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <BiMenu
              className="flex h-[25px] w-[25px] cursor-pointer text-white md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
      </motion.div>
      <NavMobile isOpen={isMenuOpen && !hidden} toggleMenu={toggleMenu} />
    </>
  );
}

export default Header;
