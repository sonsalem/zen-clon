import Image from "next/image";
import React from "react";

const ImageView = ({
  src,
  reverseRotate,
}: {
  src: string;
  reverseRotate?: boolean;
}) => {
  return (
    <div className="relative">
      <div
        className={`box absolute w-[105%] h-[105%] rounded-md left-0 top-0 bg-second-100
      ${
        !reverseRotate
          ? "rotate-[8deg] hover:rotate-[5deg]"
          : "-rotate-[8deg] hover:-rotate-[5deg] "
      } transition-all`}
      />
      <Image
        src={src}
        alt="landing"
        width={600}
        height={400}
        className="object-cover w-full rounded-md relative"
      />
      <div className="absolute rounded-md inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default ImageView;
