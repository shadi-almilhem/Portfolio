import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import profileImage from "@/public/profileImage.webp";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
});

type HeadingProps = {
  imagePlace: boolean;
};

function Heading({ imagePlace }: HeadingProps) {
  return (
    <h1
      className={`text-glow gradient-text relative inline-block justify-center px-4 text-center font-bold ${bodoni_moda.className}`}
      style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
    >
      Shadi Al Milhem
      {imagePlace && (
        <span className="absolute mx-2 md:-bottom-3 md:-right-28 lg:bottom-0 2xl:-right-32">
          <Image
            src={profileImage}
            quality={20}
            priority={true}
            alt="Shadi image"
            className="image-gradient-border hidden h-auto rotate-3 rounded-md bg-contain md:flex md:w-28 md:rounded-xl"
          />
        </span>
      )}
    </h1>
  );
}

export default Heading;
