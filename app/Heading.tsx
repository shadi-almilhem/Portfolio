import React from "react";
import Image from "next/image";
import { bodoni_moda } from "@/fonts";

// Initialize the font outside of the component

// Preload the image
const profileImageUrl = "/profileImage.webp";

type HeadingProps = {
  imagePlace: boolean;
};

function ProfileImage({ imagePlace }: { imagePlace: boolean }) {
  if (!imagePlace) return null;

  return (
    <span className="absolute mx-2 md:-bottom-3 md:-right-28 lg:-right-[7.5rem] lg:bottom-0 2xl:-right-32">
      <Image
        src={profileImageUrl}
        alt="Shadi image شادي الملحم"
        priority={true}
        width={640}
        height={751}
        className="image-gradient-border hidden h-auto rotate-3 rounded-md bg-contain md:flex md:w-24 md:rounded-xl lg:w-28"
      />
    </span>
  );
}

function Header() {
  return (
    <h1
      className={`text-glow gradient-text inline-block justify-center px-4 text-center font-semibold ${bodoni_moda.className}`}
      style={{ fontSize: "clamp(32px, 6vw, 88px)" }}
    >
      I&apos;m Shadi Al Milhem
    </h1>
  );
}

function Heading({ imagePlace }: HeadingProps) {
  return (
    <div className="relative">
      <Header />
      <ProfileImage imagePlace={imagePlace} />
    </div>
  );
}

export default Heading;
