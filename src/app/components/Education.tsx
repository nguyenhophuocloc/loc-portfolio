import { certificates, education, training, type Certificate } from '@/content/site';
import { ArrowUpRight, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/** University-run courses come first, then online certificates. */
const items: Certificate[] = [...training, ...certificates];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education and certificates</h2>

        <div className="card mt-10 grid gap-8 p-6 sm:p-7 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div className="flex items-center gap-5">
            <span className="relative h-16 w-16 shrink-0">
              <Image src={education.logo} alt="HCMUT logo" fill sizes="64px" className="object-contain" />
            </span>
            <div>
              <h3 className="font-semibold leading-snug">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-0.5 text-sm tabular-nums text-muted">{education.period}</p>
            </div>
          </div>

          <ul className="divide-y divide-rule border-t border-rule lg:border-l lg:border-t-0 lg:pl-10">
            {items.map((cert) => {
              const body = (
                <>
                  {cert.logo ? (
                    <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-white">
                      <Image src={cert.logo} alt="" fill sizes="28px" className="object-contain p-0.5" />
                    </span>
                  ) : (
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-brand/40 bg-raised text-brand">
                      <Award className="h-4 w-4" aria-hidden />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium leading-snug transition-colors group-hover:text-brand">
                      {cert.title}
                    </span>
                    <span className="block text-[13px] text-muted">
                      {cert.issuer}, {cert.date}
                    </span>
                  </span>
                  {cert.link && (
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand"
                      aria-label="Opens certificate"
                    />
                  )}
                </>
              );
              return (
                <li key={`${cert.title}-${cert.date}`}>
                  {cert.link ? (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-3"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 py-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
