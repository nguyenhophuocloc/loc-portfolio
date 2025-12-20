import Image from 'next/image';

type Props = {
  imgSrc: string;
  label: string;
  desc: string;
};

const SkillCard = ({ imgSrc, label, desc }: Props) => {
  return (
    <div className="group relative p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
      <div className="absolute -inset-px bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        <div
          className="relative w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center p-2.5 
          group-hover:scale-110 group-hover:bg-zinc-800 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] 
          transition-all duration-500 shadow-inner"
        >
          <Image
            src={imgSrc}
            alt={label}
            width={32}
            height={32}
            className="object-contain transition-transform duration-500 group-hover:rotate-6"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {label}
            </h3>
            <div className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
          </div>

          <p className="text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400 transition-colors">
            {desc}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-700" />
    </div>
  );
};

export default SkillCard;
