import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/header/Header";
import Footer from "@/components/site/footer/Footer";
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photoshop Express Photo Editor - Apps on Google Play",
  description: "play.google.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"select-none cursor-default  "}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
