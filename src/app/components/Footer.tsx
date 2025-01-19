import Link from "next/link";
import { ButtonPrimary } from "./Button";
import Image from "next/image";
import { socialLinks } from "@/types/mockData";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Project",
    href: "#project",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/nguyenhophuocloc",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nguyen-ho-phuoc-loc",
  },
  // {
  //   label: "0932 075 864",
  //   href: "tel:0932075864",
  // },
  // // {
  //   label: "nguyenhophuocloc.cb@gmail.com",
  //   href: "mailto:nguyenhophuocloc.cb@gmail.com",
  // },
  // {
  //   label: "CodePen",
  //   href: "https://codepen.io/codewithsadee",
  // },
];
const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <div className="flex gap-4">
              <ButtonPrimary
                href="mailto:nguyenhophuocloc.cb@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
              />

              <div className="flex items-center gap-2 mt-auto">
                {socialLinks.map(({ href, icon }, key) => (
                  <Link
                    key={key}
                    href={href}
                    className="w-12 h-12 grid place-items-center
              ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color]
              hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                    target="_blank"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors
                    hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Contact</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <Link
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors
                    hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <Link href="/" className="logo reveal-up">
            <Image
              src={"/images/colorcode.png"}
              width={40}
              height={40}
              alt="logo"
            />
          </Link>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; {curYear} <span className="text-zinc-200">nguyenhophuocloc</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
