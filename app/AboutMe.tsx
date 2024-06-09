import Image from "next/image";
import React from "react";
import profileImage from "@/public/profileImage.webp";
import { Bodoni_Moda } from "next/font/google";
import TextRevealByWord from "@/components/ui/text-reveal";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
});
export default function AboutMe() {
  return (
    <section className="max-container relative mb-8 flex  flex-col items-center ">
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic  text-white  md:text-medium-40 lg:text-medium-52`}
      >
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4 p-8 px-8  md:px-52  lg:grid-cols-2">
        <div className=" flex items-center">
          <Image
            src={profileImage}
            alt="Shadi image"
            className="sticky top-0 w-full  self-start pt-32"
          />
        </div>
        <div className="flex flex-col gap-4  ">
          <TextRevealByWord text="Hello! 👋 I’m Shadi, a passionate Information Technology student at the Syrian Virtual University, specializing in creating charming websites that perfectly reflect your brand’s vibe. 🚀🌟" />
          <TextRevealByWord text="My creations are not just visually appealing; they are strategic tools designed to attract customers and convert clicks into loyal fans. As your front-end magician, I turn Figma dreams into web reality, crafting websites that make a lasting impact. 🌟📜" />
          <TextRevealByWord text="Ready to elevate your online presence? Let’s collaborate and create a captivating digital experience for your audience. 📩" />
        </div>
      </div>
    </section>
  );
}
