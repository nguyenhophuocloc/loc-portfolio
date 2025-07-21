import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nguyen Ho Phuoc Loc',
  description: 'Nguyen Ho Phuoc Loc Portfolio',
  openGraph: {
    title: 'Nguyen Ho Phuoc Loc',
    description: 'Nguyen Ho Phuoc Loc Portfolio',
    type: 'website',
    images: ['/images/meta.jpg'],
  },
  verification: {
    google: 'lkzIUnK9Itqfr94oWS1ItktHza0v9P0H1KVvw8-9LHg',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyen Ho Phuoc Loc',
  jobTitle: 'Web Developer',
  url: 'https://nguyenhophuocloc.vercel.app/',
  sameAs: [
    'https://www.linkedin.com/in/nguyen-ho-phuoc-loc/',
    'https://github.com/nguyenhophuocloc',
  ],
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
      <GoogleAnalytics gaId="G-CG74ZNHNJN" />
      <body suppressHydrationWarning>
        <Header />
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
