"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [backdrop, setBackdrop] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (scrollY > 1) {
        setBackdrop(true);
      } else {
        setBackdrop(false);
      }
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-screen h-16 ${
        backdrop
          ? "backdrop-blur-2xl bg-[rgba(72,107,142,0.2)] drop-shadow-2xl"
          : ""
      } text-center text-white text-base z-10 flex justify-center items-center transition-all ease-in-out delay-0 duration-300`}
    >
      <div className="flex justify-between items-center w-[90%]">
        <div>
          <Link href="/">
            <button className="font-bold text-lg text-emerald-400">
              Nathaniel's Portfolio
            </button>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
