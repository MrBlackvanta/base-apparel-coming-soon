import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Base Apparel | Coming soon";
const description =
  "Base Apparel is building a new fashion store. Add your email to stay up to date with announcements and our launch deals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Base Apparel",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "hsl(0, 100%, 100%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
