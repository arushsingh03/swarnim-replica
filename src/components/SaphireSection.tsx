"use client";

import { useState } from "react";
import Image from "next/image";

interface FloorPlanImage {
  id: string;
  src: string;
  alt: string;
}

const FloorPlan = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const floorPlanImages: FloorPlanImage[] = [
    {
      id: "sapphire-1",
      src: "/images/Sapphire1.png",
      alt: "Sapphire I Floor Plan",
    },
    {
      id: "sapphire-2",
      src: "/images/Sapphire2.png",
      alt: "Sapphire II Floor Plan",
    },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12  pt-20">
        <div>
          <p className="text-gray-400 uppercase text-xs tracking-wider font-montserrat">
            FLOOR PLAN
          </p>
          <h1 className="text-5xl lg:text-6xl font-abt-bold mb-4 pl-20 text-gray-500">
            The Golden
          </h1>
          <h1 className="text-5xl lg:text-6xl font-abt-bold mb-16  pl-20 text-black">
            Floor
          </h1>
        </div>
        <div>
          <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider">
            MASTER PLAN
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {floorPlanImages.map((image) => (
          <div key={image.id}>
            <div
              className="relative overflow-hidden mb-6 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="relative h-150 w-full transition-transform duration-500 hover:scale-110">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="w-200 h-200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 md:h-[28rem] w-full">
              <Image
                src={selectedImage}
                alt="Floor Plan"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlan;
