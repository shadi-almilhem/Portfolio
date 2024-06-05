import React from "react";

import { Bodoni_Moda } from "next/font/google";
import {
  PanelsTopLeft,
  Paintbrush,
  CircleGauge,
  CodeXml,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
});

const services = [
  {
    title: "Web Design",
    description: "Crafting visually user-friendly websites for online success.",
    icon: <PanelsTopLeft strokeWidth={1.5} className="text-white/95" />,
  },
  {
    title: "Web Development",
    description: "Building robust, scalable, and wonderful web applications.",
    icon: <CodeXml strokeWidth={1.5} className="text-white/95" />,
  },
  {
    title: "Social Media Design",
    description:
      "Creating engaging and fast designs for social media platforms.",
    icon: <Paintbrush strokeWidth={1.5} className="text-white/95" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Optimizing websites to rank higher on search engines and drive traffic.",
    icon: <CircleGauge className="text-white/95" strokeWidth={1.5} />,
  },
];

function Services() {
  return (
    <section className="max-container relative mb-8 flex w-full flex-col items-center gap-16">
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic  text-white  md:text-medium-40 lg:text-medium-52`}
      >
        My Services
      </h2>
      <Vortex
        backgroundColor="transparent"
        particleCount={50}
        rangeY={100}
        className="flex w-full items-center justify-center"
      >
        <div className="grid  grid-cols-1 gap-4 px-2 md:w-4/5  md:px-52  lg:grid-cols-2 lg:gap-8 ">
          {services.map((service, index) => (
            <Link
              href="/"
              key={index}
              className="LinkContainer relative flex  flex-col  items-start gap-2 overflow-hidden	 rounded-lg border-[1px] border-white/10 bg-gradient-to-tl from-[#181818] from-30% to-[#101010]  p-6 shadow-xl	 shadow-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 "
            >
              <div className="flex w-full  items-center justify-between">
                <div className="flex  items-center gap-2">
                  <div className={`gradient-bg rounded-md  p-2 `}>
                    {service.icon}
                  </div>
                  <h3 className=" text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <ArrowRight className="arrow " size="22px" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 text-base text-white/85">
                {service.description}
              </p>
              <span
                className={`absolute ${bodoni_moda.className} number -bottom-4 -right-0 text-6xl text-white/5`}
              >
                #{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </Vortex>
    </section>
  );
}

export default Services;
