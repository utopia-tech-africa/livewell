import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch news articles//
export const fetchEvents = async () => {
  const EVENTS_QUERY =
    defineQuery(`*[_type == "event"] | order(publishDate desc){
        _id,
        name,
        image{
        asset->{
        _id,
        url}
        },
        description,
    }`);

  try {
    return await client.fetch(EVENTS_QUERY);
  } catch (error) {
    console.log("Fetching Events Failed :", error);
    return "error";
  }
};
