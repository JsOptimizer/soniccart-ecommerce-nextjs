import { BestGear } from "@/shared/components";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonic Cart",
  description: "SonicCart – High-End Audio E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-manrope flex flex-col gap-32`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BestGear />
      </body>
    </html>
  );
}
