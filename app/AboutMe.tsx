import Image from "next/image";
import React from "react";
import profileImage from "@/public/shadi-2.webp";
import TextRevealByWord from "@/components/ui/text-reveal";
import GridPattern from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import { bodoni_moda } from "@/fonts";

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
          <TextRevealByWord text="Hello! 👋 I’m Shadi (الملحم شادي), a dedicated Information Technology student at the Syrian Virtual University. I specialize in creating captivating websites and designs that not only reflect your brand’s identity but also engage and convert visitors into loyal customers. 🚀🌟" />

          <TextRevealByWord text="As a skilled front-end developer, I turn ideas into visually stunning, high-converting digital experiences. Whether you're looking to enhance your online presence or boost sales through web design, I’m here to bring your vision to life. Let’s collaborate to craft a digital masterpiece that resonates with your audience. 📩" />
        </div>
      </div>
    </section>
  );
}
