import { Bodoni_Moda } from "next/font/google";
import { Nunito_Sans } from "next/font/google";

export const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["Arial", "Times New Roman"],
  adjustFontFallback: false,
  preload: true,
});

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  fallback: ["Arial", "Times New Roman"],
  display: "swap",
  adjustFontFallback: false,
});
