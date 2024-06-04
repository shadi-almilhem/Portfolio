import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import logo from "@/public/SH-logo.svg";

import { SparklesCore } from "@/components/ui/Sparkles";
import { Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const badges = [
  { text: "24h Reply Promise" },
  { text: "Rapid Quality Work" },
  { text: "Innovative Designs" },
];

function Cta() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-8">
      <div className="relative z-10 -my-52 flex h-[40rem] w-[40rem] items-center justify-center rounded-full ">
        <SparklesCore
          background="transparent"
          particleDensity={30}
          maxSize={2}
          className="absolute h-2/3 w-2/3 overflow-hidden rounded-full "
          particleSize={0.1}
        />
        <div className="bg-purple-500  animate-rotate-glow absolute inset-0 z-10 rounded-full opacity-40"></div>

        <Image
          className="z-20 h-auto w-[200px]"
          src={logo}
          alt="logo"
          priority={true}
        />
        <div className="purple-ping  h-1/3 w-1/3"></div>
      </div>
      <section className="shadow-elegant mt-52 rounded-xl bg-cta bg-cover px-4 py-10">
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5">
          {/* Component */}
          <div className="mx-auto w-full rounded-[60px] px-4">
            <div className="mx-auto w-full max-w-3xl text-center max-[479px]:px-2">
              <h2 className="my-8 px-4 text-3xl font-extrabold text-white sm:px-10 md:px-20 md:text-5xl md:leading-[4rem] lg:px-24">
                Transform Your Vision into Reality
                <span className="inline-block align-middle">
                  <Rocket className="h-12 w-12  px-1  " />
                </span>
              </h2>

              {/* Features */}
              <div className="mx-auto mb-6 flex max-w-[640px] flex-col flex-nowrap items-center justify-center gap-4 sm:flex-row md:mb-10 md:gap-8 lg:mb-12">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    text={badge.text}
                    color="rgba(236, 254, 42, 0.9)"
                  />
                ))}
              </div>
              <Button className="gradient-button bold-16 w-[80%] rounded-full text-white sm:w-fit md:px-8 md:py-5">
                <Link className="medium-14 md:medium-16 lg:medium-18" href="/">
                  Get in Touch
                </Link>
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
