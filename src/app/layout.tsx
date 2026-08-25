import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
import CustomScrollbar from "./components/CustomScrollbar";
import Loader from "./components/Loader";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Local]",
  // title: "Aqua Noir Digital",
  description: "Wordpress Redox Theme in Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <CustomScrollbar />
        <BackToTop />
        <Loader />

        {children}
      </body>
    </html>
  );
}