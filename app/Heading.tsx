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
    <div className="relative">
      {imagePlace && (
        <span className="absolute mx-2 md:-bottom-3 md:-right-28 lg:-right-[7.5rem] lg:bottom-0 2xl:-right-32">
          <Image
            src={profileImage}
            quality={20}
            loading="lazy"
            alt="Shadi image"
            className="image-gradient-border hidden h-auto rotate-3 rounded-md bg-contain md:flex md:w-24 md:rounded-xl lg:w-28"
          />
        </span>
      )}
      <h1
        className={`text-glow gradient-text inline-block justify-center px-4 text-center font-bold ${bodoni_moda.className}`}
        style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
      >
        Shadi Al Milhem
      </h1>
    </div>
  );
}

export default Heading;
