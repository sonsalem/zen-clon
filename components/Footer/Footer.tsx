import React from "react";
import Logo from "../Logo";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 overflow-x-hidden bg-second-300">
        <div className="relative container mx-auto px-4">
          <div className="grid id-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* INFO */}
            <div className="box">
              <Logo />
              <p className="font-medium mt-6">
                شركة رائدة في مجال المقاولات والتطوير في المملكة العربية
                السعودية. نقدم التميز في خدمات المقاولات والصيانة والخدمات
                المتخصصة
              </p>
            </div>
            {/* LINKS */}
            <div className="box">
              <h2 className="font-bold text-lg mb-6">روابط سريعة</h2>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={`/${link.href}`}
                    key={link.key}
                    className="transition-all hover:text-main duration-500 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* CONTACT US */}
            <div className="box">
              <h2 className="font-bold text-lg mb-6">اتصل بنا</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <MapPin />
                  <span className="font-medium">
                    المملكة العربية السعودية , المنطقة الشرقية
                  </span>
                </div>
                <div className="flex gap-4">
                  <Phone />
                  <span className="font-medium">920010535 </span>
                </div>
                <div className="flex gap-4">
                  <Mail />
                  <span className="font-medium">info@zaindev.com.sa </span>
                </div>
              </div>
            </div>
            {/* MAP */}
            <div className="box">
              <h2 className="font-bold text-lg mb-6">مواقعنا الاخرى</h2>
              <Link href={""} className="hover:underline">
                متجر لابيسكا lapesca زين لك
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <p className="bg-second-100 p-5 text-center px-4">
        © 2025 تم الإنشاء بواسطة سالم ممدوح
      </p>
    </>
  );
};

export default Footer;
