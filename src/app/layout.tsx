import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Ho Phuoc Loc",
  description: "Nguyen Ho Phuoc Loc Portfolio",
  openGraph: {
    title: "Nguyen Ho Phuoc Loc",
    description: "Nguyen Ho Phuoc Loc Portfolio",
    type: "website",
    images: ["/images/meta.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
