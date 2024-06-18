import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Cta from "./Cta";
import Footer from "./Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  fallback: ["Arial", "Times New Roman"],
  display: "fallback",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Shadi Al Milhem",
  description: "Shadi Al Milhem Portfolio",
  keywords: [
    "Shadi",
    "Al Milhem",
    "Shadi Al Milhem",
    "Shadi Almilhem",
    "Shadi Al Melhem",
    "Shadi Al Milhem Portfolio",
    "شادي الملحم",
    "شادي",
    "shadi al melhem",
    "shadi almelhem",
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
  icons: { icon: "/favicon.ico" },
  creator: "Shadi Al Milhem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Shadi Al Milhem Portfolio" />
        <meta property="og:title" content="Shadi Al Milhem" />
        <meta property="og:description" content="Shadi Al Milhem Portfolio" />
        <meta
          property="og:image"
          content="https://shadialmilhem.com/SH-logo.png"
        />
        <meta property="og:url" content="https://shadialmilhem.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadi Al Milhem" />
        <meta name="twitter:description" content="Shadi Al Milhem Portfolio" />
        <meta
          name="twitter:image"
          content="https://shadialmilhem.com/SH-logo.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://shadialmilhem.com/",
              name: "Shadi Al Milhem",
              description: "Shadi Al Milhem Portfolio",
              publisher: {
                "@type": "Person",
                name: "Shadi Al Milhem",
                logo: {
                  "@type": "ImageObject",
                  url: "https://shadialmilhem.com/SH-logo.png",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${nunito.className} flex w-full flex-col items-center justify-center overflow-x-hidden bg-[#101010]`}
      >
        <Header />
        <div className="radial-gradient absolute top-[-15rem] -z-30 h-[30rem] w-full overflow-x-hidden rounded-full blur-[8rem] sm:h-[35rem] md:h-[40rem]"></div>
        {children}
        <Cta />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
