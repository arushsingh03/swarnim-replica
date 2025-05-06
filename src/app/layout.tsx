import type { Metadata } from "next";
import {
  abtBold,
  abtItalic,
  abtRoman,
  montserrat,
  montserratItalic,
} from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swarnim High Street",
  description:
    "Swarnim’s position in Sector 5, Gurgaon, one of the city’s most promising sub-cities, makes it an irresistible choice for those looking to invest in commercial retail space in Gurgaon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abtBold.variable} ${abtItalic.variable} ${abtRoman.variable} ${montserrat.variable} ${montserratItalic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
