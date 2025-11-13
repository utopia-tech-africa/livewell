// import { fetchNewsArticles } from "@/lib/queries/news-queries";
// import { ErrorText } from "../texts/error-text";
// import { BlogCard } from "./blog-card";

// export const BlogCards = async () => {
//   const blogItems = (await fetchNewsArticles()) || [];

//   if (blogItems === "error")
//     return <ErrorText className="text-center">Network Error!</ErrorText>;

//   if (!blogItems || blogItems.length === 0)
//     return <ErrorText className="text-center">No Blog Articles!</ErrorText>;
//   return (
//     <div className="overflow-x-auto">
//       <div className="flex gap-6">
//         {blogItems.map((item, index) => (
//           <BlogCard
//             title={item.title}
//             publishedDate={item.publishedDate}
//             key={index}
//             _id={item._id}
//             slug={item.slug}
//             mainImage={item.mainImage}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
