import Image from "next/image";
import { EVENTS_QUERYResult } from "../../../sanity.types";

type EventCardProps = EVENTS_QUERYResult[0];

export const EventCard = ({ name, image, description }: EventCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[302px] h-[336px]">
        <Image
          src={image?.asset?.url || "-"}
          alt={`${name} Image`}
          width={50}
          height={50}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-[20px] font-bold font-satoshi text-neutral-1000">
          {name}
        </h2>
        <p className="text-[18px] font-satoshi text-neutral-900">
          {description}
        </p>
      </div>
    </div>
  );
};
