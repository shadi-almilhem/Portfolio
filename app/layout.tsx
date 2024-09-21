import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Cta from "./Cta";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  fallback: ["Arial", "Times New Roman"],
  display: "swap",
  adjustFontFallback: false,
});

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
  openGraph: {
    title: "Shadi Al Milhem (شادي الملحم) - Web Developer Portfolio",
    description:
      "Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    url: "https://shadialmilhem.com",
    images: [
      {
        url: "https://shadialmilhem.com/SH-logo.png",
        alt: "Shadi Al Milhem Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <head>
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://shadialmilhem.com/ar"
        />
      </head>
      <body
        className={`${nunito.className} flex w-full flex-col items-center justify-center overflow-x-hidden bg-[#101010]`}
      >
        <Header />
        <div className="radial-gradient absolute top-[-15rem] -z-30 h-[30rem] w-full overflow-x-hidden rounded-full blur-[8rem] sm:h-[35rem] md:h-[40rem]"></div>
        <main className="w-full">{children}</main>
        <SpeedInsights />
        <Cta />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
