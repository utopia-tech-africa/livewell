import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch news articles//
export const fetchNewsArticles = async () => {
  const NEWS_ARTICLES_QUERY =
    defineQuery(`*[_type == "news"] | order(publishDate desc){
    _id,
    title,
    mainImage{
    asset->{
    _id,
    url
    }
    },
      slug,
      publishedDate,
    }`);

  try {
    return await client.fetch(NEWS_ARTICLES_QUERY);
  } catch (error) {
    console.log("Fetching News Articles Failed :", error);
    return "error";
  }
};
