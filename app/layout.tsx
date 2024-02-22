import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Authprovider from "@/providers/auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The CodeBird",
  description: "Capture The Flag (CTF) competition",
  metadataBase: new URL("https://ctfwithcodebird.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },

  applicationName: "The Code Bird, UIT",
  referrer: "origin-when-cross-origin",
  keywords: [
    "The Code Bird CTF competition",
    "CodeBird CTF competition",
    "The CodeBird Burdwan",
    "CTF competition The Code Bird",
    "The Code Bird UIT Burdwan",
    "The Code Bird CTF competition Burdwan",
    "The Code Bird Burdwan University",
    "The Code Bird University of Burdwan",
    "The Code Bird CTF competition University of Burdwan",
    "CodeBird UIT Burdwan",
    "CodeBird CTF competition Burdwan",
    "CodeBird Burdwan University",
    "CodeBird University of Burdwan",
    "CodeBird CTF competition University of Burdwan",
    "UIT Burdwan CTF competition",
    "UIT Burdwan CodeBird",
    "UIT Burdwan CTF",
    "UIT Burdwan CodeBird CTF competition",
    "University Institute Of Technology Burdwan CTF competition",
    "University Institute Of Technology Burdwan CodeBird",
    "University Institute Of Technology Burdwan CTF",
    "University Institute Of Technology Burdwan CodeBird CTF competition",
    "Burdwan University CTF competition",
    "Burdwan University CodeBird",
    "Burdwan University CTF",
    "Burdwan University CodeBird CTF competition",
    "The University of Burdwan CTF competition",
    "The University of Burdwan CodeBird",
    "The University of Burdwan CTF",
    "The University of Burdwan CodeBird CTF competition",
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
