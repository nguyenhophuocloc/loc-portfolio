import { profile } from '@/content/site';
import Link from 'next/link';
import { CookieSettingsButton } from './CookieBanner';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-rule sm:mt-32">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.nameAscii}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href={`mailto:${profile.email}`} className="hover:text-ink">
              Email
            </Link>
          </li>
          <li>
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
          </li>
          <li>
            <CookieSettingsButton className="hover:text-ink" />
          </li>
          <li>
            <Link href="/#home" className="hover:text-ink">
              Back to top
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
