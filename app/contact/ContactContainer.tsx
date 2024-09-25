import React from "react";
import ContactForm from "./ContactForm";
import { bodoni_moda } from "@/fonts";

function ContactContainer() {
  return (
    <section className="max-container relative z-40 mt-44 flex w-full flex-col flex-wrap items-center gap-6  sm:mt-48 md:mt-56 md:gap-8 lg:mt-60">
      <h1
        className={`${bodoni_moda.className} gradient-p lg:medium-52 md:medium-40 medium-32 gradient-p mx-auto  px-4 text-center italic leading-[130%]`}
      >
        Contact Me
      </h1>
      <ContactForm />
    </section>
  );
}

export default ContactContainer;
