import Link from "next/link";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["300"] });
const lora = Lora({ subsets: ["latin"], weight: ["500"] });

const Footer = () => {
  return (
    <div className="bg-primary-b border-t-gen-color m-0 border-t-2 pt-10">
      <div
        className={`bg-footer-bg text-footer-text flex-rows mx-auto my-0 flex w-9/12 justify-evenly rounded-t-xl p-10 text-center ${raleway.className}`}
      >
        <div className={`${lora.className} basis-1/4 items-center text-start`}>
          <h1 className="text-6xl">
            Glow <br />
            Scout
          </h1>
        </div>
        <div className="flex basis-1/5 flex-col">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <Link href="/">Home</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/spa">Spa</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
        <div className="flex basis-1/5 flex-col">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div className="flex basis-1/5 flex-col">
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
