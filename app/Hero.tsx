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
import { useSprings, animated } from "react-spring";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadi Al Milhem",
  description: "Shadi Al Milhem Portfolio",
  keywords: [
    "Shadi",
    "Al Milhem",
    "Shadi Al Milhem",
    "Shadi Almilhem",
    "Shadi Al Melhem",
    "Shadi Al Milhem Portfolio",
    "شادي الملحم",
    "شادي",
    "shadi al melhem",
    "shadi almelhem",
    "shadi al milhem",
    "web developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "software engineer",
    "portfolio",
    "Next.js",
    "UI/UX",
    "web design",
    "responsive design",
    "SEO",
    "open source",
  ],
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",
};

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});

const Hero = () => {
  const items = [
    {
      key: "image",
      content: (
        <div className="flex justify-center">
          <Image
            src={profileImage}
            priority={true}
            width={256}
            height={300}
            alt="Shadi Al Milhem image"
            className="image-gradient-border h-auto w-20 justify-center rounded-lg bg-contain md:hidden"
          />
        </div>
      ),
    },
    {
      key: "heading",
      content: <Heading imagePlace={true} />,
    },
    {
      key: "title",
      content: (
        <h2 className="lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto px-4 text-center">
          <span className={`${bodoni_moda.className} gradient-p italic`}>
            Your Favorite
          </span>
          <br /> Front-End Developer
        </h2>
      ),
    },
    {
      key: "description",
      content: (
        <p className="lg:regular-24 md:regular-20 regular-16 mx-8 text-wrap text-center text-white/80 lg:w-[26rem]">
          With 3 years experience.
          <br /> Crafting
          <span className={`text-glow gradient-text px-2 font-black italic`}>
            unforgettable
          </span>
          websites for your online identity.
        </p>
      ),
    },
    {
      key: "buttons",
      content: (
        <div className="flex w-full flex-col items-center gap-6 md:w-min md:flex-row md:gap-6">
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
            href="/Shadi_Al_Milhem_CV.pdf"
            aria-label="Download CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              aria-label="Download CV"
              variant="secondary"
              className="w-full rounded-full border-2  py-5 text-white md:px-6"
            >
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  const springs = useSprings(
    items.length,
    items.map((_, index) => ({
      from: { opacity: 0, transform: "translateY(30px)", filter: "blur(20px)" },
      to: { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      delay: index * 180,
      config: { duration: 200 },
    })),
  );

  return (
    <section className="max-container relative z-40 mt-32 flex w-full flex-col flex-wrap items-center gap-6  md:mt-36 md:gap-8 lg:mt-48">
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

      {springs.map((springStyle, index) => (
        <animated.div
          style={springStyle}
          className="flex w-full flex-col items-center justify-center text-center"
          key={items[index].key}
        >
          {items[index].content}
        </animated.div>
      ))}
    </section>
  );
};

export default Hero;
