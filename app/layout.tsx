import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Gochi_Hand } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Invitacion Isabellita",
  description: "Invitacion Isabellita Meneses Martinez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gochi.className}>{children}</body>
    </html>
  );
}
