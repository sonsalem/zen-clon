"use client";

import React from "react";

interface ButtonProps {
  text: string;
  color?: "main" | "black";
  icon?: React.ReactNode;
  iconPostion?: "start" | "end";
  cc?: string;
}

const Button = ({
  text,
  color = "main",
  icon,
  iconPostion = "start",
  cc = "",
}: ButtonProps) => {
  return (
    <button
      className={`flex ${cc} items-center gap-2 font-medium text-sm ${
        color === "main"
          ? "bg-main hover:bg-[oklch(.666_.179_58.318)]"
          : "bg-black text-main"
      } px-4 py-2 rounded-[.225rem]  transition-all duration-500`}
    >
      {iconPostion === "start" && icon}
      <span>{text}</span>
      {iconPostion === "end" && icon}
    </button>
  );
};

export default Button;
