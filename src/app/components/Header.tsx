"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@public/images/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <Link href="/" className="logo">
            <Image
              src={Logo}
              alt="Nguyen Ho Phuoc Loc"
              width={40}
              height={40}
            />
          </Link>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            <span className="material-symbols-outlined">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <Link
          href={"#contact"}
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
