import { profile } from '@/content/site';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CookieSettingsButton } from '../components/CookieBanner';

export const metadata: Metadata = {
  title: `Privacy policy | ${profile.nameAscii}`,
  description: 'What data this site collects, why, and how to control it.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="section pt-28 sm:pt-36">
      <article className="container max-w-3xl space-y-8 leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_a]:underline [&_a:hover]:text-ink [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        <h1 className="section-title text-ink">Privacy policy</h1>

        <section>
          <h2>Who is responsible</h2>
          <p>
            This is the personal portfolio of {profile.name}, {profile.location}. For any privacy question or request,
            use the <Link href="/#contact">contact form</Link>.
          </p>
        </section>

        <section>
          <h2>What is collected and why</h2>
          <ul>
            <li>
              <strong className="text-ink">Analytics (Google Analytics 4 via Google Tag Manager).</strong> Pages
              viewed, approximate location, device and browser, so I can see how the site is used. Visitors in the
              EEA, UK and Switzerland are only tracked after clicking &quot;Accept&quot;; the legal basis there is your
              consent (GDPR Art. 6(1)(a)). Google may process this data outside your country.
            </li>
            <li>
              <strong className="text-ink">Contact form (EmailJS).</strong> The name, email and message you send,
              delivered to my inbox so I can reply. Legal basis: your request (Art. 6(1)(b)). I keep it only as long as
              the conversation needs.
            </li>
            <li>
              <strong className="text-ink">Hosting (Vercel).</strong> Standard server logs such as IP address and
              request time, kept by the host for security and operation (Art. 6(1)(f)).
            </li>
            <li>
              <strong className="text-ink">Your cookie choice.</strong> Stored in your browser&apos;s local storage so
              you aren&apos;t asked again. It never leaves your device.
            </li>
          </ul>
          <p className="mt-3">Nothing is sold, and no data is used for advertising profiles.</p>
        </section>

        <section>
          <h2>Third parties</h2>
          <ul>
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google (Analytics, Tag Manager)
              </a>
            </li>
            <li>
              <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                EmailJS
              </a>
            </li>
            <li>
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <p>
            You can change your cookie choice at any time:{' '}
            <CookieSettingsButton className="font-medium text-ink underline" />. You can also ask me to access,
            correct or delete your data, object to its use, or complain to your local data protection authority.
          </p>
        </section>

        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
