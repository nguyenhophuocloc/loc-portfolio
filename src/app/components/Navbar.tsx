"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  navOpen: boolean;
};

const Navbar = ({ navOpen }: Props) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (lastActiveLink?.current && activeBox?.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (e: React.MouseEvent<HTMLElement>) => {
    lastActiveLink?.current?.classList.remove("active");
    const targetElement = e.currentTarget as HTMLElement;
    targetElement.classList.add("active");

    lastActiveLink.current = targetElement as HTMLAnchorElement;

    if (activeBox?.current) {
      activeBox.current.style.top = targetElement.offsetTop + "px";
      activeBox.current.style.left = targetElement.offsetLeft + "px";
      activeBox.current.style.width = targetElement.offsetWidth + "px";
      activeBox.current.style.height = targetElement.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", initActiveBox);
  }

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          href={link}
          key={key}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </Link>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
