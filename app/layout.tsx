"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
     
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />

    
        <title>Yeshwanth | Front-End Developer</title>
        <meta
          name="description"
          content="Yeshwanth's portfolio showcasing expertise in web development, specializing in React, Next.js, and creating responsive, SEO-friendly applications."
        />
        <meta
          name="keywords"
          content="Yeshwanth, Front-End Developer, Portfolio, Web Development, JavaScript, React, Next.js, UI/UX Design, Responsive Design, HTML, CSS, Web Applications, Software Development"
        />
        <meta name="author" content="Yeshwanth" />

        <meta property="og:title" content="Yeshwanth | Front-End Developer" />
        <meta
          property="og:description"
          content="Explore Yeshwanth's professional portfolio featuring innovative web development projects built with React and Next.js."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yeshwanthc.in" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yeshwanth | Front-End Developer" />
        <meta
          name="twitter:description"
          content="Discover Yeshwanth's expertise in creating cutting-edge web applications using React, Next.js, and modern web technologies."
        />
        <meta name="twitter:image" content="/og-image.png" />

  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

       
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
