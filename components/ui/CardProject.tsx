"use client";

import Image from "next/image";
import { Button } from "./button";
import { BadgeRotateBorder } from "./BadgeRotateBorder";
import Link from "next/link";

export function CardProject({ src, heading, badgeText, ProjectExplain }: any) {
  return (
    <div className="group relative w-full max-w-[350px] overflow-hidden rounded-xl  ">
      <div className="relative flex flex-col gap-3 p-4">
        <div className="space-y-4">
          <Image
            src={src}
            alt="Product image"
            height={1027}
            width={768}
            priority={true}
            className="h-60 rounded-lg bg-contain md:h-64"
          />
          <div className="flex flex-col items-start justify-between">
            <h3 className="text-xl font-semibold text-white">{heading}</h3>
            <p className="pb-2 pt-2 text-sm font-light leading-5 tracking-wide text-white/85">
              {ProjectExplain}
            </p>
          </div>

          <Link
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-white/90 px-4 py-3 text-sm font-bold uppercase text-black duration-300 hover:bg-white"
          >
            Open
          </Link>
          {badgeText.split(" ").map((text: string) => (
            <BadgeRotateBorder key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
