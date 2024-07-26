import Link from "next/link";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["300"] });
const lora = Lora({ subsets: ["latin"], weight: ["500"] });

const Footer = () => {
  return (
    <div className="bg-primary-b m-0 w-full border-t-2 border-t-gen-color pt-10">
      <div
        className={`mx-auto my-0 flex w-11/12 flex-col items-center gap-3 rounded-t-3xl bg-footer-bg p-10 text-center text-footer-text md:w-9/12 md:flex-row md:justify-evenly ${raleway.className}`}
      >
        <div
          className={`${lora.className} items-center text-center md:basis-1/4 md:text-start`}
        >
          <h1 className="text-6xl">
            Glow <br />
            Scout
          </h1>
        </div>
        <div className="flex flex-col md:basis-1/5">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <Link href="/">Home</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/spa">Spa</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
        <div className="flex flex-col md:basis-1/5">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div className="flex flex-col md:basis-1/5">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <Link href="https://www.instagram.com">Instagram</Link>
          <Link href="https://www.facebook.com">Facebook</Link>
          <Link href="https://www.youtube.com">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
