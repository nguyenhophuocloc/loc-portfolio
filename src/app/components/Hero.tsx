import { clients, profile } from '@/content/site';
import Avatar from '@public/images/hero-banner5.jpg';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LayerStack from './LayerStack';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Soft grid backdrop, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgb(var(--rule))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--rule))_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-rule">
                <Image src={Avatar} alt={profile.nameAscii} fill sizes="44px" className="object-cover object-top" />
              </span>
              <div className="leading-tight">
                <p className="text-[15px] font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">
                  {profile.role}, {profile.location}
                </p>
              </div>
            </div>

            <h1 className="mt-8 max-w-[18ch] text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] [text-wrap:balance] sm:text-[3.5rem] lg:text-[3.75rem]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-brand">
                Start a conversation <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#work" className="btn-ghost">
                View projects
              </Link>
              <span className="ml-1 flex gap-1">
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-12 w-12 place-items-center rounded-full text-muted transition-colors hover:bg-raised hover:text-ink"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-12 w-12 place-items-center rounded-full text-muted transition-colors hover:bg-raised hover:text-ink"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </span>
            </div>
          </div>

          <LayerStack />
        </div>

        <div className="mt-20 border-t border-rule pt-8">
          <p className="text-sm text-muted">Companies and clients I have built for</p>
          <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
            {clients.map((client) => (
              <li key={client.name} className="flex items-center gap-2.5 text-[15px] font-semibold text-ink/80">
                {client.logo && (
                  <span className="relative h-7 w-7 overflow-hidden rounded-md bg-white">
                    <Image src={client.logo} alt="" fill sizes="28px" className="object-contain p-0.5" />
                  </span>
                )}
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
