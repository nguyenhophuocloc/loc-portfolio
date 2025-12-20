import Image from 'next/image';

type Props = {
  logo: string;
  name: string;
  title: string;
  from: number;
  to: number;
  degree: string;
};

const EducationCard = ({ logo, name, title, from, to, degree }: Props) => {
  return (
    <div className="group relative w-full max-w-2xl transition-transform duration-500 hover:-translate-y-2">
      {/* Soft glowing background layer on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>

      <div className="relative flex flex-col md:flex-row bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden">
        {/* Left column: logo and "Verified" badge */}
        <div className="w-full md:w-1/3 bg-white/5 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
            Verified Degree
          </div>
        </div>

        {/* Right column: detailed information */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {name}
              </h3>
              <span className="text-[10px] font-mono text-zinc-500">
                ID: 1812969
              </span>
            </div>
            <p className="text-lg text-blue-400 font-medium leading-tight mb-6">
              {title}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
            <div>
              <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                Timeline
              </p>
              <p className="text-sm font-mono text-zinc-300">
                {from} — {to}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                Grade
              </p>
              <p className="text-sm font-bold text-emerald-400">{degree}</p>
            </div>
          </div>
        </div>

        {/* Decorative element: vertical barcode for a tech-style feel */}
        <div className="hidden md:flex w-8 bg-zinc-950 items-center justify-center opacity-30">
          <div className="rotate-90 text-[10px] font-mono tracking-[0.5em] text-zinc-600 whitespace-nowrap">
            HCMUT - COMPUTER SCIENCE - {to}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
