"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProjectJson } from "@/types/web.type";
import Image from "next/image";
import Link from "next/link";

const ProjectDialog = ({ model }: { model: ProjectJson }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="dialog-content p-0 lg:min-w-[100vw] lg:min-h-[100vh] lg:mt-10 border-none bg-zinc-800/50 max-h-screen overflow-y-scroll z-50">
        <div className="bg-zinc-700 rounded-2xl p-[64px] max-md:p-[32px]">
          <div className="border-b pb-5 flex justify-between">
            <div className="">
              <h1 className="text-[24px] font-semibold">{model.title}</h1>
              <div className="flex flex-wrap items-center gap-2">
                {model.tags.map((label, key) => (
                  <span
                    key={key}
                    className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-zinc-800 bg-zinc-50 rounded-xl p-2 flex items-center gap-2 ">
                <span className="material-symbols-rounded">calendar_month</span>{" "}
                <span>
                  {model.from} - {model.to}
                </span>
              </p>
              {model.link && (
                <Link
                  className="flex gap-1 items-center mt-1 underline"
                  href={model.link}
                  target="_blank"
                >
                  Link
                  <span className="material-symbols-rounded">open_in_new</span>
                </Link>
              )}
            </div>
          </div>

          <div className="mt-4 flex lg:gap-2 flex-col lg:flex-row">
            <p className="italic font-semibold mb-2">Description:</p>
            <p>{model.detail.description}</p>
          </div>

          <div className="mt-4 flex lg:gap-2 flex-col lg:flex-row">
            <p className="italic font-semibold mb-2">Tech stacks:</p>
            <p>{model.detail.techstacks}</p>
          </div>

          <div className="mt-2">
            <p className="italic font-semibold mb-2">Responsibilities:</p>
            <ul
              className="list-disc pl-10 leading-1 tracking-tight space-y-2"
              dangerouslySetInnerHTML={{
                __html: model.detail.responsibilities,
              }}
            ></ul>
          </div>

          <div className="mt-4 flex gap-2">
            {model.link && (
              <>
                <p className="italic font-semibold mb-2">Link:</p>
                <Link
                  href={model.link}
                  target="_blank"
                  className="underline italic"
                >
                  Click here
                </Link>
              </>
            )}
          </div>

          <div className="mt-4 border-t border-dashed">
            <h1 className="text-[28px] text-center">Demo:</h1>
            <div className="mt-4 flex flex-col gap-1 items-center w-full">
              {model.detail.images.map((item, key) => (
                <figure className="" key={key}>
                  <Image
                    src={item.img}
                    width={830}
                    height={760}
                    className="object-contain"
                    alt={item.title}
                    quality={100}
                  />
                  <figcaption className="text-center text-sm text-zinc-400">
                    {item.title}
                  </figcaption>
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
