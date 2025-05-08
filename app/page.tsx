"use client";

import About from "@/components/About/About";
import Landing from "@/components/Landing/Landing";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <About />
      <Services />
    </div>
  );
}
