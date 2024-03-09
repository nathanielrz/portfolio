import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "900"],
  display: "swap",
  fallback: ["system-ui"],
});

export const metadata: Metadata = {
  title: "Nathaniel's Portfolio",
  description: "Programmed in TypeScript, Next.JS, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
