import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Cta from "./Cta";
import Footer from "./Footer";
import { inter } from "@/fonts";
import { OpenPanelComponent } from "@openpanel/nextjs";

interface ExtendedMetadata extends Metadata {
  additionalMetaTags?: { name: string; content: string }[];
  structuredData?: { [key: string]: any };
}

export const metadata: ExtendedMetadata = {
  title: {
    default: "Shadi Al Milhem | Full Stack Web Developer",
    template: "%s  - Shadi Al Milhem | شادي الملحم ",
  },
  description:
    "Shadi Al Milhem (شادي الملحم) - Full Stack Web Developer and Software Engineer Portfolio. Expertise in Next.js, UI/UX, and responsive design.",
  keywords: [
    "Shadi Al Milhem",
    "شادي الملحم",
    "Shadi Almelhem",
    "Shadi Al Melhem",
    "شادي اياد الملحم",
    "shadi al milhem",
    "web developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "software engineer",
    "portfolio",
    "Next.js",
    "UI/UX",
    "web design",
    "responsive design",
    "SEO",
    "open source",
  ],
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",

  twitter: {
    card: "summary_large_image",
    title: "Shadi Al Milhem (شادي الملحم) - Web Developer",
    description: "Full Stack Web Developer and Software Engineer Portfolio",
    images: ["https://shadialmilhem.com/SH-logo.png"],
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Shadi Al Milhem",
    },
    {
      name: "language",
      content: "English",
    },
  ],
  alternates: {
    canonical: "https://shadialmilhem.com",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shadi Al Milhem",
    alternateName: "شادي الملحم",
    url: "https://shadialmilhem.com/",
    jobTitle: "Full Stack Web Developer",
    description:
      "Shadi Al Milhem is a Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    image: "https://shadialmilhem.com/SH-logo.png",
    sameAs: [
      "https://github.com/shadi-almilhem",
      "https://www.linkedin.com/in/shadi-al-milhem",
      "https://x.com/shadi_m02",
    ],
    skills: [
      "Next.js",
      "UI/UX Design",
      "Responsive Web Design",
      "SEO",
      "Full Stack Development",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.className} flex w-full flex-col items-center justify-center overflow-x-hidden bg-[#101010] antialiased`}
      >
        <Header />
        <OpenPanelComponent
          clientId="32ebbc7b-0380-40d0-b995-b5a361dd6238"
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
        <div className="radial-gradient absolute top-[-15rem] -z-30 h-[30rem] w-full overflow-x-hidden rounded-full blur-[8rem] sm:h-[35rem] md:h-[40rem]"></div>
        <main className="w-full">{children}</main>
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
