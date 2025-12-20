import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  name: string;
  logo: string;
  date: string;
  link: string;
};

const CertificateCard = ({ title, name, logo, date, link }: Props) => {
  return (
    <Link 
      href={link} 
      target="_blank"
      className="group relative p-5 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <figure className="shrink-0 relative w-14 h-14 p-2 bg-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain p-2"
            />
          </figure>
          
          <div className="flex-1">
            <h3 className="font-bold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-zinc-500 text-xs mt-1 font-medium">{name}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-4">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Issued {date}
          </span>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
          <span className="material-symbols-rounded text-sm text-zinc-400 group-hover:text-white">
            arrow_outward
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CertificateCard;