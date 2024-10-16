import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  name: string;
  logo: string;
  date: string;
  link: string;
  classes?: string;
};
const CertificateCard = ({ title, name, logo, date, link, classes }: Props) => {
  return (
    <div
      className={
        "ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors hover:cursor-pointer group flex flex-col justify-between " +
        classes
      }
    >
      <div className="flex items-center gap-3">
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12group-hover:bg-zinc-900 transition-colors">
          <Image
            src={logo}
            alt={name}
            width={52}
            height={52}
            className="img-cover"
          />
        </figure>
        <div>
          <h3 className="font-semibold tracking-wide">{title}</h3>
          <p className="text-zinc-400 text-sm">{name}</p>
          <p className="text-zinc-400 text-sm">Issued {date}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link target="_blank" href={link}>
          <span className="mt-2 flex gap-2 h-8 w-fit text-sm text-zinc-400 bg-zinc-50/5 items-center px-3 rounded-lg hover:cursor-pointer group-hover:text-white">
            <span className="material-symbols-rounded">open_in_new</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CertificateCard;
