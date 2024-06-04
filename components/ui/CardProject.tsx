"use client";

import Image from "next/image";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { Button } from "./button";
import { BadgeRotateBorder } from "./BadgeRotateBorder";

export function CardProject({ src, heading, badgeText, ProjectExplain }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className=" group relative w-full max-w-[350px] overflow-hidden rounded-xl bg-gradient-to-tl from-[#181818] from-30% to-[#101010]"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10  p-4 ">
        <div className="space-y-4 ">
          <Image
            src={src}
            alt="Product image"
            height={1027}
            width={768}
            className="h-56 rounded-lg   bg-contain md:h-64"
          />
          <div className="flex flex-col items-start justify-between ">
            <h3 className="text-xl font-semibold text-white">{heading}</h3>
            <p className="pb-4 pt-2 text-sm font-light leading-5 tracking-wide text-white/85">
              {ProjectExplain}
            </p>
          </div>

          <Button className="text-black  inline-flex w-full items-center justify-center gap-1 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold uppercase  duration-300 hover:bg-white/80">
            Open
          </Button>
          {badgeText.split(" ").map((text: string) => (
            <BadgeRotateBorder key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
