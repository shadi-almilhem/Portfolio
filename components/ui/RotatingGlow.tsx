import React from "react";
import Image from "next/image";
import logo from "@/public/SH-logo.svg";
import { SparklesCore } from "@/components/ui/Sparkles";

const RotatingGlow = () => {
  return (
    <div className="relative z-10 -my-32 flex  h-auto w-auto items-center justify-center rounded-full   py-24 ">
      <SparklesCore
        background="transparent"
        particleDensity={30}
        maxSize={2}
        className="absolute h-2/3 w-2/3 overflow-hidden rounded-full "
        particleSize={0.1}
      />
      <div className="bg-purple-500  animate-rotate-glow absolute inset-0 z-10  rounded-full opacity-40"></div>

      <Image
        className="z-20 h-auto w-[200px]"
        src={logo}
        alt="logo"
        priority={true}
      />
      <div className="purple-ping  h-1/3 w-1/3"></div>
    </div>
  );
};

export default RotatingGlow;
