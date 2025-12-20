import Image from 'next/image';

type Props = {
  title: string;
  name: string;
  logo: string;
  from: string;
  to: string;
  address: string;
  description: string;
  type: string;
};

const ExperienceCard = ({
  title,
  name,
  logo,
  from,
  to,
  address,
  description,
  type,
}: Props) => {
  return (
    <div className="relative pl-12 group">
      {/* Dot marker on the vertical timeline */}
      <div className="absolute top-1.5 -left-[9px] w-4 h-4 rounded-full border-2 border-zinc-950 bg-zinc-800 group-hover:bg-blue-500 transition-colors duration-300">
        <div className="w-full h-full rounded-full bg-blue-500/20 animate-ping group-hover:block hidden" />
      </div>

      <div className="flex flex-col gap-4">
        {/* Header: Logo + Title + Time */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white p-2 shrink-0 shadow-lg shadow-white/5">
              <Image
                src={logo}
                alt={name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <p className="text-zinc-400 font-medium">
                {name} <span className="text-zinc-600 ml-1">/ {type}</span>
              </p>
            </div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase bg-zinc-900/50 px-3 py-1.5 rounded-full border border-white/5 h-fit">
            {from} — {to}
          </div>
        </div>

        {/* Content: Clean description list */}
        <div className="mt-4">
          <ul
            className="space-y-3 text-zinc-400 text-sm leading-relaxed custom-experience-list text-[16px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <p className="text-xs text-zinc-600 flex items-center gap-1 mt-2">
          <span className="material-symbols-rounded text-[14px]">
            location_on
          </span>{' '}
          {address}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
