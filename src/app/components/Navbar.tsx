"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollSpy } from "../hooks/useScrollSpy";

type Props = { navOpen: boolean };

const NAV_ITEMS = [
  { label: "Home",       link: "#home" },
  { label: "Experience", link: "#experience" },
  { label: "Skill",      link: "#skill" },
  { label: "Project",    link: "#project" },
  { label: "Contact",    link: "#contact", className: "md:hidden" },
];

// Only the spy sections — Contact is excluded
const SPY_IDS = ["#home", "#experience", "#skill", "#project"];

export default function Navbar({ navOpen }: Props) {
  const activeTab = useScrollSpy(SPY_IDS, { threshold: 0.3 });

  return (
    <nav
      className={`
        fixed md:static top-[72px] right-4 left-4 p-2 rounded-2xl md:rounded-full
        bg-zinc-900 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none
        border border-white/10 md:border-none
        flex flex-col md:flex-row items-center gap-1
        transition-all duration-300 origin-top z-50
        ${navOpen
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-[-20px] opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible"
        }
      `}
    >
      {NAV_ITEMS.map(({ label, link, className }) => {
        const isActive = activeTab === link;
        return (
          <Link
            key={link}
            href={link}
            className={`
              relative px-5 py-2 text-sm font-medium transition-colors duration-300
              ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}
              ${className ?? ""}
              w-full md:w-auto text-center block
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 md:bg-white/5 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {label}
          </Link>
        );
      })}
    </nav>
  );
}