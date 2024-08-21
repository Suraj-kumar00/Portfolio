import type { Metadata } from "next";''
import {Inter,Calistoga} from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:"--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],

})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website focused on Cloud/DevOps/Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">{children}</body>
    </html>
  );
}
