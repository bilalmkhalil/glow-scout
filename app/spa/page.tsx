
import Card from "@/components/card";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"]});

import image5 from "@/public/5.jpeg";
import image6 from "@/public/6.jpeg";
import image7 from "@/public/7.jpeg";
import image8 from "@/public/8.jpeg";
import image9 from "@/public/9.jpeg";


const Spa = () => {
    const data: any[] = [
        { imgsrc: image5, title: "Pure Tranqulitiy", description: "Lorem Ipsum" },
        { imgsrc: image6, title: "Crystal Calm", description: "Lorem Ipsum" },
        { imgsrc: image7, title: "Radiant Serenity", description: "Lorem Ipsum" },
        { imgsrc: image8, title: "Eternal Bliss", description: "Lorem Ipsum" },
        { imgsrc: image9, title: "Heavenly Escape", description: "Lorem Ipsum" },
        { imgsrc: image5, title: "Pure Tranqulitiy", description: "Lorem Ipsum" },
        { imgsrc: image6, title: "Crystal Calm", description: "Lorem Ipsum" },
        { imgsrc: image7, title: "Radiant Serenity", description: "Lorem Ipsum" },
        { imgsrc: image8, title: "Eternal Bliss", description: "Lorem Ipsum" },
        { imgsrc: image9, title: "Heavenly Escape", description: "Lorem Ipsum" },
        { imgsrc: image5, title: "Pure Tranqulitiy", description: "Lorem Ipsum" },
        { imgsrc: image6, title: "Crystal Calm", description: "Lorem Ipsum" },
        { imgsrc: image7, title: "Radiant Serenity", description: "Lorem Ipsum" },
        { imgsrc: image8, title: "Eternal Bliss", description: "Lorem Ipsum" },
        { imgsrc: image9, title: "Heavenly Escape", description: "Lorem Ipsum" },
        { imgsrc: image5, title: "Pure Tranqulitiy", description: "Lorem Ipsum" },
        { imgsrc: image6, title: "Crystal Calm", description: "Lorem Ipsum" },
        { imgsrc: image7, title: "Radiant Serenity", description: "Lorem Ipsum" },
        { imgsrc: image8, title: "Eternal Bliss", description: "Lorem Ipsum" },
        { imgsrc: image9, title: "Heavenly Escape", description: "Lorem Ipsum" },
    ];

    return (
        <div className="bg-primary-b text-gen-color">
            <div className="text-center pt-10">
                <h1 className={`text-5xl font-light ${raleway.className}`}>Salon & Spas</h1>
                <h3 className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dignissimos.</h3>
            </div>

            <div className="w-7/12 m-auto mt-10 flex flex-row justify-around items-center py-4 px-3 rounded-full bg-header-text">
                <select className="h-10 border border-gen-color bg-header-text text-gen-color outline-none rounded-full px-6">
                    <option value="1">Filter</option>
                </select>
                <div className="border-2 border-gen-color rounded-full h-10"></div>
                <input type="text" placeholder="Please enter your location" className="text-gen-color border border-gen-color rounded-full py-2 bg-transparent outline-none px-3"/>
                <div className="border-2 border-gen-color rounded-full h-10"></div>
                <div className="border border-gen-color rounded-full p-1">
                    <input type="text" placeholder="Search by Treatments" className="text-gen-color border-none bg-transparent outline-none px-2"/>
                    <button className="bg-gen-color rounded-full py-1 px-5 text-header-text">Search</button>
                </div>
            </div>

            <div className="w-11/12 m-auto grid grid-cols-4 gap-4 p-10">
                {data.map((item, index) => (
                    <Card key={index} imageSrc={item.imgsrc} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default Spa;