import { Clock, Heart, MapPin, Star } from "lucide-react";

import Image from "next/image";

import image1 from "@/public/1.jpeg";
import image2 from "@/public/2.jpeg";
import image3 from "@/public/3.jpeg";
import image4 from "@/public/4.jpeg";

import image10 from "@/public/10.jpeg";
import image11 from "@/public/11.jpeg";
import image12 from "@/public/12.jpeg";
import Card from "@/components/card";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const SpaSingel = () => {
  const data: any[] = [
    {
      imgsrc: image1,
      title: "Detox",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgsrc: image2,
      title: "Thermage",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgsrc: image3,
      title: "Chemical Peel",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgsrc: image4,
      title: "Laser Resurfacing",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const reviews: any[] = [
    {
      name: "Ashley K.",
      review:
        "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 4,
    },
    {
      name: "Client 2",
      review:
        "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 4,
    },
    {
      name: "Client 3",
      review:
        "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 4,
    },
    {
      name: "Client 4",
      review:
        "It's a long established fact that glowscout is doing such a great job. It's a long established fact that glowscout is doing such a great job.",
      rating: 4,
    },
  ];

  return (
    <div className={`bg-primary-b text-gen-color pb-20 ${raleway.className}`}>
      <div className="border-gen-color m-auto w-11/12 border-b-2 pb-12">
        <h1 className="pb-3 pl-5 pt-14 text-5xl font-light">
          Crystal Calm Spa
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-3 grid-rows-2 gap-3">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-lg">
              <Image
                src={image10}
                alt=""
                objectFit="cover"
                className="h-[450px]"
              />
              <div className="bg-header-text absolute right-0 top-0 z-10 rounded-bl-md px-5 py-3 text-sm shadow-lg">
                View all images
              </div>
            </div>
            <div className="col-span-1 row-span-1 h-[220px] overflow-hidden rounded-lg">
              <Image src={image11} alt="" objectFit="" />
            </div>
            <div className="col-span-1 row-span-1 h-[220px] overflow-hidden rounded-lg">
              <Image src={image12} alt="" objectFit="cover" />
            </div>
          </div>
          <div className="border-gen-color rounded-2xl border-2">
            <div className="m-auto mt-4 w-11/12 font-light">
              <h1 className="text-3xl">Crystal Calm Spa</h1>
              <div className="mt-2 flex justify-between">
                <h2 className="ml-1 text-lg">Add to favourite</h2>
                <Heart />
              </div>
            </div>

            <div className="m-auto mt-4 w-11/12">
              <h1 className="text-lg font-semibold">Rating</h1>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < 4 ? "#FFD700" : "none"}
                    color={i < 4 ? "#FFD700" : "#D3D3D3"}
                  />
                ))}
                <h2 className="ml-2">(5,212)</h2>
              </div>
            </div>

            <div className="border-gen-color m-auto mt-4 w-11/12 border-t pt-4">
              <div className="flex">
                <Clock className="mr-2" />
                <h3>
                  <span className="text-green-400">Open</span> until 12:00 p.m.
                </h3>
              </div>
              <div className="flex pt-2">
                <MapPin className="mr-2" />
                <h3>
                  13th Street 47 W 13th St, New York <br />
                  <span className="text-gen-color font-semibold underline underline-offset-2">
                    Get direction
                  </span>
                </h3>
              </div>
            </div>

            <div className="border-gen-color m-auto mt-5 grid w-11/12 grid-rows-2 gap-3 border-t pt-5">
              <button className="border-gen-color rounded-xl border-2 bg-transparent py-3">
                Visit Website
              </button>
              <button className="bg-gen-color text-header-text rounded-xl py-3">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-gen-color m-auto w-11/12 border-b-2 pt-20">
        <div className="pb-10 pt-5 text-center">
          <h1 className="text-5xl font-light">Treatment Offered</h1>
          <h3 className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </h3>
        </div>

        <div className="m-auto grid w-11/12 grid-cols-4 gap-4 p-10">
          {data.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.imgsrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="m-auto w-11/12 pt-10">
        <div className="pb-5 pt-5 text-center">
          <h1 className="text-5xl font-light">Reviews</h1>
        </div>

        <div className="m-auto grid w-10/12 grid-cols-2 gap-14 p-10">
          {reviews.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h1 className="text-3xl font-semibold">{item.name}</h1>
              <h3 className="mt-2">{item.review}</h3>
              <div className="flex pt-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < item.rating ? "#FFD700" : "none"}
                    color={i < item.rating ? "#FFD700" : "#D3D3D3"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="m-auto flex items-center justify-center pb-10">
          <button className="bg-gen-color text-header-text rounded-full px-6 py-2">
            View All
          </button>
        </div>

        <div className="border-gen-color mx-auto mt-5 w-10/12 rounded-lg border-2 p-10">
          <h1 className="text-3xl">Add your review</h1>
          <div className="flex justify-between gap-6 pt-10">
            <input
              type="text"
              placeholder="Write your review here"
              className="border-gen-color w-full border-b bg-transparent shadow-none outline-none"
            />

            <div>
              <h1 className="pb-2 text-base">Ratings</h1>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < 4 ? "#FFD700" : "none"}
                    color={i < 4 ? "#FFD700" : "#D3D3D3"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaSingel;
