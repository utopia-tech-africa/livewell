import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch all blogs //
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

export const fetchSingleNewsArticle = async () => {
  const SINGLE_NEWS_ARTICLE_QUERY =
    defineQuery(`*[_type == "news"] | order(publishDate desc){
    _id,
    body,
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
    return await client.fetch(SINGLE_NEWS_ARTICLE_QUERY);
  } catch (error) {
    console.log("Fetching News Article Failed :", error);
    return "error";
  }
};

export const fetchSingleNewsBySlug = async (slug: string) => {
  const SINGLE_NEWS_BY_SLUG_QUERY = defineQuery(`
    *[_type == "news" && slug.current == $slug][0] {
      mainImage {
        asset->{
          _id,
          url
        }
      },
      title,
      body,
      publishedDate
    }
  `);

  try {
    return await client.fetch(SINGLE_NEWS_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.log("Fetching News Article by Slug Failed :", error);
    return null;
  }
};
