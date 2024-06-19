import {
  ArrowRight,
  Check,
  CircleGauge,
  CodeXml,
  Paintbrush,
  PanelsTopLeft,
} from "lucide-react";
import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";
import React from "react";
import Particles from "@/components/ui/particles";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: true,
});
const services = [
  {
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites for your online success.",
    icon: <PanelsTopLeft strokeWidth={1.5} className="text-white/95" />,
    details: [
      "Design captivating landing pages",
      "Create intuitive web applications",
      "Develop reusable components",
      "Deliver exceptional designs in under two weeks",
    ],
  },
  {
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance web applications.",
    icon: <CodeXml strokeWidth={1.5} className="text-white/95" />,
    details: [
      "Develop high-converting landing pages",
      "Develop responsive websites",
      "Build custom web applications tailored to your needs",
      "Deliver fully functional websites in under two months",
    ],
  },
  {
    title: "Social Media Design",
    description:
      "Creating engaging and visually appealing designs for social media platforms.",
    icon: <Paintbrush strokeWidth={1.5} className="text-white/95" />,
    details: [
      "Design eye-catching social media posts using Canva",
      "Create attention-grabbing banners",
      "Develop effective social media ads",
      "Deliver designs in various formats to suit your needs",
      "Provide quick turnaround with delivery in under 24 hours",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Optimizing websites to rank higher on search engines and drive organic traffic.",
    icon: <CircleGauge className="text-white/95" strokeWidth={1.5} />,
    details: [
      "Conduct comprehensive keyword research",
      "Optimize on-page SEO for better visibility",
      "Improve site speed for enhanced user experience",
      "Build high-quality backlinks to boost authority",
    ],
  },
];
function ServicesCards() {
  return (
    <section className="max-container relative mb-8 mt-44 flex w-full flex-col items-center gap-8 sm:mt-48 md:mt-56 lg:mt-60">
      <h1
        className={`${bodoni_moda.className} gradient-p lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto  px-4 text-center italic leading-[130%]`}
      >
        My Services
      </h1>

      <div className="grid  grid-cols-1 gap-4 px-8 md:w-4/5 md:px-32 lg:grid-cols-2  lg:gap-8 lg:px-44 ">
        {services.map((service, index) => (
          <Link
            href="/contact"
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
            <p className="text-base text-gray-700 text-white/85">
              {service.description}
            </p>
            <ul className="mt-4 flex flex-col gap-8 text-white/85 decoration-inherit">
              {service.details.map((detail, detailIndex) => (
                <li className=" flex w-full flex-row gap-2 " key={detailIndex}>
                  <span className="w-6">
                    <Check className=" p-1 text-primary" />
                  </span>{" "}
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
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
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
}

export default ServicesCards;
