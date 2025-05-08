"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "../Button";
import { Phone, Menu } from "lucide-react";
import Logo from "../Logo";
import MenuSmall from "./MenuSmall";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Logo />

        {/* LINKS */}
        <div className="hidden lg:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              href={`/${link.href}`}
              key={link.key}
              className="text-sm transition-all hover:text-main duration-500 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Button Call */}
        <div className="hidden lg:block">
          <Button
            text="920010535"
            icon={<Phone size={16} className="font-medium" />}
          />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="menu hover:bg-gray-200 w-[40px] h-[40px] rounded-full transition-all duration-500 flex justify-center items-center cursor-pointer"
          >
            <Menu />
          </div>
          <MenuSmall isOpen={isOpen} links={NAV_LINKS} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
