import { ComponentLayout, ErrorText, Heading } from "@/components";
import { BlogHeader } from "./blog-header";
import { BlogBody } from "./blog-body";
import { fetchSingleNewsBySlug } from "@/lib/queries/news-queries";
import { WhitePattern } from "@/assets/img";
import Image from "next/image";

export const BlogDetails = async ({ slug }: { slug: string }) => {
  const article = await fetchSingleNewsBySlug(slug);

  if (!article) {
    return (
      <ErrorText className="text-center">
        Blog Deleted or Not Available!
      </ErrorText>
    );
  }

  const { mainImage, title, publishedDate, body } = article;

  return (
    <div className="relative">
      <Heading className="absolute z-10 left-1/2 -translate-x-1/2 -top-7 md:-top-11 font-satoshi bg-secondary-500 text-neutral-100 text-[20px] sm:text-[28px] font-bold">
        Blog DETAILS
      </Heading>
      <ComponentLayout>
        <BlogHeader
          mainImage={mainImage}
          title={title}
          publishedDate={publishedDate}
        />
        <BlogBody body={body} />
      </ComponentLayout>
    </div>
  );
};
