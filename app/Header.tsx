"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "@/public/SH-logo.png";
import useRotateOnScroll from "@/components/hooks/useRotateOnScroll";
import NavMobile from "@/app/nav-mobile";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = usePathname();
  const [activeLink, setActiveLink] = useState(router);
  const [initialAnimation, setInitialAnimation] = useState("slideIn");

  useEffect(() => {
    setActiveLink(router);
  }, [router]);

  useRotateOnScroll(logoRef);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimation("visible");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else setHidden(false);
  });

  return (
    <>
      <motion.div
        variants={{
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "easeInOut" },
          },
          hidden: {
            opacity: 1,

            y: "-180%",
            transition: { duration: 0.3, type: "easeInOut" },
          },
          slideIn: {
            y: "-180%",
            opacity: 0,
            transition: { duration: 1, type: "easeInOut" },
          },
        }}
        initial="slideIn"
        animate={hidden ? "hidden" : initialAnimation}
        transition={{ type: "easeInOut" }}
        className="flexBetween fixed top-0  z-50 mx-auto block w-full max-w-screen-xl  items-center  gap-2 rounded-md bg-transparent px-8 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm   sm:gap-8 sm:py-2 md:mt-8 md:w-fit md:rounded-full md:border-2 md:border-white/20 md:px-4 md:py-[2px] md:pl-1 md:pr-2 md:shadow-none lg:w-fit"
      >
        <div
          ref={logoRef}
          className="h-[50px] w-[50px] overflow-hidden   rounded-full border-2 border-primary/50"
        >
          <Link aria-label="Logo" href="/">
            <Image
              className=" -rotate-[22deg]"
              src={logo}
              alt="logo"
              priority={true}
              quality={30}
            />
          </Link>
        </div>
        <div className="">
          <ul className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className={` ${
                  activeLink === link.link
                    ? "md:bold-16 bold-14 font-extrabold text-white before:origin-bottom-left before:scale-x-100 hover:bg-inherit"
                    : "text-white/85"
                }  relative mx-2  transition duration-300 before:h-[1px] hover:text-white md:mx-4 md:before:absolute md:before:-bottom-0.5 md:before:block md:before:w-full md:before:origin-bottom-right md:before:scale-x-0 md:before:bg-white md:before:transition md:before:duration-300 md:before:ease-out md:hover:bg-inherit md:hover:text-white md:hover:before:origin-bottom-left md:hover:before:scale-x-100 lg:mx-8 `}
              >
                <Link aria-label={link.name} href={link.link} prefetch={true}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            onClick={() => setMenuOpen(false)}
            className="font-semibold tracking-wide"
            prefetch={true}
            href="/contact"
            aria-label="Contact"
          >
            <Button
              aria-label="Contact"
              variant={"default"}
              className="gradient-button rounded-full text-white"
            >
              Contact
            </Button>
          </Link>

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
