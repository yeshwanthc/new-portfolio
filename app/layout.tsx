"use client";
import localFont from "next/font/local";
import "./globals.css";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import {  ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

// Load Roboto font
const Roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <title>Yeshwanth | Front End Developer</title>
        <meta name="google-adsense-account" content="ca-pub-5761377407460431" />
      </head>
      <body className={`${Roboto.variable} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
