import { BRAND_NAME } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={"/logo.webp"}
          alt="logo"
          height={40}
          width={40}
          loading="lazy"
          className="block aspect-square mix-blend-multiply"
        />
        <h2 className="text-xl font-extrabold">{BRAND_NAME}</h2>
      </Link>
    </div>
  );
};

export default Logo;
