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
