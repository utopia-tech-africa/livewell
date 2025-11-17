"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { LivewellLogo } from "@/assets/img";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type NavItem = {
  label: string;
  link: string;
};

const navList: ReadonlyArray<NavItem> = [
  { label: "Schedule", link: "#schedule" },
  { label: "Media", link: "#media" },
  { label: "Blog", link: "#blog" },
] as const;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(link);
    if (target) {
      const headerOffset = 80;
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="bg-neutral-100 scroll-smooth fixed w-full top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center py-3 px-6 md:px-20">
          <ul className="hidden md:flex gap-8">
            {navList.map((item, index) => (
              <li
                key={index}
                className="font-satoshi font-extrabold text-lg text-neutral-900 hover:text-primary-600 transition"
              >
                <a
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={LivewellLogo}
                height={50}
                width={50}
                alt="Livewell Logo"
                className="h-[35px] w-[55px] object-cover"
              />
            </Link>
          </div>

          {/* desktop button */}
          <div className="hidden md:block">
            <Link href="/reserve-seat">
              <Button className="bg-primary-600 w-[252px] text-white px-6">
                Reserve Your Spot
              </Button>
            </Link>
          </div>

          {/* mobile menu toggle */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-neutral-50 border-t border-neutral-200">
            <ul className="flex flex-col gap-4 py-6 px-6">
              {navList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="block font-satoshi font-bold text-lg text-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/reserve-seat">
                  <Button className="w-full bg-primary-600 text-white">
                    Reserve Your Spot
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
