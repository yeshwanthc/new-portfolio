import localFont from "next/font/local";
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
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
    <title>Yeshwanth | Front End Developer</title>
      <body className={`${Roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
