import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian My — Growth Product Leader",
  description:
    "Senior Growth PM with 15+ years building products at Amazon, LendingClub, and Zendesk. Customer obsession first. The growth metrics prove themselves.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Brian My — Growth Product Leader",
    description:
      "Senior Growth PM with 15+ years building products at Amazon, LendingClub, and Zendesk.",
    url: "https://brianmy.com",
    siteName: "Brian My",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased font-[var(--font-geist-sans)]">{children}</body>
    </html>
  );
}
