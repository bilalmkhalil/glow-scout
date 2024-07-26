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
    <main className={`${raleway.className} w-full text-gen-color`}>
      <div className="relative grid overflow-hidden sm:h-[587px] sm:grid-cols-2 sm:pb-10">
        <svg
          width="398"
          height="610"
          viewBox="0 0 676 827"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-8 top-80 z-0 hidden w-80 sm:left-[885px] sm:top-0 sm:block sm:w-[405px]"
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

        <div className="sm:hidden">
          <svg
            width="398"
            height="610"
            viewBox="0 0 676 827"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-8 top-80 z-0 w-[18rem] sm:left-[885px] sm:top-0 sm:w-[405px]"
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
            className="absolute bottom-0 left-[3rem] z-0 aspect-[4/3] scale-150"
          />
        </div>

        <Image
          src={model}
          alt="model"
          width={770}
          className="absolute bottom-0 left-[calc(100%-20rem)] z-0 hidden sm:left-[760px] sm:block"
        />
        <div className="z-10 px-4 sm:px-0 sm:pl-20 sm:pt-10">
          <h1 className="text-4xl font-light leading-tight sm:text-5xl">
            REVEAL YOUR <br /> BEAUTY WITH
          </h1>
          <h1 className="mt-2 text-6xl font-medium">Glow Scout</h1>
          <p className="my-6 text-xl font-normal leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
            ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut ut nibh faucibus.
          </p>
          <button className="flex items-center rounded-3xl border-2 border-gen-color px-5 py-3 text-xl font-semibold">
            Sign Up
            <ArrowUpRight className="ml-3 rounded-full bg-gen-color p-1 text-header-text" />
          </button>
        </div>
        <div className="z-10 col-span-2 mx-4 mb-2 mt-56 grid grid-cols-2 gap-4 rounded-3xl bg-[#f6e9ce99] p-4 sm:m-auto sm:mt-10 sm:w-8/12 sm:grid-cols-5 sm:gap-6 sm:rounded-full">
          <select className="w-full rounded-3xl border border-gen-color bg-transparent px-2 py-3 outline-none sm:col-span-2 sm:py-1">
            <option>Select your Goals</option>
          </select>
          <select className="w-full rounded-3xl border border-gen-color bg-transparent px-2 py-3 outline-none sm:col-span-2 sm:py-1">
            <option>Select your Location</option>
          </select>
          <Link
            href="/book"
            className="col-span-2 m-auto w-full rounded-3xl bg-gen-color px-4 py-3 text-center text-header-text sm:col-span-1 sm:py-1"
          >
            Book Now!
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8 px-1 pb-16 pt-20 sm:h-screen sm:items-center sm:px-10">
        <h1 className="flex-none text-center text-5xl font-light">
          How Glow Scout Works
        </h1>
        <div className="mx-4 grid grow gap-y-10 sm:w-9/12 sm:grid-cols-4 sm:gap-10">
          <div className="flex items-center justify-between rounded-lg bg-header-text p-4 text-center sm:flex-col">
            <h1 className="text-4xl font-bold sm:text-5xl">01</h1>
            <h1 className="text-right text-3xl font-light sm:text-center sm:text-4xl">
              Sign Up
            </h1>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-header-text p-4 text-center sm:flex-col">
            <h1 className="text-4xl font-bold sm:text-5xl">02</h1>
            <h1 className="text-right text-3xl font-light sm:text-center sm:text-4xl">
              Select your Beauty Goals
            </h1>
          </div>
          <div className="flex justify-between rounded-lg bg-header-text p-4 text-center sm:flex-col">
            <h1 className="text-4xl font-bold sm:text-5xl">03</h1>
            <h1 className="text-right text-3xl font-light sm:text-center sm:text-4xl">
              Select Treatment
            </h1>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-header-text p-4 text-center sm:flex-col">
            <h1 className="text-4xl font-bold sm:text-5xl">04</h1>
            <h1 className="text-right text-3xl font-light sm:text-center sm:text-4xl">
              Select Spa
            </h1>
          </div>
        </div>
        <button className="m-auto w-1/3 flex-none rounded-full bg-gen-color px-4 py-2 text-header-text">
          Get Started
        </button>
      </div>

      <div className="p-5 sm:px-40 sm:py-20">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-5xl font-light">Trending Treatments</h1>
          <p className="text-lg text-gen-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>
        <div className="relative sm:mx-auto sm:max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {treatments.slice(0, 2).map((treatment, index) => (
              <TreatmentCard
                key={index}
                title={treatment.title}
                description={treatment.description}
                imageSrc={treatment.imageSrc}
              />
            ))}
          </div>
          <div className="hidden sm:grid sm:grid-cols-5 sm:gap-6">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                title={treatment.title}
                description={treatment.description}
                imageSrc={treatment.imageSrc}
              />
            ))}
          </div>
          <button className="-left-16 top-32 hidden -translate-y-1/2 transform bg-transparent sm:absolute sm:block">
            <ChevronLeft className="h-10 w-10 text-gen-color" />
          </button>
          <button className="-right-16 top-32 hidden -translate-y-1/2 transform bg-transparent sm:absolute sm:block">
            <ChevronRight className="h-10 w-10 text-gen-color" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center bg-header-text px-1 py-28 sm:h-screen sm:px-8 sm:py-16">
        <div>
          <h2 className="mb-12 text-center text-4xl font-light sm:text-5xl">
            Client's Testimonials
          </h2>
          <div className="mx-auto flex items-center sm:w-8/12">
            <button
              onClick={prevTestimonial}
              className="hidden text-gen-color hover:text-gray-600 sm:block"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex flex-1 items-center gap-3 px-2 sm:px-8">
              <div className="mr-1 w-2/3 sm:mr-8 sm:w-1/3">
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
                <h3 className="mb-1 text-2xl font-semibold sm:mb-4">
                  {currentTestimonial.name}
                </h3>
                <p className="mb-1 text-gray-600 sm:mb-4">
                  {currentTestimonial.text}
                </p>
                <div className="mb-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={30}
                      fill={
                        i < currentTestimonial.rating ? "#FFD700" : "#C0C0C0"
                      }
                      color={
                        i < currentTestimonial.rating ? "#FFD700" : "#C0C0C0"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="hidden text-gen-color hover:text-gray-600 sm:block"
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

      <div className="relative flex h-full items-center overflow-hidden bg-gen-color py-20 sm:h-screen">
        <div className="mx-auto flex flex-col gap-y-10 sm:flex-row sm:items-center">
          <div className="relative right-8 w-1/4">
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
          <div className="px-7 text-center text-header-text sm:w-1/2 sm:px-16">
            <h2 className="mb-6 text-5xl font-light">
              About <br />
              "Glow Scout"
            </h2>
            <p className="text-2xl leading-relaxed sm:text-xl">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus."
            </p>
          </div>
          <div className="relative left-[calc(100%-5rem)] w-1/4 sm:left-0">
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

      <div className="flex h-[350px] flex-col items-center justify-center gap-10 py-10 text-center text-gen-color sm:h-[450px] sm:py-40">
        <h1 className="text-4xl sm:text-5xl">Are you a Business?</h1>
        <p className="text-lg sm:text-xl">
          People are seeking for the specialist. <br /> Join us now and serve
          your skills
        </p>
        <button className="flex rounded-full border-2 border-gen-color bg-transparent px-4 py-2 text-gen-color">
          Sign Up as Business
          <ArrowUpRight className="ml-3 rounded-full bg-gen-color p-1 text-header-text" />
        </button>
      </div>
    </main>
  );
}
