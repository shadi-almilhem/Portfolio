import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bodoni_Moda } from "next/font/google";
import profileImage from "@/public/profileImage.webp";
import Heading from "./Heading";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

function Hero() {
  return (
    <section className=" max-container relative    z-40 mt-44 flex w-full  flex-col flex-wrap items-center gap-6 sm:mt-48 md:mt-56 md:gap-8 lg:mt-60">
      <div className="stars z-[-5]"></div>
      <div className="flex flex-col flex-nowrap gap-8 text-center">
        <div className="flex justify-center">
          <Image
            src={profileImage}
            quality={100}
            priority={true}
            alt="Shadi image"
            className="image-gradient-border h-auto w-20 justify-center  rounded-xl bg-contain  md:hidden "
          />
        </div>

        <Heading imagePlace={true} />
      </div>
      <h2 className="lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto px-4 text-center   ">
        <span className={`${bodoni_moda.className} gradient-p italic`}>
          Your Favorite
        </span>
        <br /> Front-End Developer
      </h2>
      <p className="lg:regular-24 md:regular-20 regular-16 mx-8  text-wrap  text-center text-white/80 lg:w-[26rem]">
        With 3 years experience.
        <br /> Crafting
        <span className={`text-glow gradient-text px-2 font-black italic`}>
          unforgettable
        </span>
        websites for your online identity.
      </p>
      <div className="flex w-[100%]  flex-col items-center gap-2 md:w-min  md:flex-row md:gap-6">
        <Button className="gradient-button bold-16 w-[80%] rounded-full   text-white sm:w-fit md:px-8 md:py-5">
          <Link className="medium-14 md:medium-16 lg:medium-18" href="/">
            Get in Touch
          </Link>
          <Mail className="ml-2 h-4 w-4 " />
        </Button>
        <Button
          variant="secondary"
          className="gradient-s-button w-[80%] rounded-full px-3  text-white sm:w-fit  md:px-5 md:py-5"
        >
          <Link className="medium-12 md:medium-14 lg:medium-16" href="/">
            Download CV
          </Link>
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
