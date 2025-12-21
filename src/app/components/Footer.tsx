import LogoImg from '@public/images/L_logo.png';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonPrimary } from './Button';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Project', href: '#project' },
];

const socials = [
  { label: 'GitHub', href: 'https://www.github.com/nguyenhophuocloc/' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nguyen-ho-phuoc-loc/',
  },
];

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex flex-col gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em]">
                    Available for new opportunities
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
                    Thanks for{' '}
                    <span className="text-blue-500 italic">scrolling</span>.{' '}
                    <br />
                    Ready to bring{' '}
                    <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                      ideas to life.
                    </span>
                  </h3>
                  <div className="w-fit">
                    <ButtonPrimary
                      label="Say hello"
                      href="mailto:nguyenhophuocloc.cb@gmail.com"
                      icon={<ArrowUpRight className="w-4 h-4" />}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  'Web Developer',
                  'UI/UX Focused',
                  'Core Performance',
                  'Problem Solver',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}

                <div className="h-[1px] w-16 bg-white/10 ml-2 hidden md:block" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8 lg:justify-end">
            <div className="lg:justify-self-end">
              <p className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-6 opacity-50">
                Sitemap
              </p>
              <ul className="space-y-3">
                {sitemap.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <p className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-6 opacity-50">
                Connect
              </p>
              <ul className="space-y-3">
                {socials.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="group flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50">
              <Image
                src={LogoImg}
                alt="Loc Logo"
                width={40}
                height={40}
                className="group-hover:rotate-12 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500" />
            </div>

            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tighter text-sm uppercase">
                nguyenhophuocloc
              </span>
              <span className="text-[10px] text-zinc-600 font-medium tracking-[0.2em] uppercase">
                Portfolio v2.1.2
              </span>
            </div>
          </Link>

          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
            <p className="text-zinc-500 text-[12px] font-medium tracking-tight">
              © 2018 — {curYear} <span className="mx-2 text-zinc-800">/</span>
              <span className="text-zinc-300">Crafted with ❤️</span>
            </p>

            <div className="flex items-center gap-3 md:justify-end">
              <div className="h-[1px] w-8 bg-zinc-800 hidden md:block" />
              <p className="text-[9px] text-zinc-600 font-mono tracking-[0.4em] uppercase opacity-60">
                MAKE IT WORK • THEN MAKE IT BETTER
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
