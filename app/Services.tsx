import React from "react";
import Particles from "@/components/ui/particles";
import { bodoni_moda } from "@/fonts";

import {
  PanelsTopLeft,
  Paintbrush,
  CircleGauge,
  CodeXml,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

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
      <div className="grid  grid-cols-1 gap-4  p-6 sm:p-0 sm:p-0 md:w-4/5    lg:grid-cols-3 lg:gap-8 ">
        {services.map((service, index) => (
          <Link
            aria-label={service.title}
            href="/contact"
            key={index}
            className="LinkContainer relative flex w-full  flex-col   gap-2 overflow-hidden	 rounded-lg border-[1px] border-white/10 bg-gradient-to-tl from-[#181818] from-30% to-[#101010]  p-6 shadow-xl	 shadow-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 "
          >
            <div className="flex w-full  items-center justify-between">
              <div className="flex  items-center gap-2">
                <div className={`gradient-bg rounded-md  p-2 `}>
                  {service.icon}
                </div>
                <h3 className=" text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <ArrowRight className="arrow " size="22px" strokeWidth={1.5} />
            </div>
            <p className="text-base text-gray-700 text-white/85">
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
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
}

export default Services;
