import { Plus } from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";

import image3 from "@/public/3.jpeg";

const raleway = Raleway({ subsets: ["latin"] });

const CompareTreatments = () => {
  return (
    <div className={`bg-primary-b pb-20 text-gen-color ${raleway.className}`}>
      <div className="py-10 text-center">
        <h1 className="text-5xl font-light">Treatment</h1>
        <h3 className="mt-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>

      <div className="m-auto grid w-7/12 grid-cols-2 gap-6">
        <div className="border-r-2 border-gray-300 pr-6">
          <div className="flex flex-col items-center">
            <div className="mb-5 h-56 w-full overflow-hidden rounded-md">
              <Image src={image3} alt="chemical Peel" />
            </div>
            <h1 className={`text-4xl font-light ${raleway.className}`}>
              Chemical Peels
            </h1>
          </div>
          <div className="mt-5 rounded-md border-2 border-gen-color p-4">
            <h1 className="text-lg font-semibold text-gen-color">
              Description
            </h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quod, voluptatum, quas magnam dolorum quae
              repudiandae tempora quibusdam quia quos. Quisquam voluptatibus,
              quod, voluptatum, quas magnam dolorum quae repudiandae tempora
              quibusdam quia quos."
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-gen-color bg-[#F0F0F0] px-16 py-[78px]">
            <div className="flex size-8 items-center justify-center rounded-md border-2 border-gen-color">
              <Plus size={18} />
            </div>
            <h3 className="mt-2">Select Treatment to Compare</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareTreatments;
