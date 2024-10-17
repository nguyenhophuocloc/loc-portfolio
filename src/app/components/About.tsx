import Image from "next/image";
import Logo from "@public/images/colorcode.png";
import { aboutItems } from "@/types/mockData";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I am a <strong>web developer</strong> with over{" "} 
            <strong>two years of experience</strong> and a solid{" "}
            <strong>computer science background</strong>. Currently, as a{" "}
            <strong>Junior Full-stack Developer</strong>, I am focused on{" "}
            <strong>updating my skills</strong> and{" "}
            <strong>contributing to the company</strong>. My{" "}
            <strong>long-term goals</strong> are to become a{" "}
            <strong>team leader</strong> and enhance my{" "}
            <strong>international communication</strong>. My dream is to{" "}
            <strong>build scalable modern websites</strong> for the future.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <Image
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
