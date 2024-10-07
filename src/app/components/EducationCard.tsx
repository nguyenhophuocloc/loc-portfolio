import Image from "next/image";

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
    <div
      className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex
flex-col gap-8 lg:min-w-[420px]"
    >
      <div className="flex items-center gap-2">
        <figure className="img-box rounded-lg">
          <Image
            src={logo}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover bg-white"
          />
        </figure>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-zinc-400">
            {from} - {to}
          </p>
          {/* <p className="text-xs text-zinc-400 tracking-wider">{title}</p> */}
        </div>
      </div>
      <div>
        <p className="font-semibold text-[18px]">{title}</p>
        {/* <p><span className="text-zinc-400">GPA:</span> {gpa}/10.0</p> */}
        <p><span className="text-zinc-400">Degree classification: </span>{degree}</p>
      </div>
    </div>
  );
};

export default EducationCard;
