"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

import model from "@/public/model.png";
import Link from "next/link";

import laserresurfacing from "@/public/4.jpeg";
import chemicalpeels from "@/public/3.jpeg";
import thermage from "@/public/2.jpeg";
import botox from "@/public/1.jpeg";
import acnetherapy from "@/public/13.jpeg";
import testmodel from "@/public/testModel.jpeg";
import modelleft from "@/public/modelwithflower.jpeg";
import modelright from "@/public/modelwithtouchingface.jpeg";

import TreatmentCard from "@/components/treatmentCard";

export default function Home() {
  const treatments = [
    {
      title: "Laser Resurfacing",
      description: "Lorem ipsum",
      imageSrc: laserresurfacing,
    },
    {
      title: "Chemical Peels",
      description: "Lorem ipsum",
      imageSrc: chemicalpeels,
    },
    {
      title: "Acne Bluelight Therapy",
      description: "Lorem ipsum",
      imageSrc: acnetherapy,
    },
    {
      title: "Thermage",
      description: "Lorem ipsum",
      imageSrc: thermage,
    },
    { title: "Botox", description: "Lorem ipsum", imageSrc: botox },
  ];

  const testimonials = [
    {
      name: "Ashley K.",
      image: testmodel,
      text: "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 4,
    },
    {
      name: "Ashley KB.",
      image: testmodel,
      text: "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <main className={`${raleway.className} text-gen-color`}>
      <div className="relative grid h-[587px] grid-cols-2 overflow-hidden pb-10">
        <svg
          width="398"
          height="610"
          viewBox="0 0 676 827"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[885px] z-0"
        >
          <path
            d="M665.029 346.614C710.8 571.513 601.458 783.435 421.066 820.149C240.674 856.862 57.1991 704.534 11.4275 479.635C-34.3441 254.736 74.9981 42.8138 255.39 6.10026C435.782 -30.6133 619.257 121.715 665.029 346.614Z"
            stroke="#351120"
          />
          <g clip-path="url(#clip0_0_1)">
            <path
              d="M75.9961 78V120.119V170"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M122 123.996H79.8815H30"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M108.524 91.4757L78.7417 121.251L43.4756 156.524"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M108.524 156.524L78.7417 126.742L43.4756 91.4757"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M118.072 142.59L79.5518 125.566L33.9209 105.41"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M57.4102 166.072L74.4339 127.552L94.5901 81.9208"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M118.645 106.765L79.6018 122.541L33.3545 141.235"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
            <path
              d="M93.2351 166.645L77.4514 127.602L58.7646 81.3546"
              stroke="#351120"
              stroke-width="5.73433"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="92.0001"
                height="92.0001"
                fill="white"
                transform="translate(30 78)"
              />
            </clipPath>
          </defs>
        </svg>

        <Image
          src={model}
          alt="model"
          width={770}
          className="absolute bottom-0 left-[760px] z-0"
        />
        <div className="z-10 pl-20 pt-10">
          <h1 className="text-5xl font-light leading-tight">
            REVEAL YOUR <br /> BEAUTY WITH
          </h1>
          <h1 className="mt-2 text-6xl font-light">Glow Scout</h1>
          <p className="my-6 text-xl font-normal leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
            ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut ut nibh faucibus.
          </p>
          <button className="border-gen-color flex items-center rounded-3xl border-2 px-5 py-3 text-xl font-semibold">
            Sign Up
            <ArrowUpRight className="bg-gen-color text-header-text ml-3 rounded-full p-1" />
          </button>
        </div>
        <div className="z-10 col-span-2 m-auto mt-10 grid w-8/12 grid-cols-5 gap-6 rounded-full bg-[#f6e9ce99] p-4">
          <select className="border-gen-color col-span-2 w-full rounded-3xl border bg-transparent px-2 py-1 outline-none">
            <option>Select your Goals</option>
          </select>
          <select className="border-gen-color col-span-2 w-full rounded-3xl border bg-transparent px-2 py-1 outline-none">
            <option>Select your Location</option>
          </select>
          <Link
            href="/book"
            className="bg-gen-color text-header-text rounded-3xl px-4 py-1 text-center"
          >
            Book Now!
          </Link>
        </div>
      </div>

      <div className="flex h-screen flex-col items-center justify-center gap-8 px-10 pb-16 pt-20">
        <h1 className="flex-none text-center text-5xl font-light">
          How Glow Scout Works
        </h1>
        <div className="grid w-9/12 grow grid-cols-4 gap-10">
          <div className="bg-header-text flex flex-col justify-between rounded-lg p-4 text-center">
            <h1 className="text-5xl font-bold">01</h1>
            <h1 className="text-4xl font-light">Sign Up</h1>
          </div>
          <div className="bg-header-text flex flex-col justify-between rounded-lg p-4 text-center">
            <h1 className="text-5xl font-bold">02</h1>
            <h1 className="text-4xl font-light">Select your Beauty Goals</h1>
          </div>
          <div className="bg-header-text flex flex-col justify-between rounded-lg p-4 text-center">
            <h1 className="text-5xl font-bold">03</h1>
            <h1 className="text-4xl font-light">Select Treatment</h1>
          </div>
          <div className="bg-header-text flex flex-col justify-between rounded-lg p-4 text-center">
            <h1 className="text-5xl font-bold">04</h1>
            <h1 className="text-4xl font-light">Select Spa</h1>
          </div>
        </div>
        <button className="bg-gen-color text-header-text flex-none rounded-full px-4 py-2">
          Get Started
        </button>
      </div>

      <div className="px-40 py-20">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-5xl font-light">Trending Treatments</h1>
          <p className="text-gen-color text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-6">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                title={treatment.title}
                description={treatment.description}
                imageSrc={treatment.imageSrc}
              />
            ))}
          </div>
          <button className="absolute -left-16 top-32 -translate-y-1/2 transform bg-transparent">
            <ChevronLeft className="text-gen-color h-10 w-10" />
          </button>
          <button className="absolute -right-16 top-32 -translate-y-1/2 transform bg-transparent">
            <ChevronRight className="text-gen-color h-10 w-10" />
          </button>
        </div>
      </div>

      <div className="bg-header-text flex h-screen items-center justify-center px-8 py-16">
        <div>
          <h2 className="mb-12 text-center text-5xl font-light">
            Client's Testimonials
          </h2>
          <div className="mx-auto flex w-8/12 items-center">
            <button
              onClick={prevTestimonial}
              className="text-gen-color hover:text-gray-600"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex flex-1 items-center px-8">
              <div className="mr-8 w-1/3">
                <div className="relative w-full overflow-hidden rounded-2xl bg-[#FFF5E0] pt-[133%]">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <h3 className="mb-4 text-2xl font-semibold">
                  {currentTestimonial.name}
                </h3>
                <p className="mb-4 text-gray-600">{currentTestimonial.text}</p>
                <div className="mb-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={i < currentTestimonial.rating ? "#FFD700" : "none"}
                      color={
                        i < currentTestimonial.rating ? "#FFD700" : "#D3D3D3"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="text-gen-color hover:text-gray-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="mt-6 flex justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`mx-1 h-2 w-2 rounded-full ${
                  i === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gen-color relative flex h-screen items-center overflow-hidden py-20">
        <div className="mx-auto flex items-center">
          <div className="relative w-1/4">
            <div className="relative aspect-[3/4]">
              <Image
                src={modelleft}
                alt="Model with flower"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-8 w-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#FFF9F0]"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor" />
                <circle cx="2" cy="12" r="2" fill="currentColor" />
                <circle cx="2" cy="22" r="2" fill="currentColor" />
                <circle cx="12" cy="2" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="22" r="2" fill="currentColor" />
                <circle cx="22" cy="2" r="2" fill="currentColor" />
                <circle cx="22" cy="12" r="2" fill="currentColor" />
                <circle cx="22" cy="22" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="text-header-text w-1/2 px-16 text-center">
            <h2 className="mb-6 text-5xl font-light">
              About <br />
              "Glow Scout"
            </h2>
            <p className="text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus."
            </p>
          </div>
          <div className="relative w-1/4">
            <div className="relative aspect-[3/4]">
              <Image
                src={modelright}
                alt="Model touching face"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -left-4 -top-4 h-8 w-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#FFF9F0]"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor" />
                <circle cx="2" cy="12" r="2" fill="currentColor" />
                <circle cx="2" cy="22" r="2" fill="currentColor" />
                <circle cx="12" cy="2" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="22" r="2" fill="currentColor" />
                <circle cx="22" cy="2" r="2" fill="currentColor" />
                <circle cx="22" cy="12" r="2" fill="currentColor" />
                <circle cx="22" cy="22" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gen-color flex h-[450px] flex-col items-center justify-center gap-10 py-40 text-center">
        <h1 className="text-5xl">Are you a Business?</h1>
        <p className="text-xl">
          People are seeking for the specialist. <br /> Join us now and serve
          your skills
        </p>
        <button className="border-gen-color text-gen-color flex rounded-full border-2 bg-transparent px-4 py-2">
          Sign Up as Business
          <ArrowUpRight className="bg-gen-color text-header-text ml-3 rounded-full p-1" />
        </button>
      </div>
    </main>
  );
}
