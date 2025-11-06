import { fetchNewsArticles } from "@/lib/queries/news-queries";
import { Heading } from "../texts/heading";
import { ErrorText } from "../texts/error-text";
import { NewsCard } from "./news-card";

export const NewsCards = async () => {
  const newsItems = (await fetchNewsArticles()) || [];

  if (newsItems === "error")
    return <ErrorText className="text-center">Network Error!</ErrorText>;

  if (!newsItems || newsItems.length === 0)
    return <ErrorText className="text-center">No News Articles!</ErrorText>;
  return (
    <div className="relative border border-red-500  overflow-x-auto">
      <Heading
        className="
            absolute left-1/2 -translate-x-[42%]
            -top-8
            bg-[#d79900] text-white 
           rounded-md shadow-md
          z-50 text-[32px] font-bold
          "
      >
        News Articles
      </Heading>
      <div className="flex gap-6">
        {newsItems.map((item, index) => (
          <NewsCard
            title={item.title}
            publishedDate={item.publishedDate}
            key={index}
            _id={item._id}
            slug={item.slug}
            mainImage={item.mainImage}
          />
        ))}
      </div>
    </div>
  );
};
