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
      <body
        className={`${nunito.className}  flex w-full flex-col items-center justify-center overflow-x-hidden bg-[#101010]`}
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
