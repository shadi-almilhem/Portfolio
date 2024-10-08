import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

import { Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import backgroundImage from "@/public/bg-cta.webp";
const badges = [
  { text: "24h Reply Promise" },
  { text: "Quality Work" },
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
          width={1000}
          height={500}
        />
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5">
          {/* Component */}
          <div className="mx-auto w-full rounded-[60px] px-4">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center max-[479px]:px-2">
              <h2 className="gradient-p e my-8 px-4 text-2xl font-semibold sm:px-10 sm:text-3xl md:px-20 md:text-5xl md:leading-[4rem] lg:px-24">
                Transform Your Vision into Reality
              </h2>

              {/* Features */}
              <div className="mx-auto mb-6 flex  flex-col items-center justify-center gap-4 sm:flex-row md:mb-10 md:gap-8 lg:mb-12">
                {badges.map((badge, index) => (
                  <Badge key={index} text={badge.text} color="white" />
                ))}
              </div>
              <Link className="w-[80%]" href="/contact">
                <Button
                  aria-label="Get in Touch"
                  className="gradient-button bold-16 medium-14 md:medium-16 lg:medium-18  w-full rounded-full text-white sm:w-fit md:px-8 md:py-5"
                >
                  Get in Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
