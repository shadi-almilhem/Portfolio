import React from "react";
import Image from "next/image";
import logo from "@/public/SH-logo.png";
import { SparklesCore } from "@/components/ui/Sparkles";

const RotatingGlow = () => {
  return (
    <div className="relative z-10 -my-16 flex h-[17rem] w-[17rem]  items-center justify-center rounded-full sm:h-[18rem] sm:w-[18rem] md:-my-56 md:h-[40rem]   md:w-[40rem] ">
      <SparklesCore
        background="transparent"
        particleDensity={30}
        maxSize={2}
        className="absolute hidden h-2/3 w-2/3 overflow-hidden rounded-full sm:inline-flex "
        particleSize={0.1}
      />
      <div className="  animate-rotate-glow absolute inset-0 z-10  h-[15rem] w-[15rem] rounded-full opacity-60  md:h-full md:w-full md:opacity-40"></div>

      <Image
        className="z-20 h-auto w-[100px]   rounded-full  border-4 border-primary/50 md:w-[200px] md:border-8"
        src={logo}
        alt="logo"
        loading="lazy"
        quality={80}
      />
      <div className="purple-ping  h-1/3 w-1/3"></div>
    </div>
  );
};

export default RotatingGlow;
