"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "../Button";
import { Phone, Menu, ShoppingCart, Heart } from "lucide-react";
import Logo from "../Logo";
import MenuSmall from "./MenuSmall";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navebar = () => {
  const pathName = usePathname();

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
        <div className="flex items-center gap-8">
          {/* LOGO */}
          <Logo />

          {/* LINKS */}
          <div className="hidden lg:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                href={`/${link.href}`}
                key={link.key}
                className={`text-sm transition-all hover:text-main duration-500 font-medium ${
                  link.href === `` && pathName == `/`
                    ? "text-main"
                    : link.href !== "" && pathName.includes(link.href)
                    ? "text-main"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Cart And Wishlist*/}
        <div className="flex items-center gap-4">
          <div className="cart hidden lg:block cursor-pointer relative">
            <div className="absolute -top-2 -right-2 rounded-full w-[18px] h-[18px] bg-main !text-white text-[10px] grid place-content-center">
              3
            </div>
            <ShoppingCart />
          </div>
          <div className="wishlist hidden lg:block cursor-pointer relative">
            <div className="absolute -top-2 -right-2 rounded-full w-[18px] h-[18px] bg-red-500 !text-white text-[10px] grid place-content-center">
              12
            </div>
            <Heart />
          </div>
          <div className="user rounded-full border-2 border-main">
            <Image
              src={"/user.png"}
              alt="user"
              width={40}
              height={40}
              objectFit="cover"
            />
          </div>
          <div className="lg:hidden">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="menu hover:bg-gray-200 w-[40px] h-[40px] rounded-full transition-all duration-500 flex justify-center items-center cursor-pointer"
            >
              <Menu />
            </div>
            <MenuSmall
              isOpen={isOpen}
              links={NAV_LINKS}
              setIsOpen={setIsOpen}
              pathName={pathName}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
