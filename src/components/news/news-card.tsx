import Image from "next/image";
import { NEWS_ARTICLES_QUERYResult } from "../../../sanity.types";
import { formatPublishedDate } from "@/lib/utils";

type NewsCardProps = NEWS_ARTICLES_QUERYResult[0];

export const NewsCard = ({
  title,
  mainImage,
  slug,
  publishedDate,
}: NewsCardProps) => {
  return (
    <div className="flex flex-col min-w-[302px] gap-6 bg-white overflow-hidden group">
      <div className="w-full h-[222px] overflow-hidden rounded-[12px]">
        <Image
          src={mainImage?.asset?.url || ""}
          alt={`${title} image`}
          width={600}
          height={400}
          className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-lg md:text-xl font-extrabold text-neutral-1000 text-wrap font-satoshi">
          {title}
        </h2>
        <p className="text-sm tracking-normal font-satoshi text-neutral-800 leading-[21px]">
          {formatPublishedDate(publishedDate as string)}
        </p>
      </div>
    </div>
  );
};
