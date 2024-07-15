"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/card";

const Treatments = () => {
  const [treatmentData, setTreatmentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://128.199.30.51:5007/api/treatment")
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Raw API response:", responseData);

        if (
          responseData &&
          responseData.data &&
          Array.isArray(responseData.data.data)
        ) {
          const filteredTreatments = responseData.data.data.filter(
            (item) => item._id !== "669183e5febaf811f3dbd2e3",
          );

          // Function to generate a random treatment with a unique index
          const generateRandomTreatment = (index) => {
            const randomTreatment =
              filteredTreatments[
                Math.floor(Math.random() * filteredTreatments.length)
              ];
            return {
              ...randomTreatment,
              uniqueId: `${randomTreatment._id}-${index}`,
            };
          };

          // Generate 20 randomized treatments
          const randomizedTreatments = Array.from({ length: 20 }, (_, index) =>
            generateRandomTreatment(index),
          );

          setTreatmentData(randomizedTreatments);
        } else {
          console.error("Unexpected data structure:", responseData);
          setError("Unexpected data structure received from the server.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch treatment data. Please try again later.");
      });
  }, []);

  if (error) {
    return <div className="mt-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-primary-b text-gen-color">
      <div className="pt-10 text-center">
        <h1 className="text-5xl font-light">Treatment</h1>
        <h3 className="mt-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>

      <div className="bg-header-text m-auto mt-10 flex w-7/12 flex-row items-center justify-around rounded-full py-4">
        <select className="border-gen-color bg-header-text text-gen-color h-10 rounded-full border px-6 outline-none">
          <option value="1">Filter</option>
        </select>
        <div className="border-gen-color h-10 rounded-full border-2"></div>
        <Link
          href="/treatment/compare-treatements"
          className="bg-gen-color text-header-text rounded-full px-4 py-2"
        >
          Compare Treatments
        </Link>
        <div className="border-gen-color rounded-full border p-1">
          <input
            type="text"
            placeholder="Search by Treatments"
            className="text-gen-color border-none bg-transparent px-2 outline-none"
          />
          <button className="bg-gen-color text-header-text rounded-full px-5 py-1">
            Search
          </button>
        </div>
      </div>

      <div className="m-auto grid w-11/12 grid-cols-4 gap-4 p-10">
        {treatmentData.map((item) => (
          <Card
            key={item.uniqueId}
            imageSrc={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Treatments;
