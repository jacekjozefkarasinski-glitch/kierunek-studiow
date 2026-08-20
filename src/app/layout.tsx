import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inwestycje i analiza danych | Wydział Zarządzania UW",
  description:
    "Oficjalna strona kierunku Inwestycje i analiza danych na Wydziale Zarządzania Uniwersytetu Warszawskiego.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}