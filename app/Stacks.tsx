"use client";
import { bodoni_moda } from "@/fonts";
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
import { useEffect, useRef } from "react";
import Ripple from "@/components/ui/ripple";

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
  const ref = useRef(null);
  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="max-container z-40 mb-8 flex w-full flex-col items-center px-2 opacity-0 sm:gap-16"
    >
      <h2
        className={`${bodoni_moda.className} mx-auto text-medium-32 italic text-white md:text-medium-40 lg:text-medium-52`}
      >
        My Stack
      </h2>
      <TooltipProvider delayDuration={100}>
        <div className="flex scale-[0.85] flex-col items-center sm:scale-100">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {row.map((iconIndex) => {
                const {
                  component: IconComponent,
                  color,
                  name,
                } = iconData[iconIndex];
                return (
                  <div
                    key={name}
                    className="animate-fade-in relative flex items-center justify-center"
                    style={{ animationDelay: `${iconIndex * 0.1}s` }}
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
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}

export default Stacks;
