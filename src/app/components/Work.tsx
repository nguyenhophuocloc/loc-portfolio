import { projects, type Project } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import FlowDiagram from './FlowDiagram';
import ProjectDialog from './ProjectDialog';

const Meta = ({ project }: { project: Project }) => (
  <p className="text-sm text-muted">
    {project.client}
    {project.year ? `, ${project.year}` : ''}
  </p>
);

const Chips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li key={item} className="chip">
        {item}
      </li>
    ))}
  </ul>
);

const Work = () => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Selected projects</h2>

        <ProjectDialog project={featured}>
          <button
            type="button"
            className="card group mt-10 grid w-full overflow-hidden text-left transition-colors hover:border-muted/40 lg:grid-cols-[1.4fr_1fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-raised lg:aspect-auto lg:min-h-[380px]">
              {featured.thumb ? (
                <Image
                  src={featured.thumb}
                  alt={`${featured.client} ${featured.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <FlowDiagram steps={featured.flow ?? []} />
              )}
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-9">
              <span className="w-fit rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
                Featured
              </span>
              <Meta project={featured} />
              <h3 className="-mt-2 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{featured.title}</h3>
              <p className="leading-relaxed text-muted">{featured.summary}</p>
              <Chips items={featured.stack.slice(0, 4)} />
              <span className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand">
                View project{' '}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </button>
        </ProjectDialog>

        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.slug}>
              <ProjectDialog project={project}>
                <button
                  type="button"
                  className="card group flex h-full w-full flex-col overflow-hidden text-left transition-colors hover:border-muted/40"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-rule bg-raised">
                    {project.thumb ? (
                      <Image
                        src={project.thumb}
                        alt={`${project.client} ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <FlowDiagram steps={project.flow ?? []} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <Meta project={project} />
                    <h3 className="-mt-1 text-lg font-semibold">{project.title}</h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                    <div className="mt-auto pt-2">
                      <Chips items={project.stack.slice(0, 3)} />
                    </div>
                  </div>
                </button>
              </ProjectDialog>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
