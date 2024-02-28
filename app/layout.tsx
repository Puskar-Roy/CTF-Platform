import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Authprovider from "@/providers/auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bingO CTF",
  description: "bingo CTF - Capture The Flag (CTF)",
  metadataBase: new URL("https://bingoctf.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },

  applicationName: "bing CTF",
  referrer: "origin-when-cross-origin",
  keywords: [
  ],
  authors: [{ name: "@Puskar-Roy", url: "https://github.com/Puskar-Roy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <Navbar />
          {children}
          <Footer />
        </Authprovider>
      </body>
    </html>
  );
}
