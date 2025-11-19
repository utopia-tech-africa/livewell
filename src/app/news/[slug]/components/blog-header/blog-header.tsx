import Image from "next/image";
import { SINGLE_NEWS_ARTICLE_QUERYResult } from "../../../../../../sanity.types";
import { formatPublishedDate } from "@/lib/utils";

type NewsHeaderProps = Pick<
  SINGLE_NEWS_ARTICLE_QUERYResult[0],
  "title" | "mainImage" | "publishedDate"
>;

export const BlogHeader = ({
  title,
  mainImage,
  publishedDate,
}: NewsHeaderProps) => {
  return (
    <div className="flex justify-evenly gap-3 flex-col">
      <div className={"rounded-lg overflow-hidden "}>
        <Image
          src={mainImage?.asset?.url || ""}
          alt={`${title} image`}
          width={686}
          height={386}
          className="object-cover size-full hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm tracking-normal font-satoshi text-neutral-800 leading-[21px]">
          {formatPublishedDate(publishedDate as string)}
        </p>
        <p className="font-extrabold text-neutral-1000 md:text-base text-xs leading-4 uppercase">
          {title?.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
