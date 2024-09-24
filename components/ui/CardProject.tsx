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
    <div className="w-full max-w-[370px] p-4">
      <div className="flex h-full max-w-sm flex-col  ">
        <div className="relative h-64 w-full">
          <Link
            href={websiteLink || src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="h-full w-full rounded-t-lg object-cover object-center shadow-lg shadow-primary/10 transition-all duration-300 hover:brightness-90"
              src={src}
              width={800}
              height={800}
              alt="Project Image"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col py-5">
          <h3 className="mb-2  text-xl font-semibold tracking-tight text-white">
            {heading}
          </h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <p className=" line-clamp-3 h-[70px] cursor-default font-normal text-gray-300">
                {ProjectExplain}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-b from-gray-300/80 to-gray-200/60 backdrop-blur-sm">
              {ProjectExplain}
            </HoverCardContent>
          </HoverCard>
          <div>
            <Link
              href={websiteLink || src}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex w-full items-start justify-start rounded-md  py-3 text-sm font-semibold    uppercase text-white underline underline-offset-2 transition-all duration-300 hover:text-white/80 hover:underline-offset-4"
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
