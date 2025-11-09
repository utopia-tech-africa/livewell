import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch faqs //
export const fetchFaqs = async () => {
  const FAQs_QUERY =
    defineQuery(`*[_type == "faqSection"] | order(publishDate desc) {
  _id,
  title,
  faqs[]{
    question,
    answer
  }
}

`);

  try {
    return await client.fetch(FAQs_QUERY);
  } catch (error) {
    console.log("Fetching FAQs Failed :", error);
    return "error";
  }
};
