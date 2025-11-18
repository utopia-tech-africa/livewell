export const getAllArticles = async () => {
  const response = await fetch("https://dev.to/api/articles");
  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();
  return data;
};
