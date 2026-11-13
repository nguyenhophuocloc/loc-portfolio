'use client';
import { profile } from '@/content/site';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper/90 backdrop-blur-md transition-colors ${
        scrolled ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em]">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[rgb(var(--brand-light))] via-brand to-[rgb(var(--brand-deep))] text-sm font-bold text-paper"
          >
            L
          </span>
          {profile.shortName}
        </Link>

        <button
          type="button"
          className="-mr-2 grid h-10 w-10 place-items-center rounded-md md:hidden"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Navbar open={navOpen} onNavigate={() => setNavOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
