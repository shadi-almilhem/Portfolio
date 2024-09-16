"use client";
import { Bodoni_Moda } from "next/font/google";
import { FiFigma } from "react-icons/fi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaStripeS,
} from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiClerk,
  SiCanva,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbSeo, TbBrandFramerMotion } from "react-icons/tb";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Ripple from "@/components/ui/ripple";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});

const iconData = [
  { component: SiNextdotjs, color: "#232323", name: "Next.js" },
  { component: FaReact, color: "#61dafb", name: "React" },
  { component: SiTypescript, color: "#3178c6", name: "TypeScript" },
  { component: RiTailwindCssFill, color: "#06b6d4", name: "Tailwind CSS" },
  { component: FiFigma, color: "#f24e1e", name: "Figma" },
  { component: SiCanva, color: "#00c4cc", name: "Canva" },
  { component: FaHtml5, color: "#e34f26", name: "HTML5" },
  { component: FaCss3Alt, color: "#1572b6", name: "CSS3" },
  { component: SiJavascript, color: "#232323", name: "JavaScript" },
  { component: FaPython, color: "#3776ab", name: "Python" },
  { component: RiSupabaseFill, color: "#3ecf8e", name: "Supabase" },
  { component: SiClerk, color: "#232323", name: "Clerk" },
  { component: PiFramerLogoFill, color: "#0055ff", name: "Framer" },
  { component: TbSeo, color: "#ff6347", name: "SEO" },
  { component: TbBrandFramerMotion, color: "#88f", name: "Framer Motion" },
  { component: FaStripeS, color: "#6772e5", name: "Stripe" },
];

const rows = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12],
  [13, 14],
  [15],
];

function Stacks() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1], // Cubic Bezier for smoother animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="max-container z-40 mb-8 flex w-full flex-col items-center px-2 sm:gap-16"
    >
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic text-white md:text-medium-40 lg:text-medium-52`}
      >
        My Stack
      </h2>
      <TooltipProvider delayDuration={100}>
        <motion.div
          className="flex scale-[0.85] flex-col items-center sm:scale-100"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {row.map((iconIndex) => {
                const {
                  component: IconComponent,
                  color,
                  name,
                } = iconData[iconIndex];
                return (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className="relative flex items-center justify-center"
                  >
                    <Tooltip>
                      <TooltipTrigger
                        aria-label={name}
                        className="z-10 m-4 flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-t from-[#dbdbdb] to-white"
                      >
                        <Ripple color={color} />
                        <IconComponent size={25} color={color} />
                      </TooltipTrigger>
                      <TooltipContent
                        sideOffset={5}
                        className="rounded-full border-0 bg-gradient-to-t from-[#e7e7e7] to-white text-xs tracking-wide shadow-lg"
                      >
                        <p className="font-semibold" style={{ color }}>
                          {name}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </TooltipProvider>
    </section>
  );
}

export default Stacks;
