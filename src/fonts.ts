import localFont from "next/font/local";

export const abtBold = localFont({
  src: "./../public/fonts/americanabt_bold.ttf",
  variable: "--font-abt-bold",
  weight: "700",
  style: "normal",
  display: "swap",
});

export const abtItalic = localFont({
  src: "./../public/fonts/americanabt_italic.ttf",
  variable: "--font-abt-italic",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const abtRoman = localFont({
  src: "./../public/fonts/americanabt_roman.ttf",
  variable: "--font-abt-roman",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const montserrat = localFont({
  src: "./../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const montserratItalic = localFont({
  src: "./../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--font-montserrat-italic",
  weight: "100 900",
  style: "italic",
  display: "swap",
});