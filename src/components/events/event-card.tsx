import Image from "next/image";
import { EVENTS_QUERYResult } from "../../../sanity.types";

type EventCardProps = EVENTS_QUERYResult[0];

export const EventCard = ({ name, image, description }: EventCardProps) => {
  return (
    <div className="flex flex-col min-w-[302px] gap-6 bg-white overflow-hidden group">
      <div className="w-full h-80 overflow-hidden rounded">
        <Image
          src={image?.asset?.url || ""}
          alt={`${name} image`}
          width={600}
          height={400}
          className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-bold text-neutral-900 text-nowrap font-satoshi">
          {name}
        </h2>
        <p className="text-sm md:text-base lg:text-lg tracking-normal font-satoshi text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};
