"use client";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import profileImage from "@/public/profileImage.webp";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import AnimatedContent from "./AnimatedContent";

// Dynamic imports
const DynamicSpotlight = dynamic(
  () => import("@/components/ui/Spotlight").then((mod) => mod.Spotlight),
  {
    ssr: false,
  },
);
const DynamicGridPattern = dynamic(
  () => import("@/components/ui/GridPattern"),
  { ssr: false },
);

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
            alt="Shadi Al Milhem image شادي الملحم"
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
            className="medium-12 md:medium-14 lg:medium-16 w-[80%] "
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

  return (
    <section className="max-container relative z-40 mt-32 flex w-full flex-col flex-wrap items-center gap-6  md:mt-36 md:gap-8 lg:mt-48">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicGridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          className={cn(
            " [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white,transparent_70%)]",
          )}
        />
        <DynamicSpotlight
          className="-top-30 md:left-30 left-0 h-screen w-full md:-top-60"
          fill="white"
        />
        <DynamicSpotlight
          className="top-36 h-screen w-full md:-top-0"
          fill="#c354ff"
        />

        <div className="sm:stars z-[-5]"></div>

        <AnimatedContent items={items} />
      </Suspense>
    </section>
  );
};

export default Hero;
