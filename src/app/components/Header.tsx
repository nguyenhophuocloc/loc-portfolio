'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@public/images/L_logo.png';
import Navbar from './Navbar';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  // Xử lý đổi style khi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`
        max-w-screen-xl mx-auto px-4 flex justify-between items-center transition-all duration-300
        ${
          scrolled
            ? 'bg-zinc-900/70 backdrop-blur-xl border border-white/10 py-2 px-6 rounded-full shadow-2xl'
            : 'bg-transparent py-2'
        }
      `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={Logo}
            alt="Loc Logo"
            width={40}
            height={40}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative md:justify-self-center">
            <button
              className="p-2 md:hidden text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Navbar navOpen={navOpen} />
          </div>

          <Link
            href="#contact"
            className="hidden md:flex px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
