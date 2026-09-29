import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairsicherlich",
  description: "your protection is my mission",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex flex-col w-full">
        <TopNavBar></TopNavBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
