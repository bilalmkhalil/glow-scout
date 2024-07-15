"use client";

import Link from "next/link";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["600"] });
const lora = Lora({ subsets: ["latin"], weight: ["500"] });

import { usePathname } from "next/navigation";

const Header = () => {
  const currentURL = usePathname();

  return (
    <div
      className={`bg-primary-b text-gen-color flex-rows-5 ${currentURL === "/" ? "" : "border-b-gen-color border-b"} flex items-center justify-between p-6`}
    >
      <h1 className={`basis-1/2 text-3xl ${lora.className}`}> Glow Scout</h1>
      <div
        className={`flex basis-1/2 flex-row justify-between ${raleway.className}`}
      >
        <Link href="/">Home</Link>
        <Link href="/goals">Goals</Link>
        <Link href="/spa">Spa</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
      <div className="flex basis-1/2 justify-end">
        <button className="bg-gen-color text-header-text rounded-full p-3 px-5">
          Sign In/Up
        </button>
      </div>
    </div>
  );
};

export default Header;
