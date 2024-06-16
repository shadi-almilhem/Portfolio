"use client";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bodoni_Moda } from "next/font/google";
import profileImage from "@/public/profileImage.webp";
import Heading from "./Heading";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion"; // Import framer-motion
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

function Hero() {
  return (
    <motion.section
      className="max-container relative z-40 mt-44 flex w-full flex-col flex-wrap items-center gap-6 sm:mt-48 md:mt-56 md:gap-8 lg:mt-60"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.6, type: "easeInOut" }}
    >
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          " [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white,transparent_70%)]",
        )}
      />
      <Spotlight
        className="-top-30 md:left-30 left-0 h-screen w-full md:-top-60"
        fill="white"
      />

      <Spotlight className="top-36 h-screen w-full md:-top-0" fill="#c354ff" />

      <div className="sm:stars z-[-5]"></div>

      <motion.div
        variants={fadeIn}
        className="flex flex-col flex-nowrap gap-8 text-center"
      >
        <motion.div className="flex justify-center">
          <Image
            src={profileImage}
            quality={40}
            priority={true}
            alt="Shadi image"
            className="image-gradient-border h-auto w-20 justify-center rounded-xl bg-contain md:hidden"
          />
        </motion.div>

        <Heading imagePlace={true} />
      </motion.div>

      <motion.h2
        variants={fadeIn}
        className="lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto px-4 text-center"
      >
        <span className={`${bodoni_moda.className} gradient-p italic`}>
          Your Favorite
        </span>
        <br /> Front-End Developer
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className="lg:regular-24 md:regular-20 regular-16 mx-8 text-wrap text-center text-white/80 lg:w-[26rem]"
      >
        With 3 years experience.
        <br /> Crafting
        <span className={`text-glow gradient-text px-2 font-black italic`}>
          unforgettable
        </span>
        websites for your online identity.
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="flex w-[100%] flex-col items-center gap-6 md:w-min md:flex-row md:gap-6"
      >
        <Link
          aria-label="Get in Touch"
          className="medium-14 md:medium-16 lg:medium-18 w-[80%]"
          href="/contact"
        >
          <Button
            aria-label="Get in Touch"
            className="gradient-button bold-16 w-full rounded-full  py-5 text-white md:px-8"
          >
            Get in Touch <Mail className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link
          className="medium-12 md:medium-14 lg:medium-16 w-[80%] md:w-fit"
          href="/pdf/Shadi Al Milhem CV.pdf"
          aria-label="Download CV"
        >
          <Button
            aria-label="Download CV"
            variant="secondary"
            className="gradient-s-button w-full rounded-full  py-4 text-white md:px-5"
          >
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
