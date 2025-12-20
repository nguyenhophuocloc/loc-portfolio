"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  navOpen: boolean;
};

const Navbar = ({ navOpen }: Props) => {
  const [activeTab, setActiveTab] = useState("#home");

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#journey" },
    { label: "Experience", link: "#experience" },
    { label: "Project", link: "#project" },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  return (
    <nav className={`
      nav-container-fixed
      fixed md:static top-[72px] right-4 left-4 p-2 rounded-2xl md:rounded-full
      bg-zinc-900 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none
      border border-white/10 md:border-none
      flex flex-col md:flex-row items-center gap-1
      transition-all duration-300 origin-top z-50
      
      ${navOpen 
        ? "translate-y-0 opacity-100 visible" 
        : "translate-y-[-20px] opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible"
      }
    `}>
      {navItems.map(({ label, link, className }) => (
        <Link
          key={link}
          href={link}
          onClick={() => setActiveTab(link)}
          className={`
            relative px-5 py-2 text-sm font-medium transition-colors duration-300
            ${activeTab === link ? "text-white" : "text-zinc-400 hover:text-white"}
            ${className || ""}
            w-full md:w-auto text-center block
          `}
        >
          <AnimatePresence>
            {activeTab === link && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 md:bg-white/5 rounded-full z-[-1]"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
          </AnimatePresence>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;