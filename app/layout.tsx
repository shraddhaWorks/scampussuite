import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Fixed spelling from "comphonents" to "components"
import Navbar from "@/comphonents/common/navbar"; 
import Footer from "@/comphonents/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCAMPUS Suite",
  description: "Next-gen ERP for modern institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* 1. Apply the variables AND the font class to the body.
          2. Place Navbar inside the body so it renders correctly.
      */}
      <body className={`${geistSans.className} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}