import Avatar from '@public/images/avatar-1.jpg';
import HeroBanner3 from '@public/images/hero-banner5.jpg';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import ButtonPrimary from './Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[25%] h-[25%] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 lg:grid lg:grid-cols-2 items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <figure className="w-9 h-9 rounded-lg overflow-hidden border border-white/10">
              <Image
                src={Avatar}
                alt="Loc"
                width={40}
                height={40}
                className="object-cover"
              />
            </figure>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Available for work
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Crafting Scalable <br /> Web Experiences
          </h1>

          <p className="text-gray-400 text-lg max-w-[45ch] mb-10 leading-relaxed">
            Hi, I&apos;m <span className="text-white font-medium">Loc</span> — a
            Web Developer turning ideas into fast, well-crafted web experiences.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <ButtonPrimary
              label="Get in Touch"
              href="#contact"
              icon={<ArrowUpRight className="w-4 h-4" />}
            />

            <div className="flex items-center gap-3">
              <Link
                href="https://www.github.com/nguyenhophuocloc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/nguyen-ho-phuoc-loc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </Link>

              <Link
                href="mailto:nguyenhophuocloc.cb@gmail.com"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 w-full max-w-[400px] ml-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <figure className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <Image
                src={HeroBanner3}
                alt="Nguyen Ho Phuoc Loc"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                width={480}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
