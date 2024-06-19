import Image from "next/image";
import React from "react";
import profileImage from "@/public/shadi-2.webp";
import { Bodoni_Moda } from "next/font/google";
import TextRevealByWord from "@/components/ui/text-reveal";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: true,
});
export default function AboutMe() {
  return (
    <section className="max-container relative mb-8 flex  flex-col items-center ">
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          " [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black,transparent_70%)]",
        )}
      />
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic  text-white  md:text-medium-40 lg:text-medium-52`}
      >
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-8  p-8 px-8  md:px-52  lg:grid-cols-2">
        <div className=" relative flex items-center justify-center lg:justify-end">
          <Image
            src={profileImage}
            loading="lazy"
            quality={10}
            alt="Shadi image"
            className="sticky top-0 w-full self-start pt-8    sm:w-2/3 sm:pt-32"
          />
        </div>
        <div className="flex flex-col gap-4  ">
          <TextRevealByWord text="Hello! 👋 I’m Shadi, a passionate Information Technology student at the Syrian Virtual University, specializing in creating charming website & designs that perfectly reflect your brand’s vibe. 🚀🌟" />
          <TextRevealByWord text="My designs don't just look good – they're crafted to turn clicks into sales. As a front-end magician, I bring your dreams to life with impactful designs. 🌟📜" />
          <TextRevealByWord text="Ready to elevate your online presence? Let’s collaborate and create a mesmerizing digital experience for your audience. 📩" />
        </div>
      </div>
    </section>
  );
}
