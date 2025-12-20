'use client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { ProjectJson } from '@/types/web.type';
import Image from 'next/image';
import Link from 'next/link';

type ProjectDialogProps = {
  model: ProjectJson;
  children: React.ReactNode;
};

const ProjectDialog = ({ model, children }: ProjectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-[95vw] w-[1200px] h-[90vh] p-0 border-zinc-800 bg-zinc-950/90 backdrop-blur-2xl overflow-hidden rounded-[2.5rem]">
        <VisuallyHidden.Root>
          <DialogTitle>{model.title}</DialogTitle>
          <DialogDescription>
            Detailed information and showcase of the project {model.title}
          </DialogDescription>
        </VisuallyHidden.Root>
        <div className="sticky top-0 z-20 bg-zinc-950/50 backdrop-blur-md border-b border-white/5 px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              {model.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {model.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-widest text-blue-400 font-bold px-2 py-1 bg-blue-500/10 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {model.link && (
              <Link
                href={model.link}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors"
              >
                Live Preview{' '}
                <span className="material-symbols-rounded text-sm">
                  open_in_new
                </span>
              </Link>
            )}
            {model.github && (
              <Link
                href={model.github}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors border border-white/5"
              >
                Source Code
              </Link>
            )}
          </div>
        </div>

        <div className="overflow-y-auto h-full custom-scrollbar p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-10">
              <section>
                <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
                  About Project
                </h4>
                <p className="text-zinc-300 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                  {model.detail.description}
                </p>
              </section>

              <section className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                    Timeline
                  </h4>
                  <p className="text-white font-mono">
                    {model.from} — {model.to}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                    Tech Stack
                  </h4>
                  <p className="text-white text-sm leading-relaxed">
                    {model.detail.techstacks}
                  </p>
                </div>
                {model.detail.account && (
                  <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <h4 className="text-[10px] uppercase tracking-widest text-blue-400 mb-1 font-bold">
                      Demo Account
                    </h4>
                    <p className="text-xs text-zinc-300 font-mono">
                      {model.detail.account.username} /{' '}
                      {model.detail.account.password}
                    </p>
                  </div>
                )}
              </section>

              {model.detail.responsibilities.length > 0 && (
                <section>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
                    Core Responsibilities
                  </h4>
                  <div
                    className="prose prose-invert prose-sm max-w-none text-zinc-400 marker:text-blue-500"
                    dangerouslySetInnerHTML={{
                      __html: model.detail.responsibilities,
                    }}
                  />
                </section>
              )}
            </div>

            <div className="lg:col-span-2 space-y-12">
              <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Visual Showcase
              </h4>
              <div className="flex flex-col gap-12">
                {model.detail.images.map((item, key) => (
                  <figure key={key} className="group/img relative">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                      <Image
                        src={item.img}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover/img:scale-[1.02]"
                        alt={item.title}
                        quality={100}
                      />
                    </div>
                    <figcaption className="mt-4 text-center text-sm font-medium text-zinc-500 italic">
                      — {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="h-20" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
