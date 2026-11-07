import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import CanonicalTag from './components/CanonicalTag';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const sans = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-sans',
});

const metaTitle = 'Nguyen Ho Phuoc Loc | Web Developer';
const metaDesc =
  'Nguyen Ho Phuoc Loc is a web developer in Ho Chi Minh City: frontend, backend, WordPress and Shopware, technical SEO, and n8n automations with AI.';

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyenhophuocloc.vercel.app"),
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
    images: ['/images/meta.png'],
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
    "https://github.com/nguyenhophuocloc/"
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
      className={`${sans.variable} font-sans`}
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
