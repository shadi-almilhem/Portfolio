import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});
import profileImage from "@/public/profileImage.webp";
type HeadingProps = {
  imagePlace: boolean;
};
function Heading({ imagePlace }: HeadingProps) {
  return (
    <h1
      className={`lg:bold-88 bold-40 sm:bold-52 md:bold-64 relative inline-block justify-center  px-4 text-center ${bodoni_moda.className} text-glow gradient-text font-bold `}
    >
      Shadi Al Milhem
      {imagePlace && (
        <span className=" absolute   mx-2 md:-bottom-3 md:-right-28 lg:bottom-0 2xl:-right-32">
          <Image
            src={profileImage}
            quality={100}
            priority={true}
            alt="Shadi image"
            className="image-gradient-border hidden h-auto  rotate-3  rounded-md bg-contain md:flex md:w-28  md:rounded-xl "
          />
        </span>
      )}
    </h1>
  );
}

export default Heading;
