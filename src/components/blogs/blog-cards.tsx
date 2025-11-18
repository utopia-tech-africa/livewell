"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "./blog-card";
import { Spinner } from "../spinner";
import { ErrorMessage } from "../texts/error-message";

export const BlogCards = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const articles = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dev.to/api/articles");
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setArticles(data.slice(4, 9));
      } catch (error) {
        console.log(error);
        setErrorMsg("Network Error!");
      }
      setLoading(false);
    };
    articles();
  }, []);

  return (
    <div className="overflow-x-auto">
      {loading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      <div className="flex gap-6">
        {articles.map((blogCard, id) => (
          <BlogCard blogCard={blogCard} key={id} />
        ))}
      </div>
    </div>
  );
};
