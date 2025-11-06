import { ComponentLayout } from "../component-layout";
import { NewsCards } from "./news-cards";

export const News = () => {
  return (
    <section id="blog">
      <ComponentLayout>
        <NewsCards />
      </ComponentLayout>
    </section>
  );
};
