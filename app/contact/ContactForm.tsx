"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "";
    const messageWithEmail = `Email: ${values.email}\n\n${values.message}`;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          message: messageWithEmail,
          reply_to: values.email,
        },
        publicKey,
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!", {
          duration: 4000,
          icon: "✅",
        });
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        toast.error("Failed to send email. Please try again later.", {
          duration: 4000,
          icon: "❌",
        });
      });
  }

  return (
    <div className="z-50 flex w-full flex-col gap-4 px-8 md:w-2/3 lg:w-1/2">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          aria-label="Email Me"
          className="flex   items-center   "
          href="mailto:contact@shadialmilhem.com"
        >
          <Button
            aria-label="Email Me"
            className=" flex w-full gap-2 rounded-md bg-white/95 text-sm font-bold     uppercase text-black duration-300 hover:bg-white"
          >
            Email Me <Mail strokeWidth={2.5} className=" h-auto w-4    " />
          </Button>
        </Link>
        <Link
          aria-label="Schedule a call"
          className=" items-center  font-bold uppercase"
          href="https://cal.com/shadi-al-milhem"
        >
          <Button
            aria-label="Schedule a call"
            className="flex w-full gap-2 rounded-md bg-white/95 px-4 py-3 text-sm font-bold uppercase text-black duration-300 hover:bg-white"
          >
            Schedule a call{" "}
            <Calendar strokeWidth={2.5} className="h-auto w-4 self-start " />
          </Button>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center overflow-hidden">
        <Separator className="h-[1px] rounded-full bg-white  " />
        <p className="p-2 text-lg text-white">OR</p>
        <Separator className="h-[1px] rounded-full bg-white  " />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-lg border-[1px] border-white/15 bg-[#101010]/50 p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[4px] border-none bg-[#232323] p-4 pl-5 font-light tracking-wider text-white placeholder:text-white/60 autofill:!bg-[#282828]"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[4px] border-none bg-[#232323] p-4 pl-5 font-light tracking-wider text-white placeholder:text-white/60 autofill:bg-[#282828]"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="rounded-[4px] border-none bg-[#232323] p-4 pl-5 font-light tracking-wider text-white placeholder:tracking-wider placeholder:text-white/60 autofill:bg-[#282828]"
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />

          <Button
            aria-label="Send Email"
            className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-white/90 px-4 py-3 text-sm font-bold  uppercase text-black duration-300 hover:bg-white"
            type="submit"
          >
            Send
          </Button>
        </form>
      </Form>
      <Toaster position="top-right" />
    </div>
  );
}

export default ContactForm;
