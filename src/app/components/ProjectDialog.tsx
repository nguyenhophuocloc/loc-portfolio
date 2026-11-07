'use client';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Project } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FlowDiagram from './FlowDiagram';
import ToolIcon from './ToolIcon';

type Props = {
  project: Project;
  children: React.ReactNode;
};

const ProjectDialog = ({ project, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="flex h-[92vh] w-[min(1200px,94vw)] max-w-none flex-col gap-0 overflow-hidden rounded-2xl border-rule bg-surface p-0 text-ink">
        <header className="flex flex-col gap-4 border-b border-rule px-6 py-5 pr-14 sm:flex-row sm:items-end sm:justify-between sm:px-10">
          <div>
            <p className="text-sm text-muted">
              {project.client}
              {project.year ? `, ${project.year}` : ''}
            </p>
            <DialogTitle className="mt-1 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              {project.title}
            </DialogTitle>
          </div>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand h-10 w-fit px-5 text-sm"
            >
              Open live site <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="space-y-8 lg:col-span-4">
              <DialogDescription className="text-[17px] leading-relaxed text-ink">{project.summary}</DialogDescription>

              <dl className="grid grid-cols-[5rem_1fr] gap-y-3 border-y border-rule py-5 text-sm">
                <dt className="text-muted">Role</dt>
                <dd>{project.role}</dd>
                <dt className="text-muted">Stack</dt>
                <dd className="leading-relaxed">{project.stack.join(', ')}</dd>
              </dl>

              <div>
                <h3 className="text-sm font-semibold">What I did</h3>
                <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">
                  {project.contributions.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2 bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-10 lg:col-span-8">
              {project.workflows && (
                <ul className="space-y-4">
                  {project.workflows.map((wf) => (
                    <li key={wf.slug} className="overflow-hidden rounded-xl border border-rule bg-raised/40">
                      <div className="relative h-28 border-b border-rule bg-paper/60">
                        {wf.image ? (
                          <Image
                            src={wf.image}
                            alt={`${wf.title} workflow in n8n`}
                            fill
                            sizes="(max-width: 1024px) 94vw, 760px"
                            className="object-cover object-left-top"
                          />
                        ) : (
                          <FlowDiagram steps={wf.flow} />
                        )}
                      </div>
                      <div className="space-y-3 p-4">
                        <h3 className="font-semibold">{wf.title}</h3>
                        <p className="text-sm leading-relaxed text-muted">{wf.summary}</p>
                        <ul className="flex gap-2">
                          {wf.tools.map((tool) => (
                            <li key={tool.name}>
                              <ToolIcon tool={tool} size="sm" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {project.images.map((item, index) => (
                <figure key={item.img}>
                  <div className="overflow-hidden rounded-xl border border-rule bg-raised">
                    <Image
                      src={item.img}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 94vw, 760px"
                      className="h-auto w-full"
                      alt={`${project.title}: ${item.title}`}
                      quality={100}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted">{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
