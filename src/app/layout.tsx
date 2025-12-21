import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import CanonicalTag from './components/CanonicalTag';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const metaTitle = 'Nguyen Ho Phuoc Loc | Full-Stack Developer Portfolio';
const metaDesc =
  "Explore Nguyen Ho Phuoc Loc's portfolio – a full-stack developer specializing in web applications, modern design, and scalable solutions.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  keywords: [
    'developer',
    'portfolio',
    'Nguyen Ho Phuoc Loc',
    'Nguyễn Hồ Phước Lộc',
    'web dev',
    'full-stack',
    'React',
  ],
  authors: [{ name: 'Nguyen Ho Phuoc Loc' }],
  publisher: 'Nguyen Ho Phuoc Loc',
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    type: 'website',
    images: ['/images/meta.jpg'],
  },
  verification: {
    google: 'lkzIUnK9Itqfr94oWS1ItktHza0v9P0H1KVvw8-9LHg',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nguyen Ho Phuoc Loc",
  "alternateName": "Nguyễn Hồ Phước Lộc",
  "jobTitle": "Full-Stack Web Developer",
  "url": "https://nguyenhophuocloc.vercel.app/",
  "sameAs": [
    "https://www.linkedin.com/in/nguyen-ho-phuoc-loc/",
    "https://github.com/nguyenhophuocloc"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance / Remote"
  }
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
      <GoogleTagManager gtmId="GTM-WLJDNW5B" />
      <body suppressHydrationWarning>
        <Header />
        <CanonicalTag />
        {children}
        <Footer />
        <Script
          id="json-ld-script"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </body>
    </html>
  );
}
