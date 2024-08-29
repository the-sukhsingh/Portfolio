import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sukhjit Singh",
  description: "Sukhjit Singh's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisScroll />
        {children}</body>
    </html>
  );
}
