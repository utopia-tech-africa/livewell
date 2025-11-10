import { ComponentLayout } from "../component-layout";
import { NewsCards } from "./news-cards";

export const News = () => {
  return (
    <section
      id="blog"
      className="mt-[90px] md:mt-[100px] lg:mt-[120px] mb-[60px]"
    >
      <ComponentLayout>
        <NewsCards />
      </ComponentLayout>
    </section>
  );
};
