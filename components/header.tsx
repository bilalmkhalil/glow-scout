"use client";

import Link from "next/link";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["600"] });
const lora = Lora({ subsets: ["latin"], weight: ["500"] });

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const currentURL = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`bg-primary-b grid grid-cols-3 items-center justify-between p-6 text-gen-color md:grid-cols-7 ${currentURL === "/" ? "" : "border-b border-b-gen-color"}`}
    >
      <h1 className={`col-span-2 text-3xl md:col-span-2 ${lora.className}`}>
        Glow Scout
      </h1>

      {/* Hamburger Icon */}
      <button
        className="col-span-1 flex justify-end md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} className="text-gen-color" />
      </button>

      {/* Desktop Menu */}
      <div
        className={`hidden flex-row justify-between md:col-span-3 md:flex ${raleway.className}`}
      >
        <Link href="/">Home</Link>
        <Link href="/goals">Goals</Link>
        <Link href="/spa">Spa</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
      <div className="col-span-2 hidden justify-end md:flex">
        <button className="rounded-full bg-gen-color p-3 px-5 text-header-text">
          Sign In/Up
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`col-span-3 md:hidden ${isMenuOpen ? "max-h-64" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav
          className={`mt-2 grid grid-cols-2 items-end justify-center gap-1 space-y-4 rounded-lg bg-footer-text p-4 text-center ${raleway.className}`}
        >
          <Link href="/">Home</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/spa">Spa</Link>
          <Link href="/blogs">Blogs</Link>
          <button className="col-span-2 rounded-full bg-gen-color px-5 py-2 text-header-text">
            Sign In/Up
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
