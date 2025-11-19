import { BlogDetails } from "./components";

type SingleBlogProps = {
  params: Promise<{
    slug: string;
  }>;
};

const NewsDetailsPage = async ({ params }: SingleBlogProps) => {
  const { slug } = await params;
  return (
    <div className="pt-30 md:pt-40 pb-12">
      <BlogDetails slug={slug} />
    </div>
  );
};

export default NewsDetailsPage;
