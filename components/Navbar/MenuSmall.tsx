import { Phone, X } from "lucide-react";
import Logo from "../Logo";
import Link from "next/link";
import Button from "../Button";
import { useEffect, useRef } from "react";

interface MenuSmallProps {
  isOpen: boolean;
  links: {
    href: string;
    key: string;
    label: string;
  }[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuSmall = ({ isOpen, links, setIsOpen }: MenuSmallProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MENU_WIDTH = 300;

  return (
    <>
      <div
        className={`fixed top-0 ${
          isOpen ? "bg-black/80" : "pointer-events-none"
        } left-0 w-full h-screen transition-all duration-500 z-10`}
      />
      <div
        ref={menuRef}
        className={`fixed top-0  max-w-full h-screen bg-white z-20 transition-all duration-700 border-l-2 flex flex-col justify-between`}
        style={{
          right: isOpen ? 0 : -MENU_WIDTH,
          width: `${MENU_WIDTH}px`,
        }}
      >
        {/* TOP */}
        <div className="top-section">
          {/* LOGO */}
          <div className="flex justify-between items-center border-b-[1px] border-gray-400 p-4">
            <Logo />
            <div
              className="closeMenu cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </div>
          </div>
          {/* LINKS */}
          <div className="flex gap-4 flex-col p-4">
            {links.map((link) => (
              <Link
                href={`/${link.href}`}
                key={link.key}
                className="transition-all hover:text-main duration-500 font-medium bg-second-300 px-4 py-2 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="border-t-[1px] border-gray-400 p-4">
          <button
            className={`flex w-full items-center justify-center gap-2 font-medium bg-main px-4 py-3 rounded-[.225rem] hover:bg-[oklch(.666_.179_58.318)] transition-all duration-500`}
          >
            <Phone size={18} />
            <span>920010535</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuSmall;
