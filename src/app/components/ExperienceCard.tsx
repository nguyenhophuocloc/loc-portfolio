import Image from "next/image";

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
    <div className="bg-zinc-800  p-8 rounded-xl min-w-[320px] flex flex-col gap-8 lg:min-w-[420px] transition-colors group ring-2 ring-inset ring-zinc-50/10  reveal-up">
      <div className="flex items-center gap-4">
        <figure className="img-box rounded-lg">
          <Image
            src={logo}
            alt={name}
            width={65}
            height={65}
            loading="lazy"
            className="img-cover bg-white"
          />
        </figure>

        <div>
          <p className="font-semibold text-[18px] tracking-wider">{title}</p>
          <p>
            {name} · <span className="text-zinc-400 text-sm">{type}</span>
          </p>
          <p className="text-sm text-zinc-400">
            {from} - {to}
          </p>
          <p className="text-sm text-zinc-400">{address}</p>
        </div>
      </div>
      <div>
        <ul
          className="list-disc leading-1 tracking-tight space-y-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
