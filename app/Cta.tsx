import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

import { Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import backgroundImage from "@/public/bg-cta.webp";
const badges = [
  { text: "24h Reply Promise" },
  { text: "Rapid Quality Work" },
  { text: "Innovative Designs" },
];

function Cta() {
  return (
    <section className="z-10 mt-32 flex w-full flex-col items-center justify-center  px-8">
      <div className="shadow-elegant relative  rounded-xl     bg-cover px-4 py-10">
        <Image
          src={backgroundImage}
          alt="Transform Your Vision into Reality"
          className="absolute left-0  top-0 -z-10 h-full w-full rounded-xl object-cover opacity-65"
          loading="lazy"
          quality={50}
        />
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5">
          {/* Component */}
          <div className="mx-auto w-full rounded-[60px] px-4">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center max-[479px]:px-2">
              <h2 className="my-8 px-4 text-2xl font-extrabold text-white sm:px-10 sm:text-3xl md:px-20 md:text-5xl md:leading-[4rem] lg:px-24">
                Transform Your Vision into Reality
                <span className="inline-block align-middle">
                  <Rocket className="h-8 w-8 px-1 md:h-12  md:w-12  " />
                </span>
              </h2>

              {/* Features */}
              <div className="mx-auto mb-6 flex max-w-[640px] flex-col items-center justify-center gap-4 sm:flex-row md:mb-10 md:gap-8 lg:mb-12">
                {badges.map((badge, index) => (
                  <Badge key={index} text={badge.text} color="white" />
                ))}
              </div>
              <Button
                aria-label="Get in Touch"
                className="gradient-button bold-16 w-[80%] rounded-full text-white sm:w-fit md:px-8 md:py-5"
              >
                <Link
                  className="medium-14 md:medium-16 lg:medium-18"
                  href="/contact"
                >
                  Get in Touch
                </Link>
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
