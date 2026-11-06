import { experience } from '@/content/site';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <ol className="relative mt-10 space-y-4 before:absolute before:bottom-6 before:left-[2.1rem] before:top-6 before:w-px before:bg-rule sm:before:left-[2.6rem]">
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.period}`} className="card relative flex gap-4 p-5 sm:gap-6 sm:p-6">
              <span className="relative z-10 h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white sm:h-12 sm:w-12">
                <Image
                  src={role.logo}
                  alt={`${role.company} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold">
                    {role.title} <span className="font-normal text-muted">at {role.company}</span>
                  </h3>
                  <p className="flex shrink-0 items-center gap-2 text-sm tabular-nums text-muted">
                    {i === 0 && <span className="h-2 w-2 rounded-full bg-brand" aria-label="Current role" />}
                    {role.period}
                    <span className="chip py-0.5">{role.type}</span>
                  </p>
                </div>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-muted">
                  {role.highlights.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span aria-hidden className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-muted/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
