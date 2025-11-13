import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch countdown//
export const fetchCountdown = async () => {
  const COUNTDOWN_QUERY = defineQuery(`*[_type == "countdown"] {
    title,
      eventDate,
    }`);

  try {
    return await client.fetch(COUNTDOWN_QUERY);
  } catch (error) {
    console.log("Fetching Countdown Failed :", error);
    return "error";
  }
};
