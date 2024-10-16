import { ProjectJson } from "@/types/web.type";
import Image from "next/image";
import ProjectDialog from "./ProjectDialog";

type Props = {
  data: ProjectJson;
  classes?: string;
};
const ProjectCard = ({ data, classes = "" }: Props) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <Image
          src={data.imgSrc}
          alt={data.title}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{data.title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {data.tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <ProjectDialog model={data} />
      </div>
    </div>
  );
};

export default ProjectCard;
