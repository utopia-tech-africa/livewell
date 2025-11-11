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
    <div className="overflow-x-auto">
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
