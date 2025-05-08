import React from "react";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  bg?: "lighter" | "light";
}

const Badge = ({ text, icon, bg = "lighter" }: ButtonProps) => {
  return (
    <div
      className={`badged rounded-full w-fit flex items-center gap-2 justify-center px-4 py-2 border-[1px] border-main
  ${bg == "light" ? "bg-second-200" : "bg-second-100"}`}
    >
      {icon}
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
};

export default Badge;
