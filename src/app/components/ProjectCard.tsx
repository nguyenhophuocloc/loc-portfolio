import { ProjectJson } from '@/types/web.type';
import Image from 'next/image';
import ProjectDialog from './ProjectDialog';

type Props = {
  data: ProjectJson;
};

const ProjectCard = ({ data }: Props) => {
  return (
    <ProjectDialog model={data}>
      <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-700 hover:border-blue-500/30 shadow-2xl cursor-pointer">
        <figure className="relative aspect-[16/10] overflow-hidden m-3 rounded-[1.8rem]">
          <Image
            src={data.imgSrc}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl grid place-items-center bg-blue-600 text-white shadow-lg">
              <span className="material-symbols-rounded">arrow_outward</span>
            </div>
          </div>
        </figure>

        <div className="px-8 pb-8 pt-4 text-left">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {data.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {data.tags.map((label, key) => (
                <span
                  key={key}
                  className="px-4 py-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] border border-white/5 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>

            <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed mt-2">
              {data.detail.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none border-[1px] border-blue-500/0 group-hover:border-blue-500/20 rounded-[2.5rem] transition-all duration-700" />
      </div>
    </ProjectDialog>
  );
};

export default ProjectCard;
