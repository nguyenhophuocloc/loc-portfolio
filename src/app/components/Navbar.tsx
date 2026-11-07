'use client';
import Link from 'next/link';
import { useScrollSpy } from '../hooks/useScrollSpy';

type Props = { open: boolean; onNavigate: () => void };

const NAV_ITEMS = [
  { label: 'Services', link: '#services' },
  { label: 'Projects', link: '#work' },
  { label: 'Experience', link: '#experience' },
  { label: 'Contact', link: '#contact' },
];

const SPY_IDS = ['#home', ...NAV_ITEMS.map((item) => item.link)];

export default function Navbar({ open, onNavigate }: Props) {
  const activeId = useScrollSpy(SPY_IDS, { threshold: 0.35 });

  return (
    <nav
      id="site-nav"
      aria-label="Main"
      className={`absolute inset-x-0 top-16 border-b border-rule bg-paper px-4 pb-4 md:static md:flex md:border-0 md:bg-transparent md:p-0 ${
        open ? 'block' : 'hidden'
      }`}
    >
      <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
        {NAV_ITEMS.map(({ label, link }) => {
          const isActive = activeId === link;
          return (
            <li key={link}>
              <Link
                href={link}
                onClick={onNavigate}
                aria-current={isActive ? 'location' : undefined}
                className={`relative block py-3 text-[15px] transition-colors md:py-1 ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                <span
                  aria-hidden
                  className={`absolute -bottom-px left-0 hidden h-px bg-brand transition-[width] duration-300 md:block ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
