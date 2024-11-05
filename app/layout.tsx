"use client";
import localFont from "next/font/local";
import { useEffect } from "react";
import "./globals.css";

const Roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleScroll = () => {
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <title>Yeshwanth | Front End Developer</title>
      </head>
      <body className={`${Roboto.variable} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}