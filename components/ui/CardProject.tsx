"use client";

import Image from "next/image";
import { BadgeRotateBorder } from "./BadgeRotateBorder";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function CardProject({
  websiteLink,
  src,
  heading,
  badgeText,
  ProjectExplain,
}: any) {
  return (
    <div className="w-full max-w-[350px] p-4">
      <div className="flex h-full max-w-sm flex-col  ">
        <div className="relative h-64 w-full">
          <Image
            className=" h-full w-full  object-fill object-center shadow-lg shadow-primary/10"
            src={src}
            width={1000}
            height={1000}
            alt="Project Image"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col py-5">
          <h5 className="mb-2  text-xl font-bold tracking-tight text-white">
            {heading}
          </h5>
          <HoverCard>
            <HoverCardTrigger asChild>
              <p className="mb-3 line-clamp-3 h-[70px] cursor-default font-normal text-gray-200">
                {ProjectExplain}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-b from-gray-300/80 to-gray-200/60 backdrop-blur-sm">
              {ProjectExplain}
            </HoverCardContent>
          </HoverCard>
          <div className="mt-4">
            <Link
              href={websiteLink || src}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex w-full items-center justify-center gap-1 rounded-md bg-white/90 px-4 py-3 text-sm font-bold uppercase text-black duration-300 hover:bg-white"
            >
              Open
            </Link>
            <div className="flex flex-wrap gap-1">
              {badgeText.split(" ").map((text: string) => (
                <BadgeRotateBorder key={text} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
