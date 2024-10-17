import Avatar from "@public/images/avatar-1.jpg";
import HeroBanner from "@public/images/hero-banner.png";
import Image from "next/image";
import Link from "next/link";
import { ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div
        className="container lg:grid lg:grid-cols-2 items-center
      lg:gap-10"
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <Image
                className="img-cover"
                src={Avatar}
                alt="Nguyen Ho Phuoc Loc"
                width={40}
                height={40}
              />
            </figure>

            <div
              className="flex items-center gap-1.5 text-zinc-400 text-sm 
            tracking-wide"
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5
          mb-4 lg:mb-4"
          >
            Hi, I&apos;m Loc
            <br />
          </h2>
          <h3
            className="headline-2 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-2
          mb-8 lg:mb-10"
          >
            Web Developer
          </h3>
          <div className="flex items-center gap-3">
            <Link
              className="btn btn-primary"
              href={"/files/NguyenHoPhuocLoc_WebDeveloper.pdf"}
              download={true}
            >
              Download CV
              <span className="material-symbols-rounded" aria-hidden="true">
                download
              </span>
            </Link>
            <ButtonOutline
              label="Scroll down"
              icon="arrow_downward"
              href="#about"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="max-h-[320px] max-w-[320px] ml-auto bg-gradient-to-t
          from-sky-400 via-25% via-sky-400/40 to-65% rounded-full overflow-hidden flex items-center justify-center"
          >
            <Image
              src={HeroBanner}
              alt="Nguyen Ho Phuoc Loc"
              className="w-full"
              width={480}
              height={600}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
