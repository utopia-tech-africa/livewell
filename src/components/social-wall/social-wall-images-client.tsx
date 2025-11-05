"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { SOCIAL_WALL_QUERYResult } from "../../../sanity.types";
import { RefreshCcw } from "lucide-react";

type SocialWallProps = SOCIAL_WALL_QUERYResult[0];

export const SocialWallImagesClient = ({ images }: SocialWallProps) => {
  const [startIndex, setStartIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const total = images.length;

  // pick 4 images cyclically
  const currentImages = Array.from(
    { length: 4 },
    (_, i) => images[(startIndex + i) % total]
  );

  const handleShuffle = () => {
    // move index by 4, wrap around cyclically
    setStartIndex((prev) => (prev + 4) % total);
  };

  return (
    <div className="space-y-6">
      {/* top row: 55% / 45% on larger screens, 1 column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] gap-4">
        {currentImages.slice(0, 2).map((image, index) => (
          <div
            key={index}
            className="relative h-64 sm:h-72 overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={image?.asset?.url || ""}
              alt={`social-wall image ${index}`}
              fill
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* bottom row: 45% / 55% on larger screens, 1 column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-[45%_55%] gap-4">
        {currentImages.slice(2, 4).map((image, index) => (
          <div
            key={index + 2}
            className="relative w-full h-64 sm:h-72 overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={image?.asset?.url || ""}
              alt={`social-wall image ${index + 2}`}
              fill
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button onClick={handleShuffle}>
          {" "}
          <RefreshCcw className="text-white w-[15px] h-[14.7px]" />
          Shuffle
        </Button>
      </div>
    </div>
  );
};
