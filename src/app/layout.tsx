import type { Metadata } from "next";
import { Roboto, Outfit } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Jayalakshmi Water Supply | Premium Water Solutions",
  description: "Delivering clean, high-capacity water supply to apartments, commercial hubs, and construction sites in Chennai with precision and punctuality.",
  keywords: ["bulk water supply", "water delivery chennai", "jayalakshmi water supply", "commercial water supply", "water tanker services"],
  openGraph: {
    title: "Jayalakshmi Water Supply | Premium Water Solutions",
    description: "Reliable, high-capacity water supply for residential, commercial & industrial sectors.",
    url: "https://jayalakshmiwateragency.com",
    siteName: "Jayalakshmi Water Supply",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${roboto.variable} ${outfit.variable} antialiased bg-white text-gray-900 font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
