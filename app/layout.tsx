import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brianmy.com"),
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian My",
  url: "https://brianmy.com",
  jobTitle: "Growth Product Leader",
  email: "brian.my@gmail.com",
  sameAs: ["https://www.linkedin.com/in/brianmy"],
  knowsAbout: [
    "Product Management",
    "Growth Product",
    "Product Led Growth",
    "B2B SaaS",
    "Fintech",
    "Consumer Products",
    "Generative AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-[var(--font-geist-sans)]">{children}</body>
    </html>
  );
}
